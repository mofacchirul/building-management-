import React from "react";
import { Link } from "react-router-dom";

const ConstructionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl py-10  mx-auto">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/JF0qjSxF/about-4.jpg"
          alt="Surveyor using equipment"
          className="lg:w-full w-96 mx-auto  h-[500px] rounded-lg"
        />
      </div>
      
      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-12">

        <h2 className="text-3xl font-bold mt-4">Trusted Partner in Construction and Design</h2>
        
        <div className="relative w-fit mt-4">
          <img
            src="https://i.ibb.co.com/hFs6MVGY/who-we-are.jpg"
            alt="Construction Team"
            className="w-64 h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <p className="text-white text-lg font-semibold">Building Trust Since 1989</p>
          </div>
        </div>

        <p className="text-gray-600 mt-4">
          Our journey began with a commitment to excellence, and that commitment remains at the core of our operations today. We've grown from a small local business into a trusted partner for both residential and commercial projects.
        </p>

        <Link to={'/apartment'}>
        <button className="mt-6 px-6 py-3 bg-sky-400 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-500 transition">
        Apartment
          <span className="text-lg">➡️</span>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ConstructionSection;
