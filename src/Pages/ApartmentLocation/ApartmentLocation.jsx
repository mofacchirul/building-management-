import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ApartmentLocation = () => {
  const position = [40.7128, -74.0060]; // New York City, USA

  return (
    <div className="py-8 lg:py-16  min-h-screen">
      <h1 className="lg:text-3xl text-xl text-sky-500 font-bold text-center mb-6">
        Apartment Location
      </h1>
      
      {/* Input Section */}
      <div className=" max-w-6xl mx-auto shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Provide Your Apartment Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Apartment Address"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Directions to your apartment"
            className="border p-2 rounded col-span-1 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="btn-info text-white  rounded btn col-span-1 md:col-span-2"
          >
            Save Details
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className=" shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">View Your Apartment on Map</h2>
        <div className="h-96">
          <MapContainer center={position} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Your Apartment is Here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ApartmentLocation;
