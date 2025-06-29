import React from "react";

function Banner() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Container with margin and max width */}
      <div className="relative w-full  h-[400px] overflow-hidden  mx-4 md:mx-8">
        {/* Background Image */}
        <img
          src="https://i.pinimg.com/736x/8d/fc/c5/8dfcc58cf6cd495392f6f0d3372c6053.jpg"
          alt="Discount"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4  bg-opacity-40">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Super Discount 80% OFF
          </h1>
          <h3 className="text-lg md:text-xl">
            We source and sell the very best beef, lamb and pork,
          </h3>
          <h3 className="text-sm md:text-lg">
            Lorem, ipsum dolor sit amet consectetur
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
