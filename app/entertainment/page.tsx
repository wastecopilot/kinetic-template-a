import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AutoPayNote } from "@/components/AutoPayNote";
import { PlayIcon } from "@/components/Icons";
import { Price } from "@/components/Price";
import { PageHeroA } from "@/components/PageHeroA";
import { SectionHeading } from "@/components/SectionHeading";
import { imgA } from "@/components/images";
import { fiberPlans } from "@/data/plans";
import { site } from "@/data/site";
import { streamingServices } from "@/data/streaming";

export const metadata: Metadata = {
  title: "Streaming and entertainment on Kinetic Fiber",
  description:
    "Kinetic does not sell a TV product, but Kinetic Fiber internet delivers a great streaming experience for YouTube TV, Netflix and more.",
};

export default function TemplateAEntertainment() {
  const plan2 = fiberPlans.find((p) => p.id === "fiber-2-gig")!;
  const plan1 = fiberPlans.find((p) => p.id === "fiber-1-gig")!;
  const plan300 = fiberPlans.find((p) => p.id === "fiber-300")!;

  return (
    <>
      <PageHeroA
        eyebrow="streaming and entertainment"
        title="no cable box. just great streaming on fiber."
        intro="Kinetic doesn't sell a TV product. What it does offer is fiber internet that's built for streaming, so the services you already love play smoothly on every screen."
        image={imgA.streaming}
      />

      <section aria-labelledby="a-services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="a-services"
            eyebrow="bring your own services"
            title="stream what you want, on your terms"
            intro="Live TV, movies, sports and shows all come through your internet connection. Popular choices include:"
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {streamingServices.map((s) => (
              <li key={s} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border-2 border-navy p-4 text-center font-black">
                <PlayIcon className="h-7 w-7 text-purple" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            Streaming subscriptions are sold separately by each streaming provider. Neither Kinetic nor {site.legalName}{" "}
            sells, bundles or bills for streaming or TV services. Service names are trademarks of their owners.
          </p>
        </div>
      </section>

      <section aria-labelledby="a-speed" className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-speed" tone="dark" eyebrow="speed guide" title="how much speed does your streaming need?" />
          <AutoPayNote className="mt-4" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { plan: plan2, use: "4K/8K streaming on multiple devices at once", fill: "bg-green" },
              { plan: plan1, use: "4K streaming plus gaming and working from home", fill: "bg-blue" },
              { plan: plan300, use: "HD streaming and everyday browsing", fill: "bg-yellow" },
            ].map(({ plan, use, fill }) => (
              <div key={plan.id} className={`flex flex-col gap-4 rounded-2xl p-6 text-navy ${fill}`}>
                <h3 className="text-2xl">{plan.name}</h3>
                <p className="text-lg font-bold">{use}</p>
                <Price amount={plan.price} size="md" below={`${plan.priceGuaranteeYears}-year price guarantee`} />
              </div>
            ))}
          </div>
          <p className="mt-6">
            Want premium Wi-Fi in every room?{" "}
            <Link href="/" className="font-black underline underline-offset-4">See Fiber Max 2 Gig</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="a-watch" className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            id="a-watch"
            eyebrow="movie night, upgraded"
            title="fewer loading wheels, more watching"
            intro="Fiber gives every screen in the house room to breathe, so 4K movies, online games and video calls can share one strong connection."
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={imgA.gaming.src} alt={imgA.gaming.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
