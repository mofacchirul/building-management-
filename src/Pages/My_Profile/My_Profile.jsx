import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const My_Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="flex flex-col items-center">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full shadow-lg mb-4"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center shadow-lg mb-4">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <p className="text-lg font-medium">Name: {user?.displayName || 'N/A'}</p>
        <p className="text-lg font-medium">Email: {user?.email || 'N/A'}</p>
      </div>
      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Agreement Details</h2>
        <p className="text-md">Agreement Accept Date: None</p>
        <p className="text-md">Floor: None</p>
        <p className="text-md">Block: None</p>
        <p className="text-md">Room No: None</p>
      </div>
    </div>
  );
};

export default My_Profile;
