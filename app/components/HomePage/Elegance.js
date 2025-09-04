import React from "react";
import Image from "next/image";
const Elegance = () => {
  return (
    <div className="py-0 bg-[url('/home/elegance/bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
        <div className="text-center p-5 py-10 bg-gradient-to-r from-[#FEF3AF] via-[#FFF6B1]">
          <h2 className="text-4xl">
            Elegance. Reserved in <br /> Your Name,
          </h2>
          <h6 className="lg:text-4xl text-2xl roboto-semibold lg:py-10 py-5">
            Ivory & Gold Membership
          </h6>
          <p className="lg:px-10 px-4">
            Enjoy select privileges, curated add-ons, and <br className="lg:block hidden" /> priority
            booking. <br className="lg:block hidden" />
            Crafted to keep your experience seamless and <br className="lg:block hidden" /> beautifully
            consistent.
          </p>
          <p></p>
          <h6 className="text-2xl roboto-light pt-10">
            → For more information,
          </h6>
          <h6 className="roboto-medium text-2xl">
            please contact us at +91 [phone number]
          </h6>
        </div>
        <div>
          <Image
            src="/home/elegance/elegance.png"
            alt="Elegance"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Elegance;
