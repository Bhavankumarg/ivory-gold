import React from "react";
import Image from "next/image";

const Banner = ({
  imageSrc = "/nails/banner.png",
  imageAlt = "banner",
  title = "Nails",
  textColor = "text-white",
  showGradient = false,
  mobileImageSrc = "/nails/mobile-banner.png",
  mobileImageAlt = "banner",
}) => {
  return (
    <>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={1000}
          className="w-full h-full object-cover hidden lg:block"
        />
        {/* mobile image */}
        <Image
          src={mobileImageSrc}
          alt={mobileImageAlt}
          width={1000}
          height={1000}
          className="w-full h-full object-cover lg:hidden"
        />
        {/* Gradient overlay at the bottom - only show if showGradient is true */}
        {showGradient && (
          <div className="absolute z-50 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        )}
        <div className={`absolute z-[60] bottom-4 left-4 right-4 container mx-auto ${textColor}`}>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
