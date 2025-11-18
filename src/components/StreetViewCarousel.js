// import React, { useState } from "react";

// const StreetViewCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ position: "relative", display: "inline-block" }}>
//         <img
//           src={images[currentIndex]}
//           alt={`Street view ${currentIndex}`}
//           style={{ width: "600px", height: "400px", objectFit: "cover" }}
//         />
//         <button
//           onClick={handlePrev}
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: 0,
//             transform: "translateY(-50%)",
//             fontSize: "24px",
//             background: "rgba(0,0,0,0.5)",
//             color: "white",
//             border: "none",
//             padding: "10px",
//             cursor: "pointer",
//           }}
//         >
//           ◀
//         </button>
//         <button
//           onClick={handleNext}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: 0,
//             transform: "translateY(-50%)",
//             fontSize: "24px",
//             background: "rgba(0,0,0,0.5)",
//             color: "white",
//             border: "none",
//             padding: "10px",
//             cursor: "pointer",
//           }}
//         >
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StreetViewCarousel;
