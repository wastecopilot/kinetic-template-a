import type { Metadata } from "next";
import Image from "next/image";
import { PlanCard } from "@/components/PlanCard";
import { AutoPayNote } from "@/components/AutoPayNote";
import { Faq } from "@/components/Faq";
import { Price } from "@/components/Price";
import { CheckIcon } from "@/components/Icons";
import { PageHeroA } from "@/components/PageHeroA";
import { SectionHeading } from "@/components/SectionHeading";
import { imgA } from "@/components/images";
import { fiberMax, fiberPlans, startingPrice, type FiberPlan } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kinetic Fiber internet plans: 2 Gig, 1 Gig and 300 Mbps",
  description: `Compare Kinetic Fiber Max 2 Gig, Fiber 2 Gig, Fiber 1 Gig and Fiber 300 Mbps. Plans from $${startingPrice}/month with AutoPay and a price guarantee. Order through ${site.legalName}, an Authorized Kinetic Agent.`,
};

const maxOnly = (p: FiberPlan) => p.id === fiberMax.id;

const rows: { label: string; cell: (p: FiberPlan) => React.ReactNode }[] = [
  { label: "Monthly price", cell: (p) => <Price amount={p.price} size="sm" /> },
  { label: "Price guarantee", cell: (p) => `${p.priceGuaranteeYears} ${p.priceGuaranteeYears === 1 ? "year" : "years"}` },
  { label: "Best for", cell: (p) => p.tagline },
  { label: fiberMax.gateway, cell: (p) => maxOnly(p) },
  { label: "Kinetic Secure Plus", cell: (p) => maxOnly(p) },
  { label: "Free professional setup", cell: (p) => maxOnly(p) },
  { label: "24/7 Premium Technical Support provided by Kinetic", cell: (p) => maxOnly(p) },
  { label: fiberMax.prepaidCard, cell: (p) => maxOnly(p) },
];

const faqs = [
  {
    q: "what's the difference between Fiber Max 2 Gig and Fiber 2 Gig?",
    a: `Both deliver 2 Gig fiber speed. Fiber Max adds the ${fiberMax.gateway}, Kinetic Secure Plus, extenders as needed, free professional setup, 24/7 Premium Technical Support provided by Kinetic, a ${fiberMax.prepaidCard} and a 3-year price guarantee.`,
  },
  {
    q: "which plan should I choose?",
    a: "Large smart homes with 30+ devices and 4K/8K streaming: Fiber 2 Gig or Fiber Max. Working from home and competitive gaming: Fiber 1 Gig. Everyday browsing, video calls and HD streaming: Fiber 300 Mbps.",
  },
  {
    q: "can I keep my plan's price?",
    a: "Yes, for the guarantee period on your plan: 3 years on Fiber Max, 2 years on Fiber 2 Gig and 1 year on Fiber 1 Gig and Fiber 300 Mbps. See the offer details.",
  },
];

export default function TemplateAInternet() {
  return (
    <>
      <PageHeroA
        eyebrow="Kinetic Fiber Internet"
        title="four fiber speeds. one clear choice for your home."
        intro={`Start at $${startingPrice}/month with AutoPay, or go all in with Fiber Max 2 Gig. Plans are listed fastest to slowest.`}
        image={imgA.internet}
      />

      <section aria-labelledby="a-int-plans" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-int-plans" eyebrow="all plans" title="choose your speed" />
          <AutoPayNote className="mt-4" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fiberPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="a-compare" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-compare" eyebrow="side by side" title="compare what's included" />
          <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-gray-300">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Kinetic Fiber plan comparison, fastest to slowest</caption>
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="p-4 font-black">Feature</th>
                  {fiberPlans.map((p) => (
                    <th key={p.id} scope="col" className="p-4 text-base font-black">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <th scope="row" className="p-4 font-bold">{r.label}</th>
                    {fiberPlans.map((p) => {
                      const v = r.cell(p);
                      return (
                        <td key={p.id} className="p-4 align-top">
                          {v === true ? (
                            <span className="inline-flex items-center gap-1 font-bold text-purple">
                              <CheckIcon className="h-4 w-4" /> Included
                            </span>
                          ) : v === false ? (
                            <span aria-label="Not included">—</span>
                          ) : (
                            v
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">
            &quot;—&quot; means it&apos;s not part of that plan&apos;s package. {fiberMax.attWirelessLine}{" "}
            <a href="#offer-conditions" className="underline underline-offset-4">See offer details</a>
          </p>
          <p className="mt-1 text-xs font-medium">{fiberMax.attFootnote}</p>
        </div>
      </section>

      <section aria-labelledby="a-equipment" className="bg-blue-light">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            id="a-equipment"
            eyebrow="equipment"
            title={`Fiber Max includes the ${fiberMax.gateway}`}
            intro={`A premium gateway with ${fiberMax.gatewayTech}, plus Wi-Fi extenders as needed, installed during free professional setup.`}
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={imgA.wifi.src} alt={imgA.wifi.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-labelledby="a-int-faq" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-int-faq" eyebrow="questions" title="internet plan questions" />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
