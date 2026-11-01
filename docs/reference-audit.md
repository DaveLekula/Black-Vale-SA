# Reference Audit — SILLAGE Template
## https://shy-perspective-949475.framer.app/

### Audit Status
This audit was performed by inspecting the publicly rendered HTML/text content of the reference URL.
Full computed-style and interactive-behaviour inspection requires browser DevTools access, which is
not available in this environment. Values marked **[MEASURED]** are from the prompt's pre-measured tokens.
Values marked **[ADAPTED]** are reasoned from the template structure and implemented accordingly.

---

## Design Tokens (from prompt + verification)

```css
--bg: #0c0a09             /* Very dark warm black */
--surface: #14100d        /* Slightly lighter dark */
--surface-raised: #1e1813 /* Card/raised surface */
--surface-soft: #171310   /* Soft mid-dark */
--ink: #ede4d3            /* Warm ivory text */
--muted: #ada596          /* Muted warm grey */
--gold: #b99659           /* Restrained warm gold */
--rule: rgba(185,150,89,.25) /* Fine gold dividing rule */
--font-display: 'Cormorant Garamond', 'Times New Roman', serif
--font-body: 'Switzer', sans-serif  [→ DM Sans used as fallback, Switzer unavailable via Google Fonts without self-hosting]
```

---

## Typography (observed at ~1348px)

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero wordmark | ~199px | 300 | Cormorant Garamond, tracking 0.2em |
| Belief statement | 60px | 300 | Italic, Cormorant Garamond |
| Chapter titles | 58px | 300 | Mixed roman/italic |
| Editorial title | 44px | 300 | |
| Body text | 17px | 400 | DM Sans |
| Section labels | 12px | 400 | Uppercase, tracking 0.2em |
| Process numbers | 30px | 300 | Cormorant Garamond, gold |

Fluid sizing applied via `clamp()` to accommodate BLACKVALE wordmark length.

---

## Section Order (Homepage)

1. **Navigation** — fixed, restrained, transparent → scrolled border
2. **Hero** — Full viewport, cinematic landscape, warm overlay, vertical rules, large wordmark, italic line, Begin cue
3. **Belief statement** — Dark background, centred italic serif quote, vertical rule above
4. **Chapter I** — 50/50 image/text split, image left, text right, editorial image
5. **Chapter II** — 50/50 reversed, text left, image right
6. **Chapter III** — 2-col layout, heading sticky left, numbered steps right with fine rules
7. **Technology principles** — Full-width centred, single display headline
8. **Featured solutions (×3)** — Alternating image/text, large italic number, directional link
9. **Solutions collection** — Accordion list of all 5 solutions
10. **Solution anatomy** — Interactive selector + 3-layer breakdown
11. **About interlude** — 50/50 image/text with principles
12. **Discovery flow** — 2-col: heading + 3-step card
13. **Insights** — Header + list of 3 articles + principle block
14. **Contact CTA** — Centred, background image tint, CTA button
15. **Footer** — 4-column, fine rules, back to top

---

## Navigation

- Height: 72px
- Logo left, nav links centre/right, CTA right
- Transparent on hero, darkens with backdrop-blur on scroll
- Links: Solutions, Approach, About, Insights, Contact
- CTA: "Start a Project" — gold border button

---

## Hero

- 100vh min height
- Image: `/images/hero-landscape.jpg` (warm cinematic landscape)
- Dark overlay: linear-gradient (warm dark), approx 30–55% opacity
- Vertical framing rules at 48px from edges
- Eyebrow label above rule: gold, uppercase, 12px tracked
- Fine horizontal rule
- Wordmark: BLACKVALE ~199px, tracking 0.2em, Cormorant Garamond 300
- SA: gold, ~52px
- Italic line: "Built with purpose. Designed to endure." — muted
- Bottom metadata: left "ENGINEERING · DESIGN · AUTOMATION", right "SOUTH AFRICA · WORKING BEYOND BORDERS"
- Centred "Begin" cue with animated vertical line

---

## Images

| Filename | Usage | Source URL | Status |
|---|---|---|---|
| hero-landscape.jpg | Hero background | framerusercontent.com/…9T8E… | Downloaded 661KB |
| editorial-1.jpg | Chapter I | framerusercontent.com/…sjp3… | Downloaded 693KB |
| wide-1.jpg | Chapter II / Solutions | framerusercontent.com/…8jMM… | Downloaded 951KB |
| featured-1.jpg | Solutions | framerusercontent.com/…8gwF… | Downloaded 622KB |
| object-1.webp | Object module | framerusercontent.com/…eX1M… | Downloaded 29KB |
| portrait-1.jpg | About | framerusercontent.com/…0nIM… | Downloaded 149KB |
| wide-2.jpg | Contact CTA background | framerusercontent.com/…xMOc… | Downloaded 826KB |

**Licence note:** These images are from a Framer community template. The template's licence terms
govern their use. If a commercial deployment is intended, the owner should verify the template
licence allows asset redistribution, or replace with properly licensed alternatives.

---

## Motion (observed/adapted)

| Element | Trigger | Property | Approx Duration | Easing |
|---|---|---|---|---|
| Hero image | Page load | Scale 1.08 → 1 | 2s | cubic-bezier(0.16, 1, 0.3, 1) |
| Hero text blocks | Page load | opacity + translateY | 0.8–1s, staggered | same |
| Hero parallax | Scroll | translateY (0.25× scroll) | continuous | passive |
| Section reveals | IntersectionObserver | opacity + translateY | 0.7–1s | ease |
| Nav transition | Scroll > 40px | background + border | 0.4s | ease |
| Image hover | Hover | scale(1.04) | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| Link arrow | Hover | translateX(6–8px) | 0.3s | ease |
| Nav hamburger | Click | rotate (×/—) | 0.3s | ease |
| Mobile menu | Click | translateX(100% → 0) | 0.4s | cubic-bezier(0.16, 1, 0.3, 1) |
| Discovery accordion | Click | max-height | 0.5s | cubic-bezier(0.16, 1, 0.3, 1) |

**prefers-reduced-motion:** All transitions and animations disabled via CSS media query.

---

## Intentional Deviations from Reference

1. **Font:** Switzer is not freely available on Google Fonts. **DM Sans** used as a geometric
   sans-serif substitute. Visual effect is similar; tracked character spacing is comparable.
   Self-hosting Switzer from Fontshare would improve fidelity.

2. **Object module (3D spin):** The reference shows a rotating perfume bottle at `0°`.
   This is brand-specific packaging and a 3D web viewer. Not reproduced — would require
   either a 3D model or an image sequence, neither of which is brand-neutral or available.
   The Solutions Collection accordion fulfils the same compositional role.

3. **Animated counters:** The reference shows animated number counters (0 compositions, 0 raw materials).
   These were fabricated statistics. Replaced with three honest principles per the brief.

4. **Review/testimonial block:** Reference includes a third-party review quote.
   Replaced with a clearly labelled Blackvale principle per the brief's instruction.

5. **Shopping/cart functionality:** Removed. Replaced with project enquiry flow throughout.

6. **Framer runtime:** The reference uses Framer's proprietary JS runtime for advanced motion.
   All visible scroll/reveal/hover animations are recreated with CSS transitions +
   IntersectionObserver in vanilla React. Exact easing reproduction is an adaptation.
