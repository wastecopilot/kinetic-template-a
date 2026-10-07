import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon } from "@/components/Icons";
import { Price } from "@/components/Price";
import { PageHeroA } from "@/components/PageHeroA";
import { SectionHeading } from "@/components/SectionHeading";
import { imgA } from "@/components/images";
import { homePhone } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Kinetic Home Phone, $${homePhone.price}/month with Kinetic Internet`,
  description: `Add Kinetic Home Phone to your Kinetic Internet plan for $${homePhone.price}/month with ${homePhone.featureCount} calling features. Order through ${site.legalName}, an Authorized Kinetic Agent.`,
};

export default function TemplateAHomePhone() {
  return (
    <>
      <PageHeroA
        eyebrow="Kinetic Home Phone"
        title="a dependable home line, carried over fiber"
        intro={`Add ${homePhone.name} to your Kinetic Internet plan and keep a dedicated home line for family, doctors and neighbors.`}
        image={imgA.phone}
      >
        <div className="mt-6 inline-flex rounded-xl bg-white px-5 py-4 text-navy">
          <Price amount={homePhone.price} size="lg" qualifier={homePhone.qualifier} />
        </div>
      </PageHeroA>

      <section aria-labelledby="a-features" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="a-features"
            eyebrow={`${homePhone.featureCount} calling features`}
            title="the calling features you rely on, included"
            intro="Here are some of the features that come with every Kinetic Home Phone line:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homePhone.features.map((f, i) => (
              <li
                key={f}
                className={`flex items-center gap-3 rounded-xl p-5 text-lg font-bold text-navy ${
                  ["bg-green", "bg-blue", "bg-yellow"][i % 3]
                }`}
              >
                <CheckIcon className="h-6 w-6 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="a-portal" className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={imgA.phoneVideo.src} alt={imgA.phoneVideo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <SectionHeading
            id="a-portal"
            eyebrow={homePhone.portalName}
            title="manage your calling features online"
            intro={`With the ${homePhone.portalName} online portal, you can customize your calling features, such as Caller ID, Premium Call Forwarding, Voicemail and Spam Call Alert.`}
          />
        </div>
      </section>
    </>
  );
}
