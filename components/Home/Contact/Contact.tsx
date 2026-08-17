"use client";

import { FormEvent, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("Message sent successfully! I'll get back to you soon.");

      form.reset();
    } catch (error) {
      console.error(error);

      setStatus(
        "Something went wrong. Please try again or contact me directly.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-20 scroll-mt-24">
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s <span className="text-cyan-300">Work Together</span>
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            I&apos;m currently open to frontend development opportunities and
            exciting projects. If you&apos;d like to connect, feel free to send
            me a message.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-[#11132b] border border-white/10 rounded-2xl p-7 sm:p-9">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="text-white/60 mt-3 leading-7">
              Whether you&apos;re a recruiter, developer, or someone interested
              in working together, I&apos;d love to hear from you.
            </p>

            {/* Email */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-300/10 flex items-center justify-center shrink-0">
                <FaEnvelope className="text-cyan-300 text-xl" />
              </div>

              <div>
                <p className="text-white/50 text-sm">Email</p>

                <a
                  href="mailto:rishavkaushik70@gmail.com"
                  className="text-white font-medium hover:text-cyan-300 transition-colors"
                >
                  rishavkaushik70@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-300/10 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-cyan-300 text-xl" />
              </div>

              <div>
                <p className="text-white/50 text-sm">Location</p>

                <p className="text-white font-medium">Arrah, Bihar, India</p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-300/10 flex items-center justify-center shrink-0">
                <FaBriefcase className="text-cyan-300 text-xl" />
              </div>

              <div>
                <p className="text-white/50 text-sm">Availability</p>

                <p className="text-white font-medium">Open to opportunities</p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-9">
              <p className="text-white/50 text-sm mb-4">Connect with me</p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/rishavkaushik70"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full bg-[#191c3b] border border-white/10 flex items-center justify-center text-white hover:bg-cyan-300 hover:text-black transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#191c3b] border border-white/10 flex items-center justify-center text-white hover:bg-cyan-300 hover:text-black transition-all duration-300"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>

                <a
                  href="mailto:rishavkaushik70@gmail.com"
                  aria-label="Email"
                  className="w-11 h-11 rounded-full bg-[#191c3b] border border-white/10 flex items-center justify-center text-white hover:bg-cyan-300 hover:text-black transition-all duration-300"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#11132b] border border-white/10 rounded-2xl p-7 sm:p-9">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="text-white/60 mt-3 mb-7">
              Have a project, opportunity, or question? Drop me a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-white/70 text-sm mb-2 block"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#191c3b] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-300 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-white/70 text-sm mb-2 block"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#191c3b] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-300 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-white/70 text-sm mb-2 block"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project / Collaboration"
                  required
                  className="w-full bg-[#191c3b] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-300 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-white/70 text-sm mb-2 block"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full bg-[#191c3b] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-300 transition-colors resize-none"
                />
              </div>

              {/* Status */}
              {status && <p className="text-sm text-cyan-300">{status}</p>}

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-300 text-black font-semibold py-3 rounded-lg hover:bg-cyan-200 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
