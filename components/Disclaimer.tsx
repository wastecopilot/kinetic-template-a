import { disclaimerSections } from "@/data/disclaimer";

/**
 * The ONE offer disclaimer block, shown on every page.
 * Text lives in /data/disclaimer.ts. "See offer details" links target #offer-conditions.
 * Style: lowercase subheads in Figtree Black; body in Figtree Medium, small fine print.
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
        <div className="mt-4 grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {disclaimerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-sm">{section.heading}</h3>
              <ul className="mt-2 space-y-1.5 text-xs font-medium leading-relaxed">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
