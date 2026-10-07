import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneLink } from "./PhoneLink";
import { navLinks } from "./nav";

const linkClass = "rounded px-3 py-2 font-bold text-navy hover:bg-gray-50";

/** Site header: white bar with the navy-text Authorized Agent logo. */
export function Header() {
  const links = navLinks();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link href="/" aria-label="Home" className="shrink-0">
          <Logo background="on-white" priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PhoneLink className="min-h-11 rounded-full px-3 text-sm font-bold sm:px-4 sm:text-base bg-navy text-white hover:bg-purple" />
          <details className="relative lg:hidden">
            <summary aria-label="Open menu" className="flex min-h-11 min-w-11 items-center justify-center rounded text-navy">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 mt-2 w-60 rounded-lg p-2 shadow-xl bg-white ring-1 ring-gray-100">
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={`block ${linkClass}`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
