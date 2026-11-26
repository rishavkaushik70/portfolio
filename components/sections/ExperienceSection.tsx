import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION_TIMELINE, EXPERIENCE_TIMELINE } from "@/data/portfolio";
import type { TimelineEntry } from "@/types/portfolio";

function TimelineBlock({
  entries,
  accentColor,
}: {
  entries: TimelineEntry[];
  accentColor: string;
}) {
  return (
    <div className="relative pl-4 sm:pl-6 border-l border-[#243342] space-y-5 min-w-0">
      {entries.map((entry) => (
        <article
          key={entry.id}
          className="relative rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-3 min-w-0"
        >
          <span
            className="absolute -left-[21px] sm:-left-[29px] top-6 w-2.5 h-2.5 rounded-full border-2 border-[#08131E]"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-[#E5EAF0]">
              {entry.title}
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-[#08131E] border border-[#243342] text-xs font-mono-code text-[#9AA8B7] shrink-0">
              {entry.period}
            </span>
          </div>

          <p className="text-xs font-medium text-[#1685F8]">
            {entry.organization}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>

          <ul className="space-y-1.5 text-sm text-[#9AA8B7]">
            {entry.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#4ADE80] font-mono-code mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#08131E] border border-[#243342] text-[11px] font-mono-code text-[#9AA8B7]"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-7 min-w-0">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
          Experience &amp; Learning Journey
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          Practical project-based development experience and academic background.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
          <Briefcase className="w-4 h-4 text-[#1685F8] shrink-0" aria-hidden="true" />
          <span>Experience</span>
        </h2>
        <TimelineBlock entries={EXPERIENCE_TIMELINE} accentColor="#1685F8" />
      </section>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold text-[#E5EAF0]">
          <GraduationCap className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
          <span>Education</span>
        </h2>
        <TimelineBlock entries={EDUCATION_TIMELINE} accentColor="#8B5CF6" />
      </section>
    </div>
  );
}
