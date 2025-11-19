// ContactForm.jsx
import React, { useState } from "react";
import { supabase } from "../superbase/supabaseClient";

const ALL_SERVICES = [
  "Google Virtual Tours",
  "Digi 3D Tour",
  "NFC Technology",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    services: [],
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // toggle service selection
  function toggleService(service) {
    setSuccessMsg("");
    setErrorMsg("");
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  }

  function validate() {
    setErrorMsg("");
    const { name, email } = form;
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    // simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return "Email is not valid";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim() || null,
        email: form.email.trim(),
        message: form.message.trim() || null,
        services: form.services.length ? form.services : null,
      };

      const { error } = await supabase.from("vasura_forms").insert([payload]);

      if (error) {
        console.error("Insert error:", error);
        setErrorMsg(error.message || "Failed to submit. Try again.");
      } else {
        setSuccessMsg("Thanks — your message has been submitted!");
        setForm({ name: "", phone: "", email: "", message: "", services: [] });
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network or unexpected error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-white py-16 px-4  md:px-[64px] " id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left Section */}
        <div className="space-y-9">
          <h2 className="text-[24px] md:text-6xl font-bold leading-snug text-gray-900">
            Let’s talk on something{" "}
            <span className="text-teal-400">great </span>
            together
          </h2>

          {/* Contact Info */}

          <div className=" rounded-2xl w-full max-w-[647px] ">
            <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] 2xl:aspect-[16/10]">
              {/* Responsive aspect ratios for different devices */}
              <iframe
                title="Google image"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4176.062504863665!2d77.53919031414391!3d13.298676800898457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1de160c22afb1%3A0x83a0813f5884cc88!2sD%20Cross%20Rd%2C%20Doddaballapura%2C%20Karnataka%20561203!5e1!3m2!1sen!2sin!4v1762928557939!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-[#2d3a3f] rounded-2xl p-9 text-white shadow-lg">
          <h3 className="text-lg font-bold mb-4">I’m interested in:</h3>

          {/* Interest Buttons */}
          {/* <div className="flex flex-wrap gap-3 mb-8">
            {interests.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  selected === item
                    ? "bg-white text-gray-900 font-semibold"
                    : "border-white/40 hover:border-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div> */}

          {/* Form Fields */}
          {/* <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Your name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Mobile number"
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Your email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Your message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full bg-transparent border border-gray-500 rounded-md focus:border-teal-400 outline-none p-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-medium py-3 rounded-full hover:bg-gray-200 transition"
            >
              Send message
            </button>
          </form> */}
          <form
            onSubmit={handleSubmit}
            className="w-full grid space-y-5 gap-3 mt-4  text-slate-100"
          >
            {/* Services */}
            <div>
              {/* <div className="mb-2 font-semibold">Services / Interests</div> */}

              <div className="flex flex-wrap gap-2">
                {ALL_SERVICES.map((s) => {
                  const selected = form.services.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      disabled={loading}
                      className={`  px-5 py-2 rounded-full text-sm transition 
                ${
                  selected
                    ? "bg-white text-slate-800 shadow border bg-transparent rounded-3xl   border-white "
                    : "bg-transparent border rounded-3xl border-white"
                }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Name + Phone */}
            <div className="">
              <div className="w-full">
                <label className="block text-sm mb-1 text-gray-200">
                  Your name
                </label>
                <input
                  placeholder="Name *"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
                  disabled={loading}
                />
              </div>
            </div>
            {/* phone */}
            <div className="w-full">
              <label className="block text-sm mb-1 text-gray-200">
                Mobile Number
              </label>
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block w-full text-sm mb-1 text-gray-200">
                Your email
              </label>
              <input
                placeholder="Email *"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Your message
              </label>

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                disabled={loading}
                className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 items-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 rounded-lg text-slate-800 text-sm transition 
          bg-white ${loading ? "opacity-70 cursor-default" : "cursor-pointer"}`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {loading && (
                <div className="text-gray-600">
                  Please wait — saving your submission.
                </div>
              )}
            </div>

            {/* Error */}
            {errorMsg && (
              <div className="text-[#9b1c1c] bg-[#fff3f3] p-3 rounded-lg text-sm">
                {errorMsg}
              </div>
            )}

            {/* Success */}
            {successMsg && (
              <div className="text-[#0b641e] bg-[#f0fff4] p-3 rounded-lg text-sm">
                {successMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// small shared style for inputs
// const inputStyle = {
//   padding: "10px 12px",
//   borderRadius: 8,
//   border: "1px solid #e6e6e6",
//   outline: "none",
//   fontSize: 14,
// };
