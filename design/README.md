# dotBANG design tokens

The machine-readable implementation of `BRAND-GUIDELINE.md` version 3.0 (Appendix B). One hand-edited
file, two generated artefacts, two checks.

| File | What it is | Edited by hand |
|---|---|---|
| `dotbang.tokens.json` | The token source: colour, type, spacing, layout, radius, glass, gradient, motion, the ASCII field, focus, and the machine-readable conformance blocklist. References other tokens as `{color.accent}`. | **yes** |
| `dotbang.tokens.css` | CSS custom properties, including the Appendix B names exactly (`--black`, `--accent`, `--s1` … `--r-pill`), the `@font-face` spec from guideline §9, and the Astryx neutral-theme surface mapped onto brand tokens. | no, generated |
| `dotbang.tokens.ts` | Typed ES module: `tokens`, `cssVars`, `conformance`. Imports straight into the React 19 + Astryx build. | no, generated |
| `build-tokens.mjs` | The generator. `node design/build-tokens.mjs` writes both. `--check` fails if the generated files are stale. | — |
| `../tools/brand-conformance.mjs` | Text-level lint: retired hexes, banned name casings, blue gradients outside the horizon, drifted token values. | — |
| `../tools/dom-checks.js` | Rendered-page checks, run inside the browser: the name as rendered after `text-transform`, real computed backdrop-filter, accent usage, focus ring. | — |

## Use it

```bash
node design/build-tokens.mjs          # regenerate after editing the JSON
node design/build-tokens.mjs --check  # CI: fail if the generated files are stale
node tools/brand-conformance.mjs ../path/to/dist
```

```ts
// React 19 + Astryx
import '@brand/dotbang.tokens.css';       // in the app entry, before any component CSS
import { tokens, cssVars } from '@brand/dotbang.tokens';

const accent = tokens.color.accent;        // "#0297DE"
const horizon = tokens.gradient.horizon;   // stops, height, placement rules
```

```css
/* Everything reads a token. A literal colour in a component file is a defect. */
.header { background: var(--glass); backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate)); }
.footer__horizon { background: var(--gradient-horizon); }
```

## Rules

- **The guideline wins.** If `dotbang.tokens.json` and `BRAND-GUIDELINE.md` ever disagree, the guideline
  is correct and the JSON is fixed the same day. The generated files catch up by rerunning the generator.
- **Never edit a generated file.** Edit the JSON, rerun, commit the trio together.
- **No new token without a guideline line.** A design decision that needs a value the guideline does not
  carry is either already covered by an existing token or it is an amendment waiting to happen.
- **The accent is one value.** There is no `#6CACE4`, no dual-value accent token, and no `?accent=`
  variant. That was the pre-v3 conversation; v3 closed it (correction C8).

## Versioning

The token set moves with the guideline version. `dotbang.tokens.json` carries `$meta.guidelineVersion`;
the generated headers repeat it. A brand release that changes a value changes the guideline first, then
this file, then every consuming build.
