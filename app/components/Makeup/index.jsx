import React from "react";
import OurOfferings from "./OurOfferings";
import GentleWelcome from "../Shared/GentleWelcome";
import ContentSection from "./ContentSection";
// import WhatMakesUsSection from "./WhatMakesUsSection";
import HeroBanner from "./HeroBanner";
import OtherServices from "../Shared/ServicesProps/OtherServices";

const Makeup = () => {
  return (
    <>
      <HeroBanner />
      <ContentSection />
      <OurOfferings />
      {/* <WhatMakesUsSection /> */}
      <GentleWelcome />
      <OtherServices hideCurrentService="/make-up" />
    </>
  );
};

export default Makeup;
