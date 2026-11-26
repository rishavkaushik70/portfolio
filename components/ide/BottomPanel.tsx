import { ChevronDown, ChevronUp, Terminal as TerminalIcon } from "lucide-react";
import type { TerminalTab } from "@/types/portfolio";

interface BottomPanelProps {
  isOpen: boolean;
  activeTab: TerminalTab;
  onSelectTab: (tab: TerminalTab) => void;
  onToggleOpen: () => void;
}

const TERMINAL_TABS: { id: TerminalTab; label: string }[] = [
  { id: "problems", label: "Problems" },
  { id: "output", label: "Output" },
  { id: "debug", label: "Debug Console" },
  { id: "terminal", label: "Terminal" },
];

export function BottomPanel({
  isOpen,
  activeTab,
  onSelectTab,
  onToggleOpen,
}: BottomPanelProps) {
  return (
    <section
      aria-label="Developer panel"
      className="bg-[#07111B] border-t border-[#243342] shrink-0 min-w-0 max-w-full overflow-hidden"
    >
      {/* Header Bar */}
      <div className="h-9 px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4 border-b border-[#182635] min-w-0">
        <div
          role="tablist"
          aria-label="Panel views"
          className="flex items-center gap-3.5 sm:gap-5 overflow-x-auto tabs-scroll min-w-0 flex-1"
        >
          {TERMINAL_TABS.map((tab) => {
            const isSelected = isOpen && activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`panel-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  onSelectTab(tab.id);
                  if (!isOpen) onToggleOpen();
                }}
                className={`h-9 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap border-b-2 shrink-0 ${
                  isSelected
                    ? "border-b-[#1685F8] text-[#E5EAF0]"
                    : "border-b-transparent text-[#9AA8B7] hover:text-[#E5EAF0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#9AA8B7] font-mono-code">
            <TerminalIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>zsh</span>
          </span>
          <button
            type="button"
            onClick={onToggleOpen}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse terminal panel" : "Expand terminal panel"}
            className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            ) : (
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Body */}
      {isOpen && (
        <div
          role="tabpanel"
          aria-labelledby={`panel-tab-${activeTab}`}
          className="px-3 sm:px-4 py-2.5 sm:py-3 max-h-36 sm:max-h-44 font-mono-code text-[11px] sm:text-xs leading-5 sm:leading-6 bg-[#07111B] overflow-x-auto overflow-y-auto ide-scroll"
        >
          {activeTab === "terminal" && (
            <div className="space-y-1 whitespace-nowrap">
              <p>
                <span className="text-[#9AA8B7]">rishabh@portfolio ~ % </span>
                <span className="text-[#E5EAF0]">whoami</span>
              </p>
              <p className="text-[#4ADE80]">
                Frontend Developer | Problem Solver | Product Builder
              </p>
              <p>
                <span className="text-[#9AA8B7]">rishabh@portfolio ~ % </span>
                <span className="text-[#E5EAF0]">npm run build</span>
              </p>
              <p className="text-[#4ADE80]">
                ✓ Portfolio ready for exploration.
              </p>
              <p className="flex items-center">
                <span className="text-[#9AA8B7]">rishabh@portfolio ~ %</span>
                <span
                  className="inline-block w-2 h-3.5 bg-[#E5EAF0] ml-1.5"
                  aria-hidden="true"
                />
              </p>
            </div>
          )}

          {activeTab === "problems" && (
            <p className="text-[#9AA8B7]">
              No problems have been detected in the workspace.
            </p>
          )}

          {activeTab === "output" && (
            <div className="space-y-0.5 text-[#9AA8B7]">
              <p>[portfolio] Workspace initialized with Next.js App Router &amp; TypeScript.</p>
              <p>[portfolio] Static UI mode enabled (zero animations).</p>
            </div>
          )}

          {activeTab === "debug" && (
            <p className="text-[#9AA8B7]">
              Debug Console ready — click any file in Explorer or Navigation to switch views.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
