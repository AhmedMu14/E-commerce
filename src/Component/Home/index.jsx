import React from 'react'
import image from '../../assets/home.jpg'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const index = () => {
  return (
    <div className='relative w-full h-screen bg-gray-100 flex items-center justify-center'>
      <img
        src={image}
        alt="Fresh Vegetables"
        className='absolute inset-0 w-full h-screen object-cover '
      />

      <div className="relative z-10 text-center px-4 lg:px-8">
        <h1 className="text-2xl lg:text-5xl mb-3 font-bold text-white ">
          Eat Fresh, Feel Great – Because <br></br>You Deserve the Best.
        </h1>

        <p className="text-xl text-gray-100 mb-8 max-w-xl mx-auto">
          Green Basket brings you fresh veggies from local farms, <br></br> delivered to your door.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="What are you looking..."
            className="px-70 pl-5 py-4 border bg-white border-gray-300 rounded focus:outline-none" />
          <MagnifyingGlassIcon className="w-7 h-19 absolute right-40 top 1/2 transform -translate-y-1/9 text-gray-300 cursor-pointer"/>

        </div>
      </div>
    </div>
  );
};

export default index