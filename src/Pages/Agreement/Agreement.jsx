import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Agreement = () => {
  const { user } = useContext(AuthContext);
  const apartments = useLoaderData() || []; // Default to empty array if no data
  const navigate = useNavigate();

  // Redirect to login if not logged in
  if (!user) {
    navigate("/login");
    return null; // Prevent rendering until redirect
  }

  const handleAgreement = async (apartment) => {
    const agreementData = {
      agreementid:apartments._id,
      userName: user.displayName,
      userEmail: user.email,
      floorNo: apartment.floor_no,
      blockName: apartment.block_name,
      apartmentNo: apartment.apartment_no,
      rent: apartment.rent,
      status: "pending",
      createdAt: new Date().toISOString(), 
    };
    

    try {
      const response = await fetch("http://localhost:4000/agreement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agreementData),
      });

      if (response.ok) {
    
        Swal.fire({
          title: "Agreement requested successfully!",
          icon: "success",
          draggable: true
        });
      } else {
       
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit agreement.",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while submitting the agreement.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
   
    }
  };

  return (
    <div className="lg:py-16 w-10/12 mx-auto py-8  rounded-xl">
      <h1 className=" text-center lg:text-3xl text-xl text-sky-500  font-bold mb-4">Available Apartments</h1>
      <div className="">
      
          <div
        
            className="border rounded-lg shadow-md p-4 flex flex-col "
          >
            <img
              src={apartments.apartment_image}
              alt={`Apartment ${apartments.apartment_no}`}
              className="w-full h-[450px] lg:h-[550px] object-cover mb-4"
            />
            <h2 className="text-lg text-sky-400 font-bold">Block: {apartments.block_name}</h2>
            <p>Floor No: {apartments.floor_no}</p>
            <p>Apartment No: {apartments.apartment_no}</p>
            <p>Rent: ${apartments.rent}</p>
            <button
              onClick={() => handleAgreement(apartments)}
              className="mt-4 btn btn-info text-white rounded-lg hover:bg-blue-600"
            >
              Request Agreement
            </button>
          </div>
       
      </div>
    </div>
  );
};

export default Agreement;
