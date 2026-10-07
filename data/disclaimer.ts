/**
 * Offer disclaimer / fine print — single source of truth for BOTH templates.
 *
 * Source: the "Disclaimer" block on every page of https://kineticfiber.us
 * (identical on all 7 pages, fetched 2026-10-07). Kept word for word except
 * the approved edits listed in DISCLAIMER_CHANGES below.
 */

export const disclaimer: string[] = [
  "Limited-time, non-transferable offer for new residential Kinetic Broadband Internet customers who have not received service in the past 30 days. Availability and pricing vary by location; advertised price includes a $5/mo. AutoPay credit. AutoPay: Enrollment required to receive credit; credit may take up to two billing cycles to appear. Pricing & Guarantee: Promotional price guaranteed for 1 year (300Mbps, 1Gig), 2 years (2Gig), or 3 years (Max 2Gig). After the guarantee period, or upon service suspension/change/relocation, standard rates apply. Additional Charges: Taxes, fees, surcharges, and monthly equipment fees ($10.99/mo. for Wi-Fi Gateway) apply and are not included in the everyday price. Printed bills incur a $2/mo. charge (where permitted by law). Speeds: Kinetic cannot guarantee uninterrupted service or specific speeds; actual speeds vary based on network conditions and device capabilities. General: Subject to Kinetic Terms and Conditions and Acceptable Use Policy.",
  "Prepaid Mastercard® value varies by plan selected ($50 for 1Gig; $100 for 2Gig; $200 for Max bundled 1Gig+; $200 for Retargeting/Movers on 300Mbps+). Open to new Kinetic Broadband Internet customers who have not had service in the last 30 days. Eligibility: Requires subscription to a qualified plan and account must remain in good standing for at least 90 days. Limit one per household. Local, State, or Federal government accounts are not eligible. Prepaid Mastercard is issued by The Bancorp Bank, Member FDIC, pursuant to license by Mastercard International Incorporated. Card expires; see Cardholder Agreement for details.",
  "Service Availability & General Terms: Limited-time, non-transferable offer for residential customers. May not be combined with other promotions. Credit restrictions apply. Services subject to availability, Kinetic Terms and Conditions, and Acceptable Use Policy. Kinetic cannot guarantee upload or download speeds or uninterrupted, error-free service. Speed availability and provisioning vary by network conditions, congestion, and customer location.",
  "Promotional Pricing & AutoPay: Advertised “Everyday” pricing requires enrollment in AutoPay. A $5/mo. credit is applied to the bill; credit may take up to two billing cycles to reflect. Without AutoPay, standard rates apply. Printed bills incur a $2/mo. charge (excluding MN, NE, NM, NY, OK, PA, TX). Taxes, fees, surcharges, and equipment fees are extra.",
  "Price Guarantee: Rates are guaranteed for a specific period based on speed: 1 year for Fiber/Cable 300Mbps-1Gig; 2 years for Fiber 2Gig; 3 years for Fiber MAX 2Gig. After the guarantee period, rates are subject to change.",
  "Equipment: Monthly equipment fees apply ($10.99 for Gateway). Up to 2 Wi-Fi extenders available for $10/mo (or $5/mo each) if not included in plan. Equipment must be returned upon termination or a $100 fee applies.",
  "Installation: Standard installation fees may apply. Certain addresses requiring extended construction are subject to a $750 non-refundable Extended Internet Installation Fee, payable prior to work beginning.",
  "Prepaid Mastercard®: Value depends on plan. Must maintain service in good standing for 90 days. Cards issued by The Bancorp Bank, Member FDIC. Expiration dates apply.",
];

/** Closing fine-print lines from the same live-site block. */
export const finePrintFooter: string[] = [
  "Orders are processed by our specialized team and fulfilled by Kinetic infrastructure.",
  "Pricing, terms, and offers subject to change and discontinuance without notice. All trademarks and service marks are the property of their respective owners. All services not available in all areas.",
  "kineticfiber.us is operated by Ziatan, an independent Authorized Agent of Kinetic. Kinetic is a registered service mark or trademark of Uniti Group, Inc. All other marks are the property of their respective owners.",
  "All trademarks remain the property of their respective owners, and are used by Ziatan only to describe products and services offered by each respective trademark holder.",
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
];
