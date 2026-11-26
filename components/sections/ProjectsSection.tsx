"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  Images,
  X,
} from "lucide-react";
import { PROJECT_CATEGORIES, PROJECTS_DATA } from "@/data/portfolio";
import type { ProjectCategory, ProjectItem } from "@/types/portfolio";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const visibleProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  const openProjectGallery = (project: ProjectItem, slideIndex = 0) => {
    setActiveProject(project);
    setActiveSlideIndex(slideIndex);
    dialogRef.current?.showModal();
  };

  const closeProjectGallery = () => {
    dialogRef.current?.close();
    setActiveProject(null);
    setActiveSlideIndex(0);
  };

  const showPrevSlide = () => {
    if (!activeProject) return;
    setActiveSlideIndex(
      (prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length,
    );
  };

  const showNextSlide = () => {
    if (!activeProject) return;
    setActiveSlideIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const activeSlide =
    activeProject && activeProject.images[activeSlideIndex]
      ? activeProject.images[activeSlideIndex]
      : null;

  return (
    <div className="space-y-6 min-w-0">
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
          Selected Work
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          Web applications built with React, Next.js, TypeScript, PostgreSQL, and modern UI engineering. Click any project to inspect its full screenshot gallery.
        </p>
      </div>

      {/* Category Filter */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isActive}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium border ${
                isActive
                  ? "bg-[#1266C8] border-[#1685F8] text-white"
                  : "bg-[#0D1B28] border-[#243342] text-[#9AA8B7] hover:text-[#E5EAF0]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 @xl/editor:grid-cols-2 @3xl/editor:grid-cols-2 gap-5">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl bg-[#0D1B28] border border-[#243342] overflow-hidden flex flex-col min-w-0"
          >
            <button
              type="button"
              onClick={() => openProjectGallery(project, 0)}
              aria-label={`Open ${project.title} screenshot gallery`}
              className="relative aspect-[16/9] w-full bg-[#07111B] border-b border-[#243342] overflow-hidden block text-left"
            >
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                width={project.thumbnailWidth}
                height={project.thumbnailHeight}
                sizes="(max-width: 768px) 100vw, 480px"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07111B]/90 border border-[#243342] text-[11px] font-mono-code text-[#E5EAF0]">
                <Images className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                <span>{project.images.length} screens</span>
              </span>
            </button>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 min-w-0">
              <div className="space-y-2.5 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono-code text-[#38BDF8]">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-[#9AA8B7]">
                    {project.role}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-[#E5EAF0]">
                  {project.title}
                </h2>

                <p className="text-sm text-[#9AA8B7] leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#08131E] border border-[#243342] text-[11px] font-mono-code text-[#9AA8B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#243342] flex flex-wrap items-center gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#08131E] border border-[#243342] text-xs font-medium text-[#E5EAF0] hover:border-[#1685F8]"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    aria-label={`GitHub repository link editable for ${project.title}`}
                    onClick={() => openProjectGallery(project, 0)}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#08131E] border border-dashed border-[#364B61] text-xs font-medium text-[#9AA8B7] hover:text-[#E5EAF0]"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>GitHub</span>
                  </button>
                )}

                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#08131E] border border-[#243342] text-xs font-medium text-[#E5EAF0] hover:border-[#1685F8]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    aria-label={`Live demo link editable for ${project.title}`}
                    onClick={() => openProjectGallery(project, 0)}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#08131E] border border-dashed border-[#364B61] text-xs font-medium text-[#9AA8B7] hover:text-[#E5EAF0]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Live Demo</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => openProjectGallery(project, 0)}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#1685F8]/15 border border-[#1685F8]/40 text-xs font-medium text-[#38BDF8] hover:bg-[#1685F8]/25 w-full sm:w-auto sm:ml-auto"
                >
                  <Images className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Gallery &amp; Details</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Responsive Project Gallery & Details Dialog */}
      <dialog
        ref={dialogRef}
        aria-labelledby="project-gallery-title"
        onCancel={closeProjectGallery}
        className="m-auto w-[min(95vw,56rem)] max-w-full max-h-[92dvh] rounded-xl bg-[#0D1B28] border border-[#243342] text-[#E5EAF0] p-0 overflow-hidden backdrop:bg-black/75"
      >
        {activeProject && activeSlide && (
          <div className="flex flex-col max-h-[92dvh] min-w-0">
            {/* Modal Header */}
            <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-[#243342] flex items-start justify-between gap-3 shrink-0 min-w-0">
              <div className="min-w-0">
                <p className="text-xs font-mono-code text-[#38BDF8] truncate">
                  {activeProject.category} · {activeProject.role}
                </p>
                <h2
                  id="project-gallery-title"
                  className="text-base sm:text-xl font-semibold text-[#E5EAF0] mt-0.5 truncate"
                >
                  {activeProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeProjectGallery}
                aria-label="Close project gallery"
                className="w-9 h-9 rounded-lg bg-[#08131E] border border-[#243342] flex items-center justify-center text-[#9AA8B7] hover:text-[#E5EAF0] shrink-0"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-3.5 sm:p-5 space-y-4 sm:space-y-5 overflow-y-auto ide-scroll min-w-0">
              {/* Primary Screenshot Viewer */}
              <div className="space-y-2.5 min-w-0">
                <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full rounded-lg bg-[#07111B] border border-[#243342] overflow-hidden">
                  <Image
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    width={activeSlide.width}
                    height={activeSlide.height}
                    sizes="(max-width: 768px) 92vw, 840px"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <p className="text-xs text-[#E5EAF0] font-medium min-w-0">
                    {activeSlide.caption}
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono-code text-[#9AA8B7]">
                      {activeSlideIndex + 1} / {activeProject.images.length}
                    </span>

                    <button
                      type="button"
                      onClick={showPrevSlide}
                      aria-label="Previous screenshot"
                      className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-[#08131E] border border-[#243342] flex items-center justify-center text-[#E5EAF0] hover:border-[#1685F8]"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextSlide}
                      aria-label="Next screenshot"
                      className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-[#08131E] border border-[#243342] flex items-center justify-center text-[#E5EAF0] hover:border-[#1685F8]"
                    >
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div
                  className="flex gap-2 overflow-x-auto ide-scroll pb-1 w-full max-w-full"
                  role="group"
                  aria-label={`${activeProject.title} screenshots`}
                >
                  {activeProject.images.map((item, idx) => {
                    const isCurrent = idx === activeSlideIndex;
                    return (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setActiveSlideIndex(idx)}
                        aria-pressed={isCurrent}
                        aria-label={`View screenshot ${idx + 1}: ${item.caption}`}
                        className={`relative shrink-0 w-20 sm:w-28 aspect-[16/9] rounded-md overflow-hidden bg-[#07111B] border-2 ${
                          isCurrent
                            ? "border-[#1685F8]"
                            : "border-[#243342] opacity-75 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          loading="lazy"
                          sizes="112px"
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Overview & Implementation Notes */}
              <div className="space-y-3 pt-2 border-t border-[#243342]">
                <p className="text-sm text-[#9AA8B7] leading-relaxed">
                  {activeProject.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#08131E] border border-[#243342] text-[11px] font-mono-code text-[#9AA8B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {activeProject.caseStudyNotes.map((note) => (
                    <li
                      key={note}
                      className="p-3 rounded-lg bg-[#08131E] border border-[#243342] text-xs leading-relaxed text-[#9AA8B7]"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-t border-[#243342] flex justify-end shrink-0">
              <button
                type="button"
                onClick={closeProjectGallery}
                className="min-h-[40px] px-4 py-2 rounded-lg bg-[#1266C8] text-white text-xs font-medium hover:bg-[#1685F8]"
              >
                Close Gallery
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
