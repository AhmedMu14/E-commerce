import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Login Successful");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid Credentials");
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
