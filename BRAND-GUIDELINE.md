# dotBANG brand guideline

**Version 4.0, 2026-11-20 (version 3.1 released 2026-11-20; version 3.0 released 2026-11-15). Owner: Tyler. Status: official. Supersedes version 3.1 in full.**
Finalised on Tyler's instruction of 2026-11-20: v4.0 is the single source of truth for dotBANG design.
Earlier versions stay in git history as previous releases, never as competing sources of truth. The
rendered board that ships in this repo is `brand-board.html`, regenerated against this version. Where
this document and any other artefact disagree, this document wins and the artefact is corrected.

### How this file is assembled

Sections 0–13 are the v4.0 law: the decisions box (§0 — settled S1–S10, open picks O1–O4, flagged
conflicts), texture and motion (§1), colour (§2), typography (§3), layout (§4), the final mark (§5),
glass and the horizon (§6), positioning (§7), voice and proof order (§8), merch (§9), the carry-over
map (§10), the Do/Don't additions (§11), the conformance delta (§12), and launch gates (§13).

Part G carries the v3.0 sections v4.0 does not replace, verbatim except where a marker says
otherwise: §1 governance, §2 foundation, the decision log (§3, with superseded markers and the
S1–S10 entries appended), §§12–29, an annex carrying §9 and the diagram-style rules, and
Appendices A–C. Carried sections keep their v3.0 numbering; references inside them use that
numbering. Section 10 is the map that records all of this.

### Change note: 2026-11-20, v4.0

- The mark is final and one-colour (S1–S3): white primary, black form for light surfaces, blue dot
  retired. §5 is the spec; the masters and tier files ship in `logo/` — where §5 names local
  `vector/` paths, read the repo's `logo/` directory (the same files, verified by checksum).
- Type is Space Grotesk + Space Mono (S8, Tyler's P2 pick). Inter + JetBrains Mono are retired to
  history; decision rows D1 and D3 carry superseded markers in the carried log, not silent deletion.
- Texture is two systems (S7, S10): dot render for images, character field for texture. v3.0's
  ASCII-only, no-dithering law is superseded (§0, conflict C7).
- Hot exists as the action colour (§2): small actions only, at most 1% of a surface, at most 48 px,
  black text on hot. Its hex is open pick O1; no hot token ships until Tyler rules.
- The lockup rule (§5): the mark and the wordmark are never adjacent; there are no lockup assets.
- The tagline slot is empty on purpose (§7): TBD, owner-supplied, never a guessed line.
- Open, and flagged where they sit rather than silently resolved: O1 hot hex, O2 field bands and
  hero lead, O3 blue ceiling (3% and may-be-absent vs 5% with forced presence), O4 tagline, and the
  radii conflict (§4 radii 14/18/24/999 vs the web build standard's radius 0 for web builds —
  `docs/dotbang-web-build-standard.md`).
- §12's conformance delta was written while the v3.0 conformance card was in flight; that card has
  since landed (PR #1, v3.1). The delta's remaining items are the work list that follows this version.

---

## 0. DECISIONS BOX

### SETTLED — do not relitigate

| # | Settled fact | Source |
|---|---|---|
| S1 | **The mark is final.** One-colour, geometry frozen per §5 of this guide (stem taper 72→62, stem height 300, gaps 36/36, dot Ø82, overshoot 5). | Mark spec, Nov 20 |
| S2 | **One-colour law.** The mark is one colour, always. White on black is the primary form; the same geometry in black is the one-colour form for light surfaces. Never split the mark into two colours. | Mark spec |
| S3 | **The blue-dot variant is RETIRED.** It does not exist as a variant, a fallback, or a small-size substitute. | Mark spec; Tyler, Nov 20 |
| S4 | **Canvas is pitch black `#000000`** on every brand surface — pages, documents, decks, thumbnails, social art. Not a lifted black, not a gradient panel. | v3.0 D4, carried |
| S5 | **Accent blue is `#0297DE`** (Electric Blue). `#6CACE4` is retired and banned everywhere, including boards and comparison renders. | v3.0 D12, carried |
| S6 | **The name is written exactly `dotBANG`** — one word, that capitalisation, in every context. | v3.0 §16, carried |
| S7 | **Texture is the two mark systems of §1**: dot render (halftone/dither) for images, character field for texture — white marks on the black field, tone from coverage only. No other textures exist in this system. (Rewritten Nov 20 — see conflict C7.) | Tyler, Nov 18; teardown + rendering research, Nov 20 |
| S8 | **Type is Space Grotesk + Space Mono** (Tyler's pick P2, Nov 20), self-hosted, SIL OFL 1.1, $0. Space Grotesk is the voice/display face (300–700; nothing above 700 exists; no italics in either face); Space Mono is the data/label face (static 400/700 only). §3 carries the re-derived scale. The 8pt spacing scale and radii 14 / 18 / 24 / 999 are unchanged. Inter + JetBrains Mono is retired — history, not an alternative (§3). | Tyler, Nov 20; font options memo |
| S9 | **Chrome is liquid glass**: white text at rest, blue only on hover. The horizon gradient (black → white → blue) is the only gradient in the system, once per marketing page, no text on it. | v3.0 D13, carried |
| S10 | **Texture + motion are codified methods, not frozen assets** (§1): the dot/character split, the measured ramp ending at 100% coverage, the standard grade (linearise → percentile auto-contrast → S1 curve) with shape-matching as the hero-grade target, two-value palette discipline (grey = coverage only), background fields capped at 24–30 fps with hysteresis, and one designed static frame per animated texture. | Teardown; animation research; rendering report, Nov 20 |

### OPEN — owner's picks (Tyler's word settles each)

Exactly four things remain Tyler's:

- **O1 — Hot action hex:** `#FD6821` vs `#FF4D2E`.
- **O2 — Field system remainder:** the D17 alpha bands as written, and which system leads a hero where both could serve (the dot/character split itself is the recommended resolution, below).
- **O3 — Blue ceiling:** 3% and blue-may-be-absent vs 5% with forced presence.
- **O4 — Tagline: TBD — owner-supplied; never ship a guessed line.**

| # | Pick | Evidence | Recommendation (not decided) |
|---|---|---|---|
| O1 | **Hot action hex: `#FD6821` vs `#FF4D2E`** | Audit D14: `#FD6821` is the exact complement of `#0297DE` (253, 104, 33 — orange with a yellow push, matching Tyler's Nov 18 description); contrast on black ≈ 7.2:1, black-on-hot ≈ 7.2:1, white-on-hot ≈ 2.9:1. `#FF4D2E` is the pink-leaning alternate; contrast on black ≈ 6.35:1, white-on-hot ≈ 3.31:1. Research R3: the hot pink-orange second accent is the synthwave/Web3 trigger and half of Bang Energy's can system — the pinker the hex, the closer that read. | **`#FD6821`.** It is the arithmetic complement Tyler described, it has the better contrast in both directions, and the orange lean keeps maximum distance from the pink/synthwave read. |
| O2 | **Field system: the dot/character split, the alpha bands, and the hero lead** | Audit §11/D17 framed this as either/or: dot field = Tyler's "white little dots," proposed as default; character field = the v3.0 topographic construction, proposed as the depth variant. Proposed bands (D17, closing v3.0's unfrozen D10): heroes/marketing 0.14–0.22 · standard pages 0.08–0.14 · app chrome / CRM / reading 0.05–0.08; absolute range 0.05–0.22 unchanged. Research R2: dot fields merge to grey noise below ~64 px — the field is prohibited inside small-tier artwork regardless of this pick. **Teardown §5 + rendering research §5 (Nov 20) reframe the question**: dot render and character field are not rivals — dot render is the *image* system (depicted subjects), character field is the *texture* system (ambience); each does the job the other is bad at. §1.1 is written on that split. | **Split it (recommended resolution).** Adopt dot render for images, character field for texture — the either/or dissolves. What genuinely remains open for Tyler: the D17 alpha bands as written, and which system leads a hero where both could serve. Recorded as the recommendation; the pick stays formally open until Tyler rules. |
| O3 | **Blue ceiling: 5% with forced presence (v3.0 law) vs 3% and blue-may-be-absent** | v3.0 §6: blue ≤5% AND every screen must carry blue at rest (mark + one more element); no blue = off brand. Audit D15: with the mark gone white (S1–S3), the presence rule has nothing to stand on and forces decorative blue; Tyler, Nov 18: blue is "the third/tertiary, very subtle." Research R2 precedent: tapt.studio caps its accent at ≤2% of any layout. | **3%, may-be-absent.** The presence mandate was load-bearing only while the logo dot carried blue. A ceiling with no floor is the discipline; a surface at 0% blue is on brand. |
| O4 | **Tagline** | The research R1 working line was rejected by Tyler on Nov 20, 2026 and is removed from this guide (§7); its alternates are removed with it. No replacement has been supplied. | **None — owner-supplied.** Tagline: TBD — owner-supplied; never ship a guessed line. |

### CONFLICTS FLAGGED — not silently resolved (mark spec excepted, per S1)

| # | Conflict | Resolution in this draft |
|---|---|---|
| C1 | Audit draft D16 keeps a **blue-dot variant** for identity surfaces. Mark spec retires it outright. | **Spec wins (S3).** Every blue-dot-variant reference in the audit draft is deleted here. Conformance delta in §12 carries the removal work. |
| C2 | Audit draft §5 leaves mark geometry **PENDING EXAMPLES** and its Never list bans a tapered stem. Final spec freezes geometry **with** a full-length taper. | **Spec wins.** §5 below is the spec, verbatim numbers. |
| C3 | Audit draft §4/§5: "no black mark exists; light surfaces get a black panel or nothing." Mark spec: "the same geometry in black is the one-colour form for light surfaces." | **Spec wins (S2).** The black one-colour form exists for light surfaces. The always-black canvas rule (S4) still governs dotBANG's own surfaces. |
| C4 | Research R2 recommends the glyph tier be **redrawn** with a **square** dot (32-grid: gap ≥4 units, dot ≥8 units square), tiers never scaled. Final spec: tier files were **regenerated from the final (round-dot) geometry** on Nov 20. | **Spec stands** — the shipped tiers are the spec's tiers. R2's redraw recommendation is recorded here as unadopted research, not applied. If small-size reads fail in the field, this is the first lever to revisit — with Tyler, through the render-and-review loop. |
| C5 | Research §4.4 notes a source recommending light mode for trust surfaces (docs/pricing). | **Not adopted.** Conflicts with S4; research itself flags it as source-only. Black-field trust is earned through proof artefacts and published pricing (§8). |
| C6 | Audit draft presents D15 (3% blue) and D17 (alpha bands) as draft decisions. This guide's tasking treats both as open picks. | Carried as **open** (O2, O3) with the audit's numbers as the recommendations. Nothing in §§2–3 enforces them until Tyler picks. |
| C7 | v3.0 law as carried into this draft's first writing (old S7, old §1) made texture **ASCII only** and **banned dithering outright, in any asset, ever**. The Nov 20 teardown and rendering research split texture into two systems — dot render (halftone/dither) for images, character field for texture — and name blue-noise/ordered dither as dot-render methods. | **Superseded in §1; S7 rewritten to the two-system law.** What survives of the ban: no grey-painted marks (tone is coverage only, §1.4), no error-diffusion in live rendering (offline stills only, §1.8), no dithered image substituted for the character field in a texture context, no terminal screenshots as texture. Recorded here so the change is visible, not silent. |

---

## 1. Canvas, texture, and motion — the mark systems

- The field is pitch black `#000000`, everywhere, always (S4). Tinted blacks appear only as materials (glass fill, card tone `#050505`), never as the field.
- Texture is **white marks on the black field, tone from coverage only** — two systems, divided by job (§1.1). Grey is never a colour value in either system (§1.4); it is what coverage looks like at distance.
- Both systems are **methods, not assets**: parameters and ranges (§1.7), re-derivable on any surface. A texture that can only be reproduced from one saved file is off-system. Tyler's instruction governs this whole section: clear repeatable methods, not locked-down specs.

### 1.1 The split — dot render for images, character field for texture

1. **Dot render — the image system.** Any depicted subject (hardware, topology, a place, a person) renders as marks on a strict grid: binary dot halftone (tone by dot *presence/density*, never dot size — the 0xSero grammar, teardown §1), blue-noise or ordered-Bayer dither fields, or size-modulated AM halftone where the print read is wanted. Dots can be 100% white at 1–2 px, so this system is sharper and whiter than any character system. It depicts; it never carries data or a claim — claims are set as type (§3). Dot-render our own subjects only: the cluster topology, a Spark board, the Gauntlet crowd — never a reference's signature subject (teardown §4).
2. **Character field — the texture system.** White characters on black as ambience: it carries no information, sells no claim, never competes with content, never depicts a subject. Two constructions:
   - **Dot-glyph grid** — a regular grid of dot glyphs (`.` and `·` only), density modulated by layered sine contours so dots gather and thin like a topographic map.
   - **Topographic ramp** — the full measured ramp (§1.2), sparse to dense, layered sine contours with banding. Heroes, covers, thumbnails where the field is a headline texture.
   - Construction spec (both): cell 15 px; glyphs 11 px Space Mono, centred in the cell; white `#FFFFFF` only — never blue, never hot.
   - Alpha: absolute range 0.05–0.22. Per-surface bands are O2's numbers (hero 0.14–0.22 · page 0.08–0.14 · app 0.05–0.08) until Tyler rules otherwise. A fade mask pulls the field to the band floor under reading columns.
   - Size floor: the field is a large-format device. Below ~64 px it merges to grey noise — prohibited inside compact/glyph-tier artwork, avatars, and favicons (research R2).
   - The field is never a logo, a chart, a map, or data. Never under body text at reading contrast — text sits on glass or a solid panel. Never inside the mark's clear space above the app-chrome alpha band.
3. **Hybrid heroes are allowed**: a dot/dither base for depth and image, a sparser character layer over it where letters carry meaning. One hero, one interaction (§1.5); everything else calm.

### 1.2 The glyph-class ladder

Density comes from the sub-cell system, not from shrinking letters. Each class has a job:

| Class | Sub-cells per cell | Job |
|---|---|---|
| Luminance ramp (ASCII) | 1 | The only class that reads as *letters/data* — topographic texture, benchmark tables, texture where letters are the point. |
| Quadrant blocks | 2×2 = 4 | Graphic shapes and coarse filled tone inside character contexts. |
| Braille | 2×4 = 8, binary dots | Line art, contours, plots, hardware-footage grades — superb shape, weak smooth tone (its dots never reach full coverage). |
| Sextants / octants | 2×3 = 6 / 2×4 = 8, filled | The finest filled tone of any character system — **only where our own baked atlas renders them** (§1.8). Browser font support for these sets is a lottery and is never relied on. |

- **The ramp is measured, never folk.** The conventional ` .:-=+*#%@` order is a guess, not a measurement. Render every candidate glyph in the production font, weight, and size (Space Mono, §3), measure its actual ink coverage, and sort by the measurement. Re-measure when the font or weight changes.
- **The ramp ends at 100% coverage.** `@` covers only ~60–70% of its cell, so a ramp whose top step is `@` *cannot read white* at any brightness setting. Highlights terminate in a full-coverage glyph (full block, or a coverage-matched solid); pure white is reserved for those peaks (§1.4).

### 1.3 The quality standard — the grade

- **Standard grade (every conversion):** linearise the source (sRGB EOTF — luminance is weighted in linear light, never on raw sRGB bytes) → **percentile auto-contrast** (stretch the 1st–99th percentile to full range) → **the S1 curve** (S-curve, contrast ≈1.4 for photographic sources, 1.0 for data fields) → glyph selection. Unprocessed sources cluster mid-range and convert to mud; the curve is part of the method, not optional garnish.
- **Hero grade (flagship surfaces): shape-matching.** Brightness-only selection dissolves every non-axis-aligned edge into `#`/`%` noise. Hero-grade work samples directional contrast *inside* the cell (6 asymmetric sample points plus neighbour taps for edge direction) and picks the glyph whose *shape* fits — edges resolve into `/ \ — |` that follow the edge. Shape-matching is the target for hero-grade work (Harri, Jan 2026; Lunardi/Codrops, Sep 2026 pipelines, rendering report §1/§4); the standard grade remains acceptable for abstract fields and small components.

### 1.4 Palette discipline in texture and motion

- **Two values only: black ground `#000000`, white ink `#FFFFFF`.** Blue and hot never enter a texture (§2's rules are unchanged).
- **Grey comes only from coverage** — dot density, glyph coverage, dither threshold — never from grey paint. A glyph drawn at 50% grey is off-system; the same cell at 50% coverage is the system working.
- **Pure white is a highlight, not a fill.** Peaks hit true white (full-coverage glyph, bold, `#fff`); the field average stays dark. That is what reconciles "whiter" with "easy on the eyes."

### 1.5 Motion and comfort rules

- **Background fields run at 24–30 fps, capped.** 60 fps glyph churn reads as noise and burns battery; luxury moves slowly. Ambient loop period ≥8 s; drift is slow and low-amplitude.
- **Temporal hysteresis is mandatory in animated fields:** a cell at a selection boundary holds its previous glyph unless the new value wins by a margin (or the field is smoothed before quantising). Glyph chatter is the worst flicker source in animated texture, worst of all in video-sourced fields.
- **Pattern locks to content, not screen.** A screen-locked threshold field crawls over moving content (the Obra Dinn lesson, rendering report §1/§4); fields move with their subject.
- **One pointer interaction per hero** (e.g. the field parts around the cursor); everything else is calm. No full-field flashing; nothing flashes faster than 3 times per second.
- **Pause rules:** off-screen or hidden = paused (`IntersectionObserver`; no timers that run unseen).
- **`prefers-reduced-motion` serves the static frame** (§1.6) — the media query decides, never a settings toggle. Canvas texture is `aria-hidden`; all real content is DOM text over the field, never baked into it.

### 1.6 The static frame rule

**Every animated texture has one designed canonical still** — a chosen frame at peak legibility, rendered at print quality from the field data (deterministic seed/parameters named in the asset filename), never "whatever frame 0 was." That one still serves as: the merch/print art (§9 governs garments), the social poster/thumbnail, the OpenGraph image, the `prefers-reduced-motion` frame, and the no-WebGL fallback. One decision, five uses.

### 1.7 The parameter table — the repeatable method

Codified as parameters and ranges, so the look can be re-derived on a new surface without reverse-engineering a screenshot (rendering report §6):

| Parameter | Rule | Range / value |
|---|---|---|
| Ground / ink | Two values only | `#000000` / `#FFFFFF`; grey = coverage only (§1.4) |
| Grid pitch | Device-independent px at a reference width, with a mobile step | Character hero cell ≈6×10 CSS px desktop, ≈8×13 mobile; dot/dither pitch 3–6 px desktop |
| Glyph class | Named per use (§1.2), never per page | Images: dot render, or atlas-baked braille/octant. Texture/data: measured ramp, shape-matched at hero grade |
| Ramp / selection | Measured table, font-specific | Coverage-measured in Space Mono at production weight and size; re-measure on any font change |
| Contrast curve | Named, numbered | Linearise → percentile auto-contrast (1–99%) → S1 curve (≈1.4 photographic, 1.0 data) → quantise |
| Temporal | Numbers, not adjectives | Field fps cap 24–30 (24 for video-sourced fields); hysteresis margin on glyph changes; pattern content-locked; pause off-screen/hidden |
| Motion | Amplitude + interaction budget | One pointer interaction per hero; ambient period ≥8 s; no full-field flashing; reduced-motion → static frame |
| Static frame | One designed still per component | §1.6 — print quality, from field data |
| Fallback ladder | Ordered | WebGL2 field → static rendered frame (WebP/PNG @2×) → plain black with real text. Never a broken canvas |
| Performance budget | Numbers per tier | Hero JS+shader ≤50 KB gz; DPR cap 2 (texture canvases ≤1.5); grid caps ≈20–50k cells desktop / 8–20k mobile on WebGL2 — anchored estimates, re-measure on target devices before locking |

### 1.8 Pipelines

- **Live web (the site component).** TypeScript + WebGL2 glyph-atlas shader: the atlas is baked at build or first load from the shipped OFL fonts (Space Mono, §3), or drawn procedurally for the block/braille/octant sets — 256 patterns of rectangles/dots need no font at all. Field generation lives in GLSL; the whole grid stamps in 1–5 draw calls. **JavaScript is sufficient** — the quality jump is the architecture (atlas + shader-side selection), not the implementation language. **Rust/WASM enters only behind a profiling trigger:** a CPU workload that profiles hot and cannot be expressed as a shader (a large particle/topographic simulation, in-browser video pre-processing), its results transferred in bulk, once per frame. Expect frame-time headroom from it and zero visual difference. Canvas 2D is the small-component/fallback path (pre-render glyph sprites once, `drawImage` them; per-cell `fillText` collapses at a few thousand cells). DOM-text renderers (the three.js AsciiEffect class) are banned for heroes — they rebuild an HTML table every frame.
- **Offline video grade (socials).** Render offline, never capture the live hero. chafa-class tooling (chafa/libchafa, LGPL — used as a CLI/subprocess under our own presets file: glyph class, pitch ladder, fps, S1 curve, invert discipline) affords what live cannot: coverage/shape search, error diffusion (stills only — it is sequential, never live), cross-frame temporal stabilisation. Render at the platform's final pixel size or an exact integer multiple, with **cell pitch ≥4–5 px at final encode size** — smaller pitches dissolve into compression moiré and the platform re-encode turns the field to grey mush. High-bitrate master; test-upload privately before publishing. Keep a dot-render variant of each asset: dots survive compression visibly better than letterforms at the same pitch. Grade frames are set in Space Mono (§3).
- **Static / print.** Work from the field data, not a screenshot: dots/blocks are emitted as **SVG solid shapes** (no anti-aliasing, crisp at any size); character frames are set as real text only with the OFL font embedded, otherwise glyphs are converted to outlines. Print: pitch chosen so the effective line screen is printable (coarser than screen pitch), **pure black ink only** — no rich black, no grey ink values; tone is coverage, exactly as on screen. Proof at final size and viewing distance: the coverage→grey integration is a distance effect in print too. Garments follow §9 — the mark alone; field-derived print art is for prints and posters, not the apparel capsule.

### 1.9 Live data — the signature option

The field systems can take **real cluster telemetry as their heightfield** — tok/s, KV cache occupancy, temperature — so a hero texture is the running system, not a simulation of one. Nobody else can copy a background made of our live data. Rules: telemetry drives the *field only* (the ambience rules are unchanged — it still carries no readable claim; the numbers themselves are set as type beside it, §§3/8); if the feed dies, the field falls back to its procedural terrain and the static frame (§1.6) — never to a frozen or fabricated feed.

## 2. Colour

Four values in a strict hierarchy. Everything else is one of them at an alpha. Ceilings are ceilings, not targets.

| Colour | Hex | Role | Ceiling (share of a surface) |
|---|---|---|---|
| Pitch Black | `#000000` | The field: all backgrounds | the remainder (≈ 75%+) |
| White | `#FFFFFF` | The voice: text, marks, logo, primary buttons, field glyphs | ≈ 22% |
| Electric Blue | `#0297DE` | The signal: current place, live state, hover, focus | 5% under v3.0 law; **3% if O3 lands** |
| Hot (hex = O1) | `#FD6821` / `#FF4D2E` | The action: small actions only | at most 1% |

Combined blue + hot never exceeds 4% under the O3 recommendation (5% + 1% under v3.0 numbers until O3 is decided — flagged, not hidden).

### White

- All reading text, all headlines, the logo, primary button fills, the ASCII field. White on black is 21:1 — WCAG AAA at any size.
- Derived whites, the only other screen tones: dim `rgba(255,255,255,0.58)` (secondary text; the reading floor, ≈ 7.0:1), faint `0.36` (large/decorative only, ≈ 3.1:1), hairline `0.12`, hairline-soft `0.07`, panel `0.03`.
- Document colours (PDF/print): body `#E6E6EA`, secondary `#B4B4BC` — set on the black field, exactly as on screen.

### Electric Blue `#0297DE` — tertiary, subtle, sparing

Contrast on black 6.48:1 (AA, below AAA — one more reason it is never body text); on white 3.24:1 (reinforcement only; shape carries identity, blue never does).

- Permitted at rest: active-state markers (current nav item, selected tab edge, current row indicator); live indicators (status dots, recording markers, soft glow allowed); section index numerals.
- Permitted on interaction: hover (link text, card borders with soft edge glow, button borders/text); focus (visible focus ring, 2 px, offset 2 px); table-row hover wash at 6% alpha in product UI.
- Never: body or paragraph text; a background fill at rest; any gradient except the footer horizon; a pale/desaturated/alpha-washed version as an element fill (alpha only in glows, shadows, the row wash); the ASCII field; the logo (S3).
- Presence: v3.0 mandates blue on every surface. That mandate is O3, undecided. Until Tyler rules, do not add blue to a surface solely to satisfy a quota — and do not strip deliberate blue either.

### Hot — the action colour, not a brand accent

Hot means **act**, and nothing else. It is not an accent, carries no identity, and never appears in the logo, a headline, or an identity surface. (This is audit D14: it supersedes v3.0 D5's absolute ban *in part* — D5's ban on a second **brand accent** stands; hot is not one.)

- Permitted, exhaustively: (1) the fill of the **single primary action control** in a view, when that control is a small action (standard button/chip sizes — **black text on hot, never white text**: white-on-hot is 2.9:1 / 3.31:1 depending on O1, below reading floor in both); (2) the dot or edge tick on a small action chip, badge, or toggle in its active state; (3) the hover/active edge of a small action button where blue would wrongly mean navigation or current place.
- Size limit: no single hot element exceeds 48 px in its longest dimension or ~2,300 px² in area. A hot fill is a button — never a panel, banner, section, or background.
- One hot element per view. If a view has no primary action, it has no hot. Absence is the default.
- Never: text set in hot; headlines; icons at rest; charts or data (data colours are data, §10 carry-over); gradients of any kind; the footer horizon; the ASCII field; glass chrome; adjacent to the blue (research R3).
- Execution discipline (research R3): blue stays **flat, never glowing**; **never a gradient containing both accents**; hot is a functional micro-state only, never decorative.

## 3. Typography

**Space Grotesk** (Florian Karsten) is the voice face — wordmark, headlines, body, buttons, product UI, documents. **Space Mono** (its parent design, from Colophon) is the data face — data, tables, labels, IDs, technical annotation, and the character field. Both SIL OFL 1.1, $0, self-hosted and pinned. Tyler's pick (P2), Nov 20, 2026 — evidence: font options memo, Nov 20.

Design around the faces' real limits — they are part of the system, not defects to hide:

- **Space Grotesk caps at weight 700.** Variable 300–700; there is no 800/900, and **neither face has italics**. Display gets its force from size and tracking, not weight. Emphasis is weight, size, or colour — never slant; a document that seems to need italics has a design error, and the design gets fixed.
- **Space Mono is static: 400 and 700 only.** No 500 exists. Labels run at 400 with tracking; strong labels and figure emphasis run at 700. The font pipeline carries Space Grotesk as a variable file and Space Mono as two pinned static files — a spec calling for a mono 500 is a conformance fail.

Scale (sizes carried from the frozen v3.0 scale; weights re-derived on the new faces):

Display Mega `clamp(56px, 13.5vw, 220px)` / 700 / −0.045em / 0.94 · Display 1 59 px / 700 · H2 44 / 700 · H3 33 / 700 · H4 25 / 700 · Lede 19 / 400 · Body 16 / 400 / 1.65 · Small 14 / 400 · Caption 12 / 400 · Label 11 / 600 / 0.18em uppercase · Mono Label 12 / 400 / 0.10em uppercase · Mono Label Small 11 / 400 / 0.08em · Mono Strong 12–14 px / 700 (figures, data emphasis).

Weights: 300 thin (display only, never reading), 400 body, 500 emphasis, 600 strong, 700 heading/button — and the display ceiling. Nothing above 700 exists in this system; a spec calling for 800/900 does not ship. Sentence case for body and headlines; uppercase only inside the label systems. Mono labels: Space Mono 400, 11–12 px, tracking 0.08–0.12em; blue only for index or live state; hot never. A size or weight not on this scale does not ship.

Figures: Space Grotesk carries tabular figures (`tnum`) for figures set in prose; Space Mono is fixed-width, so data figures are tabular by construction. Benchmark numbers are always set in Space Mono (§8).

Seriousness is carried by type and data (research R3): Space Grotesk for voice, Space Mono for labels/metrics/benchmarks, product screenshots and tables as the hero visual — never abstract neon artwork. The reference energy (0xSero's cards, teardown §1) is a *usage system* — the spec string as headline, mono labels, tabular figures, hairline rules — and this pairing speaks it natively.

*History, one line: Inter + JetBrains Mono was the pairing through v3.0 and the first writing of this draft; Tyler retired it on Nov 20, 2026, picking P2. It is recorded here as history, not as a live alternative — do not spec it, do not fall back to it.*

## 4. Layout (carried from v3.0, restated)

8pt scale `s1–s9` (8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160 px), with 4 / 12 / 20 px allowed inside small components only. 12-column grid, 24 px gutters, 1280 px content max, page margins 32 px desktop / 24 px phone, section rhythm 96 / 64 px. Radii: 14 (chips, inputs, small cards) / 18 (cards) / 24 (panels, glass) / 999 (pills, buttons, header bar). Motion: 0.18s UI / 0.24s panels, transform + opacity only.

## 5. THE FINAL MARK (settled Nov 20, 2026 — this section is the spec)

The logo is the punctuation the name plays on, made literal: **a perfectly round dot, then a very square exclamation point** — "dot + exclamation mark," `. !` In programmer slang `!` is "bang" (`#!` = shebang); the mark is that reading made literal (research R5 — say it once, prominently, on the About page).

### Construction — unit grid, viewBox 190 × 413

- **Stem:** full-length straight taper. Top width **72** at y=0, bottom width **62** at y=**300**. Centered over the square (centerline x=154).
- **Gap: 36 units everywhere it appears.**
- **Square (the point):** 72 × 72, x=118, y=336..408 (baseline 408).
- **Dot:** diameter **82**, cx=41, cy=372, r=41. **Overshoot: 5** above the square's top edge and 5 below the baseline, so the circle reads equal to the square.
- **Gaps verified equal:** horizontal (dot edge to square, measured at the square's mid-height, y=372) = **36**. Vertical (stem bottom to square top) = **36**.

### Rules

- **One colour only.** Never split the mark into two colours; **never a blue dot** (S3). White on black is primary; the same geometry in black is the one-colour form for light surfaces (S2).
- **Clearspace: 1 dot diameter (82 units) on all sides.** Nothing enters it — page edges, other logos, text, or the ASCII field above the app-chrome alpha band.
- **Minimum size:** full mark **16 px / 6 mm tall**. Below that, use the approved small-size tier files (`tiers/`) rather than scaling ad hoc.
- **Tier files are separate assets, not scalings** (research R2): avatar-1024, app-icon-1024, favicon-16/32/48/180 — regenerated from the final geometry Nov 20. Avatar and favicon follow opposite padding rules: favicon fills the frame (clear-space suspended); avatar shrinks the mark into the inscribed circle (Instagram central 70% safe zone, YouTube ≥20% padding/side, X 10–15% minimum), background fills the frame, mark never touches an edge.
- **Masters:** `vector/dotbang-mark-final-white.svg` / `dotbang-mark-final-black.svg`. Placement proof: `dotbang-final-mark-sheet-2026-11-20.png`.
- **Never redraw, re-space, or re-taper outside this spec.** Variants go through the render-and-review loop with Tyler.
- Never: rotate, outline, shadow, stretch, or animate the mark into a different shape; place it inside a badge, circle, or squircle drawn by someone else; set the wordmark in a substitute font (live-text wordmark = Space Grotesk 700, tracking −0.03em, nothing else); place the mark on a busy photograph, a colour, or the horizon gradient.
- On glass, the mark does not change. Glass is a background treatment, not a logo variant.
- Co-branding: the dotBANG identifier (the wordmark alone, per the lockup rule below) and the partner logo separated by a hairline divider and one clear-space unit each side; matched by cap height, never resized by eye. Client logos never appear on dotBANG brand surfaces without written agreement.
- Sign-off protocol for any new tier file (research R2): passes at (a) real 16 px in a tab strip, light and dark chrome; (b) 20–32 px in a circle mask; (c) 80% maskable circle at 512; (d) one-colour black-on-white and white-on-black with blue deleted; (e) 98 px circle (YouTube) and 70%-safe square (Instagram). Any failure = redraw that tier.

### Lockup rule — the mark and the wordmark are never adjacent (Tyler, Nov 20, 2026)

- **The mark and the wordmark `dotBANG` are never adjacent in the same area.** They are never composed into a single lockup — not side by side, not stacked — on any surface.
- **The wordmark stands alone at header scale** — top-left or top-center of the surface — set as live text (Space Grotesk 700, tracking −0.03em, above) with nothing paired to it.
- **The mark is a separate element elsewhere** on the surface, in its own clear space. In heroes it stands in the field at the right while the wordmark stays alone at the header; neither borrows the other's position.
- **There are no lockup assets.** The asset suite (§12) ships the mark masters, the tier files, and the wordmark as separate elements — never a combined mark-plus-wordmark file.

## 6. Glass chrome and the horizon gradient

- **Liquid glass** is chrome plus the single priority panel in a view; everything else is solid. Fill `rgba(10,10,10,0.52)`; backdrop `blur(20px) saturate(160%)` for chrome, 16 px for panels; border 1 px solid white 12%; radius 24 px panels / 999 px bars (header floats 16 px off the viewport edges); shadow `0 12px 44px rgba(0,0,0,0.40)`; budget max 3 blurred surfaces per viewport; fallback solid `rgba(5,5,5,0.92)`, layout unmoved.
- Text on glass is white or dim white at rest; **blue on glass exists only as the chrome hover state**; hot never appears on or in glass.
- **The horizon** (the one gradient exception): `linear-gradient(to bottom, #000000 0%, #000000 66%, #FFFFFF 90%, #0297DE 94%, #0297DE 100%)`, height 240 px. Once per marketing page, last element in the document, no text, links, wordmark, or legal line on it. Never in CRM, product UI, documents, decks, or inside a card. Hot never enters it.

## 7. Positioning (research R1 — the copy governor)

**Positioning statement (internal, governs all copy):**

> For individuals who bought serious local-AI hardware (GB10 / DGX Spark / Mac Studio class), dotBANG is the operating standard — the benchmarks, the ops standard, and the tools — that turns the machine into measured, production work. One operator, everything proven in public. Businesses get the same standard applied to their knowledge through a separate, strictly-business door.

The lane: serious solo hardware + measured model choice + a public standard + one named operator. Nobody else holds it; dotBANG already holds three of its four assets (Gauntlet, gb10-ops, the running cluster). The audience truth behind it (niche map, Nov 20): practicing local-AI builders who own or are buying Sparks / Mac Studios / PRO 6000s, solo devs and agent builders, homelab/sovereignty hobbyists, beginners riding along; cloud users present, mainly as debate opponents — the niche is local-AI sovereignty **without excluding cloud users** (Tyler, Nov 20).

**Tagline: TBD — owner-supplied; never ship a guessed line.** (The research R1 working line and its alternates were removed Nov 20, 2026 — the working line was rejected by Tyler; no tagline ships until he supplies one.)

**Banned as lead language:** own your ___ · private · local-first as a claim · "your data, your models, your machine" · "we don't just advise, we build" · "solutions" anything. ("Own your weights" is Tyler's existing @tysn.dev bio line — it is his voice on his account, not dotBANG lead copy; flagged here because R1's evidence shows AnythingLLM and Open WebUI already own the construction.)

## 8. Voice and proof order (research R4)

- **"I" on everything personal; "we" only for a named product/entity.** Solo "we" is the #1 agency tell in the comparator set.
- First person, dated entries, publish on shipping cadence — a post exists because something shipped, was measured, or broke. No content-calendar filler. (Niche map confirms the audience: milestones and failure-and-fix stories outperform polished output by an order of magnitude.)
- Publish failures and corrections with the same prominence as wins. The Nov 18 rollback post-mortem is this asset class.
- A Willison-style disclosure page exists before launch: who pays, what sponsors don't control, conflicts disclosed.
- Never: "solutions provider / end-to-end transformation / leverage"; stock imagery as proof; unnamed-client case studies; logo walls; "book a discovery call" with no price.
- **Proof order — publish and present in this order, no CTA inside the artefacts:**
  1. **SLM Gauntlet** — reproducible benchmark on named, constrained hardware; show the failure taxonomy, not just scores.
  2. **gb10-ops** — the open-source standard; the enterprise door-opener. No CTA inside the artefact.
  3. **Cluster live log** — the running system, dated logs only (pool tokens, sequences, tok/s, downtime, rollback notes). An undated cluster photo is stock imagery. *(Does not exist yet — launch gate, §12.)*
  4. **XPST** — the shipped tool, visibly alive (a release inside 30 days or it reads abandoned).
  5. **The doors** — $199 call, then the priced audit (below). Revenue/client numbers rank last for the enterprise door: specific, consented, dated outcomes only.
- **The door ladder (product-line study, Nov 20):** free proof stack → entry ($38–129: merch capsule, Operator Pack $79, membership) → core ($199 call → GB10 health check $250 → build-along $950 → two-box cluster setup $1,200) → premium (audit → support retainer $300/mo → business build $17,495 + $175/mo hosting + $200/mo maintenance).
- **The $199 call is a filter, not the audit.** The Nov 2026 solo market prices a real audit at $1,500–$3,000 fixed, credited; a micro-consult floor is $750. At $199 the call is paid triage: a verdict and a routing. The audit is the business door's real first product — fixed scope, named deliverable, priced publicly, credited toward the build (product-line recommendation: $2,500, credited in full within 90 days — Tyler's price confirmation is a product decision, not a brand decision, and is not settled by this guide). Hidden pricing is an agency tell; every price lives in exactly one place (the Stripe catalog spec).

## 9. Merch application rules (product-line study, Nov 20)

Merch is the brand made physical: ranked #6 for revenue, #1 for identity. The settled mark (S1–S3) is the whole design system on fabric — one white mark, nothing else on the garment. The restraint is the luxury signal.

1. **Embroidery first, print second.** A stitched mark is the highest perceived-value-per-dollar upgrade in POD (+$2.49–3.50/placement, Printful 2026). Thread doesn't crack, fade, or peel; it reads as uniform, not souvenir.
2. **Heavyweight blanks only** (6–7+ oz class: Comfort Colors 1717 garment-dyed is the POD-reachable tier). A Gildan 5000-class blank is the dropship tell — never ship one under this mark.
3. **One placement, small.** Embroidered glyph, left chest ~2–2.5 in (Heavy Tee, Crewneck, Long-Sleeve, Oversized Hoodie) or center chest small (Heavyweight Hoodie) or front center (Dad Hat). No back print, no sleeve prints, no text slogans.
4. **No ASCII field on garments.** The field is a screen device with a ~64 px floor (§1); on fabric it reads as noise.
5. **Black garments, white thread/print. That is the whole colourway at launch.** No colour-named "flavours/drops" of anything (research R3 — that is Bang Energy's system, under the name BANG).
6. **No AOP, no mugs, no phone cases, no stickers-as-products.** Apparel only — pieces a person would wear to a meetup where other operators can tell what it is.
7. **Samples before listings.** Tyler orders and wears every SKU first. A luxury claim he hasn't touched is a lie waiting for a return.
8. **Launch capsule (3):** Heavy Tee $48 (hero) · Dad Hat $38 (attach — one size, zero size-exchange friction) · Heavyweight Hoodie $88 (margin engine, ~$62 gross/unit). Fast-follow: Crewneck $78, Oversized Heavyweight Hoodie $110, Long-Sleeve Heavy Tee $52 — same digitized glyph, same page template.
9. **Provider: Printful, Free plan** ($0 recurring — cost discipline). Printify's cheaper bases require the $39/mo Premium; re-run provider math at ~15+ orders/month.
10. One-time setup for the whole line: one embroidery digitization ($2.95–6.50, one glyph design reused everywhere) + samples (~$100–150, Tyler's spend).

## 10. Carry-over map — v3.0 §§12–29 (approve in one read)

Per the Nov 19 audit: v3.0 §1 (governance), §2 (foundation), and §§12–29 **carry over verbatim** until a later amendment, except where a row below says otherwise. §§4–11 of v3.0 are replaced by §§1–6 of this draft; §§7–10 of v3.0 are restated inside §§3–4 here with no value changes.

| v3.0 material | Disposition in v4.0 |
|---|---|
| §1 Governance, §2 Foundation | **Carry verbatim.** |
| §§12–29 — iconography, imagery, data (incl. data-colour rules referenced in §2 above), templates, accessibility, motion, legal, asset management (§29), and all remaining sections in that range not individually named in the audit | **Carry verbatim.** The audit names these topics collectively as the carry-over set; no §12–29 text was found in contradiction with the Nov 18 language or the Nov 20 settlements. |
| §16 Voice and naming (inside the §§12–29 range) | **Carries, with one addition:** the research R4 voice rules in §8 of this draft are appended (I/we rule, shipping cadence, failure publishing, disclosure page, never-list). Name law itself (S6, banned name forms) is unchanged. |
| Motion material (inside the §§12–29 range) | **Carries for UI motion only** — the 0.18s / 0.24s values restated in §4. Field/texture motion is governed by §1.5–§1.7 of this draft where they differ (fps caps, hysteresis, content-locking, static frame, fallback ladder). |
| §17–§23 locked templates (per Nov 13 brand session record) | **Carry.** Templates consume the new mark assets and tokens when §11's delta lands; their layouts are not redesigned by this guide. |
| Appendix A (do/don't) | **Carries with edits:** delete "Don't add a second accent color" (replaced by D14's accent/action distinction and the hot Don'ts in §11); add the Do/Don't rows in §11 of this draft. |
| Appendix B (token quick reference) | **Regenerated** from `design/dotbang.tokens.json` after the §11 token delta lands. Never hand-edited. |
| `BRAND-CONFORMANCE.md` checklist | **Carries with edits:** item 3 splits into blue ceiling / hot ≤1% + permitted-list (ceiling value follows O3); item 8 rewritten to the final mark (one-colour white primary; blue dot retired, not a variant); item 11 gains the field construction + alpha bands (follows O2). |

## 11. Do / Don't (v4.0 additions — read with Appendix A as amended)

**Do**

- Do ship the white one-colour mark first, everywhere, and let the garment/surface carry the quality.
- Do spend hot once per view, on the one small action that matters, or not at all.
- Do keep blue flat and rare; a surface with no blue is a surface done right.
- Do publish proof in the §8 order, dated, with the failures left in.
- Do price publicly, once, in one place.

**Don't**

- Don't use a blue dot — in the logo, as a fallback, or as a "variant." It is retired (S3).
- Don't place the mark and the wordmark adjacent, or compose them into a lockup — the wordmark stands alone at header scale; the mark stands separate (§5 lockup rule).
- Don't set text in hot, fill anything larger than a small action with hot, or put hot in a gradient, the logo, the field, or glass.
- Don't force blue onto a surface to satisfy a presence quota (pending O3 — and the recommendation is that there isn't one).
- Don't add esports cues: italic condensed display type, angular bursts, mascot/shield marks, jersey layouts, RGB-lit photography (research R3).
- Don't add crypto cues: coin-like roundels, mesh-gradient heroes, chain/wallet vocabulary, glow-and-gradient neon (research R3).
- Don't set the wordmark vertically on black with a single saturated colour stripe; don't release colour-named "flavours/drops" of anything (research R3 — the Bang Energy can read).
- Don't print the ASCII field on merch, scale the primary mark into small sizes instead of using tier files, or put texture inside tier artwork.
- Don't say "own your ___," "solutions," or "we" for one person (§§7–8).

## 12. Conformance delta — what must change to match v4.0

**In flight, not v4.0:** fleet card **t_4d476835** is fixing `brand-board-v2.html`, `COMPARE.md`, and `SITE-BLUEPRINT.md` §4 to **v3.0 law** (retired `#6CACE4` out as current, `#0297DE` aligned). That work stays valid — v4.0 does not resurrect `#6CACE4` anywhere — but it lands on v3.0's logo and colour law. **v4.0 supersedes it on the items below; the card's output is an input, not the finish.**

### Site build

1. **Delete the `data-accent="6cace4"` variant and the `?accent=` switch** from the site build (already prescribed by the v3.0 conformance record as a FAIL; still owed). v4.0 makes it blocking: no retired hex ships in any build.
2. **Replace every logo asset with the final mark** (S1): masters + tier files from `~/workspace/dotbang-logo/` (vector masters, `tiers/`). Remove the blue-dot mark from headers, covers, favicons, avatars, and social templates.
3. **Swap the typefaces (§3):** Space Grotesk (variable 300–700) + Space Mono (static 400/700) self-hosted files in; Inter and JetBrains Mono files out, everywhere they are embedded (site, boards, CRM skin, templates). Live-text wordmark re-set in Space Grotesk 700 (§5). Mono labels re-spec'd from 500 to 400/700 — any surface still calling for a mono 500 is a conformance fail.
4. **Adopt the regenerated tokens** (below) once the token card lands: `--hot` / `--hot-wash` exist only after O1 freezes; field alpha-band variables only after O2; the blue-ceiling conformance check only after O3. Do not hand-roll interim values.
5. **Texture systems:** implement both systems per §1.1 — dot render for images, character field for texture; the hero lead follows O2. Animated surfaces ship with their §1.6 static frame and the §1.7 fallback ladder; static exports for thumbnails/social/decks are the canonical still, not a fresh render at export time.
6. **Favicon/avatar sets** ship as separate files per §5's opposite padding rules: multi-layer ICO (16/32/48) + SVG + 180 Apple touch + 192/512 PWA. (Google Search does not accept SVG favicons — PNG/ICO ship regardless; research R2.)
7. Remove any blue-presence decoration added to satisfy v3.0's presence rule **only if O3 lands**; until then, leave deliberate blue untouched.

### Brand repo artefacts

1. `BRAND-GUIDELINE.md` → this draft, on Tyler's approval (version 4.0, decision-log entries for S1–S9 and the O-picks as decided).
2. `brand-board-v2.html` — beyond t_4d476835's v3.0 fix: regenerate against v4.0 (final mark, no blue-dot variant panel, hot swatch only after O1) or rename to `brand-board-v2-archive.html` and update `README.md`'s row.
3. `COMPARE.md` — beyond the card's fix: its historical framing must not present the blue-dot mark or any pre-v4 colour law as current; dated superseded banner stays.
4. `SITE-BLUEPRINT.md` §4 — beyond the card's fix: logo and colour sections re-point to v4.0 §§2/5; the blue-dot lockup references come out.
5. `BRAND-CONFORMANCE.md` — checklist items 3, 8, 11 per §10; add hot misuse checks (size >48 px / ~2,300 px², share >1%, hot as text/fill/gradient) and a retired-mark check (any blue-dot asset = fail).
6. **Tokens (exact diffs are specified in the Nov 19 audit §4 — they carry into v4.0 with these changes):** `$meta` version → 4.0; add `color.hot` / `color.hotWash` **with the O1-winning hex** (audit values assume `#FD6821`; if `#FF4D2E` wins, only the hex/rgba values change); add `field.dotRamp`, `field.defaultConstruction`, `field.alphaBands` per O2; **replace the audit's `logo` token block** — its `variantColor` / blue-dot `variantScope` fields are void under S3; the block records the final geometry instead (viewBox 190×413, taper 72→62, gaps 36, dot Ø82, clearspace 1 dot diameter, min 16 px / 6 mm, below-min = tier files); `conformance.bannedGeneric`: remove "second accent colour," add the hot misuse bans, the white/light-background ban, and a blue-dot-mark ban. Font tokens: `font.voice` → Space Grotesk, `font.data` → Space Mono (static 400/700 — the generator must not emit a mono 500). Generator (`build-tokens.mjs`) emits `--hot`, `--hot-wash`, field alpha-band variables, `--logo-min-height`; header strings → v4.0. The Astryx `[data-astryx-theme="neutral"]` map is **not** changed — hot is not a theme accent.
7. `tools/brand-conformance.mjs` — add `['--hot', <O1 hex>]` to `TOKEN_FILE_REQUIREMENTS` after O1; DOM hot-share/hot-size assertions are a second card once the site build consumes the new tokens (audit §4.5).
8. **Asset library (§29):** retire the black-on-white mark files and all blue-dot assets from the usable suite (archive, do not delete); the usable suite is: final white master, final black one-colour master, tier files, and the wordmark as a separate element (never composed with the mark — §5 lockup rule) — nothing else.

## 13. Launch gates (research R5/R6 — one launch only; nothing public before all four pass)

- [ ] **Gate 1 — Legal.** Definitive live register search (USPTO tmsearch + EUIPO TMview + UK IPO) in a real browser session — the registers are JavaScript-gated; every fetchable index is clean for DOTBANG (Nov 17 + Nov 20 findings), but clearance is **provisional until the live search is done**. Then: trademark attorney clearance opinion, then **US intent-to-use filing for DOTBANG (IC 009/042, +041 for content) lodged — before goods enter commerce, not after revenue.** Exposure on record: Bang Energy's pending BANG application, Serial 97400643 (filed 2022), covers AI platforms/bots/ML software in dotBANG's exact classes; published for opposition Aug 2026; Hublot's extension to oppose runs to **Dec 9, 2026**; the same owner is actively opposing compound BANG marks (SHEBANG!, 2026). Filing while 97400643 is still pending is materially better than filing after it registers. Stay out of audio (Bang & Olufsen is low-risk only while dotBANG ships no audio hardware/software).
- [ ] **Gate 2 — Handles.** Verify and claim `@dotbang` in-platform (Instagram, X, YouTube, GitHub) before launch day. Indexed search found no rival brand, but in-platform availability is **unverified** (login-gated); bare "dotbang" is taken in gaming ecosystems (FACEIT, RuneScape) — expect Twitch/Steam unavailable and don't build on them. `@dot___bang` stays the social handle of record until a clean `@dotbang` is confirmed. (@dot___bang launch prep from the niche map — display name, real bio, creator/business account type, first branded post, seeding from @tysn.dev — rides with this gate; @tysn.dev's bio currently carries **no link at all**, and its target depends on the site deploy.)
- [ ] **Gate 3 — Identity files.** The four logo tiers ship as separate tested files (incl. the ICO/PNG favicon set and the circle-safe avatar), each passed through §5's sign-off protocol. The site does not launch on a scaled primary.
- [ ] **Gate 4 — Proof artefacts.** Launch content ships in §8's order. Gauntlet and gb10-ops are already public-grade. **The two artefacts that don't exist yet gate the launch:** (1) the **cluster live-log page** (dated logs: pool tokens, sequences, tok/s, downtime, rollback notes); (2) the **priced-audit door page** (the business door with the $199 filter call and the fixed, public, credited audit price — §8).

---

---

# Part G. Carried sections (v3.0 text, v3.0 numbering)

Carried verbatim per the §10 map, except where a marker in square brackets says otherwise. Face
names: where a carried section names Inter or JetBrains Mono, read the §3 faces — Space Grotesk and
Space Mono — under S8; the carried text is the v3.0 record and is not rewritten. References inside
carried sections ("section 7", "§29") use v3.0 numbering.

## Carried §1. Governance: how this guide works

- **Owner and approver:** Tyler. No one else amends this document.
- **How to use it:** find the section for the surface you are making. Every section gives a spec (numbers), do and don't examples, and where marked †, a locked template registered in section 29. Work from the template first, the spec second, your taste never.
- **The anti-drift principle:** documents do not drift because people disobey guidelines. They drift because the guideline never specified the template, table, chart, signature, or fallback needed at 11pm before a deadline, so someone improvised. If you hit a surface this document does not cover, that is a defect in this document: stop, ask the owner, and get the answer written into the next version. Do not improvise a new house style.
- **Exceptions:** any deviation needs the owner's written approval before it ships, recorded in the decision log (section 3). An approved exception applies to that one deliverable, not to the system.
- **Amendment order:** amendments happen in this file first, then propagate to the board, the templates, and the surfaces, in that order. A surface that disagrees with this file is wrong, however good it looks.
- **Review cadence:** this guideline is reviewed every 6 months, or immediately when a font version, template, or platform rule changes. Next scheduled review: May 2027.
- **Changelog:**

| Version | Date | Change |
|---|---|---|
| 1.0 | November 2026 | First complete system: mark, palette, type scale, glass, ASCII field, spacing, naming, voice. Type set in system stacks. |
| 2.0 | November 2026 | Font standardization (Inter + JetBrains Mono, self-hosted, pinned) replacing system stacks as the brand face. Expanded from 9 sections to 29: governance, decision log, type-data rules, fallbacks and licensing, diagrams, iconography, imagery, charts, tables, locked templates, accessibility, motion, legal, asset management. Readability floors added for documents. Tyler's nine principles recorded in section 2. |
| 3.0 | 2026-11-15 | Finalised as official on Tyler's instruction; supersedes 2.0 in full. Domain corrected to `dotbang.io` (section 16). Accent blue changed to Electric Blue `#0297DE` throughout, with the contrast figures recomputed to 6.48:1 and the spot reference retired (D12). The footer horizon gradient recorded as the single named exception to the no-blue-gradient rule, with its limits written down (D13). Liquid glass chrome restated as law from the colour section, with the blue-on-glass rule narrowed so sections 6 and 11 agree. Machine-readable tokens added in `design/`. The eight locked facts are listed at the head of this document. |
| 3.1 | 2026-11-20 | Mark only. Locked facts L2/L6 and §§4–5 synced to the settled final mark: one colour, 190 × 413 geometry (stem height 300, straight taper 72 to 62, gaps 36/36, dot Ø82, overshoot 5). The blue-dot mark is retired as variant, fallback and small-size substitute; small sizes use the tier files. Mark cross-references aligned in §§6, 22, 24, 25, 26 and Appendix A. No other law changed. |

## Carried §2. Brand foundation

Two pages, written as decisions, not history.

**What dotBANG is:** a one-person technical practice that designs, builds, and runs private AI systems and the software around them, on hardware the client or the practice owns, and proves the work with measured numbers.

**Positioning:** local and owned beats rented and vague. dotBANG sells working systems with receipts: benchmarks, deployments, dashboards. It does not sell hype, decks about decks, or rented intelligence dressed up as a product.

**Audience:** operators and owners who buy outcomes and distrust marketing: founders, sales and operations leadership, technical hobbyists scaling into infrastructure. They read tables. The brand is built for readers of tables.

**Personality:** direct, technical, concrete, dry. Claims carry numbers. If a number is not measured, it is not claimed.

### The nine principles

These govern decisions when the spec runs out. They are Tyler's, recorded verbatim in substance:

1. **Privacy first.** Client data, and our own, stays where it belongs. Public material never carries real personal information (section 28).
2. **Own your stack, local compute.** The tools that matter run on hardware we control. Rented platforms are a convenience, never a foundation.
3. **No hype.** The work is the flex. Banned vocabulary in section 16.
4. **Prove it by shipping.** A thing exists when it is deployed and measured, not when it is announced.
5. **Lean and fast.** Small files, small pages, small teams. If a treatment costs frames or bytes without earning them, the treatment goes.
6. **Free if it was free.** "I give everything away for free if it was given to me for free." Knowledge, code, and resources that came to us free are passed on free. This is why the brand fonts are open license (section 9) and why the learning library exists.
7. **Right to repair on hardware.** Hardware we buy is hardware we can open, fix, and keep running. Sealed and disposable is a defect, not a design.
8. **Free knowledge, paid hands.** Teaching, writing, and benchmarks are free. Implementation, deployment, and responsibility are what clients pay for.
9. **Measured or it did not happen.** Benchmarks, receipts, and re-checks. Partial work is reported as partial, with the remainder named.

## Carried §3. Decision log

Recorded so these choices are not re-litigated or silently swapped later. Each entry: the decision, the reason, and what was rejected.

| # | Decision | Reason | Rejected |
|---|---|---|---|
| D1 | **[Superseded by v4.0 §3 (Tyler P2 pick, 2026-11-20): Space Grotesk + Space Mono are the brand faces; Inter + JetBrains Mono are retired to history.]** **Inter + JetBrains Mono are the brand faces** (section 7) | Inter is the strongest dense UI and data face available: tallest x-height of the leading candidates, tabular figures, slashed zero, disambiguation set, true italics, weights 100 to 900 with an optical size axis. JetBrains Mono matches Inter's x-height within 1 percent, so inline code and IDs do not change visual size. Both are SIL OFL 1.1, both are in the Google Fonts catalogue (so Google Docs and Slides can match the brand), and both embed without restriction. | Geist + Geist Mono: lighter files and perfectly matched metrics, but by late 2026 Geist is the recognised default fingerprint of AI generated sites and Vercel tooling, and its sans has no slashed zero. IBM Plex Sans + Plex Mono: the most ownable corporate superfamily, but Plex Sans stops at weight 700, a real handicap for oversized display moments, and it reads slightly worse at 12 to 14px UI sizes. |
| D2 | **System font stacks are retired as the brand face** | system-ui resolves to at least four different typefaces across platforms, with different x-heights, widths, and weight availability. Zero download bought zero consistency. The stacks remain only as the fallback tail (section 9). | Keeping v1.0's zero-download rule for the website only: rejected, because the website is one surface and the brand must match across all of them. |
| D3 | **[Superseded by v4.0 §3 (Tyler P2 pick, 2026-11-20): Space Grotesk, rejected here as a third display face, is the v4.0 voice face in a two-family system.]** **One sans + one mono, no display face** | A three-family split (display, body, mono) triples the install, embed, and sync burden across Word, PowerPoint, Figma, Canva, and video editors, which is exactly how document drift starts. Display character comes from weight 800, tight tracking, scale, and layout, not from a third family. | Space Grotesk or Archivo as a headings face: both look good on a website and both break the brief in documents. Archivo remains a fine face; it is simply not this system. |
| D4 | **Pitch black #000000 is the field** | Deliberate deviation from mainstream dark mode guidance (Material suggests #121212). It is the brand, it is true black on OLED, and the mitigations are built in: dim white floors for body text, no thin weights, generous line height. Do not "fix" it in implementation. | Near-black tints (#0A0A0A, #111111) as the field. Tints appear only as materials (glass fill, card tone #050505), never as the field. |
| D5 | **[Superseded in part by v4.0 §2: hot is admitted as the action colour — not a brand accent; the ban on a second brand accent stands.]** **The palette is exactly three colors** | The Nov 5 signal pink is out, permanently, unless the owner reinstates it in this log. (Its hex is deliberately not printed here: a banned color does not get a swatch in the brand book.) A second accent is a second brand. | Pink as a 1 percent accent; green and amber as brand status colors (status colors inside client product data are data, not brand). |
| D6 | **[The presence half of this rule is OPEN in v4.0 as pick O3 (§0/§2): ceiling and presence are Tyler's to settle; the meaning half — blue = brand, current place, live state — stands.]** **Blue means brand, current place, or live state** | The presence rule (section 6): blue is never absent and never decoration. If blue means nothing on a screen, the screen is off brand in one direction or the other. | Blue as a general decorative accent or a fill color. |
| D7 | **PDF first for final documents; TTF builds for Office** | An embedded-subset PDF renders identically everywhere. Microsoft Office embeds only TTF builds, so the document toolchain installs TTF even though the web serves WOFF2. Full rules in section 9. | Sending editable files as the final deliverable; assuming a recipient's machine will substitute gracefully (it will not, and DOCX carries no portable fallback rules). |
| D8 | **[Superseded by v4.0 §3 and the web build standard §3.3: this row measured the retired faces' web builds; the Space Grotesk / Space Mono builds are subsetted WOFF2 under a 100 KB total budget.]** **The web font subsets ship without hinting, and the mono subset ships without ligatures** | Measured on the pinned releases: the Inter variable Latin subset is 63.7KB and the JetBrains Mono variable Latin subset is 23.4KB inside the section 9 budgets. Keeping JetBrains Mono's roughly 140 coding ligatures in the web subset alone cost about 17KB to serve glyphs the brand turns off in product UI anyway. Editors keep the full variable TTF, ligatures included. | Static per-weight WOFF2 files: five Inter weights plus italics measured about 288KB of Latin subsets, four times the budget. |
| D9 | **Email is designed for its Arial fallback** | Only about a quarter of email clients fully support web fonts; Gmail ignores them entirely and Outlook on Windows falls back silently. In email, the fallback is not the exception, it is the design case (section 21). | Designing email in Inter and hoping. |
| D10 | **[Continues as OPEN pick O2 in v4.0 (§0/§1): the alpha bands are Tyler's to freeze.]** **ASCII field alpha is the one open item** | The field's alpha range (0.05 to 0.22, section 11) is deliberately NOT frozen in v2.0. Working guidance: the bright end for heroes and marketing, the dim end for app chrome and the CRM. The owner eyeballs real surfaces and freezes it in a future amendment. Until then it stays a range, and nobody narrows it unilaterally. | Freezing it now on a guess. |
| D11 | **The domain is `dotbang.io`** (section 16) | Registered 2026-11-14, email routing live the same day, DNS delegated. Every machine-context example in the guideline now uses it. | `dotbang.dev`, which v2.0 named in its naming-law example and which is not owned. Also rejected: leaving the example generic, because a guideline that will not name its own domain teaches the next person to guess. |
| D12 | **Accent blue is Electric Blue `#0297DE`** (sections 4, 6, 26) | Brief of 2026-11-15. Computed contrast on the black field is 6.48:1: WCAG AA for normal text, below AAA, which is a further reason the blue is never body text. White on it is 3.24:1, so white type on a blue plate stays banned exactly as it was. Black on it is 6.48:1. The restrictions, share ceiling and hover-only rules are unchanged: this is one value changed, not a new licence for blue. | Keeping `#6CACE4`, the lighter v2.0 blue (8.66:1 on black): it is easier to place but reads as a tint rather than a signal next to the black field. A second blue for product UI: that is a second brand. |
| D13 | **The footer horizon is the only gradient involving blue** (section 6) | Tyler named it on 2026-11-15: black to white to Electric Blue at the foot of a marketing page. It closes the page, it carries no text, and it appears once per page. Recorded with its limits so it cannot be cited to justify a blue gradient anywhere else. | Banning it and losing the signature close. Also rejected: allowing it as a general gradient, which would put the blue into decoration and break the presence rule. |

### v4.0 settled decisions (2026-11-20)

| # | Decision | Source |
|---|---|---|
| S1 | The mark is final: one-colour, geometry frozen (stem taper 72→62, stem height 300, gaps 36/36, dot Ø82, overshoot 5) — §5 of this guide | Mark spec, Nov 20, 2026 |
| S2 | One-colour law: white on black is primary; the same geometry in black is the one-colour form for light surfaces | Mark spec |
| S3 | The blue-dot variant is retired: not a variant, a fallback, or a small-size substitute | Mark spec; Tyler, Nov 20 |
| S4 | Canvas is pitch black `#000000` on every brand surface | v3.0 D4, carried |
| S5 | Accent blue is `#0297DE`; `#6CACE4` is retired and banned everywhere | v3.0 D12, carried |
| S6 | The name is written exactly `dotBANG` | v3.0 §16, carried |
| S7 | Texture is the two systems of §1: dot render for images, character field for texture; tone from coverage only | Tyler, Nov 18; teardown + rendering research, Nov 20 |
| S8 | Type is Space Grotesk + Space Mono (Tyler's pick P2), self-hosted, SIL OFL 1.1; Inter + JetBrains Mono retired to history | Tyler, Nov 20 |
| S9 | Chrome is liquid glass: white text at rest, blue only on hover; the horizon gradient is the only gradient in the system | v3.0 D13, carried |
| S10 | Texture + motion are codified methods (§1): measured ramp ending at 100% coverage, the standard grade, 24–30 fps field caps, one designed static frame per animated texture | Teardown; animation research; rendering report, Nov 20 |

Open picks O1–O4 are recorded in §0 and stay open until Tyler rules.

---

## Carried §12. Iconography

- **Approved library: Lucide** (open source, ISC licensed), used as shipped. Do not redraw icons, do not mix in a second library, do not commission a bespoke set without an amendment. If Lucide lacks a needed icon, use the closest Lucide icon and a label; labels fix what icons cannot.
- Construction (Lucide's, which is also the usage rule): 24px grid, 2px stroke, no fill, round caps as designed. Never restroke, fill, or outline an icon.
- Sizes: 16px minimum in product UI (inline with small text), 20px standard, 24px in navigation and empty states. Below 16px, an icon is a smudge: use text.
- Color: white or dim white. Blue only when the icon carries an active or live state (section 6). Icons never carry brand meaning on their own; the mark is the brand.
- Pairing: at 16px, an icon that is not universally understood gets a text label next to it. Icon-only buttons carry an accessible name (section 26).
- Misuse: no filled icon sets, no emoji as icons, no platform logos redrawn by hand, no icon in the blue at rest as decoration.

## Carried §13. Imagery: photography, screenshots, and AI images

### Photography direction

- Subject: real hardware, real rooms, real hands. Racks, nodes, desks, and cable runs as they actually are. Stock photography is banned in brand surfaces.
- Treatment: black and white, or color graded so far toward neutral that black stays pitch and whites stay clean. The blue may appear in a photograph only when it was really there (a screen, an LED) or as the single permitted accent added in layout, never painted into the image.
- Composition: one subject, black negative space around it, horizon level, no Dutch angles, no lens flares, no glow effects added in post.
- Retouching: exposure, crop, and cleanup only. No skin smoothing theatre, no sky replacements, no composited hardware that does not exist.
- Representation: people appear as they are, working. No posed handshakes, no skyline offices, nothing that claims a company dotBANG is not.

### Screenshot and product UI capture rules

- Capture at 2x (retina) scale, window sized to the content, browser and OS chrome cropped out unless the chrome is the subject.
- Frame: hairline border at 12 percent, radius 18px, on the black field. No drop shadows, no device mockups with fake reflections, no perspective tilts.
- Redaction and anonymisation are mandatory: no real client names, hostnames, IP addresses, account IDs, email addresses, or live data in any published screenshot unless the client agreed in writing. Replace with the placeholder standard in section 28 (documentation ranges, node1 and node2, user gb10). Redaction is done by replacing the data in a test environment, not by blurring the real thing in an image editor; a blurred real IP is still a real IP.
- Cursor: hidden, unless the cursor position is the point of the screenshot.
- In documents, screenshot text must measure at least **7.5pt effective** at final placed size (section 17). If the text would be smaller, crop tighter or split the figure; never shrink a full UI into illegibility.
- Captions: every screenshot in a document carries a caption saying what it shows and, where relevant, when it was captured.

### Illustration

- There is no illustration style in this system beyond the ASCII field and the diagram style. Do not introduce spot illustrations, mascots, or character art without an amendment.

### AI image policy

- Allowed: texture and background exploration, mood references, and clearly synthetic imagery in content that is about AI imagery.
- Forbidden: AI images presented as photographs of real hardware, rooms, people, or results; AI generated screenshots or dashboards (a fake UI is a false claim); AI images of clients, their sites, or their equipment.
- Disclosure: published AI imagery in editorial content is labelled as AI generated in the caption. Product and proposal surfaces use no AI imagery at all: real screenshots or nothing.
- Review: an AI image goes through the same review as a photograph, plus one question: could a reader mistake this for evidence? If yes, it does not ship.

### Alt text standard

- Every informative image carries alt text that states what the image shows and the one fact a reader needs from it. Decorative images (the ASCII field, texture) get empty alt and aria-hidden.
- Alt text follows naming law (section 16) and never starts with "image of".

## Carried §14. Data visualisation: chart styling †

Charts are arguments. These rules keep every chart from dotBANG legible, honest, and recognisably ours.

- **Chart type:** bars for comparisons, lines for time, dots for distributions. Pie charts are banned (angles lie); use a bar or a table. Dual axes are banned; panel two charts instead.
- **Palette:** series one is white. The single highlighted series, the one the chart is about, is accent blue. Remaining series are dim white, faint white, then a blue at 55 percent and 30 percent alpha as fills only. No other hues, ever (decision D5). A chart with six series is two charts.
- **Colour-blind safety:** series are distinguished by direct labels, order, and line style (solid, dashed) as well as color. A chart that only works in color does not ship.
- **Axes and gridlines:** gridlines hairline white at 7 percent, horizontal only unless the data demands both. Axis labels in mono 11px, dim white. No axis line heavier than the gridlines. Zero baselines on bar charts, always; truncated axes on line charts are labelled as truncated in the subtitle.
- **Labels:** direct labelling beats legends. Put the series name at the end of the line or inside the bar. Legends only when direct labels collide, placed above the chart, left aligned.
- **Titles and furniture:** every chart has a title that states the finding (Inter 600, sentence case), a subtitle stating the measure and period (dim white), and a source line in caption size: source, date measured, and sample size where it matters. Principle 9 applies: no source line, no chart.
- **Numbers on charts** follow section 8: tabular figures, comma separators, units attached. Axis ticks are rounded to human steps; never let a tool emit 0.30000000004.
- **Export sizes:** charts are built at the size they will be read: full column (about 170mm in documents), half column, and 16:9 slide size. Never scale a chart down by more than 25 percent from its built size; rebuild it instead. Effective label size floor: 8pt in documents, 14px on screen.
- **Backgrounds:** charts sit on the field or a panel, never on the ASCII field, never on glass (blur behind data is noise).

## Carried §15. Data tables †

Tables are the brand's home turf. The product table style and the document table style are one style at two densities.

- **Header row:** label style, uppercase, 11px sans 600 or mono 500, faint-to-dim white, bottom hairline at 12 percent. Header text never wraps to two lines in product UI; shorten the header or widen the column.
- **Row rules:** hairline soft (white at 7 percent) between rows. Zebra striping is banned: hairlines carry the structure, and zebra bands fight the black field.
- **Alignment:** text left, numbers right with tabular figures (section 8), status and states left in mono. Totals and emphasis rows: white 600, top border at 12 percent, no fill.
- **Density variants:** presentation tables (documents, decks): cell padding 10 to 12px vertical, body 10 to 10.5pt, one idea per row. Dense tables (product UI): cell padding 8px steps, body 14px screen, built for scanning and sorting, same colors and hairlines.
- **Footnotes:** table notes sit directly under the table in caption size (8.5pt floor 8pt in documents), numbered in mono, never endnoted to another page.
- **Empty and loading states:** an empty table says what is missing and why in dim white ("No briefs yet. The first sync has not run."), never a blank grid, never a spinner as the whole message.
- **Sorting and interaction (product):** sortable headers show direction with a small triangle in dim white, blue on the active sort. Row hover takes the 6 percent blue wash (section 6).
- **Spreadsheets** follow section 20; a pasted spreadsheet screenshot is not a table.

---

# Carried Part D. Voice and content

## Carried §16. Voice, tone, and naming

The brand voice is Tyler's voice with the rough edges kept: direct, technical, concrete, no hype. Claims carry numbers. If a number is not measured, it is not claimed.

### Naming law (absolute)

There is one correct written form of the name:

**dotBANG**: "dot" always lowercase, "BANG" always uppercase. The casing is the .! play: a small dot and a loud bang.

- The banned form is the name set in all capitals ("DOTBANG"). It appears in this document once, here, so the ban is unambiguous. It appears nowhere else, ever: not in headlines, not in labels, not in footers, not in image text, not in alt text.
- Also banned: DotBang, Dotbang, dotbang in prose, "dot BANG", and splitting the name across two lines.
- The rule survives all-caps contexts: inside an uppercase label, the name keeps its own casing. Labels bend; the name does not.
- Machine contexts follow machine conventions, and that is the only exception: URLs and domains (dotbang.io), repository and package names (dotbang-crm), and code identifiers use lowercase because those systems require or expect it. The moment text is meant for a human to read, it is dotBANG.
- The social handle is @dot___bang where the platform set it. Handles are identifiers, not prose; in prose the account is still called dotBANG.
- Say it as two beats: "dot BANG."

### Writing rules

- Short sentences. Concrete nouns. Name the hardware, the model, the count, the time.
- No hype vocabulary: no "revolutionary", no "game changing", no "unlock", no "supercharge". The work is the flex.
- No emojis in brand copy on the site, in product, or in documents. (Platform-native social posts by Tyler himself are his call; bot-authored content follows this rule.)
- Build in public: show the failure and the fix alongside the win. The audience trusts receipts.
- Sign as Tyler, never "Ty", in anything written as him.
- Plain language wins over jargon where both are accurate; where jargon is the accurate term, use it and, on first use in client documents, gloss it in four words or fewer.

### Tone by context

| Context | Tone | Notes |
|---|---|---|
| Proposals and sales | Reassuring, plain, concrete | Walk the reader through how the thing works day to day, how it deploys, and what each cost line is. Never explain how the proposal itself was produced. Price lines stand on their own: build, hosting, maintenance, optional AI. |
| Product UI | Terse, exact | Labels name the thing and the state. Errors say what failed and what to do next, in that order. |
| Support | Patient, specific | Steps numbered, one action per step. No blame, no "simply". |
| Social and editorial | Tyler's voice, receipts first | Section 22 plus the sign-off rule below. |
| Crisis and incidents | Facts, times, impact, next update time | No minimising, no hype in either direction. What happened, what it affects, what is being done, when the next update lands. |

### Terminology

- Product and client terms keep the client's own capitalisation (Territory Brief, product names as the client writes them).
- Tech terms: lowercase generics (cluster, node, endpoint), exact model and product names as their makers write them. Never invent a friendlier name for a technical thing in a client document.

### The sign-off rule (bots, absolute)

Every social media post and every comment published by a bot on behalf of dotBANG ends with the sign-off:

**dotBANG**

- It is the last line, on its own line, after the content. Nothing follows it: no hashtags after it, no links after it, no emoji after it.
- It applies on every platform: Instagram, TikTok, X, Threads, YouTube, and any platform added later.
- It applies to posts and to comments equally. A reply comment ends with dotBANG the same way a post does.
- It is written in the exact casing from the naming law, always. Not lowercase, not all caps.
- Human posts Tyler writes and sends himself are his business. Anything a bot publishes carries the sign-off, no exceptions, no "forgot it this once".

---

### Addition (v4.0): voice rules

Appended from §8 of this guide (research R4), per the §10 carry-over map:

- **"I" on everything personal; "we" only for a named product/entity.** Solo "we" is the #1 agency tell in the comparator set.
- First person, dated entries, publish on shipping cadence — a post exists because something shipped, was measured, or broke. No content-calendar filler. (Niche map confirms the audience: milestones and failure-and-fix stories outperform polished output by an order of magnitude.)
- Publish failures and corrections with the same prominence as wins. The Nov 18 rollback post-mortem is this asset class.
- A Willison-style disclosure page exists before launch: who pays, what sponsors don't control, conflicts disclosed.
- Never: "solutions provider / end-to-end transformation / leverage"; stock imagery as proof; unnamed-client case studies; logo walls; "book a discovery call" with no price.

# Carried Part E. Templates and applications †

Each template in this part is a locked file registered in section 29, not a picture of a file. Work in the template. If the template cannot express what you need, that is a guideline defect (section 1), not a licence to improvise.

## Carried §17. Proposal template †

The proposal is the highest-stakes document the brand ships. It is also where v1.0 era drift did real damage: one past proposal set body text at 8.1 to 8.8pt with apparatus at 6.6pt, and nobody caught it because there was no floor. The floors below exist because of that autopsy and are mandatory.

- **Structure:** cover (mark, client-neutral title, date, one-line scope), one-page summary (the offer, the three cost lines, the ask), how it works (day to day, in the reader's terms), deployment (how it runs, what runs where, what happens when it breaks), scope and phases, pricing, terms, next steps. Contents page on anything over 8 pages.
- **Type:** document scale, section 7. **Body floor 10.5pt, standard 11pt. Apparatus, footnotes, and table notes floor 8pt, standard 8.5pt.** Screenshot text at least 7.5pt effective (section 13). Body color #E6E6EA, secondary #B4B4BC (section 6).
- **Pricing presentation:** every cost is its own line with its own plain label: the build (one time), hosting (monthly, what it keeps running, cancel terms), maintenance (monthly, what it covers, the person's time named as a person's time), and optional items labelled optional. Prices are never bundled into a single monthly figure, never hidden in footnotes, and totals reconcile to the cent.
- **AI presentation:** what is built in is described as built in, what is optional is described as optional, and the routing and privacy options are stated in plain terms the buyer can repeat to their own team. No model names are used as selling points to a buyer who did not ask for them.
- **Reassurance is content:** the document walks a non-technical buyer through daily use, deployment, and costs completely enough that they never need to ask how it was made or whether it will run. Gaps in reassurance are defects, same as typos.
- **Issue process:** final proposals are issued as embedded-font PDF only (section 9). The editable source stays internal unless the contract says otherwise.

## Carried §18. Report, white paper, and stationery templates †

- **Reports and white papers:** same document scale and floors as section 17. Cover, summary, body with mono-labelled section markers, charts per section 14, tables per section 15, sources section with full citations and access dates. Benchmarks state hardware, method, and sample size in the document, not in a footnote on another page.
- **Letterhead:** the lockup top left, contact block in mono at the foot, body in Inter 11pt. Letters are issued as PDF.
- **Memo and internal notes:** title in mono label style, body Inter, no branding beyond the header line. Internal documents still follow naming law.
- **Invoices:** Inter throughout, tabular figures, line items that match the proposal's own labels word for word, totals reconciled to the cent, payment terms in plain language. An invoice that renames a line item from the proposal is a defect.

## Carried §19. Presentation template †

- 16:9 only. Title layout (mark, display title, mono date label), section layout (index numeral in blue, mono label, H1), content layout (H2 plus body at 14pt minimum on slide, which is the deck equivalent of the document floors), data layout (chart or table built at slide size per sections 14 and 15), closing layout (mark, the ask, contact).
- Slide body text floor: 14pt. Chart label floor: 11pt on slide. If content does not fit at the floor, it gets a second slide, never a smaller size.
- Speaker notes carry the detail the slide cannot. A slide that needs its notes read aloud to make sense is fine; a slide that is a document page shrunk down is not.
- Decks are presented from PDF (embedded fonts) wherever the room's machine is not ours. The .pptx with theme fonts set and embedding on (section 9) is the handover format.

## Carried §20. Spreadsheet template †

- Header row: Inter 600, uppercase labels, bottom border. Numbers: tabular figures where the tool supports them, currency and date formats set explicitly per section 8, never inherited from a locale default.
- One accent use only: the blue marks the total row's top border or the single key figure. No colored cell fills, no rainbow conditional formatting; conditional states use mono text labels (OVER, UNDER, DUE) in dim white, with the blue reserved for the one number that matters.
- Print setup is part of the template: fit to page width, header row repeats, footer carries title, date, and page number in mono.
- A spreadsheet that will be read by a client ships as a sheet plus a PDF of the same view. The PDF is the record.

## Carried §21. Email: signature and templates †

Email is a fallback regime (decision D9): most clients ignore web fonts, Gmail entirely. Everything in this section is designed and approved in Arial first.

- **Signature (HTML + plain text version):** name in bold, role line, then the lockup rule: a 56 by 4px blue rule as a small hosted image or a table-cell border (never an attached logo image that Outlook blocks by default), contact lines in mono-styled text (email stacks cannot load the mono either; the signature uses the email stack and spacing to suggest it). Legal footer in 8pt grey where required. No banners, no promotional images, no social icon rows.
- The HTML signature is table based, inline styles only, maximum width 480px, and is tested in Gmail, Outlook on Windows, and Apple Mail before use. The plain text version carries the same facts with the sign-off name.
- **Campaign and newsletter templates:** pitch black background where the client supports it, white body text at 16px minimum, the email stack `"Inter", Arial, Helvetica, sans-serif`, single column, buttons as bordered table cells. Dark-mode aware clients may invert; the design must survive inversion, which is why fills are banned and hairlines do the structure.
- **Transactional and personal email from Tyler** follows the writing rules in section 16: short, concrete, signed Tyler.

## Carried §22. Social templates †

- **Formats per platform:** avatar (the avatar tier file on pitch black, mark legible at 32px, never a scaled master), banner (mark left, one line, field at dim alpha), post art (1:1 and 4:5), carousel (cover slide is a thumbnail: three words maximum plus the mark), quote card, announcement card, case-study card (one screenshot per section 13 rules plus one measured number).
- Graphics are built from the system: pitch black field, the mark top left, display type for the one claim, one blue key rule, the field or a corner of it as texture.
- Thumbnails and post art: three content words maximum plus the mark. The title does the shouting at display weight; the blue appears once, as the rule under the title. It never appears in the mark, which is one colour (§5). Minimum type size in post art: nothing under 24px at final export, because feeds are read at half size on phones.
- Caption rules: voice per section 16, hashtags before the sign-off or not at all, and every bot-published post and comment ends with the sign-off (section 16). Human posts are Tyler's.
- Content palette note: graphics and thumbnails are black based like everything else. The white-background content treatment from earlier directions is retired; one system, every surface.

## Carried §23. Video: thumbnails, titles, and overlays †

- **Thumbnail system:** pitch black field, display title (Inter 800, sentence or full caps only where the platform's norms demand it and the naming law still holds), three content words maximum, mark top left at minimum 64px tall in the 1280 by 720 master, one blue key rule. Readable at feed size on a phone is the acceptance test: export, shrink to 10 percent, read it in one second or rebuild it.
- Face and image rules: a face or a hardware shot may occupy one side; type never crosses a face; no red arrows, no shocked expressions, no elements the video does not deliver.
- **Series branding:** series name as a mono label in the same position on every thumbnail in the series; episode numbers as oversized numerals (section 7), numeral white, suffix may take the blue.
- **Title cards and lower thirds:** lower third is a glass or solid panel, name in Inter 600, role or topic in mono label, blue key rule at the panel's left edge. Title cards: mark, display line, field behind. End cards: mark, one call to action, nothing else.
- **Captions and subtitles:** Inter 600 (or the platform's closest match where the editor cannot load it, documented per tool), white with a black outline or a solid black band, never yellow, never auto-styled by the platform default. Captions are reviewed, not trusted to auto-generation.
- **Per-tool font setup:** the editing tool (Premiere, After Effects, Canva, Figma, or successor) must have the pinned TTF fonts installed or uploaded before any template is opened; a template opened on a machine without the fonts is already drifting. This is checked, not assumed (section 9, version pinning).

## Carried §24. Web and product cross-reference †

- The website and the CRM are built from the tokens in Appendix B. This guideline is the source; the code tokens are the implementation. If they disagree, this document wins and the code is fixed.
- Marketing pages use the full system (glass chrome, ASCII field, display type). Product UI uses the same colors, type, spacing, and table rules at working density, with the field at the dim end of its alpha range and glass reserved for chrome.
- Favicon and app icons come from the logo suite (section 4): the one-colour mark on pitch black, delivered as its own tier files at 16, 32, 48, 180, 512 and 1024. Below the full mark's minimum size, the tier file is used; the blue dot no longer exists as a small-size form.
- Open Graph and social share images are social templates (section 22) at 1200 by 630: mark, display line, key rule. Every page ships one; a page without one renders a default that is off brand by definition.
- Performance rules live here and in section 9: WOFF2 budgets, blur budget of 3 surfaces, one canvas throttled to about 10fps and paused offscreen, motion on transform and opacity only. A page that blows the budget is off brand, because lean and fast is a principle (section 2), not an engineering preference.

## Carried §25. Physical and print

- Business cards, if ever printed: pitch black rich black field (section 6), lockup in white (the mark is one colour, so no blue enters it, §5), details in mono, matte finish, no gloss spot tricks. Back of card: the mark alone, large.
- Signage and event material: the same lockups at print minimum sizes (mark 6mm minimum), spot color proofed against the section 6 reference before any run.
- Merch: garments are black or white; the mark prints white on black and black on white, one colour, never two (§5). No distressed treatments, no dithering (section 11), no alternate colorways without an amendment.
- Pre-press checklist: fonts embedded or outlined per the printer's spec, rich black where specified, images at 300dpi effective, one printed proof checked against section 6 before the run.

---

# Carried Part F. Accessibility, legal, and assets

## Carried §26. Accessibility

Accessibility is woven through sections 6 to 25; this section states the minimums in one place.

- **Contrast minimums:** reading text at least 4.5:1 against its background (white on black is 21:1; dim white is about 7.0:1 and is the floor for reading text). Large text at least 3:1 (faint white, about 3.1:1, is large and decorative only). Blue on black is 6.5:1, but blue text is banned for meaning reasons (section 6); its permitted uses are rules and states, which meet the 3:1 non-text bar with room (the mark is one colour, §5).
- **UI components and states:** focus ring is accent blue, 2px, offset 2px, always visible on keyboard focus. Active and live states are never carried by color alone: the current nav item also has position and weight, the live indicator also has its label.
- **Minimum type sizes:** web body 16px, smallest reading text 14px, labels 11px only for non-essential markers. Documents follow the section 7 floors (body 10.5pt, apparatus 8pt, screenshot text 7.5pt effective). Video and social floors are in sections 22 and 23.
- **Documents:** PDFs ship tagged, with real heading structure, reading order checked, and alt text on figures (section 13). A scanned image of text is never a deliverable.
- **Motion:** prefers-reduced-motion yields the static ASCII frame, no animated transitions, and no autoplay movement (section 27). Nothing flashes more than three times per second, anywhere.
- **Captions and transcripts:** all published video carries reviewed captions (section 23); audio content carries a transcript. Live content is captioned or summarised in text the same day.
- **Names for controls:** icon-only buttons and controls carry accessible names. A control a screen reader announces as "button" is a defect.

## Carried §27. Motion

- Where motion is allowed: state changes in UI, the ASCII field's drift, video transitions, and deck builds that earn their keep. Motion explains a change or it is removed.
- Durations and easing: 0.18s ease for UI state changes; 0.24s for panels; nothing animates layout properties, only transform and opacity. Hover states are instant enough to feel attached to the pointer.
- Logo motion: the mark does not animate, morph, or redraw itself in brand surfaces. In video, the mark may fade or slide in as part of a title card, as a whole, once.
- Video transitions: hard cuts by default; a 6-frame crossfade where a cut would jar. No spins, zooms through walls, or template transition packs.
- Decks: builds reveal in reading order; nothing flies.
- Reduced motion equivalents: every animated treatment names its reduced-motion form, and the media query decides, never a settings toggle buried three levels deep. The ASCII field's form is one static frame (section 11).

## Carried §28. Legal and IP

- **Trademark and name use:** the brand name is used as written in section 16. Do not register, file, or claim marks, domains, or handles in the brand's name without the owner's direction. Third parties naming the brand in coverage keep their own style; we do not police headlines, we do correct invoices, contracts, and partner pages.
- **Copyright and credit lines:** documents carry "© {year} dotBANG" in the footer apparatus. Client work is credited only as the contract permits; a client's name, logo, results, and screenshots are used publicly only with their written agreement.
- **Public content privacy standard (absolute):** public material never contains real personal information: no real IP addresses (LAN, fabric, or tailnet), no hostnames, no usernames, no names beyond those already public with agreement, no account IDs. Examples in public documents use IETF documentation ranges and placeholders: user gb10, hosts node1 and node2. This applies to screenshots (section 13), code samples, benchmarks, and this guideline's own examples.
- **Font licensing:** Inter and JetBrains Mono are SIL OFL 1.1; the summary and the pack rules are in section 9, the licence texts ship in `fonts/OFL-Inter.txt` and `fonts/OFL-JetBrainsMono.txt`. Icon library Lucide is ISC licensed; its licence ships with any vendored copy.
- **Third-party assets:** stock photography is banned (section 13). Any other third-party asset (a client's chart, a vendor diagram) is used under its own licence, credited in the apparatus, and never restyled into looking like ours.
- **AI content:** the AI image policy is in section 13. AI assisted writing follows the same voice law as any writing (section 16); the brand does not publish claims it has not verified, whoever drafted them.

## Carried §29. Asset management

- **Single source of truth:** this folder, `dotbang-design-boards/`, holding this guideline, the board, the logo suite, and the font pack. The web repo and the template files carry copies; copies are downstream, always. If a copy and this folder disagree, this folder wins and the copy is refreshed.
- **Folder structure:** `fonts/` (WOFF2 subsets at the root of the folder, TTF builds in `fonts/ttf/`, licence texts beside them), `renders/` (board renders for review), templates registered below.
- **File naming:** lowercase, hyphenated, versioned: `brand-{asset}-{surface}-v{n}` for brand assets (for example the board file beside this guideline), `{client}-{document}-{yyyymmdd}` for issued client documents. No spaces, no "final", no "final2". A file named final is a file whose owner gave up.
- **Versioning:** the guideline version is the system version. Font versions are pinned in section 9 with checksums; a bump is a brand release with a changelog entry. Templates carry their guideline version in the file properties or a footer note.
- **The font pack (ships with this guideline):** `fonts/InterVariable.woff2` and `fonts/InterVariable-latin-ext.woff2` (web, upright), `fonts/Inter-400-italic.woff2` and `fonts/Inter-600-italic.woff2` plus their Latin Extended partners (web, italic), `fonts/JetBrainsMonoVariable.woff2` and `fonts/JetBrainsMonoVariable-latin-ext.woff2` (web, mono), `fonts/ttf/` (Inter statics 400, 500, 600, 700, 800 plus italics 400 and 600, Inter variable upright and italic, JetBrains Mono statics 400, 500, 700 and the variable build, for desktop install and Office embedding), `fonts/OFL-Inter.txt`, `fonts/OFL-JetBrainsMono.txt`, `fonts/AUTHORS-JetBrainsMono.txt`.
- **Template index † (locked templates specified in Part E):** proposal (section 17), report and stationery (18), presentation (19), spreadsheet (20), email signature and campaign (21), social set (22), video set (23), web and product tokens (24 and Appendix B). Each is built to its section spec, with theme fonts set and embedding on where the format supports it, and is stored beside this guideline. A template that has not been built yet is built to the spec on first need, then locked and registered here; until it exists, the section spec is the template.
- **When you cannot find something:** check this folder, then ask the owner. Never substitute a near-match asset, font, or template from the internet. The exception process is section 1.

---

Carried because the v4.0 text does not restate this material and its rules still govern
documents. Face names read per §3 (Space Grotesk / Space Mono) under S8. The pinned-file table and
the measured budgets in §9 are v3.0 measurements of the retired faces; for web builds the governing
budget is the web build standard (`docs/dotbang-web-build-standard.md` §3.3: subsetted WOFF2, both
families at most 100 KB total). The document rules carry unchanged. The diagram-style rules are
carried from v3.0 §11, whose glass and field material is replaced by §§6 and 1 of this guide.

## Annex — carried §9. Typography: fallbacks, licensing, hosting, and document rules

### The fallback stacks (verbatim; do not edit without an amendment)

```css
--font-sans: "Inter", "Inter Fallback", system-ui, -apple-system, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, "SF Mono", SFMono-Regular,
             Menlo, Consolas, "Liberation Mono", monospace;
```

- The system faces are the tail of the stack, reached only when the self-hosted files fail. They are not the brand face (decision D2).
- **Metric matched fallback:** serve a local fallback face tuned to Inter so a font swap does not reflow tables. Inter's metrics: x-height 0.546em, ascent 96.9 percent, descent 24.1 percent. Arial's x-height is 0.519em, which gives a size-adjust of 105.3 percent.

```css
@font-face{
  font-family:"Inter Fallback";
  src:local("Arial"), local("Helvetica Neue"), local("Helvetica");
  size-adjust:105.3%;
  ascent-override:96.9%;
  descent-override:24.1%;
  line-gap-override:0%;
}
```

- **Office and Google fallback (no font installed, embedding off):** Arial or Helvetica for sans, Consolas or Courier New for mono. Templates must be proofed in the fallback, so pagination survives it. Word will use its own substitution tables and DOCX carries no portable fallback rules: you can embed, install, or accept Word's choice. This system embeds and installs.
- **Email fallback:** `"Inter", Arial, Helvetica, sans-serif`, and the design must pass review rendered in Arial alone (section 21, decision D9).

### Licensing (why these faces, in licence terms)

- Inter and JetBrains Mono are SIL Open Font License 1.1. The OFL permits use, embedding, bundling, and redistribution of the font files themselves, provided the licence and copyright text travel with them. Documents created with the fonts do not inherit the OFL, and a font embedded in a document need not carry the licence text with it.
- Both fonts report embedding permission fsType 0 (installable), verified on the pinned files. There is no configuration in which a client receives a read-only proposal because of our font (the classic commercial-font failure).
- The licence texts ship in the font pack: `fonts/OFL-Inter.txt` and `fonts/OFL-JetBrainsMono.txt`. Any copy of the font files that leaves this folder without those two files is a licence breach and a defect.
- Reserved names: do not rename the families. Subsets keep the original family names, as the OFL permits for unmodified-name distribution of subsetted files served as the same font; if a future tool renames a build, it must not use the reserved family name for a modified font.

### Hosting spec (web)

1. **WOFF2 only**, self-hosted same origin, correct `font/woff2` MIME type. No Google Fonts links in production: privacy, extra connections, feature-reduced files, and version drift.
2. **One variable file per family per script subset**, split by `unicode-range`: Latin and Latin Extended. Inter serves upright from the variable file (wght plus opsz); italics serve from static subsets at 400 and 600, because italic is rare and a variable italic doubles the payload for two weights. JetBrains Mono serves from its variable file; the web subset omits the `calt` ligature table (decision D8).
3. **Budgets, transferred on a Latin page: sans at most 75KB, mono at most 40KB, total at most about 115KB.** Measured on the pinned build: Inter variable Latin 63.7KB, JetBrains Mono variable Latin 23.4KB, total 89.1KB. Latin Extended subsets transfer only when a page actually uses those glyphs. If a future font version breaches budget, subset harder or drop axes; never breach silently.
4. **`font-display: swap`** for both families. **Preload exactly one file:** the Inter variable Latin subset, with `crossorigin`. Preload nothing else. Inline the `@font-face` block in the document head where the stack allows.
5. **Caching:** versioned filenames, `Cache-Control: public, max-age=31536000, immutable`.
6. **Subset audit:** the subsets include the glyphs brand surfaces actually render, including arrows (U+2190 to U+2199), the check mark (U+2713), currency, and the middle dot. A silent fallback glyph in a headline is a defect; check new surfaces for it.
7. **Version pinning:** the same version and checksum everywhere: web repo, design tools, Office templates, video templates, and the font pack. A version bump is a brand release: changelog entry here, re-proof the PDF and Office templates, re-export the social and video templates.

Pinned files (Latin subsets, the ones every page loads):

| File | Version | Bytes | SHA-256 (first 32) |
|---|---|---|---|
| fonts/InterVariable.woff2 | Inter 4.001 | 65,200 | d5da0de9c09d3d47f5114dc0c1ba22ef |
| fonts/JetBrainsMonoVariable.woff2 | JetBrains Mono 2.304 | 23,924 | afd00a2ce02699f3aee12b6cd14668 |

### Document rules (these sentences are the law for documents)

- Final external documents are issued **only as PDF with every font shown as Embedded (full or subset)**; check File, Properties, Fonts before sending. A PDF whose fonts are not embedded is not a finished deliverable.
- Editable .docx and .pptx templates ship with **"Embed fonts in the file" already enabled**, theme fonts set to Inter and JetBrains Mono, and full (not characters-only) embedding.
- Desktop installs use the **TTF builds**. Microsoft Office embeds only fonts with the .ttf extension; OTF builds with PostScript outlines are never embedded. The font pack carries TTF for this reason, even where a designer prefers OTF.
- Anyone editing brand documents must install the **Font Pack** (TTF files, OFL texts, install notes) supplied with these guidelines. Do not substitute "a similar font".
- A subset-embedded PDF is view and print perfect but not reliably editable for new characters. Never treat the final PDF as the editable source; keep the source file plus the full fonts as the record.
- Google Docs and Slides: add Inter and JetBrains Mono via Fonts, More fonts, before editing. Never accept the Aptos, Calibri, or Roboto default in a branded template. Both brand faces are in the Google Fonts catalogue, so an exact match is always possible there.

---

### Annex — carried diagram style (from v3.0 §11)

Consulting work lives in diagrams: architectures, flows, timelines. One style, everywhere.

- Boxes: panel fill (white at 3 percent) or solid #050505, hairline border at 12 percent, radius 14px (8px in dense technical figures), label in Inter 600, annotation in mono.
- Connectors: 1.5px lines, white at 58 percent; arrows are small filled triangles on the line, never curly braces, never hand-drawn wobble. Elbows are square (90 degree), matching the mark's geometry.
- The live, current, or recommended element in a diagram may take the blue border or the blue label. Exactly one element per diagram gets it. Everything else stays white and grey.
- Labels: every box is labelled; every arrow that is not self-evident is labelled in mono 11px. A diagram that needs a paragraph beside it to be understood is redrawn, not explained.
- Export: diagrams ship as SVG for web and decks, embedded as vector in PDF, never as a screenshot of a diagramming tool's canvas (grid dots and selection handles are defects).

## Carried Appendix A: Do and don't

### Do

- Do put the one-colour mark on every surface: white on black, black on light surfaces, never two colours, never a blue dot.
- Do spend blue on meaning: brand, current place, live state, hover.
- Do set type in Inter and JetBrains Mono from the pinned files, and every size and space from the tokens. **[Faces superseded by v4.0 §3: read Space Grotesk and Space Mono.]**
- Do work from the locked templates, and treat a missing template as a defect to report, not a gap to fill by eye.
- Do check a PDF's embedded fonts before it leaves, every time.
- Do float the header and footer as glass pills over the field.
- Do let black space do the luxury work. Empty black is a design element, not a gap to fill.
- Do show real numbers, real tables, real product. The CRM panel is the best brand asset the company owns.
- Do end every bot post and comment with the dotBANG sign-off.
- Do test the favicon at 16px and the thumbnail at feed size before anything ships.

### Don't

- Don't write the name any way but dotBANG (section 16).
- Don't set brand type in a system font, a substitute font, or an unpinned version.
- Don't go below the document floors: body 10.5pt, apparatus 8pt, screenshot text 7.5pt effective.
- Don't wash the blue out, gradient it, or use it as a fill or as body text. The footer horizon is the single recorded exception (section 6, D13).
- Don't split the mark into two colours, and don't bring back the blue dot. It is retired: no variant, no fallback, no small-size substitute (§5, L6).
- Don't dither anything. No dithered images, textures, or effects, anywhere, ever. **[Superseded by v4.0 §1 (two-system texture law, §0 conflict C7): dot render — halftone/dither — is the image system; the surviving bans are in §1.]**
- Don't make the ASCII field interactive, loud, blue, or informational.
- Don't put reading text directly on the field or on photography. Panels exist for that.
- Don't blur more than 3 surfaces in a viewport, and don't reach for glass where a solid card works.
- Don't use thin type weights on black, or faint white for anything that must be read.
- Don't set spacing or type off the scales to "make it fit". Change the layout instead.
- Don't ship a surface with no blue at rest, and don't ship one where blue is decoration. **[The presence half is OPEN as pick O3 in v4.0 §0/§2.]**
- Don't publish real IPs, hostnames, usernames, or client data in any surface (section 28).

### v4.0 additions (from §11)

The Do/Don't additions of §11 of this guide are part of this appendix as amended:

**Do**

- Do ship the white one-colour mark first, everywhere, and let the garment/surface carry the quality.
- Do spend hot once per view, on the one small action that matters, or not at all.
- Do keep blue flat and rare; a surface with no blue is a surface done right.
- Do publish proof in the §8 order, dated, with the failures left in.
- Do price publicly, once, in one place.

**Don't**

- Don't use a blue dot — in the logo, as a fallback, or as a "variant." It is retired (S3).
- Don't place the mark and the wordmark adjacent, or compose them into a lockup — the wordmark stands alone at header scale; the mark stands separate (§5 lockup rule).
- Don't set text in hot, fill anything larger than a small action with hot, or put hot in a gradient, the logo, the field, or glass.
- Don't force blue onto a surface to satisfy a presence quota (pending O3 — and the recommendation is that there isn't one).
- Don't add esports cues: italic condensed display type, angular bursts, mascot/shield marks, jersey layouts, RGB-lit photography (research R3).
- Don't add crypto cues: coin-like roundels, mesh-gradient heroes, chain/wallet vocabulary, glow-and-gradient neon (research R3).
- Don't set the wordmark vertically on black with a single saturated colour stripe; don't release colour-named "flavours/drops" of anything (research R3 — the Bang Energy can read).
- Don't print the ASCII field on merch, scale the primary mark into small sizes instead of using tier files, or put texture inside tier artwork.
- Don't say "own your ___," "solutions," or "we" for one person (§§7–8).

## Carried Appendix B: Token quick reference (regenerated from the token file in the v4.0 token update)

Regenerated 2026-11-20 from `design/dotbang.tokens.json` (guideline v4.0). The token file is the
machine source and `design/build-tokens.mjs` generates the CSS and TS from it; this table is the
human quick reference. If they disagree, the numbered sections of this guideline win and both
are corrected.

| Token | Value |
|---|---|
| `--black` | #000000 |
| `--white` | #FFFFFF |
| `--accent` | #0297DE |
| `--dim` / `--faint` | rgba(255,255,255,0.58) / rgba(255,255,255,0.36) |
| `--font-sans` | Space Grotesk first (stack in the token file) |
| `--font-mono` | Space Mono first (stack in the token file) |
| Weights | thin 300, body 400, emphasis 500, strong 600, heading 700, button 700; 800/900 retired with the face change |
| Type scale | sizes and tracking unchanged from v3.0; display weights cap at 700; mono labels 400 (700 emphasis) |
| Space | --s1 8px, --s2 16px, --s3 24px, --s4 32px, --s5 48px, --s6 64px, --s7 96px, --s8 128px, --s9 160px, --s-quarter 4px, --s-1-5 12px, --s-2-5 20px |
| Layout | max width 1280px, gutter 24px, section 96px desktop / 64px phone |
| Radii | --r-sm 14px, --r 18px, --r-lg 24px, --r-pill 999px |
| Glass | blur 20px, saturate 160% |
| Horizon | height 240px, stops in the token file |
| Field | alpha 0.05 to 0.22 (per-surface bands are open pick O2); cell 15px, glyph 11px |
| `--logo-min-height` | 16px |
| Hot | no token ships: the hex is open pick O1 |
| Banned hexes | #6CACE4 in either case (conformance.bannedHexes) |

## Carried Appendix C: Research basis

Tyler ordered the standardization researched before the system was frozen (Nov 6). Version 1.0 was set against current published practice on dark mode, glass, and grids. Version 2.0 adds the font and guideline-depth research of November 2026. Where dotBANG deviates, the deviation is deliberate and recorded (section 3).

**Font strategy and guideline depth (2026, for v2.0):**

- **Web Almanac 2025, Fonts chapter** (HTTP Archive, published Jan 2026): 88 percent of sites use web fonts; about 72 percent self-host at least one font file; WOFF2 is about 65 percent of font requests; median font file 35 to 36KB. Shaped: the self-hosting decision and the section 9 budgets.
- **web.dev, Optimize web fonts** (Google): self-hosting is in most cases faster than cross-origin; WOFF2 only; subset by unicode-range; preload sparingly and always with crossorigin; font-display trade-offs. Shaped: section 9 hosting spec.
- **Measured candidate comparison** (FontAlternatives, Oct 2026; files measured Oct 18, 2026): Inter variable Latin WOFF2 about 73KB with the optical axis, 48KB without; Geist about 29KB; Inter x-height 0.546em against Geist 0.530; JetBrains Mono pairs with Inter at 0.99em. Shaped: decision D1 and section 8's pairing rule. Our own pinned subsets were re-measured for section 9.
- **System stack behaviour** (TestMu AI, May 2026; SSG Production, 2026): system-ui resolves to a different face per platform, with width and x-height differences that wrapped navigation on Windows in cross-platform screenshot testing. Shaped: decision D2.
- **Document mechanics** (Adobe HelpX on PDF font embedding; Microsoft font redistribution FAQ; CoFonts and Nutrient on Office embedding, 2026): embedding prevents substitution; Office embeds only TTF; Word for web and mobile cannot embed; DOCX stores no custom fallback rules; Google Docs uses only its own catalogue. Shaped: decision D7 and the section 9 document rules.
- **Email reality** (Stripo, updated Jun 2026; MySignature and Exclaimer guidance, 2026): about a quarter of email clients fully support web fonts; Gmail does not; the fallback defines the design. Shaped: decision D9 and section 21.
- **What complete guidelines contain** (House of Singh Studio, Oct 2026; Hannah Bacon Design, Apr 2025; the Living Brand Manual, Nov 2026; YourEthos and CreativeAns templates, 2025 to 2026): eleven-plus areas, 20 to 40 pages at the usable end, typography sections that include fallbacks and licensing, governance with a 6 to 12 month review, and the rule that a guideline fails when it describes the launch instead of daily work. Shaped: the 29-section structure of this document.
- **The generic-default risk** (Sailop, Feb and Jun 2026; Bruvora, Jul 2026): default Inter and default Geist are both called out as the recognisable fingerprint of generated sites; the prescribed fix is deliberate display treatment, weight and tracking contrast, and system discipline rather than a different default. Shaped: sections 7 and 8 (display rules, mono label system) and decision D1's reasoning.

**Design system sources (from v1.0, still load-bearing):**

- **Dark mode practice.** LogRocket, "Dark mode UI design: best practices and examples". Shaped: contrast floors in section 6.
- **Dark mode contrast and restraint.** Kukoo Creative, "Dark Mode: UK Website Design From CSS to 4.5:1 Contrast". Shaped: weight floor and the faint-white restriction.
- **Glassmorphism principles.** Ramotion, "What is Glassmorphism". Shaped: selective use and the budget in section 11.
- **Glass recipes, measured.** WpDean, "What Is Glassmorphism in Modern Web Design?". Shaped: the section 11 value table.
- **Liquid Glass on the web.** DEV Community, "Liquid Glass on the Web" (saturate 150 to 180 percent restores color after blur). Shaped: saturate(160%) in section 11.
- **The 8-point grid.** Breakdance, "The 8-Point Grid System"; LS Graphics, "Why 8pt Grid?". Shaped: section 10.

Appendix B is the written token law. Its machine-readable implementation is `design/dotbang.tokens.json`,
generated into `design/dotbang.tokens.css` and `design/dotbang.tokens.ts` by `design/build-tokens.mjs`.
Releases of that file set are versioned with this guideline; a change that is not in this appendix is not a
token, and a token that is not in the generated files is not implemented.

End of guideline. Amendments happen in this file first, then propagate to the board and the surfaces.
