import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/components/ui/parallex-items";
import React from "react";
import Image from "next/image";
const AboutIvory = () => {
  return (
    <>
      <div>
        {/* <HeroParallax products={products} /> */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 p-0 lg:pt-20 pt-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold">About Ivory & Gold</h1>
            <p className="lg:w-[80%] mx-auto lg:pt-10 pt-5 pb-5 lg:pb-10 lg:px-0 px-4">
              Where refined beauty meets modern indulgence, Ivory & Gold is a
              sanctuary of calm and craft - where every detail is considered,
              and each moment feels like your own quiet ritual of elegance. From
              flawless nails to moments of stillness, step into your own era of
              glam.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/home/about-ivory/about-ivory.png"
            alt="about-ivory"
            width={800}
            height={800}
            className="object-cover hidden lg:block"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/home/about-ivory/mobile-ivory.png"
            alt="about-ivory"
            width={400}
            height={400}
            className="lg:hidden"
          />
        </div>
        <div className="flex justify-center items-center pb-10">
          <button className="mt-8 px-6 py-2 border border-[#D4AF37] rounded-xl text-[#000] hover:bg-[#D4AF37] hover:text-white transition">
            About Us
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutIvory;
