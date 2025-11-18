// // src/App.jsx
// import React, { useState } from "react";
// import Hotspot from "./components/Hotspot";
// import Screen360 from "./components/Screen360";

// const SCENES = {
//   showRoom: {
//     id: "showRoom",
//     src: "/assets/showroom_360.jpg",
//     hotspots: [
//       { id: "to_lobby", yaw: 40, pitch: 0, target: "lobby", label: "Go to Lobby" },
//     ],
//   },
//   lobby: {
//     id: "lobby",
//     src: "/assets/lobby_360.jpg",
//     hotspots: [
//       { id: "to_show", yaw: -20, pitch: 5, target: "showRoom", label: "Back to Showroom" },
//     ],
//   },
// };

// export default function App() {
//   // const [sceneKey, setSceneKey] = useState("showRoom");
//   // const scene = SCENES[sceneKey];

//   return (
//     <>
//        {/* <Scene360 src="/assets/showroom_360.jpg" />; */}

//       {/* Simple UI overlay */}
//       {/* <div style={{ position: "absolute", left: 12, top: 12, zIndex: 10 }}>
//         <button onClick={() => setSceneKey("showRoom")}>Showroom</button>
//         <button onClick={() => setSceneKey("lobby")}>Lobby</button>
//       </div> */}

// <Screen360/>

//     </>
//   );
// }
// export default App;
import React, { Suspense, useState, useEffect } from "react";
import PanoramaViewer from "./components/PanoramaViewer";
//import apart from "./components/images/apart.jpg";
//import room2 from "./components/images/360pan.jpg";
//import room3 from "./components/images/apart.jpg";
//import hall from "./components/images/p5_room.jpg";
//import hall2 from "./components/images/p2_room.jpg";
// import hall3 from "./components/images/p3Living_Kitchen.avif";
// import hall4 from "./components/images/p4_room.jpg";
// import nHall from "./components/images/N_home.jpeg";
// import StreetViewCarousel from "./components/StreetViewCarousel";
// import HeroSection from "./components/HeroSection";
import About from "./components/parts/About";
import WorkSection from "./components/pages/WorkSection";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Service from "./components/parts/Service";
import Experience from "./components/parts/Experience";
import NavBar from "./components/NavBar";
// import bgHero from "./components/images/menu/p_hotel.jpg";
import Works from "./components/parts/Works";
import GoogleWalkThrough from "./components/parts/GoogleWalkThrough";
import Testimonials from "./components/parts/Testimonials";
import Contact from "./components/parts/Contact";
import Faq from "./components/parts/Faq";
import Footer from "./components/Footer";
import ClassSection from "./components/pages/ClassSection";
import RestSection from "./components/pages/RestSection";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import AdminFetchForms from "./components/superbase/AdminFetchForms";
import AdminLogin from "./components/superbase/AdminLogin";
import ProtectedRoute from "./components/superbase/ProtectedRoute";
import PageNotFound from "./components/pages/PageNotFound";
import Loader from "./components/Loader";
import Mission from "./components/parts/Mission";
import Counter from "./components/parts/Counter";
import bgcol from "./components/images/works/col_floor.jpg";
import bgrest from "./components/images/works/restarent.jpg";
import bgapart from "./components/images/works/apartment.jpg";
import arrow from "./components/images/menu/next.png";
import WhatsAppButton from "./components/WhatsAppButton";
import { useLocation } from "react-router-dom";

function App() {
  // const panoramas = [
  //   { name: "Room 1", src: apart },
  //   { name: "Room 2", src: room2 },
  //   { name: "Hall 1 ", src: hall },
  //   { name: "Hall 2", src: hall3 },
  //   { name: "Hall 3", src: hall4 },
  //   // { name: "Mini Hall ", src: nHall },
  // ];

  // const images = [hall, hall2, hall4];

  // const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bgcol, bgrest, bgapart];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(images[0]);

  // hide in work page
  const location = useLocation();

  const hideOnPages = ["/work1", "/work2", "/work3"];
  const shouldHide = hideOnPages.includes(location.pathname);

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const next = (currentIndex + 1) % images.length;

      // 🔥 Preload next panorama before showing it
      await preloadImage(images[next]);

      // Now safely switch image (no gap)
      setCurrentIndex(next);
      setCurrentImg(images[next]);
    }, 8000); // 10 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  // 🔥 Next Function
  const goNext = async () => {
    const nextIndex = (currentIndex + 1) % images.length;
    await preloadImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
    setCurrentImg(images[nextIndex]);
  };
  // 🔥 Previous Function
  const goPrev = async () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    await preloadImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
    setCurrentImg(images[prevIndex]);
  };
  return (
    <>
      {/* <HeroSection /> */}
      <div className="App font-aeonik">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100vh",
                    }}
                  >
                    <PanoramaViewer
                      src={currentImg}
                      width="100%"
                      height="100%"
                      autoRotate={true}
                      autoRotateSpeed={0.5}
                    />

                    <NavBar />
                    <img
                      onClick={goPrev}
                      src={arrow}
                      className="w-9 absolute rotate-180 left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full hover:bg-black/60 transition"
                      alt="arrow"
                    />
                    {/* <button
                      // onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60 transition"
                    >
                      ⟵
                    </button> */}

                    {/* 🔥 Right Arrow */}

                    <img
                      onClick={goNext}
                      src={arrow}
                      className="w-9 absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full hover:bg-black/60 transition"
                      alt="arrow"
                    />
                    {/* <button
                      // onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60 transition"
                    >
                      ⟶
                    </button> */}
                  </div>
                  <About />
                  <Counter />
                  <Service />
                  <Experience />
                  <Works />
                  <GoogleWalkThrough />
                  <Testimonials />
                  <Faq />
                  <Contact />
                  <Footer />
                </>
              }
            />

            <Route path="/about" element={<Mission />} />

            <Route path="/work1" element={<WorkSection />} />
            <Route path="/work2" element={<ClassSection />} />
            <Route path="/work3" element={<RestSection />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />

            <Route path="/admin-login" element={<AdminLogin />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AdminFetchForms />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        {!shouldHide && <WhatsAppButton />}
      </div>
    </>
  );
}

export default App;

// {

/* <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <PanoramaViewer
          src={hall4}
          width="100%"
          height="500px"
          autoRotate={true}
          autoRotateSpeed={1.2}
        />
    

        

        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            textAlign: "center",
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: "28px", margin: 0 }}>
            Experience the 360° View
          </h1>
          <button
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#ff6600",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => alert("View more clicked!")}
          >
            View More
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            display: "flex",
            gap: "10px",
            zIndex: 2,
          }}
        >
           {panoramas.map((room, index) => (
            <div
              key={room.name}
              onClick={() => setCurrentIndex(index)}
              style={{
                padding: "10px 16px",
                backgroundColor:
                  currentIndex === index ? "#ff6600" : "rgba(0,0,0,0.5)",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                textAlign: "center",
                minWidth: "80px",
              }}
            >
              {room.name}
            </div>
          ))} 
        </div>
      </div> */

/* <div>
        <StreetViewCarousel images={images} />,
      </div> */

/* <div>
  <iframe
    style={{ width: "100px" }}
    src={
      "https://momento360.com/e/u/fce81600414c493f8f49cb1d52622a8e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=90&size=medium&autoplay-annotations=true&display-plan=true"
    }
  ></iframe>
</div>; */
// }
