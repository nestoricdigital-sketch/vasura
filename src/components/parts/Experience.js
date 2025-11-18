import React from "react";
import google from "../images/partsImg/vr.png";
export default function Experience() {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-start justify-between 
  px-4 md:px-[64px]  py-12 gap-8 
  md:h-[615px] h-auto"
    >
      {/* Left Box (60%) */}
      <div className="md:w-3/5 w-full space-y-4 flex flex-col justify-center">
        <div>
          <p className="text-black text-sm  md:text-base mb-2">
            Google Immersive View
          </p>
          <h2 className="text-2xl  md:text-[40px]  font-bold text-black mb-4">
            Experience Google Immersive{" "}
            <span className="text-[#40E0D0]">V</span>iew
          </h2>
        </div>
        <p
          className="text-gray-600 text-xl leading-relaxed  sm:leading-[1.5rem] md:leading-[3.75rem]"
          // style={{ lineHeight: "3.75rem" }}
        >
          Step beyond traditional visuals with Google Immersive View, an
          advanced experience that brings your business to life through 3D-like
          depth, dynamic movement, and real-world context. We help businesses
          unlock the power of Google’s newest visual technology, combining
          aerial imagery, street-level photography, and AI to create a truly
          lifelike representation of your space.
        </p>
      </div>

      {/* Right Box (40%) */}
      <div className="md:w-2/5 w-full flex justify-end items-center">
        <img
          src={google}
          alt="Google Immersive View"
          className="w-full md:h-[400px] lg:h-[500px] rounded-xl  shadow-lg"
        />
      </div>
    </section>
  );
}
