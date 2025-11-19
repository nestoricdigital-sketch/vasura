// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";
import Vlogo from "./images/menu/vasuraLogo.png";
import fb from "./images/footer/fb.png";
import insta from "./images/footer/insta.png";
import yt from "./images/footer/yt.png";
import twt from "./images/footer/twt.png";

import loc from "./images/footer/loc.png";
import msg from "./images/footer/msg.png";
import cal from "./images/footer/call.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import fb from "./images/footer/fb.png";

export default function Footer() {
  const navigate = useNavigate();
  //ignore text
  const location = useLocation();

  const moveToSection = (id) => {
    if (location.pathname !== "/") {
      // Go to home page *with state*
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on home → scroll directly
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="mt-2 md:mt-20 bg-[radial-gradient(circle_at_120%_250%,_rgba(64,224,208,0.56)_0%,_transparent_55%)] text-gray-700 py-10 px-4 md:px-[64px]">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-10 pb-8">
        {/* Logo and Description */}
        <div className="w-full md:max-w-[29%]">
          <div className="flex items-center mb-3">
            <img
              src={Vlogo}
              alt="Vasura Virtual Experience"
              className="w-full h-15"
            />
          </div>
          <p className="text-sm md:text-xl  leading-relaxed">
            Transforming spaces into immersive digital experiences through 360°
            virtual tours.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:max-w-[20%] ">
          <h3 className="font-semibold text-gray-800 mb-4  md:text-[18px]">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm md:text-[16px]">
            <li onClick={() => moveToSection("home")}>
              <p className="hover:text-teal-600 transition md:mb-4">Home</p>
            </li>
            <li onClick={() => moveToSection("about")}>
              <p className="hover:text-teal-600 transition md:mb-4">About us</p>
            </li>
            <li onClick={() => moveToSection("services")}>
              <p className="hover:text-teal-600 transition md:mb-4">Services</p>
            </li>
            <li onClick={() => moveToSection("works")}>
              <p className="hover:text-teal-600 transition md:mb-4">Works</p>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full md:max-w-[20%]">
          <h3 className="font-semibold text-gray-800 mb-3 md:text-[18px]">
            Services
          </h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <p
                className="hover:text-teal-600 transition md:mb-4 md:text-[16px]"
                onClick={() => moveToSection("services")}
              >
                Google Virtual Tours
              </p>
            </li>
            <li>
              <p
                className="hover:text-teal-600 transition md:mb-4 md:text-[16px]"
                onClick={() => moveToSection("services")}
              >
                NFC Technology
              </p>
            </li>
            <li>
              <p
                className="hover:text-teal-600 transition md:mb-4 md:text-[16px]"
                onClick={() => moveToSection("services")}
              >
                Digi 3D Tour
              </p>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-auto">
          <h3 className="font-semibold text-gray-800  md:text-[18px] md:mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 md:mb-4">
              <img src={cal} className="h-5 w-5" alt="phone" />
              <span className="md:text-[16px]">+91-99864-66943</span>
            </li>
            <li className="flex items-center space-x-2 md:mb-4">
              <img src={msg} className="h-5 w-5" alt="email" />
              <span className="md:text-[16px]">
                vasuravirtual1986@gmail.com
              </span>
            </li>
            <li className="flex items-start space-x-2 md:mb-4">
              <img src={loc} className="h-5 w-5" alt="location" />
              <span className="md:text-[16px]">
                1220 4th ward D cross road,
                <br />
                doddaballapur, bangalore,
                <br />
                North-561203
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between  gap-4 sm:gap-6 ">
        {" "}
        {/* Links Section */}{" "}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-6">
          {" "}
          <Link to="/terms-conditions">
            {" "}
            <p className="text-sm font-semibold sm:text-base cursor-pointer hover:text-teal-500 transition">
              {" "}
              Terms & Conditions{" "}
            </p>{" "}
          </Link>{" "}
          <Link to="/privacy-policy">
            {" "}
            <p className="text-sm font-semibold sm:text-base cursor-pointer hover:text-teal-500 transition">
              {" "}
              Privacy Policy{" "}
            </p>{" "}
          </Link>{" "}
        </div>{" "}
        {/* Social Icons */}{" "}
        <div className="flex md:justify-end sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-0 ">
          {" "}
          <Link
            to="https://www.facebook.com/profile.php?id=61583254404746"
            target="_blank"
          >
            {" "}
            <img
              src={fb}
              className="h-8 w-8 sm:h-10 sm:w-10"
              alt="facebook"
            />{" "}
          </Link>{" "}
          <Link to="https://www.instagram.com/?hl=en" target="_blank">
            {" "}
            <img
              src={insta}
              className="h-8 w-8 sm:h-10 sm:w-10"
              alt="instagram"
            />{" "}
          </Link>{" "}
          <img src={yt} className="h-8 w-8 sm:h-10 sm:w-10" alt="youtube" />{" "}
          <img src={twt} className="h-8 w-8 sm:h-10 sm:w-10" alt="twitter" />{" "}
        </div>{" "}
      </div>{" "}
      <div
        className="w-full mt-9 border border-transparent"
        style={{
          borderWidth: "0.5px",
          borderStyle: "",
          borderImageSource:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, #989898 50%, rgba(255,255,255,0) 100%)",
          borderImageSlice: 1,
        }}
      />{" "}
      {/* <div className="w-full h-[0.5px] mt-9" style={{ background: linear-gradient(to right, rgba(31,41,55,0) 0%, rgba(31,41,55,0.25) 25%, rgba(31,41,55,1) 50%, rgba(31,41,55,0.25) 75%, rgba(31,41,55,0) 100% ) , }} /> */}
      {/* Divider */}
      {/* <div
        className="w-full mt-9 border border-transparent"
        style={{
          borderWidth: "0.5px",
          borderImageSource:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, #989898 50%, rgba(255,255,255,0) 100%)",
          borderImageSlice: 1,
        }}
      /> */}
      {/* Bottom Section */}
      <div className="max-w-7xl flex flex-col md:flex-row  sm:justify-start md:justify-between md:items-center text-[8px] md:text-xl text-gray-600 mt-6">
        <p>© 2025 Vasura Virtual Experience. All rights reserved.</p>
      </div>
    </footer>
  );
}
//  <div className="flex space-x-4 mt-4 text-gray-600">
//     <a href="#">
//       <img src={fb} className="h-10 w-10" alt="facebook" />

//     </a>
//     <a href="#">
//     </a>
//     <a href="#">
//     </a>
//     <a href="#">
//     </a>
//   </div>
