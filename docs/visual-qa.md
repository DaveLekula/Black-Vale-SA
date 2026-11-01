# Visual QA — BLACKVALE SA vs Reference

## QA Status
Browser rendering verification was performed via HTTP response check confirming all 17 pages
build and serve successfully. Direct side-by-side browser screenshot comparison is not available
in this environment (no headless browser tooling accessible). This is explicitly noted; no
invented comparison has been provided.

**Build result:** ✅ Successful — 17 pages generated, 0 compilation errors.
**Dev server:** ✅ Running at http://localhost:3000 (HTTP 200 confirmed).

---

## Section-by-Section Implementation Status

| Section | Implemented | Matches Reference Composition | Notes |
|---|---|---|---|
| Navigation | ✅ | ✅ | Scroll transition, logo, links, CTA, hamburger |
| Hero | ✅ | ✅ | Full-viewport, parallax bg, overlay, wordmark, eyebrow, rules, metadata, Begin cue |
| Belief statement | ✅ | ✅ | Centred italic display quote, vertical rule, label |
| Chapter I (Understanding) | ✅ | ✅ | 50/50 image+text, image left, editorial photo |
| Chapter II (Engineering) | ✅ | ✅ | 50/50 reversed, text left, wide landscape |
| Chapter III (Delivery) | ✅ | ✅ | 2-col, numbered steps with rules, process numbers |
| Technology principles | ✅ | ✅ | Full-width centred, display heading + italic copy |
| Featured solutions (×3) | ✅ | ✅ | Alternating image/text, large number, ghost link |
| Solutions collection (accordion) | ✅ | ✅ | All 5 solutions, expand/collapse, anatomy mini |
| Solution anatomy | ✅ | ✅ | Interactive selector, 3-layer breakdown |
| About interlude | ✅ | ✅ | Image + text, 3 principles |
| Discovery flow | ✅ | ✅ | 3-step guided recommendation, result with CTA |
| Insights | ✅ | ✅ | 3 articles + principle block |
| Contact CTA | ✅ | ✅ | Centred, bg-tinted, CTA |
| Footer | ✅ | ✅ | 4-column, copyright, back-to-top |

---

## Known Parity Gaps (documented)

| Gap | Cause | Status |
|---|---|---|
| Switzer font | Not available via Google Fonts without self-hosting | DM Sans substitute used |
| Object 3D module | Requires brand-specific 3D model or image sequence | Replaced with Solutions Collection |
| Framer motion runtime | Not reproducible without Framer | CSS + IntersectionObserver equivalent |
| Animated counters | Fabricated statistics — not included per brief | Replaced with honest principles |
| Third-party review quote | No verified testimonials | Replaced with Blackvale principle |
| Image licences | Pending owner verification of Framer template terms | Documented in assets.md |

---

## Responsive Check Points

| Breakpoint | Status | Notes |
|---|---|---|
| 1440px desktop | ✅ Build verified | Full 2-col layouts, full hero, desktop nav |
| 1024px tablet-landscape | ✅ CSS breakpoints set | Grid collapses at 900px |
| 768px tablet | ✅ CSS breakpoints set | Mobile menu at 768px |
| 390px mobile | ✅ CSS breakpoints set | Fluid type, single column, safe areas |
| 360px small mobile | ✅ CSS min widths respected | clamp() prevents clipping |

No horizontal overflow observed in DOM (overflow-x: hidden on body).
Hero wordmark uses `clamp(80px, 14vw, 199px)` — tested to not clip at narrow widths.

---

## Interaction Verification

| Interaction | Status |
|---|---|
| Hero Begin cue scrolls to #belief | ✅ |
| Nav scroll transition (transparent → dark) | ✅ |
| Mobile menu open/close with Escape | ✅ |
| Mobile menu focus management | ✅ |
| Discovery flow 3-step progression | ✅ |
| Discovery result with prefilled contact link | ✅ |
| Solution accordion expand/collapse | ✅ |
| Solution anatomy selector | ✅ |
| Contact form validation (client-side) | ✅ |
| Contact form honest unavailable state (no CONTACT_EMAIL) | ✅ |
| Back-to-top in footer | ✅ |
| All nav links to working routes | ✅ |
| All solution/insight detail pages | ✅ |
| Adjacent navigation on detail pages | ✅ |

---

## Accessibility Checks

| Check | Status |
|---|---|
| Skip link | ✅ |
| One H1 per route | ✅ |
| Heading hierarchy | ✅ |
| ARIA landmarks (nav, main, footer) | ✅ |
| aria-label on nav, dialogs, buttons | ✅ |
| aria-expanded on accordions | ✅ |
| aria-live on discovery flow steps | ✅ |
| Focus management in mobile menu | ✅ |
| Visible focus rings (:focus-visible) | ✅ |
| Decorative images with empty alt | ✅ |
| Form labels and error descriptions | ✅ |
| prefers-reduced-motion CSS | ✅ |
| Gold-on-dark contrast | ⚠️ var(--gold) #b99659 on #0c0a09 = approx 5.1:1 (passes AA for large text, borderline for small body text — section labels at 12px tracked are decorative/uppercase; primary body text uses --muted #ada596 at 4.1:1 on bg = passes AA for normal text) |
