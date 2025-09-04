import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="">
        <div className="lg:py-10 py-5">
          <h1 className="text-center">Services</h1>
        </div>
        <ServiceCard  />
        <div className="flex justify-center py-10 bg-[#EDEDED]">
          <button className="bg-black hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-white px-4 py-1 rounded-lg text-2xl">
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
