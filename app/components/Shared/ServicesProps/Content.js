import React from "react";

const Content = ({
  title,
  description,
  containerClass = "container mx-auto lg:py-10 py-5 lg:px-0 px-4",
  titleClass = "",
  descriptionClass = "pt-5",
}) => {
  return (
    <>
      <div className={containerClass}>
        <h1 className={titleClass}>{title}</h1>
        <p className={descriptionClass}>{description}</p>
      </div>
    </>
  );
};

export default Content;
