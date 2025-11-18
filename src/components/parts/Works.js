import work1 from "../images/works/col_floor.jpg";
import work2 from "../images/works/classComp.jpg";
import work3 from "../images/works/restarent.jpg";
import { Link } from "react-router-dom";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "Immersive 360° Experiences for College",
      img: work1,
      lin: "/work1",
    },
    {
      id: 2,
      title: "Immersive 360° Experiences for Interior",
      img: work2,
      lin: "/work2",
    },
    {
      id: 3,
      title: "Immersive 360° Experiences for Restaurants",
      img: work3,
      lin: "/work3",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-[64px]   " >
      {/* Title & Description */}
      <div className="text-start mb-10">
        <p className="text-base ">Our Works </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          See the Difference. Feel the <span className="text-[#40E0D0]">E</span>
          xperience.
        </h2>
        <p className="text-gray-600 text-base md:text-lg  mx-auto">
          We don’t just capture places; we create digital experiences that drive
          engagement.
        </p>
      </div>

      {/* 3 Inline Images */}
      <div className="flex flex-col md:flex-row w-full">
        {works.map((work, index) => {
          // Apply left radius to 1st image
          const leftRadius = index === 0;

          // Apply right radius to 3rd image
          const rightRadius = index === 2;

          return (
            <div key={work.id} className="relative w-full md:w-1/3 group">
              {/* IMAGE */}
              <img
                src={work.img}
                alt={work.title}
                className={`w-full h-[300px] md:h-[600px] object-cover
            ${leftRadius ? "rounded-tl-3xl rounded-bl-3xl" : ""}
            ${rightRadius ? "rounded-tr-3xl rounded-br-3xl" : ""}
          `}
              />

              {/* HOVER OVERLAY — must match radius */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col 
          items-center justify-center opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
          ${leftRadius ? "rounded-tl-3xl rounded-bl-3xl" : ""}
          ${rightRadius ? "rounded-tr-3xl rounded-br-3xl" : ""}
        `}
              >
                <h3 className="text-white text-xl md:text-[18px] font-semibold mb-4">
                  {work.title}
                </h3>
                <Link to={work.lin}>
                  <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                    View Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
