import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Admin_Profile = () => {
    const { user,Singout, loading } = useContext(AuthContext);
    const Navigate = useNavigate()
  const singout = ()=>{
     Singout()
     Navigate('/')
  }
    const [stats, setStats] = useState({
        totalRooms: 0,
        availableRooms: 0,
        unavailableRooms: 0,
        totalUsers: 0,
        totalMembers: 0,
    });

   

    // Fetch admin stats from the server
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('/api/admin/stats'); // Replace with your actual API endpoint
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching admin stats:', error);
            }
        };

        fetchStats();
    }, []);
    const [loginTime, setLoginTime] = useState('');
    // Capture login time
    useEffect(() => {
        if (user) {
            const currentTime = new Date().toLocaleString(); // Format the current date and time
            setLoginTime(currentTime);
        }
    }, [user]);

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
                <h3 className="text-3xl font-bold text-gray-800 bg-sky-400 rounded-xl mb-6">Admin Profile</h3>
                
                <div className="relative inline-block">
                    <div className="w-28 h-28 bg-sky-400 rounded-full flex justify-center items-center">
                        <img
                            src={user?.photoURL || 'https://via.placeholder.com/100'}
                            alt="Admin Avatar"
                            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="text-2xl font-semibold text-gray-900">Admin Name: {user?.displayName || 'Admin Name'}</h4>
                    <p className="text-gray-600 mt-1">Admin Email: {user?.email || 'admin@example.com'}</p>
                    <p className="text-gray-500 mt-1">Login Time: {loginTime || 'Fetching time...'}</p>
                </div>

                <div className='py-3 space-x-3'>
                    <button onClick={singout} className='btn bg-red-500 text-white'>Login Out </button>
                    <Link className='/'>
                    <button className='btn font-bold bg-sky-400'>
                        Back to Home
                         </button></Link>
                </div>
               
            </div>
        </div>
    );
};

export default Admin_Profile;
