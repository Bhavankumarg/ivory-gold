import React from "react";
import OurOfferings from "./OurOfferings";
import GentleWelcome from "../Shared/GentleWelcome";
import ContentSection from "./ContentSection";
// import WhatMakesUsSection from "./WhatMakesUsSection";
import HeroBanner from "./HeroBanner";

const Beauty = () => {
  return (
    <>
      <HeroBanner />
      <ContentSection />
      <OurOfferings />
      {/* <WhatMakesUsSection /> */}
      <GentleWelcome />
    </>
  );
};

export default Beauty;
