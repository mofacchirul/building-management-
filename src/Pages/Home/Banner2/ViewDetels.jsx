import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetels = () => {

    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <div className="lg:py-16 w-10/12 mx-auto py-8 p-2 border rounded-xl">
       
                <div className="   rounded-lg shadow-md  overflow-hidden" key={data._id}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="lg:w-full lg:h-auto h-60 w-full p-3  object-cover"
                />
                <div className="p-4">
                  <h2 className="lg:text-3xl text-xl text-sky-500 font-bold">{data.name}</h2>
                  <p className="text-white text-sm mb-4">{data.location}</p>
                  <p className="text-white mb-4">{data.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-white">
                    <p><span className="font-bold">Year:</span> {data.year}</p>
                    <p><span className="font-bold">Height:</span> {data.height}</p>
                    <p><span className="font-bold">Floors:</span> {data.floors}</p>
                    <p><span className="font-bold">Material:</span> {data.material}</p>
                    <p><span className="font-bold">Architect:</span> {data.architect}</p>
                  </div>
                  <div className="mt-4">
                    <span className="lg:text-3xl text-xl text-sky-500 font-bold">Amenities:</span>
                    <p className="text-white">{data.amenities}</p>
                  </div>
                </div>
              </div>
             
      </div>
        </div>
    );
};

export default ViewDetels;