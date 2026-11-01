# BLACKVALE SA — Website

South African software engineering and digital solutions company website.
Built on the visual language of the SILLAGE Framer template.

---

## Stack

- **Framework:** Next.js 10.2.3 (Pages Router)
- **Language:** TypeScript 4
- **Styling:** Tailwind CSS 2 + CSS custom properties in `styles/globals.css`
- **Animation:** CSS transitions + `IntersectionObserver` (no runtime animation library)
- **Node requirement:** Node 12+ (tested on v12.11.1)

---

## Install & Run

```bash
cd blackvale-sa
npm install
npm run dev        # Development server at http://localhost:3000
npm run build      # Production build
npm start          # Serve production build
```

---

## Configuration

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | For deployment | Public base URL, no trailing slash |
| `CONTACT_EMAIL` | For contact form | Recipient email. Leave empty for unavailable mode. |
| `SENDGRID_API_KEY` | If using SendGrid | API key for SendGrid mail delivery |
| `FROM_EMAIL` | If using SendGrid | From address for outbound email |

### Contact Form Delivery

The form at `/contact` validates client-side and server-side. The API route at `pages/api/contact.ts`
is ready to be wired to a mail provider. To activate:

1. Set `CONTACT_EMAIL` in `.env.local`
2. Choose a provider (SendGrid recommended) and uncomment/implement the send call in `pages/api/contact.ts`
3. Install the provider's package: `npm install @sendgrid/mail`

Until configured, the form shows an honest "not configured" message and offers a clipboard copy.

---

## Project Structure

```
blackvale-sa/
├── components/
│   ├── home/           # All homepage section components
│   ├── Img.tsx         # Lightweight image wrapper
│   ├── Layout.tsx      # Page wrapper (Head, Nav, Footer)
│   ├── Nav.tsx         # Fixed navigation with mobile menu
│   └── Footer.tsx      # Site footer
├── data/
│   ├── solutions.ts    # All 5 solution definitions
│   └── insights.ts     # All 3 insight articles
├── docs/
│   ├── reference-audit.md
│   ├── assets.md
│   └── visual-qa.md
├── lib/
│   └── useInView.ts    # IntersectionObserver hook
├── pages/
│   ├── index.tsx           # Homepage
│   ├── about.tsx           # About & Approach
│   ├── contact.tsx         # Contact form
│   ├── privacy.tsx         # Privacy policy (draft)
│   ├── terms.tsx           # Terms of use (draft)
│   ├── sitemap.xml.tsx     # Dynamic sitemap
│   ├── solutions/
│   │   ├── index.tsx       # Solutions overview
│   │   └── [slug].tsx      # Solution detail (×5)
│   ├── insights/
│   │   ├── index.tsx       # Insights listing
│   │   └── [slug].tsx      # Insight article (×3)
│   └── api/
│       └── contact.ts      # Contact form endpoint
├── public/
│   ├── images/             # All downloaded reference images + logo
│   └── robots.txt
└── styles/
    └── globals.css         # Design tokens + global styles
```

---

## Fonts

| Font | Source | Status |
|---|---|---|
| Cormorant Garamond | Google Fonts (CDN) | ✅ Active |
| DM Sans | Google Fonts (CDN) | ✅ Active (substitute for Switzer) |
| Switzer | [Fontshare](https://www.fontshare.com/fonts/switzer) | Not loaded |

To use Switzer (the reference font): download from Fontshare, self-host in `public/fonts/`,
add `@font-face` rules in `styles/globals.css`, and update `--font-body` CSS variable.

---

## Deployment

This is a standard Next.js application and can be deployed to:
- **Vercel** (recommended): `npx vercel` or push to GitHub and connect
- **Netlify**: Add `next.config.js` with `target: 'serverless'`
- **Node server**: `npm run build && npm start`

Set all environment variables in your deployment platform's settings panel.

**Do not publish a `.env.local` file to version control.**

---

## Unresolved Owner Inputs Required

| Item | Action needed |
|---|---|
| **CONTACT_EMAIL** | Set recipient email in deployment environment variables |
| **Domain / Base URL** | Set `NEXT_PUBLIC_BASE_URL` once domain is confirmed |
| **Image licences** | Verify Framer template licence permits asset use; replace if needed (see `docs/assets.md`) |
| **Privacy & Terms** | Both pages are drafts — review with legal professional before public launch |
| **Social links** | No social media links added (none provided) — add to Footer.tsx when available |
| **Switzer font** | Optionally self-host from Fontshare for reference fidelity |
| **OG image** | A default Open Graph image (`/public/images/og-default.jpg`) should be created |
| **Favicon** | Add proper favicon files to `/public/` |
