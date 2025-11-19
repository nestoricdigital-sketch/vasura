import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" for instant scroll
    });
  }, [pathname]);

  return null; // This component doesn’t render anything visible
};

export default ScrollToTop;
