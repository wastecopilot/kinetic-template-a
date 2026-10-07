/** Site navigation. Every page lives at the site root. */
export function navLinks() {
  return [
    { href: "/", label: "Home" },
    { href: "/internet", label: "Internet" },
    { href: "/home-phone", label: "Home Phone" },
    { href: "/entertainment", label: "Entertainment" },
  ];
}

/**
 * Every policy page. The live site (kineticfiber.us) publishes one policy: the Privacy Policy.
 * Add new policy pages here and they appear in the footer automatically.
 */
export function policyLinks() {
  return [{ href: "/privacy-policy", label: "Privacy Policy" }];
}
