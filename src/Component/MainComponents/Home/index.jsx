import React from 'react';
import image from '../../../assets/home.jpg';

const Index = () => {

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={image}
        alt="Fresh Vegetables"
        className="absolute inset-0 w-full h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 lg:px-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-white">
          Eat Fresh, Feel Great –<br className="hidden sm:block" /> Because You Deserve the Best.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 max-w-md sm:max-w-lg mx-auto">
          Green Basket brings you fresh veggies from local farms,
          <br className="hidden sm:block" /> delivered to your door.
        </p>

        {/* Search Box */}
        <div className="flex justify-center items-center max-w-md mx-auto relative mb-6">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-full px-4 py-3 pr-12 border bg-white border-gray-300 rounded focus:outline-none text-sm sm:text-base"
          />
        </div>

        {/* 👇 Shop Now Button (requires login) */}
      </div>
    </div>
  );
};

export default Index;
