import React from "react";
import aboutimg from "../images/partsImg/aboutbg.png";
const About = () => {
  return (
    <>
      <section className=" px-4 md:px-8 lg:mx-8 py-16 ">
        {/* Title */}
        <p className=" text-black text-[10px] md:text-[14px] mb-2">
          Who We are
        </p>
        <h2 className="text-[22px] md:text-[40px]   font-bold mb-10 text-black  ">
          Bringing Real Spaces to Life <span className="text-[#40E0D0]">V</span>
          irtually
        </h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-8">
          {/* Left Side - Image (60%) */}
          <div className="w-full md:w-3/5">
            <img
              src={aboutimg}
              alt="About Vasura Virtual Experience"
              className="w-full md:h-[500px] lg:h-[600px]  rounded-2xl "
              // style={{ background: "none !importan" }}
            />
          </div>

          {/* Right Side - Text (40%) */}
          <div className="w-full md:w-2/5 text-gray-700">
            <p
              className="text-[14px] md:text-xl leading-relaxed   md:leading-[3rem] mb-6"
              // style={{ lineHeight: "3.75rem" }}
            >
              At Vasura Virtual Experience, we turn physical spaces into
              unforgettable digital experiences. We specialize in Google Virtual
              Tours and immersive 360° storytelling that connect your brand with
              your audience visually and emotionally. Whether you’re a
              Restaurants, cafes, and bars Gyms and fitness studios, Salons,
              spas, and beauty parlors Boutiques and showrooms Hotels, lodges,
              and homestays our goal is to help you be seen, be explored, and be
              remembered.
            </p>

            {/* Bullet Points */}
            <ul
              className="font-bold list-disc list-inside space-y-2 leading-relaxed text-[14px] md:text-xl  md:leading-[3.75rem]"
              // style={{ lineHeight: "3.75rem" }}
            >
              <li>Google Virtual Tours</li>
              <li>360° Photography & Drone Expertise</li>
              <li>End-to-End Production Support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
