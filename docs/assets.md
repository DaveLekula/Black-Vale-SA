# Asset Inventory — BLACKVALE SA

## Logo
| Asset | Status | Notes |
|---|---|---|
| `public/images/blackvale-logo.png` | ✅ Supplied | BV monogram + BLACKVALE SA wordmark on white bg. Used in nav (filter applied for dark bg) and footer. |

## Photography
| Local File | Original URL | Placement | Licence Status |
|---|---|---|---|
| `hero-landscape.jpg` | framerusercontent.com/images/9T8EyTqBKe5937pt3zwy6oNIc.jpg | Hero background | See note below |
| `editorial-1.jpg` | framerusercontent.com/images/sjp3jE24kVpYxgV70d7mbQXYfwY.jpg | Chapter I / Software page | See note below |
| `wide-1.jpg` | framerusercontent.com/images/8jMMkPe9MZYXx9wskIyPfXBuhQ.jpg | Chapter II / Digital page | See note below |
| `featured-1.jpg` | framerusercontent.com/images/8gwF6iHE2BnOFTjwnMaKZSohfs.jpg | Integration page | See note below |
| `object-1.webp` | framerusercontent.com/images/eX1MvqrVcR8eKXUAJtKxWMCB0Y.webp | Reference object module | See note below |
| `portrait-1.jpg` | framerusercontent.com/images/0nIMicbTIKJSqReMQcGarraZHUk.jpg | About interlude | See note below |
| `wide-2.jpg` | framerusercontent.com/images/xMOcv9Q9BkswPBAQFwzSoAq1UiA.jpg | Contact CTA / Automation page | See note below |

**Licence note:** These images originate from a Framer community template. Framer templates marked
"free to use" allow remixing, but this does not automatically grant rights to the underlying stock
photography. Before deploying commercially:
1. Confirm the SILLAGE template's specific licence (check framer.com/marketplace or the template creator).
2. If photography redistribution is not permitted, replace with licensed alternatives (e.g. Unsplash,
   Getty, licensed editorial photography with comparable warm/cinematic tone).
3. Replacement images should preserve the atmospheric quality, dark overlay treatment and focal points
   used in the current implementation.

## Fonts
| Family | Source | Status |
|---|---|---|
| Cormorant Garamond | Google Fonts | ✅ Loaded via CDN |
| DM Sans | Google Fonts | ✅ Loaded via CDN (substitute for Switzer) |
| Switzer | Fontshare | ⚠️ Not loaded — DM Sans used as substitute |

To use Switzer: download from https://www.fontshare.com/fonts/switzer, place in `public/fonts/`,
add `@font-face` declarations in `styles/globals.css`, and remove the DM Sans Google Fonts import.
Fontshare's licence permits use in commercial projects.
