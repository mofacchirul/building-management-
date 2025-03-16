import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto ">
        
      <div className="lg:flex gap-5 items-center justify-between ">
      <div>
      <p className="uppercase tracking-widest text-gray-400 text-sm mb-3">
          About Our Company
        </p>
       <h1 className="lg:text-3xl text-xl font-bold mb-8">
          Innovative Solutions for Complex Projects
        </h1>
        
        <div className="">
          {/* Left Image with Play Button */}
          <div className="flex items-center gap-5 ">
            <img
              src="https://i.ibb.co.com/sdTKYB9d/about-2.jpg"
              alt="About"
              className=" w-60 h-60 rounded-lg shadow-lg"
            />
           
           <div className="">
     
           <div>
           <div className="flex items-center gap-2">
<FaMicrochip className="text-4xl text-sky-400" />  <h3 className="text-xl font-semibold">Modern Technology</h3>
</div>
                <p className="">
                  Cutting-edge tools and software streamline processes,
                  enabling teams to deliver.
                </p>
           </div>

            {/* Experience Engineers */}
            <div className=" py-4 ">
            
              <div className="flex gap-2 items-center">
              <MdOutlineEngineering className="text-4xl text-sky-400" />  <h3 className="text-xl font-semibold">Experience Engineers</h3>
               
              </div>
              <p className="">
                  Knowledge and practical skills enable them to tackle
                  challenges from start to finish.
                </p>
            </div>

            {/* Discover More Button */}
            <Link to={'/apartment'}>
            <button className="bg-sky-300 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition">
            Apartments  MORE <BsArrowRight />
            </button>
            </Link>
          </div>
          </div>

          {/* Middle Content */}
         

         
        </div>
       </div>

        <div>
             {/* Right Side Image */}
          <img
            src="https://i.ibb.co.com/jPKd18Cw/about-1.jpg"
            alt="Engineers"
            className="lg:w-full mx-auto py-7  lg:py-0 rounded-2xl shadow-lg"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
