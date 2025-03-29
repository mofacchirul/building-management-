import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Link, useNavigate } from 'react-router-dom';

const My_Profile = () => {
  const { user,Singout, loading } = useContext(AuthContext);
  const [loginTime, setLoginTime] = useState('');
  const Navigate = useNavigate()
  const singout = ()=>{
     Singout()
     Navigate('/')
  }
  // Capture login time
  useEffect(() => {
    if (user) {
      const currentTime = new Date().toLocaleString(); // Format the current date and time
      setLoginTime(currentTime);
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl border rounded-xl mx-auto mt-10 p-6  shadow-xl ">
      <h1 className="text-2xl text-center bg-sky-500 text-white rounded-xl font-bold py-2 mb-4">
        My Profile
      </h1>
      <div className=" flex-col items-center">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full shadow-lg mb-4 border-4 p-1 border-sky-300"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg mb-4">
            <span className="text-blue-500 font-semibold">No Image</span>
          </div>
        )}
        <p className="text-lg font-medium">Name: {user?.displayName || 'N/A'}</p>
        <p className="text-lg font-medium">Email: {user?.email || 'N/A'}</p>
        <p className=" mt-1">Login Time: {loginTime || 'Fetching time...'}</p>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Agreement Details</h2>
<div className='grid grid-cols-2 gap-2 space-1 '>
<p className="text-md btn bg-sky-400 text-white hover:text-black">Agreement Accept Date: None</p>
        <p className="text-md btn bg-sky-400 text-white hover:text-black">Floor: None</p>
        <p className="text-md btn bg-sky-400 text-white hover:text-black">Block: None</p>
        <p className="text-md btn bg-sky-400 text-white hover:text-black">Room No: None</p>
</div>
 
      </div>
      <div className="divider"></div>
      <div className='py-3 w-10/12 flex mx-auto  justify-between'>
                    <button onClick={singout} className='btn bg-red-500 hover:text-black text-white'>Login Out </button>
                    <Link className='/'>
                    <button className='btn font-bold bg-sky-400'>
                        Back to Home
                         </button></Link>
                </div>
    </div>
  );
};

export default My_Profile;
