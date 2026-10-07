import { site } from "@/data/site";

/** Reseller statement shown in the hero of every page. */
export function AgentNotice({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold sm:text-sm ${
        tone === "dark" ? "bg-white/10 text-white ring-1 ring-white/40" : "bg-gray-50 text-navy ring-1 ring-gray-300"
      } ${className}`}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-green" />
      {site.agentNotice}
    </p>
  );
}
