import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { CallBandA } from "@/components/CallBandA";

// Figtree only: Medium (500) body, Bold (700) captions/pull quotes, Black (900) headlines.
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-figtree",
  display: "swap",
  // No metric-matched fallback font: Figtree is the only typeface on the site.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: `Kinetic Fiber Internet | ${site.legalName}, Authorized Kinetic Agent`,
    template: `%s | ${site.legalName}, Authorized Kinetic Agent`,
  },
  description:
    "Compare Kinetic Fiber internet plans and Kinetic Home Phone through an independent Authorized Kinetic Agent.",
  robots: { index: false, follow: false }, // REMOVE AT GO-LIVE: keeps this preview site out of Google until approved
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans font-medium antialiased">
        <Header />
        <main id="main">{children}</main>
        <CallBandA />
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
