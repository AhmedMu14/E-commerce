import React from 'react'
import image from '../../assets/home.jpg'

const index = () => {
  return (
    <div className='relative w-full h-screen bg-gray-100 flex items-center justify-center'>
      <img
        src={image}
        alt="Fresh Vegetables"
        className='absolute inset-0 w-full h-screen object-cover '
      />

      <div className="relative z-10 text-center px-4 lg:px-8">
        <h1 className="text-2xl lg:text-5xl font-bold text-white ">
          Eat Fresh, Feel Great – Because <br></br>You Deserve the Best.
        </h1>

        <p className="text-xl text-gray-100 mb-5 max-w-xl mx-auto">
          Green Basket brings you fresh veggies from local farms, delivered to your door.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="What are you looking..."
            className="px-50 pl-5 py-4 border bg-white border-gray-300 rounded-l-lg focus:outline-none" />
          <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700">
            Search
          </button>


        </div>
      </div>
    </div>
  );
};

export default index