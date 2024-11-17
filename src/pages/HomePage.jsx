import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
 
  return (
    <div className="flex-grow overflow-auto pb-8 bg-[#ffffff] " >
      <Navbar/>
      <Hero />
    </div>
  );
};

export default HomePage;
