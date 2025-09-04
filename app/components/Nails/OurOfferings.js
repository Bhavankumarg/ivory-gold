import React from "react";
import Image from "next/image";
import Link from "next/link";
const OurOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: <h3>Gel Extensions & Sculpted <br /> Nails</h3>,
      description: "For length that lasts and shape that speaks. Our sculpted sets are custom-built to flatter your hands, combining structure with softness and a flawless, high-gloss finish.",
      image: "/nails/nail-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true
    },
    {
      id: 2,
      title: <h3>Soft Gel & Builder Gel</h3>,
      description: "Perfect for those who want strength without the bulk. These lightweight, flexible overlays enhance your natural nails while maintaining a clean, natural look - polished, never overpowering.",
      image: "/nails/nail-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false
    },
    {
      id: 3,
      title: <h3>Classic French & Chrome <br /> Finishes</h3>,
      description: "Quiet statements in every shade. From timeless French tips to modern chrome shine, our finishes are tailored to reflect your mood, your wardrobe, and your every day.",
      image: "/nails/nail-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true
    },
    {
      id: 4,
      title: <h3>Luxe Nail Art</h3>,
      description: "Subtle detail or full expression - your fingertips, reimagined. Our artists blend technique and taste to create one-of-a-kind designs that feel personal, not performative.",
      image: "/nails/nail-4.png",
      imageAlt: "Luxe Nail Art",
      imageFirst: false
    },
    {
      id: 5,
      title: <h3>Signature Bridal Sets</h3>,
      description: "Subtle detail or full expression - your fingertips, reimagined. Our artists blend technique and taste to create one-of-a-kind designs that feel personal, not performative.",
      image: "/nails/nail-5.png",
      imageAlt: "Signature Bridal Sets",
      imageFirst: true
    },
    {
      id: 6,
      title: <h3>Rejuvenating Nail Spa <br /> Treatments</h3>,
      description: "A ritual in every sense. This is care beyond colour featuring exfoliation, deep hydration, massage therapy, and natural-strengthening formulas to bring your nails back to balance.",
      image: "/nails/nail-6.png",
      imageAlt: "Rejuvenating Nail Spa Treatments",
      imageFirst: false
    }
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
                  width={500}
                  height={500}
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
                  width={500}
                  height={500}
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
