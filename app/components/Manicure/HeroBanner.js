import React from "react";
import Banner from "../Shared/ServicesProps/Banner";

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/manicure/banner.png"
        imageAlt="banner"
        title="Manicure"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/manicure/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  );
};

export default HeroBanner;
