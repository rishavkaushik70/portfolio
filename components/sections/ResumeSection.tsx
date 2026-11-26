"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Download,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";
import {
  EDUCATION_TIMELINE,
  EXPERIENCE_TIMELINE,
  PROJECTS_DATA,
  SITE_CONFIG,
  SKILLS_DATA,
} from "@/data/portfolio";

export function ResumeSection() {
  const [copied, setCopied] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6 min-w-0">
      {/* Header Row */}
      <div className="flex flex-col @2xl/editor:flex-row @2xl/editor:items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
            Resume
          </h1>
          <p className="text-sm text-[#9AA8B7] mt-1">
            {SITE_CONFIG.fullName} — {SITE_CONFIG.role}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={SITE_CONFIG.resumePath}
            download={SITE_CONFIG.resumeDownloadName}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-[#1266C8] text-white text-xs sm:text-sm font-medium hover:bg-[#1685F8] w-full sm:w-auto"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3.5 py-2 rounded-lg bg-[#0D1B28] border border-[#243342] text-xs sm:text-sm font-medium text-[#E5EAF0] hover:border-[#1685F8] flex-1 sm:flex-initial"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#4ADE80]" aria-hidden="true" />
                <span>Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#9AA8B7]" aria-hidden="true" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowPdfPreview((prev) => !prev)}
            aria-expanded={showPdfPreview}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3.5 py-2 rounded-lg bg-[#0D1B28] border border-[#243342] text-xs sm:text-sm font-medium text-[#E5EAF0] hover:border-[#1685F8] flex-1 sm:flex-initial"
          >
            {showPdfPreview ? (
              <>
                <EyeOff className="w-4 h-4 text-[#9AA8B7]" aria-hidden="true" />
                <span>Hide Preview</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-[#9AA8B7]" aria-hidden="true" />
                <span>Preview PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Snapshot Summary Cards */}
      <div className="grid grid-cols-1 @xl/editor:grid-cols-3 gap-3">
        <div className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 flex items-center gap-3 min-w-0">
          <FileText className="w-5 h-5 text-[#1685F8] shrink-0" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] text-[#9AA8B7]">Primary Focus</p>
            <p className="text-sm font-semibold text-[#E5EAF0]">
              Frontend &amp; Full-Stack
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 flex items-center gap-3 min-w-0">
          <GraduationCap className="w-5 h-5 text-[#8B5CF6] shrink-0" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] text-[#9AA8B7]">Degree</p>
            <p className="text-sm font-semibold text-[#E5EAF0]">
              BCA (2022 – 2025)
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 flex items-center gap-3 min-w-0">
          <MapPin className="w-5 h-5 text-[#4ADE80] shrink-0" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] text-[#9AA8B7]">Location</p>
            <p className="text-sm font-semibold text-[#E5EAF0]">
              {SITE_CONFIG.location}
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Actual Resume PDF Preview */}
      {showPdfPreview && (
        <div className="rounded-xl bg-[#0D1B28] border border-[#243342] p-3.5 sm:p-4 space-y-3 min-w-0 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9AA8B7]">
            <span className="font-mono-code break-all">
              Source: {SITE_CONFIG.resumePath}
            </span>
            <a
              href={SITE_CONFIG.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:underline shrink-0"
            >
              Open in new tab ↗
            </a>
          </div>
          <div className="w-full overflow-hidden rounded-lg border border-[#243342] bg-[#08131E]">
            <iframe
              src={SITE_CONFIG.resumePath}
              title="Rishabh Kaushik Resume PDF"
              className="w-full h-[360px] sm:h-[480px] lg:h-[580px] block"
            />
          </div>
        </div>
      )}

      {/* Main Two-Column Resume Breakdown */}
      <div className="grid grid-cols-1 @3xl/editor:grid-cols-12 gap-5">
        {/* Left: Experience, Projects & Education */}
        <div className="@3xl/editor:col-span-7 space-y-5 min-w-0">
          <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-4">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Projects Highlighted in Resume
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((project) => (
                <div
                  key={project.id}
                  className="p-3.5 sm:p-4 rounded-lg bg-[#08131E] border border-[#243342] space-y-2 min-w-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#E5EAF0]">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono-code text-[#38BDF8]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#9AA8B7] leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <p className="text-[11px] font-mono-code text-[#9AA8B7]">
                    {project.techStack.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-4">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-4 rounded-lg bg-[#08131E] border border-[#243342] min-w-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#E5EAF0]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono-code text-[#9AA8B7]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#38BDF8] mt-1">
                    {item.organization}
                  </p>
                  <ul className="mt-2.5 space-y-1 text-xs text-[#9AA8B7]">
                    {item.highlights.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-4">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_TIMELINE.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3.5 sm:p-4 rounded-lg bg-[#08131E] border border-[#243342] min-w-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#E5EAF0]">
                      {edu.title}
                    </h3>
                    <span className="text-xs font-mono-code text-[#9AA8B7]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#A78BFA] mt-1">
                    {edu.organization}
                  </p>
                  <p className="text-xs text-[#9AA8B7] mt-2">
                    {edu.highlights[0]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Technical Skills Summary & Configuration */}
        <div className="@3xl/editor:col-span-5 space-y-5 min-w-0">
          <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-4">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Technical Skills Summary
            </h2>
            <div className="space-y-4">
              {SKILLS_DATA.map((group) => (
                <div key={group.id} className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9AA8B7]">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-[#08131E] border border-[#243342] text-xs text-[#E5EAF0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 space-y-3">
            <h2 className="text-base font-semibold text-[#E5EAF0]">
              Resume Source
            </h2>
            <p className="text-xs text-[#9AA8B7] leading-relaxed">
              Configured via{" "}
              <code className="font-mono-code text-[#38BDF8]">
                SITE_CONFIG.resumePath
              </code>{" "}
              pointing to{" "}
              <code className="font-mono-code text-[#4ADE80]">
                {SITE_CONFIG.resumePath}
              </code>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
