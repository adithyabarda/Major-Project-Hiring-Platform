//import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HeroPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero-image.jpg')" }} 
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Welcome to CareerCatalyst</h1>
          <p className="text-xl mt-4">Accelerating growth, one career at a time.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroPage;
