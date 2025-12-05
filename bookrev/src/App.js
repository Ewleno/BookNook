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
        <Routes>
  <Route path="/" element={<Login />} />        {/* FIRST PAGE */}
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />      {/* AFTER LOGIN */}
</Routes>


        {/* About page */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;