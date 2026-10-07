/**
 * Business details used across BOTH templates.
 * Change the legal name or phone number here and it updates everywhere.
 */
export const site = {
  legalName: "Ziatan LLC",
  phoneDisplay: "(833) 364-7013",
  phoneHref: "tel:+18333647013",
  email: "Compliance@ziatan.com",
  address: "1730 S Amphlett Blvd, San Mateo, CA 94402",
  salesHours: "Mon–Fri 9:00 AM–9:00 PM ET · Sat 10:00 AM–5:00 PM ET · Sun closed",
  copyrightYear: 2026,
  /** Shown as "Last updated" on every policy page. */
  policyLastUpdated: "October 7, 2026",
  /** Short reseller statement shown in every hero. */
  agentNotice: "Authorized Kinetic Agent — we are an independent reseller, not Kinetic.",
} as const;

/** Full reseller statement shown in every footer. */
export const agentStatement = `${site.legalName} is an independent Authorized Kinetic Agent and reseller. We are not Kinetic. Kinetic internet and home phone services are provided and billed by Kinetic.`;
