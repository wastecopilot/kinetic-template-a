# Kinetic Fiber website: Template A

Standalone Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 site for an Authorized Kinetic Agent
(legal name and phone in `data/site.ts`). This project shares no code with Template B.
Typeface: **Figtree only** (Medium 500, Bold 700, Black 900).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start       # production build, http://localhost:3000
```

The port (3000) is set in `package.json`, so you never need to type it.

| Page | URL |
|---|---|
| Home (Fiber Max lead offer) | `/` |
| Internet | `/internet` |
| Home Phone | `/home-phone` |
| Entertainment (streaming) | `/entertainment` |
| Privacy Policy | `/privacy-policy` |

## Edit in one place

| What | File |
|---|---|
| Legal business name, phone, email, address, hours, policy "Last updated" date | `data/site.ts` |
| All plan prices, Fiber Max details, AT&T footnote, Home Phone price, AutoPay note | `data/plans.ts` |
| Offer disclaimer / fine print (from kineticfiber.us) + `DISCLAIMER_CHANGES` audit trail | `data/disclaimer.ts` |
| Navigation and policy links (header + footer) | `components/nav.ts` |
| Streaming services on the Entertainment page | `data/streaming.ts` |
| Brand colors, font and allowed weights | `app/globals.css`, `app/layout.tsx` |

**Tailwind config:** Tailwind CSS v4 is configured in CSS, not in a `tailwind.config.js` file. The `@theme` block
in `app/globals.css` holds the brand colors, the font and the allowed weights; `postcss.config.mjs` loads Tailwind.

Every price renders through `components/Price.tsx`. Images and their sources: `public/images/CREDITS.md`.

## Checks (run after `npm run build`)
```bash
python scripts/check-banned-terms.py   # banned and retired wording (term list lives in the script)
python scripts/check-typography.py     # Title Case in headings/buttons + font families in built CSS
```

## Before publishing
- Have counsel review the Privacy Policy and the disclaimer edits listed in `DISCLAIMER_CHANGES`.
- Connect the address-check form to a backend. It is UI only for now.
