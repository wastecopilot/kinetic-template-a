import { ChevronIcon } from "./Icons";

export type FaqItem = { q: string; a: React.ReactNode };

/** Accessible accordion built on <details>, no client JS. Divider lines between questions. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-gray-300 border-y border-gray-300">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-lg font-black">
            {item.q}
            <ChevronIcon className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180 text-purple" />
          </summary>
          <div className="pb-5 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
