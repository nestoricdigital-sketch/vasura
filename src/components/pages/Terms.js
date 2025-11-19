import React from "react";
import term from "../images/footer/terms.png";
// import arrow from "../images/footer/arrow.png";
// import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Terms = () => {
  return (
    <>
      <NavBar />
      <div className="w-full md:mt-10 py-12 px-6 md:px-16 ">
        {/* <Link to="/">
          <img src={arrow} className="w-5 h-5 mb-6 -rotate-90" alt="arrow" />
        </Link> */}

        <img src={term} className="w-full  md:h-full mb-6" alt="terms" />
        <div className=" py-6 md:px-4 bg-[#36454F] flex flex-col justify-center  md:flex-row md:justify-between items-center rounded-lg mb-6 text-white">
          <h1 className="text-3xl font-semibold">
            Terms & Condi<span className="text-[#40E0D0]">t</span>ion
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
        <div className=" rounded-2xl  p-2 sm:p-0">
          {/* <h1 className="text-3xl sm:text-4xl font-extrabold  mb-8 text-center">
          Terms & Conditions
        </h1> */}

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>Vasura Virtual Experience</strong> (“we,”
              “our,” “us”). By accessing or using our website and services, you
              agree to comply with and be bound by the following Terms &
              Conditions. Please read them carefully before using our platform.
            </p>
          </section>

          <Section
            title="Use of Our Services"
            text="By accessing our website or purchasing our services, you agree to use them only for lawful purposes. You must not use our content or platform for any activity that may damage, disable, or impair the website or interfere with another party’s use."
          />

          <Section
            title="Intellectual Property Rights"
            text="All content, designs, text, graphics, logos, photos, videos, and other materials on this website are owned or licensed by Vasura Virtual Experience. You may not reproduce, modify, distribute, or use any material without prior written permission."
          />

          <Section
            title="Service Terms"
            text={
              <>
                Our virtual tour services are provided based on agreed project
                scopes, timelines, and deliverables. Once confirmed:
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    Project timelines may vary based on location, weather, or
                    client input.
                  </li>
                  <li>
                    Additional changes or edits beyond the original scope may
                    incur extra costs.
                  </li>
                  <li>
                    Vasura reserves the right to refuse or reschedule projects
                    for reasons including safety, location access, or
                    inappropriate content.
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="Payment & Refund Policy"
            text={
              <>
                A minimum 50% advance payment (or as agreed) is required before
                project commencement. The remaining balance must be cleared upon
                delivery or before publishing the final output. In case of
                non-payment or partial payment after project completion, the
                Company reserves the right to:
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    Unpublish or disable the client’s virtual tour or hosted
                    content.
                  </li>
                  <li>
                    Withhold access to final files or URLs until the pending
                    balance is received.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Example:</strong> If a project costs ₹10,000 and the
                  client pays ₹2,000 in advance but fails to pay the remaining
                  ₹8,000 within the agreed period, Vasura Virtual Experience
                  retains the right to revoke access to the tour until full
                  payment is made.
                </p>
                <p className="mt-3">
                  Payments are accepted via UPI, bank transfer, or approved
                  digital platforms. Late payments beyond 7 working days may
                  incur a reactivation fee. Refunds are not available once the
                  project has been initiated or completed, except for technical
                  or operational failures from our side.
                </p>
              </>
            }
          />

          <Section
            title="Google Integration"
            text="While we assist with integration to Google Maps, Street View, and other platforms, final publication and display depend on Google’s policies. Vasura is not responsible for delays or changes caused by Google’s system or updates."
          />

          <Section
            title="Limitation of Liability"
            text="The Company will not be liable for indirect losses, delays, or service interruptions caused by factors beyond its control (e.g., Google platform issues, weather conditions, or technical malfunctions). Clients are responsible for obtaining permissions for photography at their premises."
          />

          <Section
            title="Ownership & Usage Rights"
            text={
              <>
                Upon full payment, the client gains the right to use the
                delivered virtual tour or media content for promotional
                purposes.
                <br />
                <br />
                The Company retains the right to use completed projects in
                portfolios, marketing, or demo showcases unless the client
                requests otherwise in writing.
                <br />
                <br />
                Any unauthorized editing, copying, or redistribution of the
                Company’s work without consent is strictly prohibited.
              </>
            }
          />

          <Section
            title="Changes to Terms"
            text="We reserve the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page with the revised date."
          />

          <Section
            title="Contact Information"
            text={
              <>
                For any questions regarding these Terms, please contact us at:
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
  <>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold  mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{text}</div>
    </section>
  </>
);

export default Terms;
