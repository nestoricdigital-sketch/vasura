import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    verticals: 0,
    cities: 0,
    success: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  // Animate counters
  useEffect(() => {
    if (inView) {
      const duration = 1500; // ms
      const steps = 60;
      const interval = duration / steps;

      const increment = (target, key) => {
        let current = 0;
        const stepValue = target / steps;
        const counter = setInterval(() => {
          current += stepValue;
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(Math.round(current), target),
          }));
          if (current >= target) clearInterval(counter);
        }, interval);
      };

      increment(22, "projects");
      increment(11, "verticals");

      increment(10, "cities");
      increment(99, "success");
    }
  }, [inView]);
  return (
    <div
      ref={sectionRef}
      className=" px-4 md:px-[64px] w-full h-[300px] md:h-[300px] bg-[#36454F] text-white py-2 md:py-9  "
    >
      {/* Section Title */}
      <h1 className="mt-7 mb-9 text-start text-2xl md:text-[40px] font-semibold md:mb-16">
        Prov<span className="text-[#40E0D0]">e</span>n Impact & Results
      </h1>

      {/* Counter Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4  gap-5 md:gap-7  text-center ">
        <div>
          <h3 className="text-[#40E0D0] text-4xl md:text-5xl font-bold">
            {counts.projects}+
          </h3>
          <p className="text-gray-300 mt-2 text-[12px] md:text-[18px] ">
            Completed Projects
          </p>
        </div>

        <div>
          <h3 className="text-[#40E0D0] text-4xl md:text-5xl font-bold">
            {counts.verticals}
          </h3>
          <p className="text-gray-300 mt-2 text-[12px] md:text-[18px]">Verticals</p>
        </div>

        <div>
          <h3 className="text-[#40E0D0] text-4xl md:text-5xl font-bold">
            {counts.cities}
          </h3>
          <p className="text-gray-300 mt-2 text-[12px] md:text-[18px]">
            Cities
          </p>
        </div>

        <div>
          <h3 className="text-[#40E0D0] text-4xl md:text-5xl font-bold">
            {counts.success}%
          </h3>
          <p className="text-gray-300 mt-2 text-[12px] md:text-[18px]">
            Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
