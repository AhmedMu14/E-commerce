import React, { useState } from "react";
// import { ShoppingBagIcon, UserIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import CurrencyConverter from "../CurrencyConverter/index";
import Cart from "../Cart";
import Signin from '../Sign in/index'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false)

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3 flex justify-between items-center shadow-sm">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-bold text-gray-800">Green Basket</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Currency Converter */}
        <CurrencyConverter
          className="ml-2"
          triggerComponent={
            <div className="flex items-center space-x-1 cursor-pointer">
              {/* <ChevronDownIcon className="w-4 h-4 text-gray-600" /> */}
            </div>
          }
        />

        {/* Cart Button */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          {/* <ShoppingBagIcon className="w-6 h-6 text-gray-500" /> */}
          <span className="hidden md:block text-gray-600">Cart</span>
          <div className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            0
          </div>
        </div>

        {/* Sign In */}
        <div className="flex items-center space-x-1 cursor-pointer"
         onClick={() => setIsSignOpen(true)}
         >
          {/* <UserIcon className="w-6 h-6 text-gray-500" /> */}
          <span className="hidden md:block text-gray-600">Sign In</span>
        </div>

        {/* Slide-in Cart */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <Signin isOpen={isSignOpen} onClose={() => setIsSignOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;