import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurOfferings = ({ showList = true, showUl = true, showLi = true }) => {
  const offerings = [
    {
      id: 1,
      title: <h3>Radiance Renewal Facial</h3>,
      description:
        "A luxurious cleansing ritual that combines gentle exfoliation, rich hydration, and a calming massage. Designed to deliver an instant glow while honoring your skin’s natural balance.",
      image: "/beauty/beauty-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true,
      listItems: [
        {
          boldText: "Lip Renewal Mask –",
          description:
            "smooth, softened, ready for shine.for timeless elegance.",
        },
      ],
    },
    {
      id: 2,
      title: <h3>Clarifying Detox Facial</h3>,
      description:
        "A purifying treatment with deep steam, extraction, and calming essences to detox pores and restore equilibrium to sensitive or congested skin, without compromise.",
      image: "/beauty/beauty-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false,
      listItems: [
        {
          boldText: "Nutrient-Rich Masque –",
          description: "a cooling finish that soothes and strengthens.",
        },
      ],
    },
    {
      id: 3,
      title: <h3>Collagen Glow Facial</h3>,
      description:
        "This anti-aging ritual incorporates targeted serums and collagen-boosting wraps to refine texture, improve elasticity, and leave skin feeling plump and radiant.",
      image: "/beauty/beauty-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
      listItems: [
        {
          boldText: "Gold Leaf Serum –",
          description: "for luminous restoration that lasts.",
        },
      ],
    },
    {
      id: 3,
      title: <h3>Illuminating Eye Treatment</h3>,
      description:
        "A delicate, hydrating gaze enhancer designed to reduce puffiness, brighten dark circles, and revitalize the area around your eyes with soft-cool applications and micro-serum infusion.",
      image: "/beauty/beauty-4.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: false,
      listItems: [
        {
          boldText: "Lash-Boost Serum –",
          description:
            "encourages brightness and strength just beyond the lash line.",
        },
      ],
    },
    {
      id: 5,
      title: <h3>Beauty Add-On Bundles</h3>,
      description:
        "Perfect complements for your treatment:",
      image: "/beauty/beauty-5.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
      listItems: [
        {
          // boldText: "Original Hair Spa –",
          description: "Lip or Eye Brightening Mist",
        },
        {
          // boldText: "System Professional Essential Hair Spa –",
          description: "Hand Massage with Deep Moisture Balm",
        },

        {
          // boldText: "Reborn Hair Spa –",
          description: "Scented Aromatherapy Upgrade",
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
                  width={1000}
                  height={1000}
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
