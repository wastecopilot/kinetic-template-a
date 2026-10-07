import Image, { type StaticImageData } from "next/image";
import { fiberMax } from "@/data/plans";
import { site } from "@/data/site";
import { AddressCheckForm } from "./AddressCheckForm";
import { AgentNotice } from "./AgentNotice";
import { Price } from "./Price";
import { PhoneLink } from "./PhoneLink";
import { CheckIcon } from "./Icons";

type PromoBannerProps = {
  image: { src: string | StaticImageData; alt: string };
};

const guarantee = `${fiberMax.priceGuaranteeYears}-year price guarantee`;

/**
 * Fiber Max lead-offer hero: navy panel with text and the address form on the left,
 * landscape photo on the right. All facts come from /data/plans.ts.
 * The reward card is mentioned in text only: no card image or Mastercard logo.
 * The AutoPay note is shown with the plan list that follows on the same page.
 */
export function PromoBanner({ image }: PromoBannerProps) {
  return (
    <section aria-labelledby="fiber-max-hero" className="bg-navy text-white">
      {/* Text left, landscape photo right (vertically centered). On mobile/tablet the photo sits below the text. */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="min-w-0">
          <AgentNotice tone="dark" />
          <p className="mt-6 inline-block bg-yellow px-3 py-1 text-sm font-black text-navy">the lead offer</p>
          <h1 id="fiber-max-hero" className="mt-4 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Fiber Max 2 Gig.{" "}
            <span className="block text-green">everything, built in.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg">
            Get a <strong className="font-bold">{fiberMax.prepaidCard}</strong>, lock in your rate for{" "}
            {fiberMax.priceGuaranteeYears} years and enjoy premium extras that come built in.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              `${fiberMax.gateway} with ${fiberMax.gatewayTech}`,
              "Free professional setup for every room and device",
              "Kinetic Secure Plus Wi-Fi protection",
              "24/7 Premium Technical Support provided by Kinetic",
            ].map((f) => (
              <li key={f} className="flex gap-2">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3">
            <Price amount={fiberMax.price} size="xl" below={guarantee} />
            <p className="max-w-56 pb-1 text-sm">{fiberMax.attWirelessLine}</p>
          </div>
          <div className="mt-8 max-w-xl rounded-xl bg-white p-4 text-navy sm:p-5">
            <AddressCheckForm layout="inline" buttonLabel="Check availability" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <PhoneLink className="font-black underline underline-offset-4" label={`Or call ${site.phoneDisplay}`} />
            <a href="#offer-conditions" className="underline underline-offset-4">
              See offer details
            </a>
          </div>
          <p className="mt-4 text-xs font-medium">{fiberMax.attFootnote}</p>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
            // 16:10 frame on a 16:9 photo: full height is kept (no heads cut), only the sides trim.
            // Weighted right so both the father's and the son's faces stay in frame.
            className="object-cover object-[70%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
