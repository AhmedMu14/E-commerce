import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from "react-toastify";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


 

  const handleSignin = (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.email === email && user?.password === password) {
    toast.success("Login Successful");
    navigate("/");
    setTimeout(() => window.location.reload(), 1000);
  } else {
    toast.error("Invalid Credentials");
  }
};


  return (
    <div className="min-h-screen flex">
      {/* Left side - image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://cherubbaby.com.au/cdn/shop/articles/20210811081230-Vegetable_20stock_1986x.png?v=1628669564"
          alt="Sign In"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <form onSubmit={handleSignin} className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Sign In
            </button>

            {/* 🔗 Link to Sign Up */}
            <p className="text-sm text-center mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
