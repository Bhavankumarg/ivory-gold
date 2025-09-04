import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: <h3>Party Make-up</h3>,
      description:
        "Step into the spotlight. Whether it’s a night out or a red-carpet affair, our party make-up brings together luminous skin, defined eyes, and a flawless finish that lasts as long as the night does.",
      image: "/make-up/make-up-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true,
    },
    {
      id: 2,
      title: <h3>Day Make-up</h3>,
      description:
        "Effortlessly radiant. Perfect for work, brunch, or casual moments, our day make-up enhances your natural features with soft tones and a polished glow that feels fresh and understated.",
      image: "/make-up/make-up-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false,
    },
    {
      id: 3,
      title: <h3>Elaborate Make-up</h3>,
      description:
        "For moments that demand more. From bridal glam to editorial drama, our elaborate make-up is a full expression of artistry - precision techniques, statement details, and luxury products that transform you into the muse of the moment.",
      image: "/make-up/make-up-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
    },
    {
      id: 4,
      title: <h3>Bridal Make-up</h3>,
      description:
        "Our bridal make-up is timeless yet personal, crafted to highlight your natural elegance while ensuring you look radiant through every ritual, every lens, and every moment in between. With flawless technique, long-lasting luxury products, and an eye for detail, we create looks that feel effortless, luminous, and uniquely yours.",
      image: "/make-up/make-up-4.png",
      imageAlt: "Luxe Nail Art",
      imageFirst: false,
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
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="pt-5">{offering.description}</p>
                <Link href="/booking" className="flex pt-5">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="pt-5">{offering.description}</p>
                <Link href="/booking" className="flex pt-5">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">
                    Book Appointment
                  </button>
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
