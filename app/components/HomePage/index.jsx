import React from "react";
import ElevatedBeauty from "./ElevatedBeauty";
import Services from "./Services/Services";
import AboutIvory from "./AboutIvory";
import Testimonials from "./Testimonials";
import Elegance from "./Elegance";
import InfluencerSpotlight from "./InfluencerSpotlight";
import Contact from "./Contact";
import GentleWelcome from "../Shared/GentleWelcome";

const index = () => {
  return (
    <>
      <ElevatedBeauty />
      <Services />
      <AboutIvory />
      {/* <Testimonials /> */}
      <Elegance />
      <InfluencerSpotlight />
      <Contact />
      <GentleWelcome />
    </>
  )
}

export default index
