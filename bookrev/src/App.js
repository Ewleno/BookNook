import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";

import Login from "./Login";
import Home from "./HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
