import React from "react";
import Content from "../Shared/ServicesProps/Content";
const ContentSection = () => {
  return (
    <div>
      <Content
        // title="Our Gallery"
        description="Features, stories, and mentions that capture our journey in beauty, craft, and elegance."
      />
      <div className="container mx-auto pb-20 lg:px-0 px-4">   
        <h1>Media updates will be available shortly,</h1>
      </div>
    </div>
  );
};

export default ContentSection;
