import React, { useState, useEffect } from "react";
import logo from "./images/menu/vasuraLogo.png";
import fb from "./images/menu/menuFb.png";
import twt from "./images/menu/menuX.png";
import Yt from "./images/menu/menuYt.png";
import Insta from "./images/menu/menuInsta.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  // navbar----
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  //ignore text
  const location = useLocation();

  const moveToWorks = () => {
    const section = document.getElementById("works");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const moveToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const moveToSection = (id) => {
    if (id === "about") {
      // Go to ABOUT page
      navigate("/about");
      return;
    }
    if (id === "works") {
      // Go to ABOUT page
      navigate("/work1");
      return;
    }
    if (location.pathname !== "/") {
      // Go to home page *with state*
      navigate("/", { state: { scrollTo: id } });
    }
    //  else if (location.pathname !== "/about") {
    //   navigate("/about", { state: { scrollTo: id } });
    // }
    else {
      // Already on home → scroll immediately
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide when scrolling down
      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // home hover

  // watsapp redirect
  // const handleWhatsapp = () => {
  //   const phone = "918074322604";
  //   const msg = "Hi, I would like to know more!";
  //   window.open(
  //     `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
  //     "_blank"
  //   );
  // };
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);

      setTimeout(() => {
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [location]);
  return (
    <>
      {/* ✅ Hero Section */}
      {location.pathname === "/" && (
        <div
          className=" w-full absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 "
          style={{
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-4">
            We merge technology, creativity, and storytelling{" "}
            <br className="hidden sm:block" />
            to give your audience a truly immersive way to explore your space
            from anywhere.
          </h1>
          <div className="flex flex-row items-center justify-center gap-8">
            <button
              className="px-6 py-2 bg-teal-400 text-white  rounded-md hover:bg-teal-500 transition"
              onClick={moveToWorks}
            >
              View Demo
            </button>
            <button
              className="px-6 py-2 bg-transparent border border-white text-white rounded-md  transition hover:bg-white hover:text-black"
              onClick={moveToContact}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {/* ✅ Navigation Bar */}
      <nav
        className={`
    fixed top-1 md:top-4 left-0 w-full z-30 transition-transform duration-300
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        {/* <div className="max-w-7xl mx-auto flex flex-row  justify-between items-center text-[9px] md:text-base text-[#D7FFFB] gap-1 sm:gap-0 px-1">
          <p>Call/Whatsapp: +91-9727164577</p>
          <p>vasuravirtual@gmail.com</p>
        </div> */}
        {/* <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start text-base text-[#D7FFFB] gap-0 sm:gap-0 px-4 md:px-0">
          <p
            className="m-0 leading-tight cursor-pointer"
            onClick={handleWhatsapp}
          >
            Call/Whatsapp: +91-9727164577
          </p>
          <p className="m-0 leading-tight">vasuravirtual@gmail.com</p>
        </div> */}

        <div className="bg-white max-w-[1400px] w-full mx-auto px-4 sm:px-6    flex items-center justify-between py-3  md:px-10 lg:px-[24px] text-slate-700 rounded-lg relative">
          {/* 🔹 Logo */}

          <div>
            <img
              src={logo}
              alt="nestoric digital logo"
              className="w-28 md:h-full sm:w-32 md:w-48 "
            />
          </div>

          {/* 🔹 Desktop Links */}
          <ul className="hidden md:flex  text-xl font-medium gap-5">
            {["Home", "Services", "Works", "About", "Contact"].map((item) => {
              const isHome = item === "Home";

              return (
                <li
                  key={item}
                  onClick={() => moveToSection(item.toLowerCase())}
                  className={`
          inline-block cursor-pointer transition-colors duration-150
          ${
            isHome
              ? "font-bold text-[16px] text-black"
              : "font-medium text-[14px] text-[#2C2C2CCC] hover:font-bold hover:text-black"
          }
          min-w-[86px]   /* adjust to fit the widest label (tweak number) */
          text-center
        `}
                >
                  {item}
                </li>
              );
            })}
          </ul>

          {/* 🔹 Desktop Socials */}
          <div className="hidden md:flex space-x-5 text-xl">
            {[
              {
                src: fb,
                link: "https://www.facebook.com/profile.php?id=61583254404746",
              },
              { src: twt, link: "https://twitter.com/" },
              { src: Insta, link: "https://www.instagram.com/?hl=en" },
              { src: Yt, link: "https://www.youtube.com/" },
            ].map(({ src, link }) => (
              <Link
                key={link}
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={src} alt="social" className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            ))}
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="relative md:hidden w-8 h-8 focus:outline-none text-slate-800"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {/* Hamburger */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`absolute inset-0 m-auto h-7 w-7 transform transition-all duration-700 ease-in-out
              ${
                menuOpen
                  ? "opacity-0 -rotate-45 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Close (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`absolute inset-0 m-auto h-7 w-7 transform transition-all duration-700 ease-in-out
              ${
                menuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-45 scale-75"
              }`}
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 🔹 Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-md md:hidden mt-2 py-4 z-40">
              <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
                {["Home", "Services", "Works", "About", "Contact"].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-black cursor-pointer transition"
                      onClick={() => {
                        moveToSection(item.toLowerCase());
                        setMenuOpen(false);
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
