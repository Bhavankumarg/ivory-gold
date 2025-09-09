import Image from "next/image";
import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "/about-us/crafted.svg",
      alt: "crafted",
      title: "Crafted with intention",
      content: (
        <>
          Precision and care define
          <br />
          every detail.
        </>
      ),
    },
    {
      id: 2,
      image: "/about-us/luxury.svg",
      alt: "luxury",
      title: "Luxury that whispers",
      content: (
        <>
          Plush interiors, premium
          <br />
          products, and a serene ambience.
        </>
      ),
    },
    {
      id: 3,
      image: "/about-us/trends.svg",
      alt: "trends",
      title: "Beyond trends",
      content: (
        <>
          A timeless approach that endures,
          <br />
          never fades.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <div className="lg:py-10 grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center gap-4 shadow-lg rounded-lg p-10 lg:h-[400px]"
            >
              <div className="flex flex-col items-center gap-3">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={70}
                  height={70}
                  className="lg:h-28"
                />
                <h5 className="text-3xl font-light wolmer-bold text-center">
                  {card.title}
                </h5>
              </div>
              <div className="text-center lg:h-20 text-xl roboto-light">
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
