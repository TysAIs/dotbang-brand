# Brand conformance: guideline v3

**Version:** 1.0, 2026-11-15. **Owner:** Tyler. **Status:** working record. Nothing here is published.
This file is the checkpoint list for every dotBANG surface, and the sweep record for the artefacts that
exist on 2026-11-15.

Three things are checked, and they are not interchangeable:

| Method | What it can decide | Command |
|---|---|---|
| Text lint | banned hexes, banned name casings, blue gradients outside the horizon, drifted token values | `node tools/brand-conformance.mjs <dir>` |
| Rendered DOM checks | the name after `text-transform`, real computed `backdrop-filter`, accent fills, focus ring, the resolved gradient | paste `tools/dom-checks.js` into the page |
| Eyes on a render | whether it is beautiful, whether the horizon reads as a horizon, whether glass reads as glass, hierarchy, weight, air | screenshots, no shortcut |

A page can pass both automated checks and still be off brand. A page that fails either is off brand
regardless of how it looks.

## The checkpoint list

| # | Check | Pass criteria | Guideline |
|---|---|---|---|
| 1 | Field | `#000000`, no lifted black, no gradient panel | §6, D4 |
| 2 | Accent | `#0297DE`; no `#6CACE4` anywhere; one value, no variant token | §6, D12, correction C8 |
| 3 | Accent share | never body text, never a fill at rest, never more than about 5 percent of a surface | §6 |
| 4 | Footer horizon | black to white to blue, once per page, last element, no text on it, no other blue gradient | §6, D13 |
| 5 | Chrome | header and footer are glass, white text at rest, blue only on hover, solid fallback for high contrast | §11, L4 |
| 6 | Glass values | fill `rgba(10,10,10,.52)`, `blur(20px) saturate(160%)`, hairline border, max 3 blurred surfaces per view | §11 |
| 7 | Name | exactly `dotBANG`, never `DOTBANG`/`DotBang`/`dotbang` in prose, and that includes after `text-transform` | §16, L5 |
| 8 | Mark | round dot, square exclamation, accent dot, white exclamation, never restroked | §4, L6 |
| 9 | Type | Inter and JetBrains Mono self-hosted; only the frozen scale; weights 400 to 800 | §§7 to 9, L8 |
| 10 | Mono labels | JetBrains Mono 500, uppercase, 11 to 12px, tracking 0.08 to 0.12em, never blue unless index or live | §8 |
| 11 | ASCII field | one canvas, white glyphs, non-interactive, 0.05 to 0.22 alpha, no text on it at reading contrast | §11, D10 |
| 12 | Spacing and radius | 8pt scale, radii 14/18/24/999, nothing off-scale | §10 |
| 13 | Focus | 2px accent ring, 2px offset, visible on keyboard focus | §§6, 26 |
| 14 | Cost | $0 recurring tooling, no paid design tools, no stock | Tyler, 2026-11-14 |

---

## Sweep record

### A. This repo's token set and staged component library — PASS

Path: `design/` (tokens) and the staged preview build in the dotBANG lane workspace (`design-preview/`,
built with Vite, rendered in Chromium at 1440 and 390).

| Check | Result | Evidence |
|---|---|---|
| Text lint | **PASS**, 8 files, no banned values or name forms | `node tools/brand-conformance.mjs <preview>/dist` |
| Accent token | **PASS** `#0297DE` | DOM check: `accent token is #0297DE` |
| Field token | **PASS** `#000000` | DOM check: `field token is #000000` |
| Name as rendered | **PASS**, no banned form; `dotBANG` present | DOM check on rendered `innerText` |
| Glass chrome | **PASS**, header has `blur(20px) saturate(160%)` | DOM check |
| Footer horizon | **PASS**, one accent gradient, inside the footer | DOM check: `accentGradientElements: 1` |
| Accent fill at rest | **PASS** on shipped components; one expected exception, the colour swatch in the token display | DOM check |
| Focus ring | **PASS**, accent | DOM check |
| Horizontal overflow | **PASS** at 1440 (`scrollWidth` 1425 of 1440) and at 390 (375 of 390) after the phone fixes | measured in the browser |
| Token drift | **PASS**, generated CSS and TS match the JSON | `node design/build-tokens.mjs --check` |
| Typecheck and build | **PASS**, `tsc --noEmit` 0 errors, Vite build clean | build log |

Three defects were found and fixed during this sweep, recorded because they are the class of defect the
checks exist for: the review bar rendered the name as `DOTBANG` under `text-transform: uppercase` (the
same bug the v3 skeleton hit); the footer label did the same; the mobile feed chip pushed the page 67px
wider than a 390px viewport.

### B. v3 site skeleton, card t_e830a47e — one FAIL

Path: `~/.hermes/profiles/dotbang/work/dotbang-site-v3-2026-11-15/site/`.

| Check | Result | Evidence |
|---|---|---|
| Accent hex as rendered | **PASS**, defaults to `#0297de` | `src/brand/tokens.css:54` |
| One accent value | **FAIL**: ships the retired dual-value variant `:root[data-accent="6cace4"]{--accent:#6cace4}` and the `?accent=` switch that drives it | `src/brand/tokens.css:99-101`; lint FAIL |
| Horizon | PASS as a shape, **not tokenized**: hand-authored 8-stop ramp (`46/58/70/80/88/94/100`) with white to 94 percent | `src/brand/page.css:677` |
| Glass | PASS as a value, **not tokenized**: literals `blur(20px) saturate(160%)` at three surfaces | `src/brand/page.css:104, 355, 653` |
| Name casing | PASS, the one `DOTBANG` string left is the comment describing the bug that was fixed | `src/brand/page.css:705` |

The skeleton is the artefact the running build started from, so its two tokenization gaps travel with it.

### C. Running site build, card t_99ef40c0 — read only, mid-flight snapshot

Path served locally at `127.0.0.1:4180` at 2026-11-15 23:55. I did not touch its files; I read what it
serves, because editing a build that is running in another worker is how two lanes collide.

Passing, with evidence:

| Check | Evidence |
|---|---|
| Field `#000000`, accent `#0297DE` | DOM check |
| Name as rendered | no banned casing in `innerText`; `dotBANG` present |
| Glass chrome | `.chrome-bar` computes `blur(20px) saturate(1.6)`; exactly 3 blurred surfaces (`.chrome-bar`, `.feed`, `.foot-links`), at the budget ceiling |
| Footer horizon | one accent gradient, inside `.foot`, on `.horizon` |
| Accent as a solid fill | none above 4000px² |
| Focus ring | accent |
| ASCII field | one canvas |
| No horizontal overflow | `scrollWidth` 1425 against a 1440 viewport |
| Route surface | `/`, `/library`, `/deals`, `/sticks`, `/affiliates`, `/business`, `/merch`, `/about`, `/contact`, `/legal` |

Discrepancies to hand the build. None of these is a redesign; two are deletions and two are token wiring.

1. **Retired hex in the bundle.** `:root[data-accent="6cace4"]{--accent:#6cace4}` is still in the built
   CSS. v3 correction C8 closed that decision: one value, one token, no variant, no query switch. Delete
   the variant, the `data-accent` attribute, and the comparison render that depends on it.
2. **The horizon is not the token, and its blue is diluted.** The build hand-authors
   `0/46/58/70/80/88/94/100` stops with white at 94 percent and the accent only from 94 to 100, so the
   blue reads as a fade into the edge rather than a held edge. The v3 token is
   `--gradient-horizon: black 0%, black 66%, white 90%, accent 94%, accent 100%`. Adopt the token.
3. **No token linkage.** The build defines its own token block with the same names instead of importing
   `design/dotbang.tokens.css`. That is how a build quietly drifts from the guideline. Import the
   generated CSS (and the TS module where values are needed in code); do not vendor a copy.
4. **`blur(12px)` in the bundle**, outside the 16px panel and 20px chrome spec. Probably a component
   library internal. Confirm it is not brand glass; if it is, correct it to 16 or 20.

Not tested on that build, and named so nobody claims otherwise: hover colours, focus rings on every
component, `prefers-reduced-motion`, the high-contrast solid fallback, the DOM of the routes other than
`/`, and the reading contrast of every paragraph. Those need the build to stand still.

---

## What neither tool can judge

Whether the page is beautiful. Whether the horizon reads as a horizon at 240px and at 120px. Whether the
glass reads as glass over the ASCII field or as a grey box. Whether the display type is heroic or merely
large. Those are review decisions, made on renders, by Tyler.

End of record. New artefacts get a row; a fixed discrepancy gets struck through and dated, never deleted.
