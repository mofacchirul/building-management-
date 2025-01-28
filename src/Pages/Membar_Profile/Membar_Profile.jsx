import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Provider/Provider';
import SecureAxios from '../../Hook/SecureAxios';

const Membar_Profile = () => {
  const { user } = useContext(AuthContext);
  const axios = SecureAxios();

  const { data: member = [] } = useQuery({
    queryKey: ['member', user?.email],
    queryFn: async () => {
      const res = await axios.get(`/agrement?email=${user?.email}`);
      return res?.data;
    }
  });
  console.log(user);
  

  // Destructuring to extract data from member (if available)
  const {
    userName = 'Not Available',
    userEmail = 'Not Available',
    floorNo = 'Not Available',
    blockName = 'Not Available',
    apartmentNo = 'Not Available',
    rent = 'Not Available',
    status = 'Not Available',
    createdAt = 'Not Available'
  } = member[0] || {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="flex items-center space-x-4">

        <div className="w-16 h-16 rounded-full bg-gray-200"><img src={user?.photoURL} alt="" /></div>
        <div>
          <p className="text-xl font-semibold">{userName}</p>
          <p className="text-sm text-gray-500">{userEmail}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Agreement Details</h3>
        <div className="space-y-2 mt-2">
          <p><strong>Agreement Accept Date:</strong> {new Date(createdAt).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Rented Apartment Info</h3>
        <div className="space-y-2 mt-2">
          <p><strong>Floor Number:</strong> {floorNo}</p>
          <p><strong>Block Name:</strong> {blockName}</p>
          <p><strong>Apartment Number:</strong> {apartmentNo}</p>
          <p><strong>Rent:</strong> ${rent}</p>
        </div>
      </div>
    </div>
  );
};

export default Membar_Profile;
