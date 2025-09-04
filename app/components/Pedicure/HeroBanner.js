import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/pedicure/banner.png"
        imageAlt="banner"
        title="Pedicure"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/pedicure/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
