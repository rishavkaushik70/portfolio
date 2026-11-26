"use client";

import { useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";
import { PORTFOLIO_FILES } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
import { FileIcon } from "./FileIcon";

interface EditorTabsProps {
  openTabs: SectionId[];
  activeSection: SectionId;
  onSelectTab: (section: SectionId) => void;
  onCloseTab: (section: SectionId) => void;
  onOpenNextTab: () => void;
}

export function EditorTabs({
  openTabs,
  activeSection,
  onSelectTab,
  onCloseTab,
  onOpenNextTab,
}: EditorTabsProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    tabRefs.current[activeSection]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }, [activeSection]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % openTabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + openTabs.length) % openTabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = openTabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextSection = openTabs[nextIndex];
    onSelectTab(nextSection);
    tabRefs.current[nextSection]?.focus();
  };

  return (
    <div className="h-10 sm:h-9 bg-[#07111B] border-b border-[#243342] flex items-stretch shrink-0 min-w-0">
      <div
        role="tablist"
        aria-label="Open portfolio files"
        className="flex items-stretch overflow-x-auto tabs-scroll min-w-0 flex-1"
      >
        {openTabs.map((sectionId, index) => {
          const meta = PORTFOLIO_FILES[sectionId];
          const isActive = sectionId === activeSection;

          return (
            <div
              key={sectionId}
              className={`flex items-stretch shrink-0 border-r border-[#243342] border-t-2 ${
                isActive
                  ? "bg-[#08131E] border-t-[#1685F8] text-[#E5EAF0]"
                  : "bg-[#07111B] border-t-transparent text-[#9AA8B7] hover:bg-[#091521] hover:text-[#E5EAF0]"
              }`}
            >
              <button
                ref={(el) => {
                  tabRefs.current[sectionId] = el;
                }}
                id={`tab-${sectionId}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onSelectTab(sectionId)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 text-xs sm:text-[13px] whitespace-nowrap focus-visible:outline-offset-[-2px]"
              >
                <FileIcon kind={meta.iconKind} className="w-3.5 h-3.5" />
                <span>{meta.tabLabel}</span>
              </button>

              {openTabs.length > 1 && (
                <button
                  type="button"
                  onClick={() => onCloseTab(sectionId)}
                  aria-label={`Close ${meta.tabLabel}`}
                  className="min-w-[30px] sm:min-w-[24px] px-1.5 flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0]"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onOpenNextTab}
        aria-label="Open next portfolio file"
        className="min-w-[38px] sm:min-w-[36px] px-2.5 flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#091521] border-l border-[#243342] shrink-0"
      >
        <Plus className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
