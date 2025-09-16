import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import CurrencyConverter from "../../MainComponents/CurrencyConverter";
import Cart from "../../MainComponents/Cart";
import axios from "axios";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;

  // ✅ Check login on mount
  useEffect(() => {
    axios.get("http://localhost:5000/me", { withCredentials: true })
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const handleCartClick = () => {
    if (!user) {
      toast.error("Please sign in first.");
      navigate("/signin");
      return;
    }
    setIsCartOpen(true);
  };

  const handleLogout = () => {
    axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3 flex justify-between items-center shadow-sm">
      <h1 className="text-lg font-bold text-gray-800">🌿 Green Basket</h1>

      <div className="flex items-center space-x-4">
        <CurrencyConverter
          className="ml-2"
          triggerComponent={<div className="flex items-center space-x-1 cursor-pointer" />}
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
          <Link to="/signin" className="text-gray-600 hover:text-gray-400">Sign In</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}

        {/* Cart Panel */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;
