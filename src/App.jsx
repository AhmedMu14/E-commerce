import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/index";
import SignIn from "./Component/Signin/index";
import SignUp from "./Component/Signup/index";
import Home from "./Component/Home/index";
// import About from "./Component/About";
// import Profile from "./Component/Profile";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
