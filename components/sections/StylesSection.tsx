import { DESIGN_TOKENS } from "@/data/portfolio";

export function StylesSection() {
  return (
    <div className="space-y-6 min-w-0">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E5EAF0]">
          styles.css — Design Tokens
        </h1>
        <p className="text-sm text-[#9AA8B7]">
          VS Code-inspired dark palette, surface hierarchy, and static typography tokens used across this workspace.
        </p>
      </div>

      <div className="rounded-xl bg-[#0D1B28] border border-[#243342] overflow-hidden min-w-0">
        <div className="px-3.5 sm:px-4 py-2.5 bg-[#091521] border-b border-[#243342] font-mono-code text-xs text-[#9AA8B7] overflow-x-auto ide-scroll">
          :root {"/* Portfolio Color System */"}
        </div>

        <div className="divide-y divide-[#243342]">
          {DESIGN_TOKENS.map((item) => (
            <div
              key={item.token}
              className="px-3.5 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs min-w-0"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                <span
                  className="w-5 h-5 rounded border border-[#243342] shrink-0"
                  style={{ backgroundColor: item.hex }}
                  aria-hidden="true"
                />
                <code className="font-mono-code text-[#38BDF8]">
                  {item.token}
                </code>
                <code className="font-mono-code text-[#4ADE80]">{item.hex}</code>
              </div>
              <span className="text-[#9AA8B7]">{item.usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
