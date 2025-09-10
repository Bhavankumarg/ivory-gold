import React from "react";

const WhatMakesUs = ({
  title,
  description,
  containerClass = "lg:py-10 pb-10",
  outerContainerClass = "container mx-auto p-2 flex flex-col items-center justify-center border-dotted border-2 border-black rounded-3xl",
  innerContainerClass = "bg-[#D4AF37] container mx-auto flex flex-col items-center justify-center rounded-2xl py-10",
  titleClass = "text-center",
  descriptionClass = "text-center lg:px-0 px-4",
}) => {
  return (
    <div className={containerClass}>
      <div className={outerContainerClass}>
        <div className={innerContainerClass}>
          <h2 className={titleClass}>{title}</h2>
          <p className={descriptionClass}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUs;
