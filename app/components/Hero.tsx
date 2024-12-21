import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen hero bg-base-200/60">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-gray-950">
            There's still time <br /> to work your magic.
          </h1>
          <p className="py-4 text-gray-800">Wrap up your holiday gift list.</p>
          <button className="px-6 font-medium rounded-full btn btn-primary">
            Shop gifts
          </button>{" "}
          <Image
            className="pt-4"
            src={"/giftBagColor.jpeg"}
            width={1000}
            height={1000}
            alt="gift bag"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
