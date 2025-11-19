import React from "react";
import policy from "../images/footer/policy.png";
// import arrow from "../images/footer/arrow.png";
// import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
const Privacy = () => {
  return (
    <>
      <NavBar />
      <div className="w-full md:mt-10 py-12 px-6  md:px-16  ">
        {/* <Link to="/">
          <img src={arrow} className="w-5 h-5 mb-6 -rotate-90" alt="arrow" />
        </Link> */}
        <img src={policy} className="w-full h-full mb-6" alt="policy" />
        <div className=" py-6 md:px-4 bg-[#36454F] flex flex-col justify-center  md:flex-row md:justify-between items-center rounded-lg mb-6 text-white">
          <h1 className="text-3xl font-semibold">
            Pri<span className="text-[#40E0D0]">v</span>acy Policy
          </h1>
          <div>
            <p>
              <span className="text-slate-400">Effective Date:</span> November
              2025
            </p>
            <p>
              <span className="text-slate-400"> Last Updated:</span> November
              2025
            </p>
          </div>
        </div>
        <div className=" ">
          <Section
            title=""
            text="At Vasura Virtual Experience, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, and protect your personal information."
          />

          <Section
            title="Information We Collect"
            text={
              <>
                <p className="mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, phone number,
                    email, and business details provided through forms or
                    inquiries.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you
                    interact with our website (e.g., IP address, device type,
                    browser).
                  </li>
                  <li>
                    <strong>Media & Content:</strong> Business images or footage
                    shared for creating virtual tours.
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="How We Use Your Information"
            text={
              <>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide, manage, and improve our services.</li>
                  <li>Communicate project updates, proposals, and invoices.</li>
                  <li>
                    Share completed virtual tours on your behalf (e.g., Google
                    Maps integration).
                  </li>
                  <li>
                    Send marketing updates or promotions (only if you’ve opted
                    in).
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="Sharing of Information"
            text={
              <>
                <p className="mb-3">
                  We do not sell, trade, or rent your personal information. Your
                  data may only be shared with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Trusted third-party partners (e.g., Google for publishing
                    tours).
                  </li>
                  <li>
                    Service providers assisting in photography, hosting, or web
                    integration.
                  </li>
                </ul>
                <p className="mt-3">
                  All such partners comply with confidentiality agreements.
                </p>
              </>
            }
          />

          <Section
            title="Data Security"
            text="We implement strong security measures to protect your personal and visual data from unauthorized access, alteration, or disclosure. While we strive for complete protection, no online data transfer can be guaranteed as 100% secure."
          />

          <Section
            title="Cookies"
            text="Our website may use cookies to enhance user experience, remember preferences, and analyze traffic. You can disable cookies in your browser settings if preferred."
          />

          <Section
            title="Your Rights"
            text={
              <>
                <p className="mb-3">You can:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Request access to your stored data.</li>
                  <li>
                    Ask for correction or deletion of your personal information.
                  </li>
                  <li>
                    Withdraw consent for marketing communication at any time.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at{" "}
                  <strong>vasuravirtual1986@gmail.com</strong>.
                </p>
              </>
            }
          />

          <Section
            title="Third-Party Links"
            text="Our website may contain links to other websites. We are not responsible for their privacy policies or content once you leave our domain."
          />

          <Section
            title="Policy Updates"
            text="We may update this Privacy Policy periodically. The latest version will always be available on our website with the date of revision."
          />

          <Section
            title="Contact Information"
            text={
              <>
                <p>
                  For any questions regarding this Privacy Policy, contact us
                  at:
                </p>
                <ul className="mt-3 space-y-1">
                  <li>Email: vasuravirtual1986@gmail.com</li>
                  <li>Phone: +91-99864-66943</li>
                  <li>
                    Address: 1220 4th Ward D Cross Road, Doddaballapur,
                    Bangalore, North-561203
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Section = ({ title, text }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{text}</div>
  </section>
);

export default Privacy;
