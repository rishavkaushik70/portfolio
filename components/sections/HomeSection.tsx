import Image from "next/image";
import { ArrowRight, Code2, Download } from "lucide-react";
import { PROJECTS_DATA, SITE_CONFIG } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-7 sm:space-y-8 min-w-0">
      {/* Code Snippet Intro directly on editor canvas */}
      <div className="font-mono-code text-[11px] sm:text-[13px] leading-5 sm:leading-6 overflow-x-auto ide-scroll w-full max-w-full">
        <div className="flex gap-3 sm:gap-4 min-w-0">
          <div
            className="text-[#4B5E73] select-none text-right w-4 sm:w-5 shrink-0"
            aria-hidden="true"
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
          <div className="min-w-0">
            <p className="text-[#6A849D]">{"// const developer = {"}</p>
            <p>
              <span className="text-[#8B5CF6]">const</span>{" "}
              <span className="text-[#38BDF8]">developer</span>{" "}
              <span className="text-[#E5EAF0]">=</span>{" "}
              <span className="text-[#E5EAF0]">{"{"}</span>
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-[#9AA8B7]">name:</span>{" "}
              <span className="text-[#4ADE80]">&quot;{SITE_CONFIG.fullName}&quot;</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-[#9AA8B7]">role:</span>{" "}
              <span className="text-[#4ADE80]">&quot;{SITE_CONFIG.role}&quot;</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-[#9AA8B7]">focus:</span>{" "}
              <span className="text-[#4ADE80]">
                &quot;Modern, scalable, responsive web applications&quot;
              </span>
            </p>
            <p className="text-[#E5EAF0]">{"};"}</p>
            <p className="text-[#6A849D]">{"// return ("}</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse @2xl/editor:flex-row @2xl/editor:items-center justify-between gap-6 min-w-0">
        <div className="space-y-4 max-w-2xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B28] border border-[#243342] text-xs text-[#9AA8B7] max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] shrink-0" aria-hidden="true" />
            <span className="truncate">{SITE_CONFIG.role}</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-[#E5EAF0]">
            Hi, I&apos;m <span className="text-[#38BDF8]">{SITE_CONFIG.shortName}.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#E5EAF0]/90 leading-relaxed">
            I build modern, scalable, responsive, and user-friendly web applications using modern web technologies.
          </p>

          <p className="text-sm text-[#9AA8B7] leading-relaxed">
            Focused on clean React &amp; Next.js component architecture, type-safe TypeScript, responsive interfaces, and practical full-stack integration with Node.js, PostgreSQL, and Prisma.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1266C8] text-white text-sm font-medium hover:bg-[#1685F8] w-full sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={SITE_CONFIG.resumePath}
              download={SITE_CONFIG.resumeDownloadName}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#0D1B28] border border-[#243342] text-[#E5EAF0] text-sm font-medium hover:border-[#1685F8] w-full sm:w-auto"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Actual Profile Photograph */}
        <div className="shrink-0 self-start @2xl/editor:self-center">
          <div className="relative w-28 h-32 sm:w-36 sm:h-40 @2xl/editor:w-44 @2xl/editor:h-48 rounded-2xl overflow-hidden bg-[#0D1B28] border border-[#243342]">
            <Image
              src={SITE_CONFIG.profileImagePath}
              alt={`${SITE_CONFIG.fullName} portrait photograph`}
              fill
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
              className="object-cover object-[50%_22%]"
              priority
            />
          </div>
          <p className="mt-2 text-[11px] font-mono-code text-[#9AA8B7] text-center">
            {SITE_CONFIG.location}
          </p>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
            <Code2 className="w-4 h-4 text-[#1685F8] shrink-0" aria-hidden="true" />
            <span>Featured Projects</span>
          </h2>

          <button
            type="button"
            onClick={() => onNavigate("projects")}
            className="text-xs font-medium text-[#38BDF8] hover:underline py-1"
          >
            View all in projects.tsx →
          </button>
        </div>

        <div className="grid grid-cols-1 @xl/editor:grid-cols-2 @3xl/editor:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl bg-[#0D1B28] border border-[#243342] overflow-hidden flex flex-col min-w-0"
            >
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                aria-label={`Inspect ${project.title} in projects`}
                className="aspect-[16/9] w-full bg-[#091521] border-b border-[#243342] overflow-hidden block text-left"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  width={project.thumbnailWidth}
                  height={project.thumbnailHeight}
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="w-full h-full object-cover object-top"
                />
              </button>

              <div className="p-4 flex-1 flex flex-col justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#E5EAF0] truncate">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono-code text-[#9AA8B7] shrink-0">
                      {project.images.length} screens
                    </span>
                  </div>
                  <p className="text-xs text-[#9AA8B7] mt-1.5 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#08131E] border border-[#243342] text-[11px] font-mono-code text-[#9AA8B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
