import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrencyConverter from "../CurrencyConverter/index";
import Cart from "../Cart";
// import { UserIcon } from "@heroicons/react/24/solid"; // ✅ make sure you installed heroicons
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <h1 className="text-lg font-bold text-gray-800">🌿 Green Basket</h1>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Cart Button */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <span className="hidden md:block text-gray-600">Cart</span>
          <div className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            0
          </div>
        </div>

        {/* 👤 User Auth Buttons */}
        {!user ? (
          <Link to="/signin" className="text-gray-600 hover:text-blue-500">
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/profile" className="text-gray-600 hover:text-green-600">
              {/* <UserIcon className="w-6 h-6 inline-block" /> */}
              <FontAwesomeIcon icon={faUser} className="text-gray-600 text-xl" />

            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

        {/* Cart Component */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;
