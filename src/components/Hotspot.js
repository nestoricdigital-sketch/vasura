// // src/components/Hotspot.jsx
// import React from "react";
// import "./hotspot.css"; // small CSS for the icon

// export default function Hotspot({ id, yaw, pitch, onClick, label }) {
//   return (
//     <div
//       className="view360-hotspot hotspot-icon"
//       data-hotspot-id={id}
//       data-yaw={yaw}
//       data-pitch={pitch}
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => (e.key === "Enter" ? onClick?.(e) : null)}
//       title={label}
//     >
//       {/* simple icon — style in CSS */}
//       <div className="hotspot-dot" />
//     </div>
//   );
// }
