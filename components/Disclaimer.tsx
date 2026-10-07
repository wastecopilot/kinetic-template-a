import { disclaimer, finePrintFooter } from "@/data/disclaimer";

/**
 * The ONE offer disclaimer block for every page of both templates.
 * Text lives in /data/disclaimer.ts. "See offer details" links target #offer-conditions.
 * Style: Figtree Medium, small fine print.
 */
export function Disclaimer() {
  return (
    <section
      id="offer-conditions"
      aria-labelledby="offer-conditions-title"
      className="scroll-mt-24 border-t border-gray-300 bg-gray-50 text-navy"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 id="offer-conditions-title" className="text-base">
          offer details and disclaimers
        </h2>
        <div className="mt-3 space-y-2 text-xs font-medium leading-relaxed">
          {disclaimer.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-4 space-y-1 border-t border-gray-300 pt-4 text-xs font-medium leading-relaxed">
          {finePrintFooter.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
