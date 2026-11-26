import {
  Database,
  Layers,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";

const CATEGORY_ICONS: Record<string, typeof Layout> = {
  frontend: Layout,
  "state-management": Layers,
  backend: Server,
  "database-orm": Database,
  tools: Wrench,
};

const ACCENT_STYLES: Record<SkillCategory["accent"], string> = {
  blue: "text-[#1685F8] bg-[#1685F8]/10 border-[#1685F8]/30",
  purple: "text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/30",
  green: "text-[#4ADE80] bg-[#4ADE80]/10 border-[#4ADE80]/30",
};

export function SkillsSection() {
  return (
    <div className="space-y-6 min-w-0">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
          Technical Skills
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          Core technologies, frameworks, databases, and developer tools I use to build web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 @lg/editor:grid-cols-2 gap-4">
        {SKILLS_DATA.map((category) => {
          const Icon = CATEGORY_ICONS[category.id] ?? Layout;
          return (
            <section
              key={category.id}
              className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-4 min-w-0"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-[#E5EAF0]">
                    {category.title}
                  </h2>
                  <p className="text-xs text-[#9AA8B7] mt-0.5">
                    {category.subtitle}
                  </p>
                </div>

                <div
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${ACCENT_STYLES[category.accent]}`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-[#08131E] border border-[#243342] text-xs font-medium text-[#E5EAF0] break-words"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
