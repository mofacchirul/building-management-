
import { ArrowRight } from "lucide-react";
import { FaBuildingColumns, FaBuildingUser } from "react-icons/fa6";

export default function BuildingDesigns() {
  return (
   <div className="py-16 max-w-screen-xl mx-auto">
     <h3 className=" text-xl lg:text-3xl font-bold  text-sky-400 text-center  ">
          INDUSTRY CERTIFICATIONS
        </h3>
    <section className=" px-6 py-6 grid md:grid-cols-2 items-center gap-8">
      {/* Image Section */}
      <div>
        <img
          src="https://i.ibb.co.com/d4kLyrSV/image-2.jpg"
          alt="Construction Machine"
          className="w-full rounded-lg shadow-lg"
        />
         {/* Features Section */}
      <div className="mt-12 md:col-span-2 flex flex-col md:flex-row gap-8">
        <div className="">
          <p  className="text-3xl">
          <FaBuildingUser />
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Custom Designs</h3>
            <p className="text-gray-600">
              Tailored building solutions that reflect your vision style
            </p>
          </div>
        </div>
        <div className="">
      <p  className="text-2xl">
      <FaBuildingColumns />
      </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Interior Plans</h3>
            <p className="text-gray-600">
              Creating aesthetically pleasing functional interior spaces
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Content Section */}
      <div>
        
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          We Drive Client Success with Creative Building Designs
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At BuildGo, we pride ourselves on transforming our clients' visions
          into reality. Our innovative and client-focused designs ensure that
          every project stands out.
        </p>
        <div className="mt-6">
          <button className="bg-sky-400 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg">
            CONTACT US <ArrowRight size={18} />
          </button>
        </div>
      </div>

     
    </section>
   </div>
  );
}
