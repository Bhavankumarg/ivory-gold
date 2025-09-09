"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    id: 1,
    name: "Riya M.",
    role: "Influencer",
    image: "/home/testimonials/testimonials-1.png",
    text: `"This place is a jewel box. I left with the most beautiful nails I’ve ever had."`,
    rating: 4.5,
    date: "2 months ago",
  },
  {
    id: 2,
    name: "Priya A.",
    role: "Bride-to-be",
    image: "/home/testimonials/testimonials-2.png",
    text: `"Every appointment feels like an Audrey Hepburn moment."`,
    rating: 5,
    date: "1 month ago",
  },
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="w-full flex flex-col items-center py-12 bg-[#F6F3EE] px-4">
      <h2 className="text-3xl md:text-4xl font-light mb-8">Testimonials</h2>

      <div className="relative w-full max-w-xl flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-2xl object-cover mb-6"
            />

            {/* Testimonial Text */}
            <p className="text-lg italic text-gray-800 mb-4">
              {testimonial.text}
            </p>

            {/* Name & Role */}
            <p className="text-lg font-medium text-gray-900">
              {testimonial.name},{" "}
              <span className="italic text-gray-600">{testimonial.role}</span>
            </p>

            {/* Rating & Date */}
            <div className="flex items-center justify-center mt-4 space-x-2 text-[#D4AF37]">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.floor(testimonial.rating)
                      ? "fill-[#D4AF37]"
                      : i < testimonial.rating
                      ? "fill-[#D4AF37] opacity-50"
                      : "text-gray-300"
                  }
                />
              ))}
              <MdVerified size={20} className="text-[#1760E8]" />
              <FcGoogle size={20} />
              <span className="text-sm text-gray-500 ml-2">
                {testimonial.date}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex space-x-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#D4AF37]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 px-6 py-2 border border-[#D4AF37] rounded-xl text-[#000] hover:bg-[#D4AF37] hover:text-white transition">
        Read More Reviews
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
