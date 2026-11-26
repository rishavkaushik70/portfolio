"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  GitBranch,
  MoreHorizontal,
  Play,
  Search as SearchIcon,
} from "lucide-react";
import {
  EXPLORER_TREE,
  PORTFOLIO_FILES,
  SKILLS_DATA,
} from "@/data/portfolio";
import type { ActivityView, ExplorerNode, SectionId } from "@/types/portfolio";
import { FileIcon } from "./FileIcon";

interface SidebarPanelProps {
  activeView: ActivityView;
  activeNodeId: string;
  activeSection: SectionId;
  onSelectSection: (section: SectionId, nodeId?: string) => void;
  onCloseMobile?: () => void;
}

export function SidebarPanel({
  activeView,
  activeNodeId,
  activeSection,
  onSelectSection,
  onCloseMobile,
}: SidebarPanelProps) {
  const [rootExpanded, setRootExpanded] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    "folder-about-me": true,
    "folder-experience": true,
    "folder-projects": true,
    "folder-skills": true,
    "folder-assets": false,
  });
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }));
  };

  const handleFileSelect = (sectionId?: SectionId, nodeId?: string) => {
    if (!sectionId) return;
    onSelectSection(sectionId, nodeId);
    onCloseMobile?.();
  };

  const renderNode = (node: ExplorerNode, depth = 0) => {
    if (node.kind === "folder") {
      const isOpen = Boolean(expandedFolders[node.id]);
      return (
        <div key={node.id}>
          <button
            type="button"
            onClick={() => toggleFolder(node.id)}
            aria-expanded={isOpen}
            className="w-full flex items-center gap-1.5 py-1 pr-2 text-left text-[13px] text-[#E5EAF0] hover:bg-[#0D1B28]"
            style={{ paddingLeft: `${12 + depth * 12}px` }}
          >
            {isOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#9AA8B7] shrink-0" aria-hidden="true" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-[#9AA8B7] shrink-0" aria-hidden="true" />
            )}
            <FileIcon kind="folder" isOpen={isOpen} className="w-4 h-4 shrink-0" />
            <span className="truncate">{node.name}</span>
          </button>

          {isOpen && node.children && (
            <div>{node.children.map((child) => renderNode(child, depth + 1))}</div>
          )}
        </div>
      );
    }

    const isActive = node.id === activeNodeId;

    return (
      <button
        key={node.id}
        type="button"
        onClick={() => handleFileSelect(node.sectionId, node.id)}
        className={`w-full flex items-center justify-between gap-2 py-2 lg:py-1 pr-3 text-left text-[13px] ${
          isActive
            ? "bg-[#13263A] text-[#E5EAF0]"
            : "text-[#9AA8B7] hover:bg-[#0D1B28] hover:text-[#E5EAF0]"
        }`}
        style={{ paddingLeft: `${28 + depth * 12}px` }}
      >
        <span className="flex items-center gap-2 min-w-0">
          <FileIcon kind={node.iconKind} className="w-4 h-4 shrink-0" />
          <span className="truncate">{node.name}</span>
        </span>
        {node.modified && (
          <span
            className="text-[11px] font-mono-code text-[#E2B86B] shrink-0"
            aria-label="Modified"
          >
            M
          </span>
        )}
      </button>
    );
  };

  const currentOutline = PORTFOLIO_FILES[activeSection].outline;

  if (activeView === "search") {
    const query = searchQuery.trim().toLowerCase();
    const matchedFiles = Object.values(PORTFOLIO_FILES).filter(
      (file) =>
        file.tabLabel.toLowerCase().includes(query) ||
        file.breadcrumbs.join(" ").toLowerCase().includes(query),
    );
    const matchedSkills = SKILLS_DATA.flatMap((cat) =>
      cat.items
        .filter((item) => item.toLowerCase().includes(query))
        .map((item) => ({ category: cat.title, skill: item })),
    );

    return (
      <div className="flex flex-col h-full bg-[#091521]">
        <div className="h-9 px-4 flex items-center justify-between border-b border-[#243342]">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
            Search
          </span>
        </div>
        <div className="p-3 space-y-3 overflow-y-auto ide-scroll flex-1">
          <search>
            <label htmlFor="ide-search-input" className="visually-hidden">
              Search portfolio files and skills
            </label>
            <div className="flex items-center gap-2 bg-[#07111B] border border-[#243342] rounded px-2.5 py-1.5">
              <SearchIcon className="w-3.5 h-3.5 text-[#9AA8B7] shrink-0" aria-hidden="true" />
              <input
                id="ide-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search files or skills..."
                className="w-full bg-transparent text-base sm:text-xs text-[#E5EAF0] placeholder:text-[#9AA8B7]/60 focus:outline-none"
              />
            </div>
          </search>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#9AA8B7] mb-1.5">
              Files ({matchedFiles.length})
            </p>
            <div className="space-y-0.5">
              {matchedFiles.map((file) => (
                <button
                  key={file.id}
                  type="button"
                  onClick={() => handleFileSelect(file.id)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs text-[#E5EAF0] hover:bg-[#0D1B28] text-left"
                >
                  <FileIcon kind={file.iconKind} className="w-3.5 h-3.5" />
                  <span className="truncate">{file.tabLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {query && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#9AA8B7] mb-1.5">
                Skills ({matchedSkills.length})
              </p>
              <div className="space-y-1">
                {matchedSkills.map((entry) => (
                  <button
                    key={`${entry.category}-${entry.skill}`}
                    type="button"
                    onClick={() => handleFileSelect("skills")}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded text-xs text-[#9AA8B7] hover:bg-[#0D1B28] hover:text-[#E5EAF0] text-left"
                  >
                    <span>{entry.skill}</span>
                    <span className="text-[10px] text-[#1685F8]">
                      {entry.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (activeView === "git") {
    return (
      <div className="flex flex-col h-full bg-[#091521]">
        <div className="h-9 px-4 flex items-center justify-between border-b border-[#243342]">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
            Source Control
          </span>
        </div>
        <div className="p-3 space-y-3 text-xs flex-1 overflow-y-auto ide-scroll">
          <div className="flex items-center gap-2 text-[#E5EAF0] bg-[#0D1B28] border border-[#243342] rounded px-2.5 py-2">
            <GitBranch className="w-4 h-4 text-[#1685F8]" aria-hidden="true" />
            <span>Branch: main</span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#9AA8B7] mb-1.5">
              Changes (2)
            </p>
            <div className="space-y-1">
              {(["home", "contact"] as SectionId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleFileSelect(id)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#0D1B28] text-left text-[#E5EAF0]"
                >
                  <span className="flex items-center gap-2">
                    <FileIcon kind="tsx" className="w-3.5 h-3.5" />
                    <span>{PORTFOLIO_FILES[id].tabLabel}</span>
                  </span>
                  <span className="font-mono-code text-[#E2B86B]">M</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeView === "debug") {
    return (
      <div className="flex flex-col h-full bg-[#091521]">
        <div className="h-9 px-4 flex items-center justify-between border-b border-[#243342]">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
            Run and Debug
          </span>
        </div>
        <div className="p-3 space-y-2 text-xs flex-1 overflow-y-auto ide-scroll">
          <p className="text-[#9AA8B7]">Quick inspect views:</p>
          {(
            [
              { id: "home", label: "Launch Hero (home.tsx)" },
              { id: "projects", label: "Inspect Projects (projects.tsx)" },
              { id: "experience", label: "View Timeline (experience)" },
              { id: "contact", label: "Test Contact Form (contact.tsx)" },
            ] as { id: SectionId; label: string }[]
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleFileSelect(item.id)}
              className="w-full flex items-center gap-2 px-2.5 py-2 rounded bg-[#0D1B28] border border-[#243342] text-[#E5EAF0] hover:border-[#1685F8] text-left"
            >
              <Play className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (activeView === "extensions") {
    const stackItems = [
      { name: "Next.js 16", detail: "App Router & SSR" },
      { name: "TypeScript", detail: "Strict static typing" },
      { name: "Tailwind CSS v4", detail: "Utility-first styling" },
      { name: "Prisma & PostgreSQL", detail: "Database & ORM stack" },
      { name: "NestJS & Node.js", detail: "Backend API architecture" },
    ];
    return (
      <div className="flex flex-col h-full bg-[#091521]">
        <div className="h-9 px-4 flex items-center justify-between border-b border-[#243342]">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
            Extensions
          </span>
        </div>
        <div className="p-3 space-y-2 flex-1 overflow-y-auto ide-scroll">
          {stackItems.map((ext) => (
            <button
              key={ext.name}
              type="button"
              onClick={() => handleFileSelect("skills")}
              className="w-full text-left p-2.5 rounded bg-[#0D1B28] border border-[#243342] hover:border-[#1685F8]"
            >
              <div className="text-xs font-medium text-[#E5EAF0]">{ext.name}</div>
              <div className="text-[11px] text-[#9AA8B7] mt-0.5">{ext.detail}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#091521] select-none">
      {/* Sidebar Header */}
      <div className="h-9 px-4 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
          Explorer
        </span>
        <MoreHorizontal className="w-4 h-4 text-[#9AA8B7]" aria-hidden="true" />
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto ide-scroll pb-2">
        <button
          type="button"
          onClick={() => setRootExpanded((prev) => !prev)}
          aria-expanded={rootExpanded}
          className="w-full flex items-center gap-1.5 px-2 py-1 text-left text-[11px] font-bold tracking-wider uppercase text-[#E5EAF0] hover:bg-[#0D1B28]"
        >
          {rootExpanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-[#9AA8B7]" aria-hidden="true" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-[#9AA8B7]" aria-hidden="true" />
          )}
          <span>Portfolio</span>
        </button>

        {rootExpanded && (
          <div className="mt-0.5">
            {EXPLORER_TREE.map((node) => renderNode(node, 0))}
          </div>
        )}
      </div>

      {/* Bottom Accordions: OUTLINE & TIMELINE */}
      <div className="border-t border-[#243342] shrink-0">
        <button
          type="button"
          onClick={() => setOutlineOpen((prev) => !prev)}
          aria-expanded={outlineOpen}
          className="w-full h-7 px-2 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7] hover:bg-[#0D1B28] hover:text-[#E5EAF0]"
        >
          {outlineOpen ? (
            <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          )}
          <span>Outline</span>
        </button>
        {outlineOpen && (
          <ul className="px-4 pb-2 space-y-1 text-xs font-mono-code text-[#9AA8B7]">
            {currentOutline.map((symbol) => (
              <li key={symbol} className="truncate">
                <span className="text-[#8B5CF6] mr-1.5">◇</span>
                {symbol}
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => setTimelineOpen((prev) => !prev)}
          aria-expanded={timelineOpen}
          className="w-full h-7 px-2 border-t border-[#243342] flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7] hover:bg-[#0D1B28] hover:text-[#E5EAF0]"
        >
          {timelineOpen ? (
            <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          )}
          <span>Timeline</span>
        </button>
        {timelineOpen && (
          <div className="px-4 pb-2 space-y-1 text-[11px] text-[#9AA8B7]">
            <button
              type="button"
              onClick={() => handleFileSelect("experience")}
              className="block text-left hover:text-[#E5EAF0]"
            >
              • Open experience/index.tsx
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
