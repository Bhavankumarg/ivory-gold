"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "/about-us/slide-1.png",
  "/about-us/slide-2.png",
  "/about-us/slide-3.png",
];

const VerticalCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full flex min-h-[120vh] lg:justify-center overflow-hidden bg-[url('/about-us/design.svg')] bg-cover bg-center">
        <div className="container mx-auto w-full relative">
          <div className="absolute lg:top-[20%] md:translate-x-[1%] 2xl:translate-x-[15.5%] left-0 z-30 lg:px-0 px-4 lg:pt-0 pt-5">
            <h1 className="font-light leading-tight relative text-5xl md:text-6xl custom-font">
              The Essence <br /> of{" "}
              <span className="custom-font text-[#D4AF37] wolmer-100">
                {" "}
                Ivory &
              </span>
              {` `}
              <span className="lg:bg-gradient-to-r text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] lg:from-[50%] lg:to-white to-[50%] lg:text-transparent bg-clip-text wolmer-100">
                G
              </span>
              <span className="lg:text-white text-[#D4AF37] wolmer-100">old</span>
            </h1>
          </div>
          <div className="hidden lg:block absolute lg:top-[60%] left-[13%]">
            <h3 className="text-black text-lg leading-10 px-10">
              This isn&apos;t <br /> just beauty.
            </h3>
          </div>
           
          <div className="hidden lg:block absolute lg:bottom-[7%] left-[20%]">
            {/* <div className="flex flex-col gap-10 justify-between items-start"> */}
            <h6 className="text-black text-6xl wolmer-bold">
              This is <br /> Ivory & Gold,
            </h6>
            {/* </div> */}
          </div>
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left Side - Text */}
            <div className="z-10 col-span-1">
              <div></div>
            </div>

            {/* Right Side - Carousel + Overlay */}
            <div className="relative flex flex-col justify-center items-center lg:pt-10 pt-20 lg:p-0 p-5">
              {/* Carousel box */}
              <div className="relative w-full lg:h-[90vh] h-[500px] overflow-hidden rounded-xl">
                {/* Fading Images */}
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      current === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={img}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay image OUTSIDE main box */}
              <div className="absolute lg:-bottom-28 -bottom-32 lg:-left-20 right-0 lg:w-56 lg:h-56 w-44 h-44 rotate-[-5deg] rounded-lg overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src="/about-us/overlay.png"
                  alt="overlay"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dots - outside right */}
              <div className="absolute lg:-right-8 left-7 lg:left-auto -bottom-10 lg:bottom-0 -translate-y-1/2 flex lg:flex-col flex-row gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-4.5 h-4.5 rounded-full border transition-all duration-300 ${
                      current === index
                        ? "bg-[#FBBC05] border-[#FBBC05]"
                        : "bg-black border-black"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Mobile Banner */}
          <div className="lg:hidden block py-32 ">
            <div className="flex flex-col px-10 text-left gap-10">
              <h6 className="text-black text-4xl leading-10 lg:px-24 wolmer-bold">
                This isn&apos;t <br /> just beauty.
              </h6>
              <h3 className="text-black font-medium text-xl leading-10 lg:px-40 custom-font ">
                This is <br /> Ivory & Gold,
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCarousel;

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const images = [
//   "/about-us/slide-1.png",
//   "/about-us/slide-2.png",
//   "/about-us/slide-3.png",
// ];

// const VerticalCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="relative w-full flex items-center lg:justify-center overflow-hidden bg-[url('/about-us/design.svg')] bg-cover bg-center">
//         <div className="grid md:grid-cols-2 items-center gap-10 lg:px-6 relative px-6 pb-32 pt-20">
//           {/* Left Side - Text */}
//           <div className="space-y-6 relative z-10 left-0">
//             <span className="font-light leading-tight relative text-5xl md:text-6xl custom-font">
//               The Essence <br /> of{" "}
//               <span className="custom-font text-[#D4AF37] wolmer-100">
//                 {" "}
//                 Ivory &
//               </span>
//               {` `}
//               <span className="relative inline-block lg:left-46.5 custom-font">
//                 {/* Gradient Yellow "Gold" */}
//                 <span className="font-semibold lg:bg-gradient-to-r lg:text-transparent lg:bg-clip-text wolmer-100 text-[#D4AF37]">
//                   Gold
//                 </span>
//                 {/* White overlay "Gold" with blend - hidden on mobile */}
//                 <span className="absolute inset-0 custom-font hidden lg:block">
//                   <span className="lg:bg-gradient-to-r text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] lg:from-[50%] lg:to-white to-[50%] lg:text-transparent bg-clip-text wolmer-100">
//                     G
//                   </span>
//                   <span className="text-white wolmer-100">old</span>
//                 </span>
//               </span>
//             </span>
//             <div className="hidden lg:block absolute  lg:-bottom-32 xl:-bottom-32 left-0">
//             <h3 className="text-black text-lg leading-10 px-10">
//                 This isn&apos;t <br /> just beauty.
//               </h3>
//               </div>
//             <div className="hidden lg:block absolute  lg:-bottom-60 xl:-bottom-72 left-0">
//              <div className="flex flex-col gap-10 justify-between items-start">

//               <h6 className="text-black text-6xl leading-12 lg:px-24 wolmer-bold">
//                 This is <br /> Ivory & Gold,
//               </h6>
//              </div>
//             </div>
//           </div>

//           {/* Right Side - Carousel + Overlay */}
//           <div className="relative">
//             {/* Carousel box */}
//             <div className="relative w-full lg:h-[650px] h-[400px] overflow-hidden rounded-xl">
//               {/* Sliding Images */}
//               <div
//                 className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out"
//                 style={{ transform: `translateY(-${current * 100}%)` }}
//               >
//                 {images.map((img, index) => (
//                   <div
//                     key={index}
//                     className="w-full lg:h-[650px] h-[400px] object-cover"
//                   >
//                     <Image
//                       width={1000}
//                       height={1000}
//                       src={img}
//                       alt={`Slide ${index}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Overlay image OUTSIDE main box */}
//             <div className="absolute lg:-bottom-28 -bottom-32 lg:-left-20 right-0 lg:w-56 lg:h-56 w-44 h-44 rotate-[-5deg] rounded-lg overflow-hidden">
//               <Image
//                 width={300}
//                 height={300}
//                 src="/about-us/overlay.png"
//                 alt="overlay"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Dots - outside right */}
//             <div className="absolute lg:-right-8 left-3 lg:left-auto -bottom-10 lg:bottom-0 -translate-y-1/2 flex lg:flex-col flex-row gap-3">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`w-4.5 h-4.5 rounded-full border transition-all duration-300 ${
//                     current === index
//                       ? "bg-[#FBBC05] border-[#FBBC05]"
//                       : "bg-black border-black"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="lg:hidden block pb-10">
//         <div className="flex flex-col px-10 text-left gap-10">
//         <h6 className="text-black text-4xl leading-10 lg:px-24 wolmer-bold">
//             This isn&apos;t <br /> just beauty.
//           </h6>
//           <h3 className="text-black font-medium text-xl leading-10 lg:px-40 custom-font ">
//             This is <br /> Ivory & Gold,
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerticalCarousel;
