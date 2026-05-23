import React, { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_dayp8zo",
      "template_mzy2vur",
      form.current,
      "1D9EpSjbd4NiDiHog"
    )
    .then(() => {
      setLoading(false);
      setStatus("success");
      form.current.reset();
    })
    .catch(() => {
      setLoading(false);
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="bg-[#131313] text-white py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-neutral-400 mb-2 tracking-widest uppercase">
            Get In <span className="text-[#FF014F]">Touch</span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info Cards */}
          <div className="space-y-8">

            <div className="flex items-center gap-5 bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#FF014F]/20">
              <FiMail className="text-3xl text-[#FF014F]" />
              <div>
                <p className="text-neutral-400">Email</p>
                <p className="font-semibold">jamisivakrishnarajesh@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#FF014F]/20">
              <FiPhone className="text-3xl text-[#FF014F]" />
              <div>
                <p className="text-neutral-400">Phone</p>
                <p className="font-semibold">+91 8885417205</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#FF014F]/20">
              <FiMapPin className="text-3xl text-[#FF014F]" />
              <div>
                <p className="text-neutral-400">Location</p>
                <p className="font-semibold">Andhra Pradesh, India</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-neutral-900 p-10 rounded-2xl space-y-6 shadow-xl"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-black border border-neutral-700 rounded-lg p-4 focus:outline-none focus:border-[#FF014F] focus:ring-2 focus:ring-[#FF014F]/40 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-black border border-neutral-700 rounded-lg p-4 focus:outline-none focus:border-[#FF014F] focus:ring-2 focus:ring-[#FF014F]/40 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-black border border-neutral-700 rounded-lg p-4 focus:outline-none focus:border-[#FF014F] focus:ring-2 focus:ring-[#FF014F]/40 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg p-4 font-semibold text-lg transition-all duration-300 
              ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FF014F] to-pink-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/30 active:scale-95"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center font-medium animate-pulse">
                Message Sent Successfully ✅
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center font-medium animate-pulse">
                Failed to send ❌
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;