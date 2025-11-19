import slash from "../images/others/slash_icon.png";
import bglines from "../images/others/test_lines.png";
import star from "../images/others/Star.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      icon: "https://via.placeholder.com/50",
      text: "We run a fitness studio, and this tour gives potential clients a feel of the space before they walk in. The professionalism, quality, and Google integration were top-notch",
      name: "Sneha Verma",
      role: "Owner, CoreFit Studio",
    },
    {
      id: 2,
      icon: "https://via.placeholder.com/50",
      text: "I’ve worked with many vendors, but Vasura’s attention to detail and commitment to quality really stood out. The final virtual tour exceeded expectations.",
      name: "Neha Kulkarni",
      role: "Marketing Manager, UrbanSpaces Interiors",
    },
    {
      id: 3,
      icon: "https://via.placeholder.com/50",
      text: "Vasura transformed the way customers see our cafe online. The virtual tour feels so real — people often tell us they visited because they loved exploring it virtually first!",
      name: "Aditi Rao",
      role: "Founder, BrewSpace Cafe",
    },
    {
      id: 4,
      icon: "https://via.placeholder.com/50",
      text: "The drone 360° view was breathtaking — perfect for showcasing our entire campus. Vasura made complex technology",
      name: "Rajesh Iyer, Director",
      role: "Green Valley International School",
    },
  ];
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative mt-1 md:mt-9  pb-16">
      {/* md:px-[64px] */}
      {/* TOP IMAGE */}
      <div className="w-full flex justify-start">
        <img
          src={bglines}
          alt="top"
          className="w-full  object-contain z-10 relative mb-10"
        />
      </div>

      {/* SECTION TITLE */}
      <div className=" -mt-24 md:-mt-60  relative z-20 px-4 md:px-[64px]">
        <p className="text-base text-black mb-2">How We Work</p>

        <h2 className="text-[22px]  md:text-[40px] font-bold text-black mb-12">
          What Our Happy Cus<span className="text-[#40E0D0]">t</span>omers Says
        </h2>

        {/* TESTIMONIALS */}
        <div className="flex animate-scroll space-x-8 w-max px-6 relative ">
          {doubledTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white w-80 min-w-[480px] rounded-2xl shadow-md p-6"
            >
              <img src={slash} alt="icons" className="w-12 h-12 -mt-10 mb-4" />

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img
                    key={i}
                    src={star}
                    className="w-7 h-7"
                    alt="testimonial"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                {item.text}
              </p>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          ))}

          {/* Fade effect */}
          {/* <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent" /> */}
        </div>
      </div>
    </section>
  );
}
