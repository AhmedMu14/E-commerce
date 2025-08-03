import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");   
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 // Signup ke andar
const handleSignup = (e) => {
  e.preventDefault();

  if (!firstName || !lastName || !email || !password) {
    toast.error("Please fill all fields");
    return; 
  }

  const user = { firstName, lastName, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  // ✅ store a message flag
  localStorage.setItem("signupSuccess", "true");

  navigate("/signin");
};


  return (
    <div className="min-h-screen flex">
      {/* Left side - image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://www.lovethegarden.com/sites/default/files/styles/header_image_fallback/public/content/articles/When%20to%20plant%20vegetables%20article%20-%20Hero.jpg?itok=yhhnrl9v"
          alt="Sign Up"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - form */}
      <form
        onSubmit={handleSignup}
        className="w-full md:w-1/2 flex items-center justify-center bg-white"
      >
        <div className="max-w-md w-full p-8 shadow-lg rounded">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Sign Up
            </button>

            {/* Sign In Link */}
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
