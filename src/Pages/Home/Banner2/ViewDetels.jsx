import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetels = () => {

    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <div className="w-full">
       
                <div className="  bg-white rounded-lg shadow-md  overflow-hidden" key={data._id}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-auto  object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">{data.location}</p>
                  <p className="text-gray-700 mb-4">{data.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p><span className="font-bold">Year:</span> {data.year}</p>
                    <p><span className="font-bold">Height:</span> {data.height}</p>
                    <p><span className="font-bold">Floors:</span> {data.floors}</p>
                    <p><span className="font-bold">Material:</span> {data.material}</p>
                    <p><span className="font-bold">Architect:</span> {data.architect}</p>
                  </div>
                  <div className="mt-4">
                    <span className="font-bold">Amenities:</span>
                    <p className="text-gray-600">{data.amenities}</p>
                  </div>
                </div>
              </div>
             
      </div>
        </div>
    );
};

export default ViewDetels;