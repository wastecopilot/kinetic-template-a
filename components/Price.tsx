import { formatPrice, internetQualifier } from "@/data/plans";

type PriceProps = {
  amount: number;
  size?: "sm" | "md" | "lg" | "xl";
  /** Lowercase qualifier to the right of the cents. Defaults to "/month with AutoPay". */
  qualifier?: string;
  /** Lowercase callout stacked above the price, e.g. "everyday price". */
  above?: string;
  /** Lowercase callout stacked below the price, e.g. "3-year price guarantee". */
  below?: string;
  className?: string;
};

const sizes = {
  sm: { dollars: "text-3xl", sup: "text-sm", qual: "text-[10px]", callout: "text-xs" },
  md: { dollars: "text-5xl", sup: "text-lg", qual: "text-xs", callout: "text-sm" },
  lg: { dollars: "text-6xl", sup: "text-2xl", qual: "text-xs", callout: "text-base" },
  xl: { dollars: "text-7xl sm:text-8xl", sup: "text-3xl sm:text-4xl", qual: "text-sm", callout: "text-lg" },
};

/**
 * The ONE price display for both templates (Kinetic typography guide, "pricing styles"):
 * - "$", dollars and cents all in Figtree Black
 * - "$" and cents smaller and raised; dollar amount large
 * - lowercase qualifier left-aligned under the cents, to the right of the dollars
 * - optional lowercase callouts above/below, aligned left of center
 */
export function Price({ amount, size = "md", qualifier = internetQualifier, above, below, className = "" }: PriceProps) {
  const { dollars, cents, full } = formatPrice(amount);
  const s = sizes[size];
  return (
    <div className={`relative inline-flex flex-col items-start font-black leading-none ${className}`}>
      {above && <p className={`mb-1 ${s.callout}`}>{above}</p>}
      <p className="flex items-stretch">
        <span className="sr-only">
          {full} {qualifier.replace("/", "per ")}
        </span>
        <span aria-hidden="true" className={`${s.sup} self-start pt-[0.15em]`}>$</span>
        <span aria-hidden="true" className={`${s.dollars} tracking-tighter`}>{dollars}</span>
        <span aria-hidden="true" className="ml-1 flex flex-col justify-between">
          <span className={`${s.sup} pt-[0.15em]`}>{cents || "00"}</span>
          <span className={`${s.qual} max-w-[7.5em] leading-tight`}>{qualifier}</span>
        </span>
      </p>
      {below && <p className={`mt-2 ${s.callout}`}>{below}</p>}
    </div>
  );
}
