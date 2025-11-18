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
    <footer className="mt-2 md:mt-20    bg-[radial-gradient(circle_at_120%_250%,_rgba(64,224,208,0.56)_0%,_transparent_55%)] text-gray-700 py-10 px-4  md:px-[64px]">
      <div className="w-full  grid md:grid-cols-4 gap-10   pb-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center  mb-3">
            <img
              src={Vlogo} // replace with your actual logo path
              alt="Vasura Virtual Experience"
              className="w-full h-15"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Transforming spaces into immersive digital experiences through 360°
            virtual tours.
          </p>
        </div>

        {/* Quick Links */}
        <div className=" md:ml-20">
          <h3 className="font-semibold text-gray-800 mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => moveToSection("home")}>
              <p className="hover:text-teal-600 transition">Home</p>
            </li>
            <li onClick={() => moveToSection("about")}>
              <p className="hover:text-teal-600 transition">About us</p>
            </li>
            <li onClick={() => moveToSection("services")}>
              <p className="hover:text-teal-600 transition">Services</p>
            </li>
            <li onClick={() => moveToSection("works")}>
              <p className="hover:text-teal-600 transition">Works</p>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => moveToSection("services")}>
              <Link href="#" className="hover:text-teal-600 transition">
                Google Virtual Tours
              </Link>
            </li>
            <li onClick={() => moveToSection("services")}>
              <Link href="#" className="hover:text-teal-600 transition">
                NFC Technology
              </Link>
            </li>
            <li onClick={() => moveToSection("services")}>
              <Link href="#" className="hover:text-teal-600 transition">
                Digi 3D Tour
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <img src={cal} className="h-5 w-5" alt="phone" />

              <span>+91-99864-66943</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src={msg} className="h-5 w-5" alt="email" />
              <span>vasuravirtual1986@gmail.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <img src={loc} className="h-5 w-5" alt="location" />
              <span>
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-6">
          <Link to="/terms-conditions">
            <p className="text-sm font-semibold sm:text-base cursor-pointer hover:text-teal-500 transition">
              Terms & Conditions
            </p>
          </Link>
          <Link to="/privacy-policy">
            <p className="text-sm font-semibold sm:text-base cursor-pointer hover:text-teal-500 transition">
              Privacy Policy
            </p>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end sm:justify-end gap-2 sm:gap-3 mt-2 sm:mt-0">
          <img src={fb} className="h-8 w-8 sm:h-10 sm:w-10" alt="facebook" />
          <img
            src={insta}
            className="h-8 w-8 sm:h-10 sm:w-10"
            alt="instagram"
          />
          <img src={yt} className="h-8 w-8 sm:h-10 sm:w-10" alt="youtube" />
          <img src={twt} className="h-8 w-8 sm:h-10 sm:w-10" alt="twitter" />
        </div>
      </div>

      <div
        className="w-full mt-9 border border-transparent"
        style={{
          borderWidth: "0.5px",
          borderStyle: "",
          borderImageSource:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, #989898 50%, rgba(255,255,255,0) 100%)",
          borderImageSlice: 1,
        }}
      />
      {/* <div
        className="w-full h-[0.5px] mt-9"
        style={{
          background: `
          linear-gradient(to right,
            rgba(31,41,55,0) 0%,
            rgba(31,41,55,0.25) 25%,
            rgba(31,41,55,1) 50%,
            rgba(31,41,55,0.25) 75%,
            rgba(31,41,55,0) 100%
          )
        `,
        }}
      /> */}
      {/* <div className="w-full  border-b-4 border-gray-300 border-b-gray-700 p-4"></div> */}
      {/* Bottom Section */}
      <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-6">
        <p>© 2025 Vasura Virtual Experience. All rights reserved.</p>
        {/* <p className="mt-2 md:mt-0 text-gray-400">
          Powered by{" "}
          <span className="text-teal-600 font-medium">Nestoric Digital</span>
        </p> */}
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
