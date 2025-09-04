import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/hair/banner.png"
        imageAlt="banner"
        title="Hair Care"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/hair/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
