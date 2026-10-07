import { fiberMax, type FiberPlan } from "@/data/plans";
import { site } from "@/data/site";
import { Price } from "./Price";
import { CheckIcon, GiftIcon, WifiIcon, ArrowIcon } from "./Icons";

type PlanCardProps = {
  plan: FiberPlan;
  headingLevel?: "h2" | "h3";
};

/** Accent band per plan, fastest → slowest. Fills only; text on them is navy. */
const band: Record<FiberPlan["id"], string> = {
  "fiber-max-2-gig": "bg-yellow",
  "fiber-2-gig": "bg-green",
  "fiber-1-gig": "bg-blue",
  "fiber-300": "bg-blue-light",
};

const guarantee = (years: number) => `${years}-year price guarantee`;

function FiberMaxExtras() {
  return (
    <ul className="space-y-2 rounded-lg p-3 text-sm bg-gray-50">
      <li className="flex items-center gap-2 font-bold">
        <GiftIcon className="h-5 w-5 shrink-0" /> {fiberMax.prepaidCard}
      </li>
      <li className="flex items-center gap-2">
        <WifiIcon className="h-5 w-5 shrink-0" /> Includes {fiberMax.gateway} ({fiberMax.gatewayTech})
      </li>
      <li className="flex items-center gap-2">
        <CheckIcon className="h-5 w-5 shrink-0" /> {fiberMax.attWirelessLine}
      </li>
    </ul>
  );
}

/** Tall column plan card with a colored top band. */
export function PlanCard({ plan, headingLevel = "h3" }: PlanCardProps) {
  const H = headingLevel;
  const isMax = plan.id === "fiber-max-2-gig";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl bg-white text-navy shadow-lg ring-1 ${
        isMax ? "ring-4 ring-navy" : "ring-gray-100"
      }`}
    >
      <p className={`${band[plan.id]} px-6 py-3 text-sm font-black text-navy`}>
        {isMax ? "lead offer · equipment and security included" : `${plan.speed} fiber`}
      </p>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <H className="text-2xl">{plan.name}</H>
        <Price amount={plan.price} size="lg" below={guarantee(plan.priceGuaranteeYears)} />
        <p>{plan.tagline}</p>
        {isMax && <FiberMaxExtras />}
        <ul className="space-y-2 text-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-4 pt-2">
          <a
            href={site.phoneHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-navy px-4 font-black text-white hover:bg-purple"
          >
            Call to order {plan.shortName} <ArrowIcon />
          </a>
          {isMax && (
            <>
              <a href="#offer-conditions" className="block text-center text-sm underline underline-offset-4">
                See offer details
              </a>
              <p className="text-center text-xs font-medium">{fiberMax.attFootnote}</p>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
