import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/make-up/banner.png"
        imageAlt="banner"
        title="Makeup"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/make-up/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
