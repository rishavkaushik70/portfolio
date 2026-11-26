import Image from "next/image";
import { CheckCircle2, Code2, Cpu, Layers, Sparkles } from "lucide-react";
import {
  ABOUT_FOCUS_AREAS,
  ABOUT_STRENGTHS,
  SITE_CONFIG,
} from "@/data/portfolio";

export function AboutSection() {
  return (
    <div className="space-y-7 sm:space-y-8 min-w-0">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
          About Me
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          Frontend Developer focused on building clean, maintainable, and responsive web applications.
        </p>
      </div>

      {/* Intro & Code Identity Grid */}
      <div className="grid grid-cols-1 @3xl/editor:grid-cols-12 gap-5 items-stretch">
        <div className="@3xl/editor:col-span-6 flex flex-col sm:flex-row gap-4 items-start min-w-0">
          <div className="relative w-28 h-32 sm:w-36 sm:h-40 rounded-xl overflow-hidden bg-[#091521] border border-[#243342] shrink-0">
            <Image
              src={SITE_CONFIG.profileImagePath}
              alt={`${SITE_CONFIG.fullName} portrait photograph`}
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover object-[50%_22%]"
            />
          </div>

          <div className="font-mono-code text-xs leading-6 overflow-x-auto ide-scroll min-w-0 w-full max-w-full">
            <p className="text-[#6A849D]">{"// Frontend Developer"}</p>
            <p className="text-[#6A849D]">{"// Full-Stack Enthusiast"}</p>
            <p className="mt-2">
              <span className="text-[#8B5CF6]">const</span>{" "}
              <span className="text-[#38BDF8]">profile</span>{" "}
              <span className="text-[#E5EAF0]">=</span>{" "}
              <span className="text-[#E5EAF0]">{"{"}</span>
            </p>
            <p className="pl-3">
              <span className="text-[#9AA8B7]">name:</span>{" "}
              <span className="text-[#4ADE80]">&quot;{SITE_CONFIG.fullName}&quot;</span>,
            </p>
            <p className="pl-3">
              <span className="text-[#9AA8B7]">location:</span>{" "}
              <span className="text-[#4ADE80]">&quot;{SITE_CONFIG.location}&quot;</span>,
            </p>
            <p className="pl-3">
              <span className="text-[#9AA8B7]">education:</span>{" "}
              <span className="text-[#4ADE80]">&quot;BCA (2022–2025)&quot;</span>
            </p>
            <p className="text-[#E5EAF0]">{"};"}</p>
          </div>
        </div>

        <div className="@3xl/editor:col-span-6 rounded-xl bg-[#0D1B28] border border-[#243342] border-l-2 border-l-[#1685F8] p-4 sm:p-5 space-y-4 flex flex-col justify-between min-w-0">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Professional Introduction
            </h2>
            <p className="text-sm text-[#9AA8B7] leading-relaxed">
              I&apos;m {SITE_CONFIG.fullName}, a Frontend Developer with a strong foundation in JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS. I enjoy translating product ideas into responsive, structured, and accessible web interfaces.
            </p>
            <p className="text-sm text-[#9AA8B7] leading-relaxed">
              Alongside frontend architecture, I actively build full-stack capabilities across Node.js, NestJS, REST APIs, PostgreSQL, Neon, and Prisma so I can understand and contribute across the entire application lifecycle.
            </p>
          </div>

          <div className="pt-3 border-t border-[#243342]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9AA8B7] mb-2">
              Development Philosophy
            </h3>
            <p className="text-sm text-[#E5EAF0]/90 leading-relaxed">
              Write predictable, readable code with clear component boundaries, prioritize usability across every screen size, and ship software that solves real user needs without unnecessary complexity.
            </p>
          </div>
        </div>
      </div>

      {/* What I Focus On */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
          <Layers className="w-4 h-4 text-[#1685F8] shrink-0" aria-hidden="true" />
          <span>What I Focus On</span>
        </h2>

        <div className="grid grid-cols-1 @xl/editor:grid-cols-2 @3xl/editor:grid-cols-3 gap-4">
          {ABOUT_FOCUS_AREAS.map((area) => (
            <div
              key={area.title}
              className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 space-y-2 min-w-0"
            >
              <h3 className="text-sm font-semibold text-[#E5EAF0]">
                {area.title}
              </h3>
              <p className="text-xs text-[#9AA8B7] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Interests, Journey & Strengths */}
      <div className="grid grid-cols-1 @2xl/editor:grid-cols-2 gap-4">
        <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-3 min-w-0">
          <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
            <Cpu className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
            <span>Technical Interests &amp; Journey</span>
          </h2>
          <ul className="space-y-2.5 text-sm text-[#9AA8B7] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#1685F8] font-mono-code mt-0.5 shrink-0">→</span>
              <span>
                Completed my Bachelor of Computer Applications (BCA) at Maharaja College, Arrah (2022–2025), building core fundamentals in programming and web engineering.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1685F8] font-mono-code mt-0.5 shrink-0">→</span>
              <span>
                Focused on modern React and Next.js App Router patterns, state management with Redux Toolkit, and responsive UI systems with Tailwind CSS.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1685F8] font-mono-code mt-0.5 shrink-0">→</span>
              <span>
                Expanding backend and database fluency with Node.js, NestJS, REST APIs, PostgreSQL, Neon, and Prisma ORM.
              </span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-3 min-w-0">
          <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
            <Sparkles className="w-4 h-4 text-[#4ADE80] shrink-0" aria-hidden="true" />
            <span>Technical Strengths</span>
          </h2>
          <p className="text-xs text-[#9AA8B7]">
            Core engineering habits I bring to frontend and full-stack projects:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {ABOUT_STRENGTHS.map((strength) => (
              <li
                key={strength}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#08131E] border border-[#243342] text-xs font-medium text-[#E5EAF0] min-w-0"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 text-[#4ADE80] shrink-0"
                  aria-hidden="true"
                />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2 flex items-center gap-2 text-xs font-mono-code text-[#9AA8B7]">
            <Code2 className="w-3.5 h-3.5 text-[#1685F8] shrink-0" aria-hidden="true" />
            <span>Always iterating toward cleaner architecture.</span>
          </div>
        </section>
      </div>
    </div>
  );
}
