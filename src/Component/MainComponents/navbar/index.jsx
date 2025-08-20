import React, { useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { useSelector } from 'react-redux';

import CurrencyConverter from "../../MainComponents/CurrencyConverter";
import Cart from "../../MainComponents/Cart";
   
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);

  // const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;



  const [toastShown, setToastShown] = useState(false);
  const navigate = useNavigate()


const handleCartClick = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    if (!toastShown) {
      setToastShown(true); // 🛑 prevent re-showing
      toast.error("Please sign in first.");

      setTimeout(() => {
        setToastShown(false); // 🔁 allow toast next time
        navigate("/signin");
      }, 3000);
    }
    return;
  }

  setIsCartOpen(true);
};

  // ✅ Keep user state synced with localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
       
  const handleLogout = () => {
    localStorage.removeItem("user");
    // localStorage.removeItem("signupSuccess"); 
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <h1 className="text-lg font-bold text-gray-800">🌿 Green Basket</h1>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Currency Converter */}
        <CurrencyConverter
          className="ml-2"
          triggerComponent={
            <div className="flex items-center space-x-1 cursor-pointer">
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </div>
          }
        />

        {/* Cart */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer"
          onClick={handleCartClick}
        >
          <span className="hidden md:block text-gray-600">Cart</span>
          <div className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {itemCount}
          </div>
        </div>

        {/* Auth Buttons */}
        {!user ? (
          <Link to="/signin" className="text-gray-600 hover:text-gray-400 flex items-center gap-x-2">
            <FontAwesomeIcon icon={faUser} className="text-xl"/>
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/profile" className="text-gray-600 hover:text-green-600">
                
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

        {/* Cart Panel */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;