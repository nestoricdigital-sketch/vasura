import walkT from "../images/others/googletrust.png";
export default function GoogleWalkThrough() {
  return (
    <section className="w-full bg-[#36454F] py-16 pl-3 pr-3  md:pr-0 md:pl-[60px]">
      {/* Title */}
      <h2 className=" text-2xl md:text-4xl font-bold text-white  mb-10">
        Google 360 Walk Th<span className="text-[#40E0D0]">r</span>ough
      </h2>

      {/* Content + Image Row */}
      <div className="w-full flex flex-col md:flex-row text-white items-start justify-between gap-4">
        {/* Left Side (65%) */}
        <div className="mx-0  w-full md:w-[65%] space-y-6 text-xl">
          {/* Part 1 */}
          <div>
            <p
              className="leading-relaxed  sm:leading-[1.5rem] md:leading-[3.75rem]"
              // style={{ lineHeight: "3.75rem" }}
            >
              The Google Street View Technology directly puts your business on
              the map. Thus, with a Google Search, the customer can straight
              reach you. You can further invite them to have a look at your
              business with Google See Inside Virtual Tour.
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <p
              className="leading-relaxed  sm:leading-[1.5rem] md:leading-[3.75rem]"
              // style={{ lineHeight: "3.75rem" }}
            >
              The Google See Inside Tour increases the credibility of your
              business and the chances of a potential customer choosing your
              business over others increases. Google ranks a business higher
              that has a 360-degree virtual tour. Thus, if you offer a virtual
              tour, your ranking can improve drastically compared to websites
              with only images and videos.
            </p>
          </div>

          {/* Part 3 */}
          <div>
            <p
              className="leading-relaxed  sm:leading-[1.5rem] md:leading-[3.75rem]"
              // style={{ lineHeight: "3.75rem" }}
            >
              The walkthrough is offered by the owner of the business with the
              help of a Google photographer, reflecting the authenticity of your
              business. In short, a virtual tour translates into more leads and
              higher conversion.
            </p>
          </div>
        </div>

        {/* Right Side (35%) */}
        <div className="w-full md:w-[35%] flex justify-center bg-white rounded-tl-[90px] rounded-bl-[90px]">
          <div className="flex items-center justify-end w-full md:w-96 h-[300px] sm:h-[400px] lg:h-[650px]">
            <img
              src={walkT}
              alt="Google 360 Walkthrough"
              className="w-full object-cover rounded-tl-[60px] rounded-bl-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
