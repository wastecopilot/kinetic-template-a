/**
 * Offer disclaimer / fine print, shown at the bottom of every page.
 *
 * Source: the "Disclaimer" block on every page of https://kineticfiber.us (fetched 2026-10-07).
 * Rephrased and humanized per boss's instruction: plain language, each point said once,
 * grouped under lowercase headings. Every fact, number and condition is unchanged.
 * Two legal lines are kept word for word (marked VERBATIM below).
 * The text before this rewrite is kept in DISCLAIMER_CHANGES for comparison.
 */
import { site } from "./site";

export type DisclaimerSection = { heading: string; items: string[] };

export const disclaimerSections: DisclaimerSection[] = [
  {
    heading: "pricing and AutoPay",
    items: [
      "These are limited-time offers for new residential Kinetic Broadband Internet customers who haven't had Kinetic service in the past 30 days. Offers can't be transferred to someone else.",
      "Availability and pricing depend on where you live.",
      "Our advertised \"everyday\" prices include a $5/mo AutoPay credit. To get the credit, you need to sign up for AutoPay. It can take up to two billing cycles to show up on your bill. Without AutoPay, standard rates apply.",
      "Taxes, fees, surcharges and monthly equipment fees are extra. They aren't included in the everyday price.",
      "Paper bills cost $2/mo where the law allows it. This charge doesn't apply in MN, NE, NM, NY, OK, PA or TX.",
    ],
  },
  {
    heading: "price guarantee",
    items: [
      "Your price is locked in for 1 year on 300 Mbps and 1 Gig plans (fiber or cable), 2 years on Fiber 2 Gig and 3 years on Fiber Max 2 Gig.",
      "When your guarantee ends, or if your service is suspended, changed or moved to a new address, standard rates apply and your rate may change.",
    ],
  },
  {
    heading: "equipment and installation",
    items: [
      "The Wi-Fi Gateway costs $10.99/mo.",
      "If your plan doesn't include them, you can add up to 2 Wi-Fi extenders for $10/mo (or $5/mo each).",
      "If you cancel, please return your equipment. Equipment that isn't returned costs $100.",
      "Standard installation fees may apply.",
      "Some addresses need extra construction work to connect. For those addresses there's a $750 Extended Internet Installation Fee. It's non-refundable and must be paid before work starts.",
    ],
  },
  {
    heading: "prepaid Mastercard®",
    items: [
      "Your prepaid Mastercard® amount depends on the plan you choose: $50 for 1 Gig; $100 for 2 Gig; $200 for Max bundled 1 Gig+; $200 for Retargeting/Movers on 300 Mbps+.",
      "To get a card, you need to be a new Kinetic Broadband Internet customer with no service in the last 30 days, sign up for a qualifying plan and keep your account in good standing for at least 90 days.",
      "There's a limit of one card per household. Local, state and federal government accounts aren't eligible.",
      // VERBATIM: do not rephrase.
      "Prepaid Mastercard is issued by The Bancorp Bank, Member FDIC, pursuant to license by Mastercard International Incorporated.",
      "Cards have an expiration date. See the Cardholder Agreement for details.",
    ],
  },
  {
    heading: "general terms",
    items: [
      "Offers can't be combined with other promotions, and credit restrictions apply.",
      "Services depend on availability and are subject to the Kinetic Terms and Conditions and Acceptable Use Policy. Not all services are available in all areas.",
      "Kinetic can't guarantee specific upload or download speeds, or uninterrupted, error-free service. Actual speeds depend on network conditions, congestion, your location and your devices.",
      "Pricing, terms and offers can change or end at any time without notice.",
    ],
  },
  {
    heading: "about us",
    items: [
      `kineticfiber.us is operated by ${site.legalName}, an independent Authorized Agent of Kinetic. Our team processes your order, and Kinetic fulfills it on its own infrastructure.`,
      // VERBATIM: do not rephrase.
      "Kinetic is a registered service mark or trademark of Uniti Group, Inc.",
      `All other trademarks and service marks belong to their owners. ${site.legalName} uses them only to describe the products and services each owner offers.`,
    ],
  },
];

/** Audit trail of every edit made to the live-site text (shown to the client for approval). */
export const DISCLAIMER_CHANGES = [
  {
    before: "Promotional price guaranteed for 1 year (100Mbps, 300Mbps, 1Gig)",
    after: "Promotional price guaranteed for 1 year (300Mbps, 1Gig)",
    why: "100 Mbps plan is not offered on the new site (client decision).",
  },
  {
    before: "1 year for Fiber/Cable 100Mbps-1Gig",
    after: "1 year for Fiber/Cable 300Mbps-1Gig",
    why: "100 Mbps plan is not offered on the new site (client decision).",
  },
  {
    before: "Offer valid for new residential customers. Customer will receive the highest bandwidth DSL service … Speeds: Actual speeds vary based on distance, network congestion, and terrain.",
    after: "(paragraph removed)",
    why: "DSL $44.99 offer is not advertised on the new site (client decision).",
  },
  {
    before: "an independent Authorized Retailer of Kinetic",
    after: "an independent Authorized Agent of Kinetic",
    why: "Matches the new Kinetic Authorized Agent logo and wording used site-wide. Approved by client 2026-10-07.",
  },
  {
    before: "(no footnote under the Fiber Max AT&T line)",
    after: "*Services billed separately.",
    why: "Footnote taken from live site AT&T section. Shown directly under the Fiber Max card/banner so the asterisk on \"AT&T Wireless customers save $20/mo on internet bill*\" points to it.",
  },
  {
    before: "fulfilled by Kinetic  infrastructure.",
    after: "fulfilled by Kinetic infrastructure.",
    why: "Whitespace only (double space removed).",
  },
  {
    before: [
      "Limited-time, non-transferable offer for new residential Kinetic Broadband Internet customers who have not received service in the past 30 days. Availability and pricing vary by location; advertised price includes a $5/mo. AutoPay credit. AutoPay: Enrollment required to receive credit; credit may take up to two billing cycles to appear. Pricing & Guarantee: Promotional price guaranteed for 1 year (300Mbps, 1Gig), 2 years (2Gig), or 3 years (Max 2Gig). After the guarantee period, or upon service suspension/change/relocation, standard rates apply. Additional Charges: Taxes, fees, surcharges, and monthly equipment fees ($10.99/mo. for Wi-Fi Gateway) apply and are not included in the everyday price. Printed bills incur a $2/mo. charge (where permitted by law). Speeds: Kinetic cannot guarantee uninterrupted service or specific speeds; actual speeds vary based on network conditions and device capabilities. General: Subject to Kinetic Terms and Conditions and Acceptable Use Policy.",
      "Prepaid Mastercard® value varies by plan selected ($50 for 1Gig; $100 for 2Gig; $200 for Max bundled 1Gig+; $200 for Retargeting/Movers on 300Mbps+). Open to new Kinetic Broadband Internet customers who have not had service in the last 30 days. Eligibility: Requires subscription to a qualified plan and account must remain in good standing for at least 90 days. Limit one per household. Local, State, or Federal government accounts are not eligible. Prepaid Mastercard is issued by The Bancorp Bank, Member FDIC, pursuant to license by Mastercard International Incorporated. Card expires; see Cardholder Agreement for details.",
      "Service Availability & General Terms: Limited-time, non-transferable offer for residential customers. May not be combined with other promotions. Credit restrictions apply. Services subject to availability, Kinetic Terms and Conditions, and Acceptable Use Policy. Kinetic cannot guarantee upload or download speeds or uninterrupted, error-free service. Speed availability and provisioning vary by network conditions, congestion, and customer location.",
      "Promotional Pricing & AutoPay: Advertised “Everyday” pricing requires enrollment in AutoPay. A $5/mo. credit is applied to the bill; credit may take up to two billing cycles to reflect. Without AutoPay, standard rates apply. Printed bills incur a $2/mo. charge (excluding MN, NE, NM, NY, OK, PA, TX). Taxes, fees, surcharges, and equipment fees are extra.",
      "Price Guarantee: Rates are guaranteed for a specific period based on speed: 1 year for Fiber/Cable 300Mbps-1Gig; 2 years for Fiber 2Gig; 3 years for Fiber MAX 2Gig. After the guarantee period, rates are subject to change.",
      "Equipment: Monthly equipment fees apply ($10.99 for Gateway). Up to 2 Wi-Fi extenders available for $10/mo (or $5/mo each) if not included in plan. Equipment must be returned upon termination or a $100 fee applies.",
      "Installation: Standard installation fees may apply. Certain addresses requiring extended construction are subject to a $750 non-refundable Extended Internet Installation Fee, payable prior to work beginning.",
      "Prepaid Mastercard®: Value depends on plan. Must maintain service in good standing for 90 days. Cards issued by The Bancorp Bank, Member FDIC. Expiration dates apply.",
      "Orders are processed by our specialized team and fulfilled by Kinetic infrastructure.",
      "Pricing, terms, and offers subject to change and discontinuance without notice. All trademarks and service marks are the property of their respective owners. All services not available in all areas.",
      "kineticfiber.us is operated by Ziatan, an independent Authorized Agent of Kinetic. Kinetic is a registered service mark or trademark of Uniti Group, Inc. All other marks are the property of their respective owners.",
      "All trademarks remain the property of their respective owners, and are used by Ziatan only to describe products and services offered by each respective trademark holder.",
    ].join("\n"),
    after: "(disclaimerSections above)",
    why: "Disclaimer rephrased and humanized per boss's instruction; all facts and numbers unchanged. Repeated points (AutoPay, price guarantee, prepaid Mastercard) now said once, grouped under lowercase headings. The Bancorp Bank / Mastercard licence sentence and the Uniti Group trademark sentence are kept word for word. 2026-10-07.",
  },
];
