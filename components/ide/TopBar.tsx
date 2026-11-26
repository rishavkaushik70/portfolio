import {
  Compass,
  Menu,
  PanelBottom,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

interface TopBarProps {
  explorerOpen: boolean;
  drawerExplorerOpen: boolean;
  terminalOpen: boolean;
  rightNavOpen: boolean;
  drawerNavOpen: boolean;
  onToggleExplorer: () => void;
  onToggleTerminal: () => void;
  onToggleRightNav: () => void;
  onToggleDrawerExplorer: () => void;
  onToggleDrawerNav: () => void;
}

export function TopBar({
  explorerOpen,
  drawerExplorerOpen,
  terminalOpen,
  rightNavOpen,
  drawerNavOpen,
  onToggleExplorer,
  onToggleTerminal,
  onToggleRightNav,
  onToggleDrawerExplorer,
  onToggleDrawerNav,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 lg:static h-10 lg:h-9 bg-[#07111B] border-b border-[#243342] px-2.5 sm:px-3 flex items-center justify-between gap-2 select-none shrink-0 min-w-0">
      {/* Left: macOS Window Controls + Mobile Explorer Trigger */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="hidden sm:flex items-center gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
        </div>

        <button
          type="button"
          onClick={onToggleDrawerExplorer}
          aria-expanded={drawerExplorerOpen}
          aria-label="Open file explorer"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
        >
          <Menu className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Center: Window Title */}
      <div className="text-xs sm:text-[13px] font-medium text-[#9AA8B7] truncate text-center min-w-0 flex-1">
        <span className="sm:hidden">{SITE_CONFIG.shortName} — Portfolio</span>
        <span className="hidden sm:inline">{SITE_CONFIG.windowTitle}</span>
      </div>

      {/* Right: Layout Panel Toggles */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Tablet Explorer Drawer Toggle */}
        <button
          type="button"
          onClick={onToggleDrawerExplorer}
          aria-pressed={drawerExplorerOpen}
          aria-label="Toggle Explorer Drawer"
          className={`hidden md:inline-flex lg:hidden items-center justify-center w-8 h-8 rounded ${
            drawerExplorerOpen
              ? "text-[#E5EAF0] bg-[#0D1B28]"
              : "text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
          }`}
        >
          <PanelLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Desktop Explorer Sidebar Toggle */}
        <button
          type="button"
          onClick={onToggleExplorer}
          aria-pressed={explorerOpen}
          aria-label="Toggle Explorer Sidebar"
          className={`hidden lg:inline-flex items-center justify-center w-7 h-7 rounded ${
            explorerOpen
              ? "text-[#E5EAF0] bg-[#0D1B28]"
              : "text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
          }`}
        >
          <PanelLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Terminal Toggle (All Viewports) */}
        <button
          type="button"
          onClick={onToggleTerminal}
          aria-pressed={terminalOpen}
          aria-label="Toggle Terminal Panel"
          className={`inline-flex items-center justify-center w-9 h-9 lg:w-7 lg:h-7 rounded ${
            terminalOpen
              ? "text-[#E5EAF0] bg-[#0D1B28]"
              : "text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
          }`}
        >
          <PanelBottom className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Desktop Right Navigation Toggle */}
        <button
          type="button"
          onClick={onToggleRightNav}
          aria-pressed={rightNavOpen}
          aria-label="Toggle Right Navigation Panel"
          className={`hidden lg:inline-flex items-center justify-center w-7 h-7 rounded ${
            rightNavOpen
              ? "text-[#E5EAF0] bg-[#0D1B28]"
              : "text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
          }`}
        >
          <PanelRight className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Mobile & Tablet Navigation Drawer Trigger */}
        <button
          type="button"
          onClick={onToggleDrawerNav}
          aria-expanded={drawerNavOpen}
          aria-label="Open section navigation"
          className="lg:hidden inline-flex items-center justify-center w-9 h-9 md:w-8 md:h-8 rounded text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
        >
          <Compass className="w-4 h-4 md:hidden" aria-hidden="true" />
          <PanelRight className="w-4 h-4 hidden md:block" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
