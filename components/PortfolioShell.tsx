"use client";

import { useEffect, useRef, useState } from "react";
import {
  Blocks,
  Files,
  GitBranch,
  Play,
  Search,
  X,
} from "lucide-react";
import { DEFAULT_OPEN_TABS, PORTFOLIO_FILES } from "@/data/portfolio";
import type { ActivityView, SectionId, TerminalTab } from "@/types/portfolio";
import { ActivityBar } from "./ide/ActivityBar";
import { BottomPanel } from "./ide/BottomPanel";
import { Breadcrumbs } from "./ide/Breadcrumbs";
import { EditorTabs } from "./ide/EditorTabs";
import { RightNavigation } from "./ide/RightNavigation";
import { SidebarPanel } from "./ide/SidebarPanel";
import { StatusBar } from "./ide/StatusBar";
import { TopBar } from "./ide/TopBar";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HomeSection } from "./sections/HomeSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { StylesSection } from "./sections/StylesSection";

const ALL_SECTION_ORDER: SectionId[] = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "resume",
  "contact",
  "styles",
];

const DEFAULT_NODE_FOR_SECTION: Record<SectionId, string> = {
  home: "file-home",
  about: "file-about-me",
  experience: "experience-index",
  projects: "file-projects",
  skills: "file-skills",
  resume: "file-resume",
  contact: "file-contact",
  styles: "file-styles",
};

const DRAWER_ACTIVITY_TABS: {
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

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [activeNodeId, setActiveNodeId] = useState<string>("file-home");
  const [openTabs, setOpenTabs] = useState<SectionId[]>(DEFAULT_OPEN_TABS);
  const [activeActivity, setActiveActivity] = useState<ActivityView>("explorer");
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [rightNavOpen, setRightNavOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [activeTerminalTab, setActiveTerminalTab] =
    useState<TerminalTab>("terminal");
  const [drawerExplorerOpen, setDrawerExplorerOpen] = useState(false);
  const [drawerNavOpen, setDrawerNavOpen] = useState(false);

  const mainRef = useRef<HTMLElement | null>(null);
  const drawerExplorerCloseRef = useRef<HTMLButtonElement | null>(null);
  const drawerNavCloseRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerExplorerOpen(false);
        setDrawerNavOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (drawerExplorerOpen) {
      drawerExplorerCloseRef.current?.focus();
    }
  }, [drawerExplorerOpen]);

  useEffect(() => {
    if (drawerNavOpen) {
      drawerNavCloseRef.current?.focus();
    }
  }, [drawerNavOpen]);

  const navigateToSection = (section: SectionId, nodeId?: string) => {
    setOpenTabs((prev) => (prev.includes(section) ? prev : [...prev, section]));
    setActiveSection(section);
    setActiveNodeId(nodeId ?? DEFAULT_NODE_FOR_SECTION[section]);
    mainRef.current?.scrollTo({ top: 0 });
  };

  const handleCloseTab = (section: SectionId) => {
    setOpenTabs((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((item) => item !== section);
      if (activeSection === section) {
        const closedIndex = prev.indexOf(section);
        const fallback = next[Math.min(closedIndex, next.length - 1)];
        setActiveSection(fallback);
        setActiveNodeId(DEFAULT_NODE_FOR_SECTION[fallback]);
      }
      return next;
    });
  };

  const handleOpenNextTab = () => {
    const unopened = ALL_SECTION_ORDER.find((id) => !openTabs.includes(id));
    if (unopened) {
      navigateToSection(unopened);
    } else {
      const currentIndex = openTabs.indexOf(activeSection);
      const nextTab = openTabs[(currentIndex + 1) % openTabs.length];
      navigateToSection(nextTab);
    }
  };

  const handleSelectActivityDesktop = (view: ActivityView) => {
    if (explorerOpen && activeActivity === view) {
      setExplorerOpen(false);
      return;
    }
    setActiveActivity(view);
    setExplorerOpen(true);
  };

  const handleSelectActivityTablet = (view: ActivityView) => {
    if (drawerExplorerOpen && activeActivity === view) {
      setDrawerExplorerOpen(false);
      return;
    }
    setDrawerNavOpen(false);
    setActiveActivity(view);
    setDrawerExplorerOpen(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={(s) => navigateToSection(s)} />;
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      case "styles":
        return <StylesSection />;
      default:
        return <HomeSection onNavigate={(s) => navigateToSection(s)} />;
    }
  };

  return (
    <div className="min-h-dvh lg:h-dvh flex flex-col bg-[#07111B] text-[#E5EAF0] lg:overflow-hidden w-full max-w-full">
      <a
        href="#editor-main"
        className="visually-hidden focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:bg-[#1266C8] focus:text-white focus:text-xs"
      >
        Skip to editor content
      </a>

      {/* Top Application Bar */}
      <TopBar
        explorerOpen={explorerOpen}
        drawerExplorerOpen={drawerExplorerOpen}
        terminalOpen={terminalOpen}
        rightNavOpen={rightNavOpen}
        drawerNavOpen={drawerNavOpen}
        onToggleExplorer={() => setExplorerOpen((prev) => !prev)}
        onToggleTerminal={() => setTerminalOpen((prev) => !prev)}
        onToggleRightNav={() => setRightNavOpen((prev) => !prev)}
        onToggleDrawerExplorer={() => {
          setDrawerNavOpen(false);
          setDrawerExplorerOpen((prev) => !prev);
        }}
        onToggleDrawerNav={() => {
          setDrawerExplorerOpen(false);
          setDrawerNavOpen((prev) => !prev);
        }}
      />

      {/* Main IDE Workspace Row */}
      <div
        className="flex-1 min-h-0 flex relative min-w-0"
        inert={drawerExplorerOpen || drawerNavOpen}
      >
        {/* Left Activity Bar (Tablet & Desktop: 768px+) */}
        <ActivityBar
          activeView={activeActivity}
          sidebarOpen={explorerOpen}
          drawerOpen={drawerExplorerOpen}
          onSelectDesktopView={handleSelectActivityDesktop}
          onSelectTabletView={handleSelectActivityTablet}
          onNavigateSection={(s) => navigateToSection(s)}
        />

        {/* Left Explorer Sidebar (Desktop: 1024px+) */}
        {explorerOpen && (
          <aside
            aria-label="Workspace explorer"
            className="hidden lg:flex w-[204px] xl:w-[236px] border-r border-[#243342] flex-col min-h-0 shrink-0"
          >
            <SidebarPanel
              activeView={activeActivity}
              activeNodeId={activeNodeId}
              activeSection={activeSection}
              onSelectSection={navigateToSection}
            />
          </aside>
        )}

        {/* Center Editor + Bottom Terminal */}
        <div className="flex-1 min-w-0 flex flex-col bg-[#08131E] min-h-0">
          <EditorTabs
            openTabs={openTabs}
            activeSection={activeSection}
            onSelectTab={(s) => navigateToSection(s)}
            onCloseTab={handleCloseTab}
            onOpenNextTab={handleOpenNextTab}
          />

          <Breadcrumbs activeSection={activeSection} />

          <main
            id="editor-main"
            ref={mainRef}
            tabIndex={-1}
            className="@container/editor flex-1 min-h-0 overflow-y-auto ide-scroll px-3.5 py-5 sm:px-6 sm:py-6 lg:px-8"
          >
            <div
              role="tabpanel"
              aria-labelledby={
                openTabs.includes(activeSection)
                  ? `tab-${activeSection}`
                  : undefined
              }
              aria-label={PORTFOLIO_FILES[activeSection].tabLabel}
              className="max-w-6xl mx-auto w-full min-w-0"
            >
              {renderSection()}
            </div>
          </main>

          <BottomPanel
            isOpen={terminalOpen}
            activeTab={activeTerminalTab}
            onSelectTab={setActiveTerminalTab}
            onToggleOpen={() => setTerminalOpen((prev) => !prev)}
          />
        </div>

        {/* Right Navigation Panel (Desktop: 1024px+) */}
        {rightNavOpen && (
          <aside
            aria-label="Quick navigation and availability"
            className="hidden lg:flex w-[196px] xl:w-[228px] border-l border-[#243342] flex-col min-h-0 shrink-0"
          >
            <RightNavigation
              activeSection={activeSection}
              onSelectSection={(s) => navigateToSection(s)}
            />
          </aside>
        )}
      </div>

      {/* Mobile & Tablet Explorer / Activity Drawer (< 1024px) */}
      {drawerExplorerOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Workspace explorer drawer"
        >
          <div className="w-[290px] max-w-[88vw] h-full bg-[#091521] border-r border-[#243342] flex flex-col">
            <div className="h-11 px-3 border-b border-[#243342] flex items-center justify-between shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9AA8B7]">
                Workspace
              </span>
              <button
                ref={drawerExplorerCloseRef}
                type="button"
                onClick={() => setDrawerExplorerOpen(false)}
                aria-label="Close workspace explorer"
                className="w-9 h-9 flex items-center justify-center rounded text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Compact Activity Switcher for Mobile (<768px) */}
            <div
              className="flex md:hidden items-center justify-around border-b border-[#243342] bg-[#07111B] px-1 py-1 shrink-0"
              role="group"
              aria-label="Activity views"
            >
              {DRAWER_ACTIVITY_TABS.map(({ id, label, icon: Icon }) => {
                const isSelected = activeActivity === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveActivity(id)}
                    aria-label={label}
                    aria-pressed={isSelected}
                    className={`w-10 h-9 flex items-center justify-center rounded ${
                      isSelected
                        ? "bg-[#0D1B28] text-[#1685F8]"
                        : "text-[#9AA8B7] hover:text-[#E5EAF0]"
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="flex-1 min-h-0">
              <SidebarPanel
                activeView={activeActivity}
                activeNodeId={activeNodeId}
                activeSection={activeSection}
                onSelectSection={navigateToSection}
                onCloseMobile={() => setDrawerExplorerOpen(false)}
              />
            </div>
          </div>
          <button
            type="button"
            aria-label="Dismiss workspace explorer"
            onClick={() => setDrawerExplorerOpen(false)}
            className="flex-1 bg-black/60"
          />
        </div>
      )}

      {/* Mobile & Tablet Right Navigation Drawer (< 1024px) */}
      {drawerNavOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Section navigation drawer"
        >
          <button
            type="button"
            aria-label="Dismiss section navigation"
            onClick={() => setDrawerNavOpen(false)}
            className="flex-1 bg-black/60"
          />
          <div className="w-[280px] max-w-[85vw] h-full bg-[#091521] border-l border-[#243342] flex flex-col">
            <div className="h-11 px-3 border-b border-[#243342] flex items-center justify-between shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9AA8B7]">
                Menu
              </span>
              <button
                ref={drawerNavCloseRef}
                type="button"
                onClick={() => setDrawerNavOpen(false)}
                aria-label="Close section navigation"
                className="w-9 h-9 flex items-center justify-center rounded text-[#9AA8B7] hover:text-[#E5EAF0] hover:bg-[#0D1B28]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 min-h-0">
              <RightNavigation
                activeSection={activeSection}
                onSelectSection={(s) => navigateToSection(s)}
                onCloseMobile={() => setDrawerNavOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status Bar */}
      <StatusBar activeSection={activeSection} />
    </div>
  );
}
