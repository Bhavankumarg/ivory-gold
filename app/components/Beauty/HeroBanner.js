import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/beauty/banner.png"
        imageAlt="banner"
        title="Beauty"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/beauty/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
