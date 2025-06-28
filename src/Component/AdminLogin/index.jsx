// src/Component/AdminLogin/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Dummy admin credentials
    if (email === "abdullah@gmail.com" && password === "123") {
      localStorage.setItem("user", JSON.stringify({ email }));
      localStorage.setItem("role", "admin");

      toast.success("Admin logged in successfully!");
      navigate("/admin-dashboard");
    } else {
      toast.error("Invalid admin credentials");
    }
  };

  return (
    <form
      onSubmit={handleAdminLogin}
      className="min-h-screen flex justify-center items-center bg-gray-100"
    >
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </form>
  );
};

export default AdminLogin;
