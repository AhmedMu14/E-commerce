import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../MainComponents/Cart/index";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";


const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

 const handleCartClick = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    toast.error("Please sign in first.");

    // ⏳ Wait 3 seconds before navigating to /signin
    setTimeout(() => {
      navigate("/signin");
    }, 3000);

    return;
  }
  setIsCartOpen(true);
};
  // ✅ Keep user state synced with localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    // Optional: watch for storage change in case of multi-tab
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
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
          onClick={handleCartClick}
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
              <FontAwesomeIcon icon={faUser} className="text-xl" />
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
