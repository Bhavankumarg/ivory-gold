import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurOfferings = ({ showList = true, showUl = true, showLi = true }) => {
  const offerings = [
    {
      id: 1,
      title: <h3>Hair Color</h3>,
      description:
        "From subtle tonal shifts to bold reinventions, our colour services are tailored to your personality, with premium formulations that protect as they transform.",
      image: "/hair/hair-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true,
      listItems: [
        {
          boldText: "Global Colour –",
          description: "A seamless all-over hue for timeless elegance.",
        },
        {
          boldText: "Touch-ups –",
          description: "Root perfection to keep your look polished.",
        },
        {
          boldText: "Highlights –",
          description: "Soft or striking dimension for a natural lift.",
        },
        {
          boldText: "Highlights per Streak –",
          description: "Bespoke accents, crafted strand by strand.",
        },
      ],
    },
    {
      id: 2,
      title: <h3>Deep Treatments</h3>,
      description:
        "Our intensive treatments infuse hair with vitality, taming frizz and repairing damage for a finish that feels as good as it looks.",
      image: "/hair/hair-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false,
      listItems: [
        {
          boldText: "Cysteine –",
          description: "Smooth, frizz-free finish with a natural flow.",
        },
        {
          boldText: "QOD Keratin –",
          description: "Long-lasting repair and manageability.",
        },
        {
          boldText: "Brasil Cacau Keratin –",
          description: "Glossy, salon-strength silkiness.",
        },
      ],
    },
    {
      id: 3,
      title: <h3>Styling</h3>,
      description:
        "Our stylists bring editorial precision to every look, whether it’s effortless daily polish or high-glam transformations.",
      image: "/hair/hair-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
      listItems: [
        {
          boldText: "Wash –",
          description: "A fresh cleanse, simple yet indulgent.",
        },
        {
          boldText: "Wash & Blow Dry –",
          description: "Runway-ready bounce with natural shine.",
        },
        {
          boldText: "Styling (Iron/Tongs) –",
          description: "Sleek, curled, or waved - your way.",
        },
        {
          boldText: "Elaborate Styling –",
          description: "Red carpet styles for events and occasions.",
        },
      ],
    },
    {
      id: 3,
      title: <h3>Hair Care Rituals</h3>,
      description:
        "Each ritual is a journey into indulgence. Tailored formulas, expert techniques, and a finish that leaves your hair renewed, resilient, and radiant.",
      image: "/hair/hair-4.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: false,
      listItems: [
        {
          boldText: "Original Hair Spa –",
          description: "Classic indulgence, always flawless.",
        },
        {
          boldText: "System Professional Essential Hair Spa –",
          description: "Precision rituals for balance and vitality.",
        },

        {
          boldText: "Reborn Hair Spa –",
          description: "A full reset, restoring softness and shine.",
        },
      ],
    },
  ];

  const renderList = (offering) => {
    // Check if this specific offering should show list
    if (offering.showList === false) return null;
    if (!showList) return null;

    // Check if offering has listItems
    if (!offering.listItems || offering.listItems.length === 0) return null;

    if (!showUl) {
      return (
        <div className="pt-3">
          {offering.listItems.map((item, index) => (
            <div key={index} className="font-light text-xl">
              <span className="font-bold">{item.boldText}</span>{" "}
              {item.description}
            </div>
          ))}
        </div>
      );
    }

    if (!showLi) {
      return (
        <ul className="list-disc list-outside pt-3">
          {offering.listItems.map((item, index) => (
            <div key={index} className="font-light text-xl">
              <span className="font-bold">{item.boldText}</span>{" "}
              {item.description}
            </div>
          ))}
        </ul>
      );
    }

    return (
      <div className="container mx-auto lg:px-0 px-4">
        <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-3 justify-center">
          {offering.listItems.map((item, index) => (
            <li
              key={index}
              className="font-light text-xl rounded-xl py-3 border shadow-xs p-5"
            >
              <span className="font-bold">{item.boldText}</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <Link href="/booking" className="flex pt-5">
          <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">
            Book Appointment
          </button>
        </Link>
      </div>
    );
  };

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
                {renderList(offering)}
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="pt-5">{offering.description}</p>
                {renderList(offering)}
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
