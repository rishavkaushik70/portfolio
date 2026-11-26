import { ChevronRight, Component } from "lucide-react";
import { PORTFOLIO_FILES } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
import { FileIcon } from "./FileIcon";

interface BreadcrumbsProps {
  activeSection: SectionId;
}

export function Breadcrumbs({ activeSection }: BreadcrumbsProps) {
  const meta = PORTFOLIO_FILES[activeSection];

  return (
    <div
      aria-label="File breadcrumb"
      className="h-7 px-3 sm:px-4 bg-[#08131E] border-b border-[#182635] flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-[#9AA8B7] overflow-x-auto tabs-scroll shrink-0 min-w-0 w-full"
    >
      {meta.breadcrumbs.map((segment, index) => {
        const isFile = index === meta.breadcrumbs.length - 2;
        const isSymbol = index === meta.breadcrumbs.length - 1;

        return (
          <span key={segment} className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#586A7E]" aria-hidden="true" />
            )}
            {isFile && <FileIcon kind={meta.iconKind} className="w-3.5 h-3.5" />}
            {isSymbol && (
              <Component className="w-3.5 h-3.5 text-[#8B5CF6]" aria-hidden="true" />
            )}
            <span
              className={`max-w-[130px] sm:max-w-none truncate ${
                isSymbol ? "text-[#E5EAF0]" : ""
              }`}
            >
              {segment}
            </span>
          </span>
        );
      })}
    </div>
  );
}
