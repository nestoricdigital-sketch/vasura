import React, { useState } from "react";
import PanoramaViewer from "../PanoramaViewer";
// import colView from "../images/apart.jpg"; // your 360° image
// import room4 from "../images/p4_room.jpg";
// import bgHero from "../images/menu/p_hotel.jpg";
// import colBg from "../images/works/col_floor.jpg";
import resta from "../images/works/restarent.jpg";
import logo from "../images/works/logo_white.png";
import full from "../images/works/fullscreen.png";
import insta from "../images/works/insta.png";
import face from "../images/works/iface.png";
import itwt from "../images/works/itwt.png";
import iyt from "../images/works/iyt.png";
import share from "../images/works/share.png";

const Restarent = ({ onClose }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleShare = (platform) => {
    const url = window.location.href;
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    } else if (platform === "youtube") {
      window.open("https://www.youtube.com", "_blank");
    }
    setShowShareMenu(false);
  };

  const handleFullScreen = () => {
    const el = document.documentElement;

    if (!document.fullscreenElement) {
      el.requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div
      className="relative w-full h-full text-white"
      onClick={(e) => e.stopPropagation()}
    >
      {/* ✅ 360° Viewer */}
      <PanoramaViewer src={resta} />

      {/* ✅ Top Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-3  z-20">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold tracking-wide">
          {/* AQ Restaurant */}
        </h2>

        {/* Right section — Social media + close */}
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="ml-2 px-3 py-1  hover:bg-red-700 rounded-md text-sm font-semibold"
          >
            ×
          </button>
        </div>
      </div>
      <div className="absolute  left-2 bottom-2 m-2  flex flex-row items-center gap-4 z-20">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-orange-400 transition transform hover:scale-110"
        >
          <img src={face} className="w-9" alt="fb" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-orange-400 transition transform hover:scale-110"
        >
          <img src={insta} className="w-9" alt="instagram" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-orange-400 transition transform hover:scale-110"
        >
          <img src={iyt} className="w-9" alt="youtube" />
        </a>
      </div>

      {/* ✅ Bottom-Right Control Panel */}
      <div className="absolute bottom-4 right-0 flex flex-col items-end gap-3 z-20">
        {/* Share button */}
        {/* Share button */}
        <div className="relative">
          {/* <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Share
          </button> */}

          {/* CENTER SHARE POPUP */}
          {showShareMenu && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
              onClick={() => setShowShareMenu(false)}
            >
              <div
                className="bg-slate-300 w-[90%] max-w-sm rounded-xl p-6 shadow-xl relative animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                >
                  ×
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                  Share
                </h2>

                {/* Social Icons */}
                <div className="flex items-center justify-between mb-6 px-4">
                  <button onClick={() => handleShare("facebook")}>
                    <img
                      src={face}
                      className="w-10 hover:scale-110 transition "
                      alt="facebook"
                    />
                  </button>

                  <button onClick={() => handleShare("twitter")}>
                    <img
                      src={itwt}
                      className="w-10 hover:scale-110 transition"
                      alt="twitter"
                    />
                  </button>

                  <button onClick={() => handleShare("instagram")}>
                    <img
                      src={insta}
                      className="w-10 hover:scale-110 transition"
                      alt="instagram"
                    />
                  </button>

                  <button onClick={() => handleShare("youtube")}>
                    <img
                      src={iyt}
                      className="w-10 hover:scale-110 transition"
                      alt="youtube"
                    />
                  </button>
                </div>

                {/* Input + Copy */}
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-100">
                  <input
                    className="flex-1 bg-transparent text-gray-800 outline-none text-sm"
                    value={window.location.href}
                    readOnly
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="px-3 py-1 bg-black text-white rounded-md text-sm hover:opacity-80"
                  >
                    COPY
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fullscreen button */}
        <div className="icon-row flex justify-center  mr-8 items-center">
          <span
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="tooltip px-4 py-2 rounded-md font-medium transition"
          >
            <img src={share} className="w-5" alt="share" />
            <span className="tooltip-text">Share</span>
          </span>
          {/* <button
                       onClick={handleFullScreen}
                       className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-md font-medium transition"
                     >
                       Full Screen
                     </button> */}
          <span className="tooltip">
            <img
              src={full}
              className="w-5 h-5"
              alt="full screen"
              onClick={handleFullScreen}
            />{" "}
            <span className="tooltip-text">
              {isFullScreen ? "Exit Full Screen" : "Full Screen"}
            </span>
          </span>
        </div>
        <div className="md:mr-6">
          <img src={logo} className="w-28 md:w-full md:h-16" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Restarent;
