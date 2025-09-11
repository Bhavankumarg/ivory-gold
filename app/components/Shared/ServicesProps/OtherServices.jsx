"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allServices = [
  {
    title: "Nails",
    desc: "From soft accents to statement sets - always tailored, always you.",
    img: "/other-services/nails.png",
    href: "/nails",
  },
  {
    title: "Pedicure",
    desc: "A quiet reset for tired feet - ritual, relief, and polish that lasts.",
    img: "/other-services/pedicure.png",
    href: "/pedicure",
  },
  {
    title: "Manicure",
    desc: "Every detail, shaped with intention - one fingertip at a time.",
    img: "/other-services/manicure-01.png",
    href: "/manicure",
  },
  {
    title: "Beauty",
    desc: "Subtle corrections, soft finishes - always artful, never overdone.",
    img: "/other-services/beauty.png",
    href: "/beauty",
  },
  {
    title: "Make Up",
    desc: "Soft glam or spotlight bold - looks that hold their own.",
    img: "/other-services/make-up.png",
    href: "/make-up",
  },
  {
    title: "Hair",
    desc: "Cut, colour, or transformation - your hair, styled to refined perfection.",
    img: "/other-services/hair.png",
    href: "/hair",
  },
];

const OtherServices = ({ hideCurrentService = null, title = "Other Services" }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Filter out the current service if specified
  const services = hideCurrentService 
    ? allServices.filter(service => service.href !== hideCurrentService)
    : allServices;

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  // Auto-slide functionality
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000); // 3 seconds per slide
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="bg-gray-50 py-10 relative"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-center text-3xl md:text-4xl font-light mb-10">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative container mx-auto lg:py-10">
        <div className="overflow-hidden relative">
          {/* Desktop Carousel (2 slides) */}
          <motion.div
            animate={{
              x: `-${index * 50}%`, // Desktop: 50% per slide (shows 2)
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="hidden md:flex gap-8"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[48%] flex lg:flex-row flex-col-reverse items-center md:items-start text-center md:text-left gap-4"
              >
                <div>
                  <h3 className="font-light mb-3">{service.title}</h3>
                  <h6 className="text-gray-700 mb-5 text-xl">{service.desc}</h6>
                  <Link href={service.href}>
                    <button className="px-6 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-white transition">
                      Explore
                    </button>
                  </Link>
                </div>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md object-cover mb-6"
                />
              </div>
            ))}
          </motion.div>

          {/* Mobile Carousel (1 slide) */}
          <motion.div
            animate={{
              x: `-${index * 104}%`, // Mobile: 100% per slide
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex md:hidden gap-4"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex flex-col items-center text-center gap-4"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={350}
                  className="rounded-2xl object-cover mb-4 p-5"
                />
                <div>
                  <h3 className="font-light mb-2">{service.title}</h3>
                  <h6 className="text-gray-700 mb-4 text-lg">{service.desc}</h6>
                  <Link href={service.href}>
                    <button className="px-6 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-white transition">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Arrows - Centered */}
          <div className="md:hidden flex justify-center items-center gap-4 py-5">
            <button
              onClick={prevSlide}
              className=" left-0 -bottom-0 p-2 rounded-full bg-white shadow-md border hover:text-[#D4AF37] hover:border-[#D4AF37]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className=" right-0 -bottom-0 p-2 rounded-full bg-white shadow-md border hover:text-[#D4AF37] hover:border-[#D4AF37]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Arrows - Bottom Right */}
        <div className="hidden md:flex gap-4 justify-end mt-8">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full border-black border-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 rounded-full border-black border-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
