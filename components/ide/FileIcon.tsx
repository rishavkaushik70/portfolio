import {
  FileCode2,
  FileText,
  Folder,
  FolderOpen,
  Hash,
  Image as ImageIcon,
} from "lucide-react";
import type { FileIconKind } from "@/types/portfolio";

interface FileIconProps {
  kind: FileIconKind;
  isOpen?: boolean;
  className?: string;
}

export function FileIcon({
  kind,
  isOpen = false,
  className = "w-4 h-4 shrink-0",
}: FileIconProps) {
  switch (kind) {
    case "folder":
      return isOpen ? (
        <FolderOpen
          aria-hidden="true"
          className={`${className} text-[#38BDF8]`}
        />
      ) : (
        <Folder
          aria-hidden="true"
          className={`${className} text-[#38BDF8]`}
        />
      );
    case "css":
      return (
        <Hash
          aria-hidden="true"
          className={`${className} text-[#60A5FA]`}
        />
      );
    case "pdf":
      return (
        <FileText
          aria-hidden="true"
          className={`${className} text-[#F87171]`}
        />
      );
    case "image":
      return (
        <ImageIcon
          aria-hidden="true"
          className={`${className} text-[#A78BFA]`}
        />
      );
    case "tsx":
    default:
      return (
        <FileCode2
          aria-hidden="true"
          className={`${className} text-[#38BDF8]`}
        />
      );
  }
}
