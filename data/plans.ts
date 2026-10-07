/**
 * ALL plan prices and plan facts for BOTH templates.
 * Prices confirmed against the UR646 marked-up PDFs and the Fiber Max reference.
 * Keep `fiberPlans` ordered FASTEST → SLOWEST (Fiber Max first).
 */

export type FiberPlan = {
  id: "fiber-max-2-gig" | "fiber-2-gig" | "fiber-1-gig" | "fiber-300";
  name: string;
  shortName: string;
  speed: string;
  /** Monthly price in dollars. */
  price: number;
  tagline: string;
  priceGuaranteeYears: number;
  features: string[];
  isLeadOffer?: boolean;
};

export const fiberMax = {
  id: "fiber-max-2-gig",
  name: "Fiber Max 2 Gig",
  shortName: "Fiber Max",
  speed: "2 Gig",
  price: 89.99,
  tagline: "Our most complete package: 2 Gig fiber plus premium equipment, security and support.",
  priceGuaranteeYears: 3,
  isLeadOffer: true,
  prepaidCard: "$200 prepaid Mastercard®",
  gateway: "eero Pro 7 Wi-Fi Gateway",
  gatewayTech: "Wi-Fi 7",
  attWirelessLine: "AT&T Wireless customers save $20/mo on internet bill*",
  /** Footnote for the asterisk above. Taken word for word from the live site's AT&T section. */
  attFootnote: "*Services billed separately.",
  features: [
    "The same 2 Gig fiber speed as Fiber 2 Gig",
    "Kinetic Secure Plus, with Wi-Fi extenders as needed",
    "Free professional setup that connects every room and every device",
    "Wi-Fi security that helps protect your home from online threats",
    "24/7 Premium Technical Support provided by Kinetic",
  ],
} as const;

export const fiberPlans: FiberPlan[] = [
  { ...fiberMax, features: [...fiberMax.features] },
  {
    id: "fiber-2-gig",
    name: "Fiber 2 Gig",
    shortName: "2 Gig",
    speed: "2 Gig",
    price: 69.99,
    tagline: "Ultra-fast speeds for large smart homes.",
    priceGuaranteeYears: 2,
    features: [
      "Plenty of power for 30+ devices",
      "Bandwidth-hungry activities like uploading and downloading large files",
      "4K/8K video streaming on multiple devices",
    ],
  },
  {
    id: "fiber-1-gig",
    name: "Fiber 1 Gig",
    shortName: "1 Gig",
    speed: "1 Gig",
    price: 49.99,
    tagline: "Boosted speed and capacity for working from home and gaming.",
    priceGuaranteeYears: 1,
    features: [
      "Boosted speed and capacity for working from home",
      "Competitive gaming",
      "4K video streaming",
    ],
  },
  {
    id: "fiber-300",
    name: "Fiber 300 Mbps",
    shortName: "300 Mbps",
    speed: "300 Mbps",
    price: 39.99,
    tagline: "Good for most day-to-day internet uses, including streaming video.",
    priceGuaranteeYears: 1,
    features: ["Ideal for everyday browsing", "Video conferencing", "HD streaming", "Gaming"],
  },
];

/** Shown once near each plan list. Prices above already include this credit. */
export const autoPayNote = "Prices include the $5/mo AutoPay credit.";

/** Default pricing qualifier for internet prices (brand rule: lowercase, AutoPay keeps its capitals). */
export const internetQualifier = "/month with AutoPay";

/** Lowest fiber price, used for "fiber plans start at" copy. */
export const startingPrice = Math.min(...fiberPlans.map((p) => p.price));

export const homePhone = {
  name: "Kinetic Home Phone",
  price: 25,
  requiresInternet: true,
  featureCount: 17,
  features: [
    "Caller ID",
    "Premium Call Forwarding",
    "Voicemail",
    "Spam Call Alert",
    "Call Waiting",
    "3-Way Calling",
    "Caller ID Block",
    "Anonymous Call Rejection",
    "Speed Dial",
  ],
  portalName: "Kinetic Voice Manager",
  qualifier: "/month with Kinetic Internet",
};

/** Only use where a prepaid card is mentioned for plans other than Fiber Max. */
export const prepaidCardGeneralNote =
  "Prepaid card value varies by plan selected; not all plans qualify.";

export function formatPrice(price: number) {
  const [dollars, cents] = price.toFixed(2).split(".");
  return { dollars, cents: cents === "00" ? "" : cents, full: `$${price.toFixed(2)}` };
}
