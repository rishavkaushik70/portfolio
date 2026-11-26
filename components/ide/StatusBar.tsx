import { AlertTriangle, Bell, GitBranch, RefreshCw, XCircle } from "lucide-react";
import { PORTFOLIO_FILES } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";

interface StatusBarProps {
  activeSection: SectionId;
}

export function StatusBar({ activeSection }: StatusBarProps) {
  const fileMeta = PORTFOLIO_FILES[activeSection];

  return (
    <footer className="h-6 bg-[#0E63C8] text-white px-2.5 sm:px-3 flex items-center justify-between gap-2 text-[11px] select-none shrink-0 min-w-0 overflow-hidden">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <span className="inline-flex items-center gap-1 font-medium shrink-0">
          <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
          <span>main</span>
        </span>

        <RefreshCw className="w-3 h-3 hidden sm:inline shrink-0" aria-hidden="true" />

        <span className="inline-flex items-center gap-1 shrink-0">
          <XCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>0</span>
          <AlertTriangle className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
          <span>0</span>
        </span>

        <span className="hidden md:inline truncate">{fileMeta.language}</span>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
        <span className="hidden sm:inline">{fileMeta.cursorPos}</span>
        <span className="hidden md:inline">Spaces: 2</span>
        <span>UTF-8</span>
        <span className="hidden sm:inline">LF</span>
        <span className="hidden sm:inline">{`{ } ${fileMeta.language}`}</span>
        <Bell className="w-3.5 h-3.5" aria-hidden="true" />
      </div>
    </footer>
  );
}
