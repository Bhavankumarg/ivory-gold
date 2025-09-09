"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Heart, Share2 } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const movies = [
  { image: "/home/influencer/swiper-1.png" },
  { image: "/home/influencer/swiper-2.png" },
  { image: "/home/influencer/swiper-3.png" },
  { image: "/home/influencer/swiper-4.png" },
  { image: "/home/influencer/swiper-5.png" },
];

export default function MovieCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-[500px] lg:h-screen overflow-hidden relative pb-10"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center">
        {movies.map((movie, i) => {
          const position = (i - index + movies.length) % movies.length;

          let scale = 0.7;
          let opacity = 1;
          let zIndex = 0;
          let translateX = position * 250; // tighter spacing for 5 images
          let blur = "";

          if (position === 0) {
            // center slide
            scale = 1;
            opacity = 1;
            zIndex = 10;
            translateX = 0;
            blur = "blur-0";
          } else if (position === 1) {
            // right
            translateX = 300;
          } else if (position === 2) {
            // far right
            translateX = 600;
          } else if (position === movies.length - 1) {
            // left
            translateX = -300;
          } else if (position === movies.length - 2) {
            // far left
            translateX = -600;
          } else {
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                scale,
                opacity,
                x: translateX,
                zIndex,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute w-[300px] h-[400px] md:w-[350px] md:h-[600px] object-cover rounded-xl overflow-hidden shadow-lg group ${blur}`}
            >
              <Image
                src={movie.image}
                alt={`Movie ${i}`}
                fill
                className="object-cover"
              />

              {/* Overlay icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
                <button className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Arrows at bottom center */}
      <div className="absolute lg:bottom-0 bottom-1 flex gap-3">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-14 h-12 rounded-lg bg-black hover:bg-[#D4AF37] transition"
        >
          <FaArrowLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-14 h-12 rounded-lg bg-black hover:bg-[#D4AF37] transition"
        >
          <FaArrowRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
