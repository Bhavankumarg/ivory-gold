"use client";
import React from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/gallery-img-1.png", col: "lg:-span-1 row-span-1" },
  { src: "/gallery/gallery-img-4.png", col: "lg:col-span-2 row-span-2" },
  { src: "/gallery/gallery-img-6.png", col: "col-span-1 row-span-1" },
  { src: "/gallery/gallery-img-2.png", col: "col-span-1 row-span-1" },
  { src: "/gallery/gallery-img-7.png", col: "col-span-1 row-span-1" },
  { src: "/gallery/gallery-img-3.png", col: "col-span-1 row-span-1" },
  { src: "/gallery/gallery-img-5.png", col: "lg:col-span-2 row-span-1" },
  { src: "/gallery/gallery-img-8.png", col: "col-span-1 row-span-2" },
];

const GalleryImages = () => {
  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
          {images.map((item, idx) => (
            <div key={idx} className={`${item.col} relative`}>
              <Image
                src={item.src}
                alt={`grid-img-${idx}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryImages;
