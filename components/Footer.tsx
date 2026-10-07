import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneLink } from "./PhoneLink";
import { navLinks, policyLinks } from "./nav";
import { agentStatement, site } from "@/data/site";

const muted = "text-gray-100";

/** Site footer: solid black with the white-text Authorized Agent logo. */
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo background="on-black" className="-ml-2" />
          <p className={`mt-4 text-sm leading-relaxed ${muted}`}>{agentStatement}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-base">explore</h2>
          <ul className="mt-4 space-y-2">
            {navLinks().map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            {policyLinks().map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#offer-conditions" className="underline-offset-4 hover:underline">
                Offer details
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-base">talk to a Kinetic sales specialist</h2>
          <PhoneLink className="mt-4 text-2xl font-black" />
          <p className={`mt-2 text-sm ${muted}`}>{site.salesHours}</p>
          <p className={`mt-4 text-sm ${muted}`}>
            Questions about an existing Kinetic account, billing or service? Contact Kinetic directly. We are an
            independent agent and cannot access Kinetic accounts.
          </p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {policyLinks().map((l) => (
              <Link key={l.href} href={l.href} className="font-bold underline underline-offset-4">
                {l.label}
              </Link>
            ))}
            <span className={muted}>{site.legalName} is an Authorized Kinetic Agent, not Kinetic.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
