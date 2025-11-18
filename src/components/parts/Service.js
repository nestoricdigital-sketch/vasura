import React from "react";
import service1 from "../images/partsImg/service1.png";
import service2 from "../images/partsImg/service2.png";
import service3 from "../images/partsImg/service3.png";

const Service = () => {
  return (
    <section className="py-16 px-4 md:px-14 w-full" id="services">
      <div className=" ">
        {/* Section Title */}
        <p className=" text-black mb-2">Services</p>
        <h2 className="text-2xl  md:text-[40px] font-semibold text-start text-black mb-4">
          Wha<span className="text-[#40E0D0]">t</span> We Offer
        </h2>
        <p className="text-start text-xl text-gray-600  mx-auto mb-12">
          No matter your business type, our virtual tours help you stand out
          online and build customer trust.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="  overflow-hidden transition">
            <div className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={service1}
                alt="Google Virtual Tours"
                className="w-full rounded-xl h-56 object-cover"
              />
            </div>
            <div className="p-1 md:p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                NFC Technology{" "}
              </h3>
              <p className="text-gray-600 text-xl">
                Smart tap-enabled digital business cards and contactless sharing
                solutions
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="  overflow-hidden transition">
            <div className="shadow-md  hover:shadow-xl transition-shadow duration-300">
              <img
                src={service2}
                alt="360° Photography"
                className="w-full rounded-xl h-56 object-cover"
              />
            </div>
            <div className="p-1 md:p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Google Virtual Tours
              </h3>
              <p className="text-gray-600 text-xl">
                360° interactive virtual experiences integrated with Google
                Maps.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="  overflow-hidden transition">
            <div className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={service3}
                alt="Production Support"
                className="w-full rounded-xl h-56 object-cover"
              />
            </div>
            <div className="p-1 md:p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Digi 3D Tour
              </h3>
              <p className="text-gray-600 text-xl">
                Advanced digital 3d walkthroughs offering a lifelike viewing
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
