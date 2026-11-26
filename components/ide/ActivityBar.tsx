import {
  Blocks,
  CircleUserRound,
  Files,
  GitBranch,
  Play,
  Search,
  Settings,
} from "lucide-react";
import type { ActivityView, SectionId } from "@/types/portfolio";

interface ActivityBarProps {
  activeView: ActivityView;
  sidebarOpen: boolean;
  drawerOpen: boolean;
  onSelectDesktopView: (view: ActivityView) => void;
  onSelectTabletView: (view: ActivityView) => void;
  onNavigateSection: (section: SectionId) => void;
}

const ACTIVITY_ITEMS: {
  id: ActivityView;
  label: string;
  icon: typeof Files;
}[] = [
  { id: "explorer", label: "Explorer", icon: Files },
  { id: "search", label: "Search", icon: Search },
  { id: "git", label: "Source Control", icon: GitBranch },
  { id: "debug", label: "Run and Debug", icon: Play },
  { id: "extensions", label: "Extensions", icon: Blocks },
];

export function ActivityBar({
  activeView,
  sidebarOpen,
  drawerOpen,
  onSelectDesktopView,
  onSelectTabletView,
  onNavigateSection,
}: ActivityBarProps) {
  return (
    <aside
      aria-label="Activity bar"
      className="hidden md:flex w-11 lg:w-12 bg-[#07111B] border-r border-[#243342] flex-col justify-between items-center py-2 shrink-0 select-none"
    >
      <div className="flex flex-col items-center w-full gap-1">
        {ACTIVITY_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActiveDesktop = sidebarOpen && activeView === id;
          const isActiveTablet = drawerOpen && activeView === id;
          return (
            <div key={id} className="w-full">
              {/* Tablet button (768px - 1023px) */}
              <button
                type="button"
                onClick={() => onSelectTabletView(id)}
                aria-label={label}
                aria-pressed={isActiveTablet}
                className={`flex lg:hidden w-full h-11 items-center justify-center border-l-2 ${
                  isActiveTablet
                    ? "border-l-[#1685F8] text-[#E5EAF0] bg-[#091521]"
                    : "border-l-transparent text-[#9AA8B7] hover:text-[#E5EAF0]"
                }`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Desktop button (1024px+) */}
              <button
                type="button"
                onClick={() => onSelectDesktopView(id)}
                aria-label={label}
                aria-pressed={isActiveDesktop}
                className={`hidden lg:flex w-full h-11 items-center justify-center border-l-2 ${
                  isActiveDesktop
                    ? "border-l-[#1685F8] text-[#E5EAF0] bg-[#091521]"
                    : "border-l-transparent text-[#9AA8B7] hover:text-[#E5EAF0]"
                }`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center w-full gap-1">
        <button
          type="button"
          onClick={() => onNavigateSection("about")}
          aria-label="Profile — About Me"
          className="w-full h-11 flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0]"
        >
          <CircleUserRound className="w-5 h-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => onNavigateSection("styles")}
          aria-label="Theme Settings — styles.css"
          className="w-full h-11 flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0]"
        >
          <Settings className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
