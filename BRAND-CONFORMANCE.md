# Brand conformance: guideline v4

**Version:** 1.1, 2026-11-20 (checklist updated to guideline v4.0). **Owner:** Tyler. **Status:** working record. The sweep record below is unchanged history.
Guideline references in the checklist are to v4.0 numbering where the v4 text governs; carried sections of the guideline keep their carried numbers.
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
| 1 | Field | `#000000`, no lifted black, no gradient panel | v4 §2, D4 |
| 2 | Accent | `#0297DE`; no `#6CACE4` anywhere; one value, no variant token | v4 §2, D12 |
| 3 | Accent share — blue | never body text, never a fill at rest; the ceiling follows O3 (open): v3.0 law about 5 percent with forced presence; v4.0 recommendation 3 percent and blue may be absent — value marked PENDING until Tyler rules | v4 §2, O3 |
| 3b | Accent share — hot | at most 1 percent of a surface, one element per view, small actions only, black text on hot; the hex follows O1 (open) — PENDING | v4 §2, O1 |
| 4 | Footer horizon | black to white to blue, once per page, last element, no text on it, no other blue gradient | v4 §6, D13 |
| 5 | Chrome | header and footer are glass, white text at rest, blue only on hover, solid fallback for high contrast | v4 §6 |
| 6 | Glass values | fill `rgba(10,10,10,.52)`, `blur(20px) saturate(160%)`, hairline border, max 3 blurred surfaces per view | v4 §6 |
| 7 | Name | exactly `dotBANG`, never `DOTBANG`/`DotBang`/`dotbang` in prose, and that includes after `text-transform` | carried §16, S6 |
| 8 | Mark | round dot, square exclamation, one colour only, white primary / black on light surfaces, blue dot retired, never restroked | v4 §5, S1–S3 |
| 9 | Type | Space Grotesk and Space Mono self-hosted; only the frozen scale; Grotesk 300 to 700 (nothing above 700 exists), Mono static 400/700 only | v4 §3, S8 |
| 10 | Mono labels | Space Mono 400 (700 for emphasis), uppercase, 11 to 12px, tracking 0.08 to 0.12em, never blue unless index or live; a spec calling for a mono 500 is a fail | v4 §3 |
| 11 | Field systems | the two systems of v4 §1: character field for texture (white glyphs, tone from coverage only, alpha inside 0.05 to 0.22; per-surface bands follow O2 — PENDING), dot render for images; one designed static frame per animated texture; never inside small-tier artwork; no text on it at reading contrast | v4 §1, O2 |
| 12 | Spacing and radius | 8pt scale, radii 14/18/24/999, nothing off-scale | v4 §4 (radii conflict with the build standard's radius 0 flagged in guideline §0) |
| 13 | Focus | 2px accent ring, 2px offset, visible on keyboard focus | v4 §2, carried §26 |
| 14 | Cost | $0 recurring tooling, no paid design tools, no stock | Tyler, 2026-11-14 |
| 15 | Retired mark | any blue-dot asset in the artefact, in any role (variant, fallback, or small-size substitute), is a FAIL | v4 §5, S3 |
| 16 | Hot misuse | any hot element over 48px or about 2,300 px², hot share over 1 percent of a surface, or hot as text, fill, gradient, headline, logo, field, or glass is a FAIL (hex follows O1) | v4 §2, O1 |

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

### D. This repo's board and guidance documents, sweep 2026-11-20 — PASS after correction

The 2026-11-19 audit found three artefacts still presenting the retired v2.0 blue as current law. The
guideline, the tokens and the linter were already v3.0; those three were not. Corrected in this sweep.

| Artefact | Before | After |
|---|---|---|
| `brand-board.html` (was `brand-board-v2.html`) | the 2.0 render, accent `#6CACE4` | regenerated as the v3.0 board: accent `#0297DE`, one accent token, no retired values. Text lint **PASS** |
| `COMPARE.md` line 3 | stated `#6CACE4` as the law the three boards obey | dated note: those boards carry the superseded 2.0 blue, the governing accent is Electric Blue `#0297DE` (v3.0, D12), and the file is a historical comparison record |
| `SITE-BLUEPRINT.md` §4 | `#6CACE4` labelled "Current law in the repo", `#0297DE` labelled "not yet in law" | one row, `#0297DE`, status "Current law, guideline v3 D12, ruled 2026-11-15"; the retired value named as retired, not as a candidate |

Evidence: `node tools/brand-conformance.mjs brand-board.html` returns PASS, no banned values or banned name
forms. `git grep -in 6cace4` leaves no artefact presenting the retired hex as current.

Dated history keeps the retired hex on purpose. Listed so a future grep is not misread as a regression:

- `BRAND-GUIDELINE.md` — locked fact L2, correction ledger rows C1, C4, C8, C9, and decision D12. All are 2026-11-15 records of the change, not current values.
- `BRAND-CONFORMANCE.md` — the 2026-11-15 sweep record above (checkpoint 2, and discrepancy 1 on the running build).
- `SITE-BLUEPRINT.md` — the old-blueprint row in §1 and the struck-through closed decision in §12. Both dated 2026-11-15.
- `design/dotbang.tokens.json`, `design/dotbang.tokens.ts`, `tools/brand-conformance.mjs` — the banned-value lists that enforce the ban.
- `design/README.md` — the sentence stating the value does not exist in the token set.

---

## What neither tool can judge

Whether the page is beautiful. Whether the horizon reads as a horizon at 240px and at 120px. Whether the
glass reads as glass over the ASCII field or as a grey box. Whether the display type is heroic or merely
large. Those are review decisions, made on renders, by Tyler.

End of record. New artefacts get a row; a fixed discrepancy gets struck through and dated, never deleted.
