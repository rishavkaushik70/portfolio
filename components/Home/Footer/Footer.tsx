import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08091a]">
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Rishabh Kaushik<span className="text-cyan-300">.</span>
            </h2>

            <p className="text-white/50 text-sm mt-2">
              Frontend Developer. Building modern web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <a
              href="#home"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              Home
            </a>

            <a
              href="#resume"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              Resume
            </a>

            <a
              href="#skills"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rishavkaushik70"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#11132b] border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-300/40 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-kaushik-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#11132b] border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-300/40 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:rishavkaushik70@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-[#11132b] border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-300/40 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Rishabh Kaushik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
