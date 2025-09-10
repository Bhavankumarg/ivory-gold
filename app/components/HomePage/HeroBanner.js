import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div className="lg:h-[85vh] h-[50vh] hidden lg:block">
        <video
          src="/home/ivory_desktop_video.mp4"
          alt="hero-banner"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/home/banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="h-[80vh] lg:hidden block">
        <video
          src="/home/hero-banner-mobile.mp4"
          alt="hero-banner"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/home/hero-banner-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HeroBanner;
