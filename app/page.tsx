import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PromoBanner } from "@/components/PromoBanner";
import { PlanCard } from "@/components/PlanCard";
import { AutoPayNote } from "@/components/AutoPayNote";
import { Faq } from "@/components/Faq";
import { PhoneLink } from "@/components/PhoneLink";
import { ArrowIcon, BoltIcon, CheckIcon, LockIcon, PlayIcon, ShieldIcon, UsersIcon, WifiIcon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { imgA } from "@/components/images";
import { fiberMax, fiberPlans, startingPrice } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kinetic Fiber Max 2 Gig and fiber internet plans",
  description: `Fiber Max 2 Gig for $${fiberMax.price}/month with AutoPay, a ${fiberMax.prepaidCard} and a 3-year price guarantee. Compare Kinetic Fiber plans from $${startingPrice}/month with ${site.legalName}, an Authorized Kinetic Agent.`,
};

const reasons = [
  {
    icon: BoltIcon,
    title: "fiber from 300 Mbps to 2 Gig",
    body: "Four Kinetic Fiber speeds, so you only pay for the power your household actually uses.",
  },
  {
    icon: LockIcon,
    title: "prices that stay put",
    body: "Every plan comes with a price guarantee: 1 year, 2 years, or 3 years on Fiber Max.",
  },
  {
    icon: UsersIcon,
    title: "real people helping you choose",
    body: "Our sales specialists compare plans with you and place the order with Kinetic for you.",
  },
];

const services = [
  { href: "/internet", icon: WifiIcon, title: "Kinetic Fiber Internet", body: "Four fiber speeds, listed fastest first." },
  { href: "/entertainment", icon: PlayIcon, title: "streaming and entertainment", body: "Stream the services you love over fiber." },
  { href: "/home-phone", icon: CheckIcon, title: "Kinetic Home Phone", body: "A dependable home line with 17 calling features." },
];

const faqs = [
  {
    q: "who am I talking to when I call?",
    a: `You're talking to ${site.legalName}, an independent Authorized Kinetic Agent. We help you choose a Kinetic plan and submit your order. Kinetic provides, bills and supports the service itself.`,
  },
  {
    q: "what comes with Fiber Max 2 Gig?",
    a: `Fiber Max includes 2 Gig fiber, the ${fiberMax.gateway} (${fiberMax.gatewayTech}), Kinetic Secure Plus, Wi-Fi extenders as needed, free professional setup, 24/7 Premium Technical Support provided by Kinetic, a ${fiberMax.prepaidCard} and a ${fiberMax.priceGuaranteeYears}-year price guarantee.`,
  },
  {
    q: "how long is my price guaranteed?",
    a: "Fiber Max 2 Gig: 3 years. Fiber 2 Gig: 2 years. Fiber 1 Gig and Fiber 300 Mbps: 1 year. See the offer details for the full terms.",
  },
  {
    q: "how do I know if Kinetic Fiber is available at my address?",
    a: `Enter your address in any availability form on this site or call ${site.phoneDisplay}. A sales specialist will confirm which speeds reach your home.`,
  },
];

export default function TemplateAHome() {
  return (
    <>
      {/* 1. Fiber Max lead offer — front and center */}
      <PromoBanner image={imgA.hero} />

      {/* 2. Three reasons */}
      <section aria-labelledby="a-reasons" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-reasons" eyebrow="why go fiber" title="a faster home without the fine-print headaches" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative rounded-2xl border-2 border-navy p-6">
                <span className="absolute -top-5 left-6 bg-white px-2 text-3xl font-black text-purple">0{i + 1}</span>
                <Icon className="h-10 w-10 text-navy" />
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Plans */}
      <section aria-labelledby="a-plans" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="a-plans"
            eyebrow="Kinetic Fiber plans"
            title="fastest first. pick your speed."
            intro={`Every plan runs on Kinetic's fiber network. Fiber plans start at $${startingPrice}/month with AutoPay.`}
          />
          <AutoPayNote className="mt-4" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {fiberPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/internet" className="font-black underline underline-offset-4">
              Compare every plan side by side
            </Link>
          </p>
        </div>
      </section>

      {/* 4. Services: internet / streaming and entertainment / home phone */}
      <section aria-labelledby="a-services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-services" eyebrow="explore" title="more from Kinetic" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map(({ href, icon: Icon, title, body }) => (
              <li key={href}>
                <Link href={href} className="flex h-full flex-col rounded-2xl bg-navy p-6 text-white hover:bg-purple">
                  <Icon className="h-8 w-8 text-green" />
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-2 flex-1">{body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-black">
                    Learn more <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Whole-home Wi-Fi band */}
      <section aria-labelledby="a-wifi" className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={imgA.wifi.src} alt={imgA.wifi.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div>
            <SectionHeading
              id="a-wifi"
              eyebrow="whole-home Wi-Fi"
              title="strong signal from the kitchen to the back bedroom"
              intro={`Fiber Max includes the ${fiberMax.gateway} with ${fiberMax.gatewayTech}, Wi-Fi extenders as needed and free professional setup that connects every room and every device.`}
            />
            <ul className="mt-6 space-y-3">
              {["Free professional setup", "Wi-Fi extenders as needed", "Plenty of power for 30+ devices"].map((t) => (
                <li key={t} className="flex gap-3">
                  <WifiIcon className="h-6 w-6 shrink-0 text-purple" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Security */}
      <section aria-labelledby="a-secure" className="bg-purple text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr]">
          <div className="order-2 lg:order-1">
            <SectionHeading
              id="a-secure"
              tone="dark"
              eyebrow="Kinetic Secure Plus"
              title="online protection, included with Fiber Max"
              intro="Wi-Fi security that helps protect your home from online threats, so the whole family can browse, stream and learn with more peace of mind."
            />
            <ul className="mt-6 space-y-3">
              {["Included with Fiber Max 2 Gig", "Helps protect your home from online threats", "Backed by 24/7 Premium Technical Support provided by Kinetic"].map((t) => (
                <li key={t} className="flex gap-3">
                  <ShieldIcon className="h-6 w-6 shrink-0 text-white" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-2xl ring-8 ring-white/20 lg:order-2">
            <Image src={imgA.secure.src} alt={imgA.secure.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. Gaming / streaming strip */}
      <section aria-labelledby="a-uses" className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[2fr_3fr]">
          <div className="relative aspect-square overflow-hidden rounded-full border-8 border-green">
            <Image src={imgA.gaming.src} alt={imgA.gaming.alt} fill sizes="(min-width: 768px) 40vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div>
            <SectionHeading id="a-uses" eyebrow="made for how you live" title="game, stream and work at the same time" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Competitive gaming", "4K/8K streaming", "Large file uploads", "Video conferencing"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                  <CheckIcon className="h-5 w-5 shrink-0 text-purple" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section aria-labelledby="a-faq" className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <SectionHeading id="a-faq" eyebrow="questions" title="straight answers before you order" />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <p className="mt-8">
            Still deciding? <PhoneLink className="font-black underline underline-offset-4" />
          </p>
        </div>
      </section>
    </>
  );
}
