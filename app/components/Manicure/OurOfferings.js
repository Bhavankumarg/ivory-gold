import React from "react";
import Image from "next/image";
import Link from "next/link";
const OurOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: <h3>Mini Manicure</h3>,
      description:
        "Perfect for when time is short, this treatment focuses on shaping, gentle cuticle care, and a polished finish that feels clean, light, and refined.",
      image: "/manicure/manicure-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true,
    },
    {
      id: 2,
      title: <h3>Bespoke Manicure</h3>,
      description:
        "Tailored entirely to you, from nail shape to finish, this manicure is crafted with intention, ensuring your hands reflect your personal style with quiet confidence.",
      image: "/manicure/manicure-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false,
    },
    {
      id: 3,
      title: <h3>Spa Manicure</h3>,
      description:
        "An immersive treatment featuring exfoliation, hydration, massage, and a flawless finish. Designed to restore balance while elevating your everyday.",
      image: "/manicure/manicure-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <h2>Our Offerings Include</h2>
      </div>
      {offerings.map((offering) => (
        <div
          key={offering.id}
          className={`container mx-auto flex justify-center items-center gap-10 lg:py-10 py-5 ${
            offering.imageFirst
              ? "flex-col lg:flex-row"
              : "flex-col-reverse lg:flex-row"
          }`}
        >
          {offering.imageFirst ? (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <Image
                  src={offering.image}
                  alt={offering.imageAlt}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="py-5">{offering.description}</p>
                <Link href="/booking">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">Book Appointment</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="py-5">{offering.description}</p>
                <Link href="/booking">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">Book Appointment</button>
                </Link>
              </div>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <Image
                  src={offering.image}
                  alt={offering.imageAlt}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default OurOfferings;
