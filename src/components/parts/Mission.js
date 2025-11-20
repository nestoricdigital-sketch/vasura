import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import mission from "../images/others/mission.png";
import vission from "../images/others/vission.png";
import About from "./About";

const Mission = () => {
  return (
    <>
      <div className=" flex justify-center" id="about">
        <NavBar />
      </div>
      <div className=" mt-5 md:mt-20">
        <About />
      </div>
      <section className=" relative  md:mt-20 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Background text */}

        <h2
          className="text-[22px] md:text-[40px] font-bold mb-3 md:mb-9"
          //   className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
          //      text-5xl sm:text-6xl md:text-7xl lg:text-9xl
          //      font-extrabold text-transparent bg-clip-text
          //      bg-gradient-to-b from-black via-gray-800 to-slate-100
          //      z-0 select-none text-center pointer-events-none
          //      opacity-20 sm:opacity-10 text-nowrap"
        >
          <span className="text-[#40E0D0]">V</span>ision
        </h2>
      </section>
      <section className="px-2 md:px-[64px]  relative mb-9 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Image */}
        <div className=" md:mx-4  md:w-1/2 flex justify-center items-center z-10">
          <div className="w-full ">
            <img
              src={vission}
              alt="vision"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 md:p-10 p-2 z-10 flex flex-col justify-center text-gray-800">
          <p className="mt-2  text-[14px] md:text-xl  sm:leading-[1.5rem] md:leading-[3rem]">
            To become a leading name in virtual tour innovation, empowering
            businesses to create stronger online connections through immersive
            digital experiences.
          </p>
        </div>
      </section>
      {/* ----------------- */}
      <section className="relative md:mt-20 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Background text */}
        {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
        <h2
          className="text-[22px] md:text-[40px] font-bold mb-3 md:mb-9"
          //   className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
          //      text-5xl sm:text-6xl md:text-7xl lg:text-9xl
          //      font-extrabold text-transparent bg-clip-text
          //      bg-gradient-to-b from-black via-gray-800 to-slate-100
          //      z-0 select-none text-center pointer-events-none
          //      opacity-20 sm:opacity-10 text-nowrap"
        >
          Miss<span className="text-[#40E0D0]">i</span>on
        </h2>
      </section>
      <section className="px-2 md:px-[64px]  relative flex flex-col-reverse md:flex-row items-center justify-center w-full">
        {/* Background text */}

        {/* Right: Content */}
        <div className="w-full md:w-1/2 md:p-10 p-2 z-10 flex flex-col justify-center text-gray-800">
          <p className=" mt-2 text-[14px] md:text-xl  sm:leading-[1.5rem] md:leading-[3rem]">
            We deliver high-quality Google Virtual Tours that showcase
            real-world spaces with precision and creativity, helping our clients
            build trust, attract customers, and enhance their digital identity.
          </p>
        </div>

        {/* Left: Image */}
        <div className=" md:mx-4  md:w-1/2 flex justify-center items-center z-10">
          <div className="w-full ">
            <img
              src={mission}
              alt="mission"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mission;
