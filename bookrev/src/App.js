import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Home from "./HomePage";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing page */}
         <Route path="/" element={<Login />} />  
        <Route path="/home" element={<Home />} /> 

        {/* Auth pages */}
       
        <Route path="/register" element={<Register />} />

        {/* About page */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;