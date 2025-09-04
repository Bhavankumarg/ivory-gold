import Image from "next/image";
import React from "react";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "/contact-us/map.svg",
      alt: "map",
      title: "Visit Us",
      content: (
        <p className="roboto-light">
          Ivory & Gold Luxury Salon <br />
          [Full Address Line 1] <br />
          [Area, Bengaluru, PIN Code]
        </p>
      ),
    },
    {
      id: 2,
      image: "/contact-us/phone.svg",
      alt: "phone",
      title: "Call Us",
      content: <p className="roboto-light">+91 [phone number]</p>,
    },
    {
      id: 3,
      image: "/contact-us/mail.svg",
      alt: "mail",
      title: "Write to Us",
      content: <p className="roboto-light">contact@ivoryandgold.com</p>,
    },
    {
      id: 4,
      image: "/contact-us/clock.svg",
      alt: "clock",
      title: "Hours",
      content: <p className="roboto-light">Monday – Sunday: 10 AM – 8 PM</p>,
    },
    {
      id: 5,
      image: "/contact-us/follow.svg",
      alt: "follow",
      title: "Follow Us",
      content: (
        <div className="flex items-center justify-center gap-4">
          <IoLogoInstagram className="text-2xl" />
          <IoLogoFacebook className="text-2xl" />
          <IoLogoLinkedin className="text-2xl" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <div className="py-10 grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
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
                <h3 className="lg:h-14">{card.title}</h3>
              </div>
              <div className="text-center lg:h-20">
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
