import React from 'react';
import UseBannercard from './UseBannercard';
import { Link } from 'react-router-dom';

const Banner1 = () => {
    const [banners] = UseBannercard();

    // Show a loader or fallback message if data is not loaded
    if (!banners || banners.length === 0) {
        return <p>Loading banners...</p>;
    }

    return (

    
       <div className='py-16'>
        <div>
        <h2 className="text-center uppercase text-3xl font-bold mb-6 text-gray-800">
        about the building
            </h2>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {banners.map((data) => (
                <div className="p-2 bg-white rounded-lg shadow-md overflow-hidden" key={data._id}>
                    <img src={data.img} alt={data.name} className="w-full h-48 object-cover" />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
                        <p className="text-gray-600 text-sm mb-4">{data.location}</p>
                    </div>
                    <Link to={`/viewdetels/${data._id}`}>
                        <button className="btn btn-block btn-info text-white font-bold">View Details</button>
                    </Link>
                </div>
            ))}
        </div>
       </div>
    );
};

export default Banner1;
