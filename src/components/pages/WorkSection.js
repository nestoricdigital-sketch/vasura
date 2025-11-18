import { Link } from "react-router-dom";
import React, { useState } from "react";
import College from "./College";
// import "../App.css";
// import workBg from "../assets/col/colOut.jpg";
// import resout from "../assets/res/p_outside.jpg";
// import room from "../images/360pan.jpg";
// import room4 from "../images/p4_room.jpg";
// import classBg from "../images/works/classComp.jpg";
import apart from "../images/works/apartment.jpg";
import colBg from "../images/works/col_floor.jpg";
import restBg from "../images/works/restarent.jpg";
import NavBar from "../NavBar";
import Footer from "../Footer";
import play from "../images/works/play_icon.png";

const WorkSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <section
        id="works"
        className="w-full px-4   md:px-[64px] relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-center h-[80vh] md:h-[90vh]"
        style={{ backgroundImage: `url(${colBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="md:mt-96 relative z-10 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Experience Our 360 Virtual
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#40E0D0]  text-white  px-6 py-3  rounded-lg text-lg  transition-transform transform hover:scale-105"
          >
            View Demo
          </button>
        </div>

        {/* ✅ Full-Screen Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            {/* <div
              className="relative w-[95%] md:w-[90%] h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            > */}
            <College onClose={() => setShowModal(false)} />
            {/* </div> */}
          </div>
        )}
      </section>

      {/* ✅ About Section */}
      <section className="px-4 md:px-16 py-16 bg-white text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
          Virtual Walkthroughs for Higher Education
        </h1>
        <p className="text-slate-700 md:text-[22px] leading-relaxed text-base mb-4">
          Colleges and universities use our virtual tours to showcase campuses,
          libraries, auditoriums, hostels, and labs. These tours support
          admissions, international student engagement, and branding giving
          learners a transparent, realistic view of campus life.
        </p>
      </section>

      {/* ✅ More Projects */}
      <section className="px-4 md:px-16 py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-6">
          {/* CARD 1 */}
          <Link
            to="/work2"
            className="relative flex-1 group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={apart}
              alt="Project 1"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Center Play Button */}
            <div
              className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
            >
              <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center shadow-lg">
                <img src={play} className="w-5 h-5" alt="play" />
              </div>
            </div>

            {/* Bottom Label */}
            <div
              className="mx-2
          absolute bottom-0 left-0 right-0
         text-white text-start text-lg
          py-3 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
            >
              Vijaya Vimala's Residence
            </div>
          </Link>

          {/* CARD 2 */}
          <Link
            to="/work3"
            className="relative flex-1 group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={restBg}
              alt="Project 2"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Center Play Button */}
            <div
              className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
            >
              <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center shadow-lg">
                <img src={play} className="w-5 h-5" alt="play" />
              </div>
            </div>

            {/* Bottom Label */}
            <div
              className="
          absolute bottom-0 left-0 right-0
          text-white text-start text-lg
          py-3  mx-2 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
            >
              AQ Restaurant
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkSection;
