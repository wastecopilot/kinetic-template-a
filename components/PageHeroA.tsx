import Image, { type StaticImageData } from "next/image";
import { AgentNotice } from "@/components/AgentNotice";
import { PhoneLink } from "@/components/PhoneLink";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: { src: StaticImageData; alt: string };
  children?: React.ReactNode;
};

/** Template A inner-page hero: navy split panel with photo, mirrors the home hero. */
export function PageHeroA({ eyebrow, title, intro, image, children }: Props) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[3fr_2fr]">
        <div className="px-4 py-12 sm:px-6 sm:py-16 lg:pr-12">
          <AgentNotice tone="dark" />
          <p className="mt-6 text-base font-black text-green">{eyebrow}</p>
          <h1 className="mt-2 text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg">{intro}</p>
          {children}
          <PhoneLink className="mt-8 min-h-12 rounded-lg bg-green px-6 font-black text-navy hover:bg-green-light" label="Call now" />
        </div>
        <div className="relative min-h-60">
          <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
