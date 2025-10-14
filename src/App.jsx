import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/MainComponents/navbar/index";
import SignIn from "./Component/Signin/index";
import SignUp from "./Component/Signup/index";
import Home from "./Component/MainComponents/Home/index";
import ProductCard from "./Component/MainComponents/ProductCard/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvatarSlider from './Component/MainComponents/Slider/index'
import Banner from "./Component/MainComponents/Banner";
import React from "react";
import  Footer  from "./Component/Footer/index";

// ✅ Layout component with Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}  
  </>            
);
function App() {
  return (
    <BrowserRouter>  
      <ToastContainer position="top-center" /> {/* ✅ global and only onc   e */}
      <Routes>
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route
          path="/"
          element={
            <Layout>  
              <Home /> 
              <AvatarSlider/>
              <ProductCard/>     
              <Banner /> 
              <br />
              <Footer/>

              {/* <Banner/> */}
            </Layout>
          }
        />    
      </Routes>
    </BrowserRouter>
  );  
}

export default App;