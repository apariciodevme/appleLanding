import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="items-start min-h-screen pt-5 mb-3 hero"
      style={{
        backgroundImage: "url(/giftBagColor.jpeg)",
      }}
    >
      <div className="bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-4xl font-semibold text-black">
            {" "}
            There's still time <br /> to work your magic.
          </h1>
          <p className="mb-5 text-lg text-black/70">Wrap up your holiday gift list.</p>
          <button className="font-light text-white rounded-full btn btn-primary btn-sm">
            Shop gifts
          </button>
        </div>
      </div>
    </div>

    /*<div className="items-start  min-h-screen hero bg-base-200/60 bg-url('/giftBagColor.jpeg') bg-cover">
      <div className="text-center hero-content ">
        <div className="max-w-md ">
          <h1 className="text-3xl font-semibold text-gray-950">
            There's still time <br /> to work your magic.
          </h1>
          <p className="py-4 text-gray-800">Wrap up your holiday gift list.</p>
          <button className="px-4 font-light rounded-full btn-sm btn btn-primary">
            Shop gifts
          </button>{" "}
        
        </div>
      </div>
    </div>
    */
  );
};

export default Hero;
