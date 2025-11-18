// import React, { useEffect, useRef } from "react";
// import pannellum from "react-pannellum";
// import apart from "./images/apart.jpg";
// import the360 from "./images/360pan.jpg";

// const PanoramaWithHotspots = () => {
//   const panoRef = useRef(null);
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     // Initialize panorama viewer
//     viewerRef.current = pannellum.default.viewer(panoRef.current, {
//       type: "equirectangular",
//       panorama: apart,
//       autoLoad: true,
//       autoRotate: 2,
//       pitch: 10,
//       yaw: 180,
//       hfov: 110,
//       compass: true,
//       showZoomCtrl: true,
//     });

//     // Add a hotspot that switches to another panorama when clicked
//     viewerRef.current.addHotSpot({
//       pitch: 0, // vertical position
//       yaw: 90, // horizontal position
//       type: "custom",
//       cssClass: "custom-hotspot",
//       createTooltipFunc: function (hotSpotDiv, args) {
//         hotSpotDiv.innerHTML = `<img src=${the360} style='width:50px; height:50px; border:2px solid white; border-radius:5px;' />`;
//         hotSpotDiv.style.cursor = "pointer";
//         hotSpotDiv.onclick = () => {
//           viewerRef.current.loadScene("scene2"); // if using scenes
//         };
//       },
//     });

//     // Optional: Add more hotspots similarly
//   }, []);

//   return <div ref={panoRef} style={{ width: "100%", height: "500px" }} />;
// };

// export default PanoramaWithHotspots;
