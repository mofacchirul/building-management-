import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import axios from 'axios';

const Admin_Profile = () => {
    const { user, loading } = useContext(AuthContext);
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

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    const {
        totalRooms,
        availableRooms,
        unavailableRooms,
        totalUsers,
        totalMembers,
    } = stats;

    const availablePercentage = totalRooms > 0 ? ((availableRooms / totalRooms) * 100).toFixed(2) : 0;
    const unavailablePercentage = totalRooms > 0 ? ((unavailableRooms / totalRooms) * 100).toFixed(2) : 0;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h3 className="text-3xl font-bold mb-6">Admin Profile</h3>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-6">
                    <img
                        src={user?.photoURL || 'https://via.placeholder.com/100'}
                        alt="Admin Avatar"
                        className="w-24 h-24 rounded-full mr-6"
                    />
                    <div>
                        <h4 className="text-2xl font-semibold">{user?.displayName || 'Admin Name'}</h4>
                        <p className="text-gray-600">{user?.email || 'admin@example.com'}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-100 rounded-lg text-center">
                        <h4 className="text-xl font-bold">Total Rooms</h4>
                        <p className="text-2xl">{totalRooms}</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded-lg text-center">
                        <h4 className="text-xl font-bold">Available Rooms</h4>
                        <p className="text-2xl">{availableRooms} ({availablePercentage}%)</p>
                    </div>
                    <div className="p-4 bg-red-100 rounded-lg text-center">
                        <h4 className="text-xl font-bold">Unavailable Rooms</h4>
                        <p className="text-2xl">{unavailableRooms} ({unavailablePercentage}%)</p>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-lg text-center">
                        <h4 className="text-xl font-bold">Total Users</h4>
                        <p className="text-2xl">{totalUsers}</p>
                    </div>
                    <div className="p-4 bg-purple-100 rounded-lg text-center">
                        <h4 className="text-xl font-bold">Total Members</h4>
                        <p className="text-2xl">{totalMembers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_Profile;