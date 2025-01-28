import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Provider/Provider';
import SecureAxios from '../../Hook/SecureAxios';
import { Link, useNavigate } from 'react-router-dom';

const MakePayment = () => {
  const { user } = useContext(AuthContext);
  const axios = SecureAxios();
  const navigate = useNavigate();

  const { data: member = [] } = useQuery({
    queryKey: ['member', user?.email],
    queryFn: async () => {
      const res = await axios.get(`/agrement?email=${user?.email}`);
      return res?.data;
    }
  });

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

  const [coupon, setCoupon] = useState('');
  const [discountedRent, setDiscountedRent] = useState(rent);

  const handleCouponApply = () => {
    // Simulate coupon validation and apply discount
    const validCoupons = [
      { code: 'DISCOUNT10', discount: 0.10 }, // 10% discount
      { code: 'DISCOUNT20', discount: 0.20 }, // 20% discount
    ];

    const validCoupon = validCoupons.find((c) => c.code === coupon.toUpperCase());

    if (validCoupon) {
      setDiscountedRent(rent - rent * validCoupon.discount);
      alert(`Coupon applied! Rent is reduced by ${validCoupon.discount * 100}%`);
    } else {
      alert('Invalid coupon code.');
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className='text-center font-bold bg-green-500 text-2xl text-white '>Make Paymet</h1>
      <form className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Agreement Details</h3>
        <div className="space-y-2">
          <label className="block">
            <strong>Email:</strong>
            <input
              type="email"
              value={userEmail}
              readOnly
              className="mt-1 p-2 border rounded w-full bg-gray-100"
            />
          </label>
          <label className="block">
            <strong>Floor Number:</strong>
            <input
              type="text"
              value={floorNo}
              readOnly
              className="mt-1 p-2 border rounded w-full bg-gray-100"
            />
          </label>
          <label className="block">
            <strong>Block Name:</strong>
            <input
              type="text"
              value={blockName}
              readOnly
              className="mt-1 p-2 border rounded w-full bg-gray-100"
            />
          </label>
          <label className="block">
            <strong>Apartment Number:</strong>
            <input
              type="text"
              value={apartmentNo}
              readOnly
              className="mt-1 p-2 border rounded w-full bg-gray-100"
            />
          </label>
          <label className="block">
            <strong>Rent:</strong>
            <input
              type="text"
              value={`$${discountedRent}`}
              readOnly
              className="mt-1 p-2 border rounded w-full bg-gray-100"
            />
          </label>

          <label className="block">
            <strong>Month:</strong>
            <input
              type="month"
              className="mt-1 p-2 border rounded w-full"
            />
          </label>

          <label className="block">
            <strong>Apply Coupon:</strong>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter coupon code"
            />
            <button
              type="button"
              onClick={handleCouponApply}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Apply Coupon
            </button>
          </label>
        </div>
        
       <Link to="/dashboard/payment">
       <button
          type="button"
         
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
        >
          Pay Now
        </button>
       </Link>
      </form>
    </div>
  );
};

export default MakePayment;

