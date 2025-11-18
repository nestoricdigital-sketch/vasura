import React from "react";
import bgImage from "./images/p4_room.jpg";
import PanoramaViewer from "./PanoramaViewer";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] md:h-[100vh] ">
      {/* ✅ Background 360° Viewer */}
      <div className="absolute inset-0 z-0">
        <PanoramaViewer src={bgImage} />
      </div>

      {/* ✅ Overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10 pointer-events-none"></div>

      {/* ✅ Top Navbar */}
      {/* ✅ Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-3 text-white">
          {/* 🔹 Left Section (Logo) */}
          <div className="text-2xl font-bold tracking-wide">My360Brand</div>

          {/* 🔹 Center Section (Links) */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* 🔹 Right Section (Socials) */}
          <div className="hidden md:flex space-x-5 text-xl">
            <p>socila media </p>
            {/* <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" /> */}
          </div>

          {/* 🔹 Mobile Menu (Hamburger) */}
          <div className="md:hidden text-2xl cursor-pointer">☰</div>
        </div>
      </nav>

      {/* ✅ Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Experience the World in 360°
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Drag, explore, and enjoy the view
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
