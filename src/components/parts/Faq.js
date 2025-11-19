import { useState } from "react";
// import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import plus from "../images/others/Plus.png";
import min from "../images/others/minus.png";
const faqs = [
  {
    question: "What is a Google Virtual Tour?",
    answer:
      "A Google Virtual Tour is a 360° interactive walkthrough of your business space that allows customers to explore it online just like visiting in person. It’s integrated into your Google Business Profile, Maps, and Search results.",
  },
  {
    question:
      "What’s the difference between a Virtual Tour and Google Immersive View?",
    answer:
      "Virtual Tours offer static 360° photos you can navigate, while Google Immersive View adds real-world motion, 3D depth, and lighting effects  making the experience more lifelike and dynamic.",
  },
  {
    question: "Which businesses can benefit from a virtual tour?",
    answer:
      "Almost every business with a physical location — including hotels, gyms, cafés, showrooms, schools, real estate properties, and offices can benefit. It helps attract visitors, build trust, and boost engagement.",
  },
  {
    question: "How long does it take to create a virtual tour?",
    answer:
      "Typically, the process takes 3–5 working days, depending on the space size and level of customization. Large multi-location projects may take slightly longer.",
  },
  {
    question: "Do I need to close my business during the shoot?",
    answer:
      "No, not necessarily. Our team works efficiently around your schedule. However, having fewer people in the space helps us capture cleaner, distraction-free visuals.",
  },
  {
    question: "Will the virtual tour help my business rank higher on Google?",
    answer:
      "Yes! Virtual tours are proven to enhance your Google visibility, increase engagement time, and make your business listing more appealing all of which support better search performance.",
  },
  {
    question: "Can I embed the virtual tour on my website and social media?",
    answer:
      "Absolutely. We’ll provide you with a simple link or embed code so you can showcase your virtual tour on your website, Facebook page, or even share it via email campaigns.",
  },
  {
    question: "What makes Vasura Virtual Experience different?",
    answer:
      "We go beyond standard 360° tours by creating interactive, story-driven digital experiences. With our creative touch, technical precision, and integration expertise, your business stands out — not just appears online.",
  },
  {
    question: "Do you provide drone or aerial 360° tours?",
    answer:
      "Yes! We offer drone-based 360° tours for large outdoor properties such as resorts, campuses, real estate developments, or event venues.",
  },
  {
    question: "What quality can I expect from the visuals?",
    answer:
      "We use professional 8K 360° cameras to capture crystal-clear imagery, ensuring the virtual tour looks stunning across all devices  desktop, mobile, and VR.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Divide FAQs into two columns
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <section className=" mt-2 md:mt-24 mx-auto px-4  md:px-[64px] py-16">
      {/* Header */}
      <div className=" mb-12">
        <p className="text-[10px] md:text-[14px] uppercase tracking-wide text-black">
          FAQ’S
        </p>
        <h2 className="text-[22px]  md:text-[40px] font-bold text-black mt-2">
          Your Quest<span className="text-teal-500">i</span>ons, Answered
        </h2>
        <p className="text-gray-500 mt-4 text-[14px] md:text-[20px] mx-auto">
          Discover everything about NTAR — from robust security measures to the
          wide range of supported payment options.
        </p>
      </div>

      {/* FAQs two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Left column */}
        <div className="space-y-6">
          {leftFaqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="border-b border-gray-200 pb-4 cursor-pointer transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-medium text-base md:text-lg pr-4">
                  {faq.question}
                </h3>
                {
                  openIndex === index ? (
                    <img src={min} className="w-5 h-5" alt="minus icon" />
                  ) : (
                    //   <MinusIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <img src={plus} className="w-5 h-5" alt="plus icon" />
                  )
                  //   <PlusIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                }
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {rightFaqs.map((faq, index) => {
            const realIndex = index + 5; // adjust index for second column
            return (
              <div
                key={realIndex}
                onClick={() => toggleFaq(realIndex)}
                className="border-b border-gray-200 pb-4 cursor-pointer transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </h3>
                  {
                    openIndex === realIndex ? (
                      <img src={min} className="w-5 h-5" alt="minus icon" />
                    ) : (
                      // <MinusIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                      <img src={plus} className="w-5 h-5" alt="plus icon" />
                    )
                    // <PlusIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  }
                </div>
                {openIndex === realIndex && (
                  <p className="text-gray-600 mt-3 text-sm md:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
