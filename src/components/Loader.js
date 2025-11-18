// src/components/LoadingScreen.jsx
import React from "react";
// import logo from "./images/NdMainLogo.png"; // replace with your actual logo
import logo from "./images/menu/MIcon.png";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-800">
      <img src={logo} alt="Logo" className="w-20  mb-6 animate-bounce" />
      <p className="text-lg sm:text-xl font-semibold tracking-wide animate-pulse">
        Loading your experience...
      </p>
    </div>
  );
};

export default Loader;
