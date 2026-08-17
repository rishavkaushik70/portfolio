"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiShadcnui,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";

const Skill = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 80,
  },
  {
    name: "React.js",
    icon: <SiReact />,
    percentage: 90,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    percentage: 85,
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    percentage: 85,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    percentage: 95,
  },
  {
    name: "CSS3",
    icon: <SiCss />,
    percentage: 90,
  },
  {
    name: "Git",
    icon: <SiGit />,
    percentage: 85,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    percentage: 90,
  },
  {
    name: "Prisma ORM",
    icon: <SiPrisma />,
    percentage: 75,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    percentage: 75,
  },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui />,
    percentage: 80,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white pt-16 pb-16">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      {/* Skills */}
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-wrap justify-center gap-6 mt-16">
        {Skill.map((skill) => {
          return (
            <Tilt
              key={skill.name}
              scale={1.4}
              transitionSpeed={400}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <div className="bg-[#14134145] border border-white/10 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:border-cyan-300/40 hover:shadow-cyan-300/10">
                {/* Icon */}
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>

                {/* Percentage */}
                <p className="text-2xl font-semibold">{skill.percentage}%</p>

                {/* Skill Name */}
                <p className="text-cyan-300 mt-1 font-medium">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
