"use client";

import { FormEvent, useState } from "react";
import {
  Briefcase,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Rocket,
  Send,
  Users,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ide/BrandIcons";
import { SITE_CONFIG } from "@/data/portfolio";

interface ContactStatus {
  kind: "success" | "error";
  message: string;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactStatus | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          kind: "error",
          message:
            typeof result?.error === "string"
              ? result.error
              : "Unable to send message. Please email me directly.",
        });
        return;
      }

      setStatus({
        kind: "success",
        message: "Message sent successfully. Thanks for reaching out!",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus({
        kind: "error",
        message: "Network error while sending message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunityPresets = [
    {
      title: "Full-time roles",
      description: "Open to impactful frontend and full-stack roles.",
      presetSubject: "Full-time Frontend / Full-Stack Opportunity",
      icon: Briefcase,
      accentClass: "text-[#1685F8] bg-[#1685F8]/10 border-[#1685F8]/30",
    },
    {
      title: "Freelance projects",
      description: "Available for focused web application builds.",
      presetSubject: "Freelance Web Development Project",
      icon: Rocket,
      accentClass: "text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/30",
    },
    {
      title: "Collaborations",
      description: "Happy to collaborate on developer tools and products.",
      presetSubject: "Project Collaboration Inquiry",
      icon: Users,
      accentClass: "text-[#4ADE80] bg-[#4ADE80]/10 border-[#4ADE80]/30",
    },
  ];

  return (
    <div className="space-y-6 min-w-0">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5EAF0]">
          Let&apos;s build something{" "}
          <span className="text-[#A78BFA]">meaningful.</span>
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          Have a role, project, or idea in mind? Send a message or connect directly.
        </p>
      </div>

      {/* Main 2-Column Contact Grid */}
      <div className="grid grid-cols-1 @3xl/editor:grid-cols-12 gap-5">
        {/* Left: JSON-Styled Contact Form */}
        <section
          aria-labelledby="contact-form-heading"
          className="@3xl/editor:col-span-7 rounded-xl bg-[#0D1B28] border border-[#243342] p-4 sm:p-5 min-w-0"
        >
          <h2 id="contact-form-heading" className="visually-hidden">
            Contact Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3 font-mono-code text-xs min-w-0">
              <div
                className="hidden sm:flex flex-col justify-between py-0.5 text-[#4B5E73] select-none text-right w-5 shrink-0"
                aria-hidden="true"
              >
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
              </div>

              <div className="flex-1 space-y-3 min-w-0">
                <p className="text-[#9AA8B7]">{"{"}</p>

                <div className="pl-0 sm:pl-3 space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block text-[#A78BFA] text-xs"
                  >
                    &quot;name&quot;:
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full min-h-[44px] rounded-lg bg-[#08131E] border border-[#243342] px-3 py-2 text-base sm:text-sm font-sans text-[#E5EAF0] placeholder:text-[#9AA8B7]/50 focus:border-[#1685F8] focus:outline-none"
                  />
                </div>

                <div className="pl-0 sm:pl-3 space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="block text-[#A78BFA] text-xs"
                  >
                    &quot;email&quot;:
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full min-h-[44px] rounded-lg bg-[#08131E] border border-[#243342] px-3 py-2 text-base sm:text-sm font-sans text-[#E5EAF0] placeholder:text-[#9AA8B7]/50 focus:border-[#1685F8] focus:outline-none"
                  />
                </div>

                <div className="pl-0 sm:pl-3 space-y-1">
                  <label
                    htmlFor="contact-subject"
                    className="block text-[#A78BFA] text-xs"
                  >
                    &quot;subject&quot;:
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Role, project, or collaboration"
                    className="w-full min-h-[44px] rounded-lg bg-[#08131E] border border-[#243342] px-3 py-2 text-base sm:text-sm font-sans text-[#E5EAF0] placeholder:text-[#9AA8B7]/50 focus:border-[#1685F8] focus:outline-none"
                  />
                </div>

                <div className="pl-0 sm:pl-3 space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="block text-[#A78BFA] text-xs"
                  >
                    &quot;message&quot;:
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full rounded-lg bg-[#08131E] border border-[#243342] px-3 py-2.5 text-base sm:text-sm font-sans text-[#E5EAF0] placeholder:text-[#9AA8B7]/50 focus:border-[#1685F8] focus:outline-none resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <span className="text-[#9AA8B7] hidden sm:inline">{"}"}</span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1266C8] text-white font-sans text-sm font-medium hover:bg-[#1685F8] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              </div>
            </div>

            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-lg border px-3.5 py-2.5 text-xs ${
                  status.kind === "success"
                    ? "bg-[#4ADE80]/10 border-[#4ADE80]/40 text-[#4ADE80]"
                    : "bg-[#F87171]/10 border-[#F87171]/40 text-[#FCA5A5]"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </section>

        {/* Right: Terminal-Style Contact Info Card */}
        <aside
          aria-label="Direct contact details"
          className="@3xl/editor:col-span-5 rounded-xl bg-[#0D1B28] border border-[#243342] overflow-hidden flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="h-9 px-4 bg-[#07111B] border-b border-[#243342] flex items-center justify-between">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9AA8B7]">
                Terminal
              </span>
              <span className="w-10" aria-hidden="true" />
            </div>

            <div className="p-4 sm:p-5 space-y-5">
              <div className="font-mono-code text-xs space-y-1">
                <p className="text-[#4ADE80]">$ contact --rishabh</p>
                <p className="text-[#6A849D]">{"// Direct channels & availability"}</p>
              </div>

              <dl className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#9AA8B7] mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#9AA8B7]">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-[#38BDF8] hover:underline break-all"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkedInIcon className="w-4 h-4 text-[#9AA8B7] mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#9AA8B7]">LinkedIn</dt>
                    <dd>
                      <a
                        href={SITE_CONFIG.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38BDF8] hover:underline break-all"
                      >
                        {SITE_CONFIG.linkedinHandle}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GitHubIcon className="w-4 h-4 text-[#9AA8B7] mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#9AA8B7]">GitHub</dt>
                    <dd>
                      <a
                        href={SITE_CONFIG.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38BDF8] hover:underline break-all"
                      >
                        {SITE_CONFIG.githubHandle}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9AA8B7] mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#9AA8B7]">Location</dt>
                    <dd className="text-[#E5EAF0]">{SITE_CONFIG.location}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#9AA8B7] mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#9AA8B7]">Response time</dt>
                    <dd className="text-[#E5EAF0]">{SITE_CONFIG.responseTime}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="px-4 sm:px-5 py-3.5 border-t border-[#243342] flex items-center gap-2 text-xs font-medium text-[#4ADE80]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.availability}</span>
          </div>
        </aside>
      </div>

      {/* Opportunity Type Presets */}
      <div className="grid grid-cols-1 @2xl/editor:grid-cols-3 gap-4">
        {opportunityPresets.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setSubject(item.presetSubject)}
              className="rounded-xl bg-[#0D1B28] border border-[#243342] p-4 flex items-center justify-between gap-3 text-left hover:border-[#1685F8] min-w-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${item.accentClass}`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#E5EAF0]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9AA8B7] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#9AA8B7] shrink-0" aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
