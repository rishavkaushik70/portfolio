import { FaCodepen, FaReact, FaGraduationCap } from "react-icons/fa";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Featured Work */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Featured <span className="text-cyan-200">Work</span>
          </h1>

          <div className="mt-10 space-y-6">
            <ResumeCard
              icon={FaCodepen}
              role="Electronica"
              title="E-commerce Web Application"
              description="A responsive e-commerce web application with product browsing, cart management, wishlist functionality and a modern user interface."
              tech="React • Redux Toolkit • Tailwind CSS"
            />

            <ResumeCard
              icon={FaReact}
              role="SaveMyMoney"
              title="Personal Finance Web Application"
              description="A personal finance application focused on helping
            users track and manage their money through a
            simple and intuitive interface."
              tech="React • JavaScript • OpenWeather API"
            />

            <ResumeCard
              icon={FaCodepen}
              role="Portfolio"
              title="Developer Portfolio"
              description="A modern developer portfolio built to showcase my projects, technical skills and experience."
              tech="Next.js • TypeScript • Tailwind CSS"
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div className="mt-10 space-y-6">
            <ResumeCard
              icon={FaGraduationCap}
              role="2022 - 2025"
              title="Bachelor of Computer Application"
              description="Maharaja College"
              tech="Computer Science / Information Technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
