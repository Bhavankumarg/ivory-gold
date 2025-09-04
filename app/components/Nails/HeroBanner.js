import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/nails/banner.png"
        imageAlt="banner"
        title="Nails"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/nails/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
