import {
  Briefcase,
  ChevronRight,
  Code2,
  FileText,
  Home,
  Mail,
  User,
} from "lucide-react";
import { RIGHT_NAV_ITEMS, SITE_CONFIG } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

interface RightNavigationProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  onCloseMobile?: () => void;
}

const NAV_ICONS: Record<SectionId, typeof Home> = {
  home: Home,
  about: User,
  projects: Briefcase,
  skills: Code2,
  resume: FileText,
  contact: Mail,
  experience: Briefcase,
  styles: Code2,
};

export function RightNavigation({
  activeSection,
  onSelectSection,
  onCloseMobile,
}: RightNavigationProps) {
  const handleSelect = (section: SectionId) => {
    onSelectSection(section);
    onCloseMobile?.();
  };

  return (
    <div className="flex flex-col justify-between h-full bg-[#091521] p-4 select-none overflow-y-auto ide-scroll">
      <div>
        <p className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7] mb-3 px-1">
          Navigation
        </p>

        <nav aria-label="Portfolio sections" className="space-y-1.5">
          {RIGHT_NAV_ITEMS.map((item) => {
            const Icon = NAV_ICONS[item.id];
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`w-full flex items-center gap-3 px-3 min-h-[42px] py-2 rounded-lg text-sm font-medium text-left border ${
                  isActive
                    ? "bg-[#1266C8] border-[#1685F8] text-white"
                    : "bg-transparent border-transparent text-[#9AA8B7] hover:bg-[#0D1B28] hover:text-[#E5EAF0]"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <hr className="border-[#243342] my-5" />
      </div>

      {/* Bottom Availability Card */}
      <div className="space-y-3">
        <div className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#4ADE80]">
            <span
              className="w-2 h-2 rounded-full bg-[#4ADE80] shrink-0"
              aria-hidden="true"
            />
            <span>{SITE_CONFIG.availability}</span>
          </div>

          <p className="text-xs text-[#9AA8B7] leading-relaxed mt-2.5">
            {SITE_CONFIG.availabilitySummary}
          </p>

          <button
            type="button"
            onClick={() => handleSelect("contact")}
            className="mt-4 w-full min-h-[40px] flex items-center justify-between px-3 py-2 rounded-lg bg-[#08131E] border border-[#243342] text-xs font-medium text-[#E5EAF0] hover:border-[#1685F8]"
          >
            <span>Let&apos;s Connect</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#9AA8B7]" aria-hidden="true" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between gap-2 px-1">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex-1 h-10 rounded-lg bg-[#0D1B28] border border-[#243342] flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0] hover:border-[#1685F8]"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={SITE_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex-1 h-10 rounded-lg bg-[#0D1B28] border border-[#243342] flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0] hover:border-[#1685F8]"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            aria-label="Send email"
            className="flex-1 h-10 rounded-lg bg-[#0D1B28] border border-[#243342] flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0] hover:border-[#1685F8]"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
