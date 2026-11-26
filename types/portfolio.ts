export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "resume"
  | "contact"
  | "styles";

export type ActivityView =
  | "explorer"
  | "search"
  | "git"
  | "debug"
  | "extensions";

export type TerminalTab = "problems" | "output" | "debug" | "terminal";

export type FileIconKind = "tsx" | "css" | "pdf" | "image" | "folder";

export interface EditorFileMeta {
  id: SectionId;
  tabLabel: string;
  fileName: string;
  breadcrumbs: string[];
  language: string;
  cursorPos: string;
  modified?: boolean;
  iconKind: FileIconKind;
  outline: string[];
}

export interface ExplorerNode {
  id: string;
  name: string;
  kind: "folder" | "file";
  iconKind: FileIconKind;
  sectionId?: SectionId;
  modified?: boolean;
  children?: ExplorerNode[];
  assetPath?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: "blue" | "purple" | "green";
  items: string[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  highlights: string[];
  tags: string[];
  isPlaceholder?: boolean;
}

export type ProjectCategory = "All" | "Frontend" | "Full Stack" | "UI Architecture";

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  role: string;
  shortDescription: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  images: ProjectGalleryItem[];
  techStack: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
  caseStudyNotes: string[];
}
