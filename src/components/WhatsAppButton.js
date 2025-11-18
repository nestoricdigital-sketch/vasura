import React from "react";
import { Link } from "react-router-dom";
import wha from "./images/menu/whatsup.png";

const WhatsAppButton = ({
  phone = "919986466943", // <-- 919986466943 replace with your number (country code + number, no '+', no spaces)
  message = "Hi! I'm interested in a virtual tour. Could you help me?", // optional prefilled message
  size = "md",
}) => {
  const sizes = {
    sm: "w-12 h-12 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-16 h-16 text-lg",
  };
  const dim = sizes[size] || sizes.md;

  // Compose wa link
  const encoded = message;
  const href = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        ${dim}
        rounded-full flex items-center justify-center
        active:scale-95
        text-white font-medium
        wa-bounce wa-shadow
        transition-transform duration-200 ease-out
        `}
      // prevent outer handlers from closing modals etc.
      onClick={(e) => e.stopPropagation()}
    >
      {/* SVG WhatsApp icon — lightweight inline SVG */}
      <img src={wha} className="w-9 h-9" alt="whatsapp" />
    </Link>
  );
};

export default WhatsAppButton;
