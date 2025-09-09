import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div>
        <Image
          src="/home/banner.png"
          alt="hero-banner"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
    </>
  );
};

export default HeroBanner;
