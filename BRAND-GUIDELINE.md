# dotBANG brand guideline

**Version 3.1, 2026-11-20 (version 3.0 released 2026-11-15). Owner: Tyler. Status: official. Supersedes version 2.0 in full.**
Finalised on Tyler's instruction of 2026-11-15: v3 is the single source of truth for dotBANG design.
Version 2.0 stays in git history as the previous release, never as a competing source of truth. The
rendered board that ships in this repo is `brand-board.html`, the v3.0 render. Where this document and any other artefact disagree, this document
wins and the artefact is corrected.

### Change note: 2026-11-20, final mark synced

This amendment records the settled final mark, and only that. Source: the final mark spec (v4 draft section 5,
`dotbang-brand-guideline-v4-draft-2026-11-20.md`) and the master `dotbang-logo/vector/dotbang-mark-final-white.svg`.
The mark is one colour on a 190 by 413 frame: stem height 300 with a straight taper 72 to 62, gaps 36 and 36,
dot diameter 82, overshoot 5. The blue-dot mark is retired: it does not exist as a variant, a fallback, or a
small-size substitute. Locked facts L2 and L6, sections 4 and 5, and the mark cross-references in sections 6,
22, 24, 25, 26 and Appendix A were updated to match. Everything else in 3.0 stands; the rest of the v4 draft is
not adopted here. Card t_2809040a.

### Locked facts (settled; do not relitigate)

| # | Locked fact | Where it is specified |
|---|---|---|
| L1 | The field is **pitch black `#000000`**. Not a lifted black, not `#121212`, not a gradient panel. | §6 (decision D4) |
| L2 | **Electric Blue `#0297DE`** is the accent: current place, live state, hover, focus, key rules. Full saturation only, at most about 5 percent of a surface, never body text, never a fill at rest. It replaced `#6CACE4`. It no longer appears in the mark: the mark is one colour (§5, L6). | §6 (decision D12) |
| L3 | The signature footer is the **horizon gradient, black to white to Electric Blue**, once per marketing page, with no text sitting on it. It is the only gradient involving the blue. | §6 (decision D13) |
| L4 | Headers and footers are **liquid glass with white text at rest and blue only on hover**. | §11, §6 |
| L5 | The name is written exactly **`dotBANG`**. | §16 |
| L6 | The mark is a **round dot plus a very square exclamation point**, **one colour only**, geometry frozen on a 190 × 413 frame: stem height 300 with a straight taper 72 to 62, gaps 36 and 36, dot diameter 82, overshoot 5, zero corner radius. White on black is the primary form; the same geometry in black is the one-colour form for light surfaces. Never two colours. The blue-dot mark is **retired**: not a variant, not a fallback, not a small-size substitute; small sizes use the tier files. | §5 (final mark spec, 2026-11-20) |
| L7 | Design direction is **C (Glass Depth) as the base, with B's oversized editorial type, with A's topographic ASCII field**. | README, COMPARE, §11 |
| L8 | Type is **Inter and JetBrains Mono, self-hosted and pinned**; the type scale, the 8pt spacing scale, and radii 14 / 18 / 24 / 999 are frozen. | §§7 to 10 |

What changed in 3.0, and why:

- **The domain is `dotbang.io`.** The guideline named `dotbang.dev` as its example of a machine-context
  domain. `dotbang.dev` is not owned; `dotbang.io` was registered on 2026-11-14 and is the domain on every
  surface from here on. Section 16.
- **The accent blue is Electric Blue `#0297DE`.** It replaces `#6CACE4`, the value v2.0 carried, throughout.
  Contrast on the black field is 6.48:1, still clear of WCAG AA for normal text and short of AAA, which is a
  further reason the blue is never body text. The restrictions on blue are unchanged: it is a signal spent
  on brand, current place, live state, hover, and focus, never body text, never a fill at rest. Recorded as
  D12 with its numbers.
- **The footer horizon is now a named exception.** Black to white to Electric Blue, once per marketing page,
  no text on it. v2.0 banned every gradient involving the blue and then left this one unrecorded. Section 6
  and D13.
- **Liquid glass chrome is stated as law, not preference.** The header and footer are glass bars, white text
  at rest and blue on hover. That rule already existed in section 11; 3.0 cross-references it from the
  colour section so nobody reads "no blue in chrome" out of section 6, and narrows section 11's blanket
  "blue text on glass is banned" so the two sections cannot be read against each other.
- **The tokens are now machine-readable.** Appendix B stays the written law; `design/dotbang.tokens.json`
  is its implementation, generated into CSS custom properties and a typed TypeScript module so the React
  build consumes the guideline instead of retyping it. If they ever disagree, this document wins and the
  token file is fixed the same day.

### Corrections made in 3.0

Every place where version 2.0, or a lane document written against it, said something this version no longer
says. Listed so the change is auditable rather than silent.

| # | Where | Version 2.0 / lane document said | Version 3.0 says | Why |
|---|---|---|---|---|
| C1 | §6 palette table, §6 Accent Blue heading, §4 construction and misuse, §26 contrast, Appendix A, Appendix B, §6 swatch name | Accent Blue `#6CACE4` | Electric Blue `#0297DE` | Tyler adopted Electric Blue on 2026-11-15 (D12). Every role that carried the old hex now carries the new one. |
| C2 | §6 Accent Blue | Contrast on black "about 8.7:1" | **6.48:1**, computed with the WCAG 2.x relative-luminance formula | The old figure belonged to the superseded lighter blue. AA for normal text, below AAA, which reinforces the never-body-text rule. |
| C3 | §6 Accent Blue | White on the accent not stated | **3.24:1**; white type on a blue plate stays banned | The practical consequence of the darker blue is that the old ban now has a number behind it. |
| C4 | §6 palette table | "Nearest spot reference is Pantone 278 C" | **No spot reference is established.** The CMYK value printed is a naive conversion, not a press build | The 278 C note belonged to `#6CACE4`. A print job proofs against the hex and records the result. |
| C5 | §16 naming law | Machine-context example `dotbang.dev` | **`dotbang.io`** | `.dev` is not owned; `.io` was registered 2026-11-14 (D11). A guideline that will not name its own domain teaches the next person to guess. |
| C6 | §6 Never list | "Never a gradient involving the blue" (absolute) | Absolute, **with the footer horizon as the single recorded exception** (D13) | Tyler named the horizon on 2026-11-15. Recorded with its limits so it cannot be cited to justify a blue gradient anywhere else. |
| C7 | §11 Liquid glass vs §6 | §11 banned blue text on glass outright, while §11 also allowed blue on hover inside chrome | Narrowed: **blue text on glass is banned except the chrome hover state**; at rest, chrome text is white or dim white only | L4 is the locked fact. Two sections now state one rule. |
| C8 | Lane doc `SITE-BLUEPRINT.md` v3 §1 and §4 | Accent recorded as "pending Tyler's signature", with both hexes behind one token and a `?accent=6cace4` comparison render | **Closed.** One value, one token, no variant | The decision landed with this version. Implementations that still carry a dual-value accent token are out of conformance. |
| C9 | Appendix B | `--accent:#6CACE4` | `--accent:#0297DE`, plus the full machine-readable token set in `design/` | Appendix B is now the human-readable summary of a generated token file, not the only copy. |

Everything else in 2.0 stands.

What changed in 2.0, and why:

- **Typography is standardized on real font files.** Version 1.0 set type in system font stacks, which meant a different actual typeface on every platform: San Francisco on Apple devices, Segoe UI on Windows, Roboto on Android. That is document drift built into the foundation. Version 2.0 adopts two self-hosted, open-license families, **Inter** and **JetBrains Mono** (both SIL Open Font License 1.1), pinned to exact versions, with one hosting spec for the web and one set of rules for documents. The system stacks survive only as the documented fallback tail. See sections 7 to 9 and the decision log in section 3.
- **The guideline is now complete.** Version 1.0 covered the mark, palette, type, glass, the ASCII field, spacing, naming, and voice. Version 2.0 keeps all of it and adds the surfaces where documents actually drift: governance, data and number rules, diagrams, iconography, imagery and screenshot policy, chart styling, table styling, locked templates for proposals, reports, decks, spreadsheets, email, social, and video, plus accessibility, motion, legal, and asset management. Twenty nine sections. If a surface exists, it has a spec, a locked template, or an explicit fallback in this document, preferably all three.
- **Readability floors are now law in documents** (sections 15, 17, 18, 19): body text floor 10.5pt, apparatus floor 8pt, screenshot text at least 7.5pt effective at final size, document body colors lifted for print legibility.

This document is the written law for how dotBANG looks and sounds on every surface: the website, the CRM and client product UI, content, video, social, decks, and documents. The companion file `brand-board.html` is the same system rendered as a page, typeset in the actual brand fonts. If this document and a mock disagree, this document wins until it is amended.

The system in one paragraph: Board C (Glass Depth) is the base. Board B (Editorial) contributes the display typography: oversized wordmark moments and oversized numerals. Board A (Terminal) contributes the signature background: a topographic ASCII field. Everything sits on pitch black, text is white, and one blue carries the accent work. Type is Inter and JetBrains Mono, self-hosted, identical on every machine that follows section 9.

---

# Part A. Governance and foundations

## 1. Governance: how this guide works

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

## 2. Brand foundation

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

## 3. Decision log

Recorded so these choices are not re-litigated or silently swapped later. Each entry: the decision, the reason, and what was rejected.

| # | Decision | Reason | Rejected |
|---|---|---|---|
| D1 | **Inter + JetBrains Mono are the brand faces** (section 7) | Inter is the strongest dense UI and data face available: tallest x-height of the leading candidates, tabular figures, slashed zero, disambiguation set, true italics, weights 100 to 900 with an optical size axis. JetBrains Mono matches Inter's x-height within 1 percent, so inline code and IDs do not change visual size. Both are SIL OFL 1.1, both are in the Google Fonts catalogue (so Google Docs and Slides can match the brand), and both embed without restriction. | Geist + Geist Mono: lighter files and perfectly matched metrics, but by late 2026 Geist is the recognised default fingerprint of AI generated sites and Vercel tooling, and its sans has no slashed zero. IBM Plex Sans + Plex Mono: the most ownable corporate superfamily, but Plex Sans stops at weight 700, a real handicap for oversized display moments, and it reads slightly worse at 12 to 14px UI sizes. |
| D2 | **System font stacks are retired as the brand face** | system-ui resolves to at least four different typefaces across platforms, with different x-heights, widths, and weight availability. Zero download bought zero consistency. The stacks remain only as the fallback tail (section 9). | Keeping v1.0's zero-download rule for the website only: rejected, because the website is one surface and the brand must match across all of them. |
| D3 | **One sans + one mono, no display face** | A three-family split (display, body, mono) triples the install, embed, and sync burden across Word, PowerPoint, Figma, Canva, and video editors, which is exactly how document drift starts. Display character comes from weight 800, tight tracking, scale, and layout, not from a third family. | Space Grotesk or Archivo as a headings face: both look good on a website and both break the brief in documents. Archivo remains a fine face; it is simply not this system. |
| D4 | **Pitch black #000000 is the field** | Deliberate deviation from mainstream dark mode guidance (Material suggests #121212). It is the brand, it is true black on OLED, and the mitigations are built in: dim white floors for body text, no thin weights, generous line height. Do not "fix" it in implementation. | Near-black tints (#0A0A0A, #111111) as the field. Tints appear only as materials (glass fill, card tone #050505), never as the field. |
| D5 | **The palette is exactly three colors** | The Nov 5 signal pink is out, permanently, unless the owner reinstates it in this log. (Its hex is deliberately not printed here: a banned color does not get a swatch in the brand book.) A second accent is a second brand. | Pink as a 1 percent accent; green and amber as brand status colors (status colors inside client product data are data, not brand). |
| D6 | **Blue means brand, current place, or live state** | The presence rule (section 6): blue is never absent and never decoration. If blue means nothing on a screen, the screen is off brand in one direction or the other. | Blue as a general decorative accent or a fill color. |
| D7 | **PDF first for final documents; TTF builds for Office** | An embedded-subset PDF renders identically everywhere. Microsoft Office embeds only TTF builds, so the document toolchain installs TTF even though the web serves WOFF2. Full rules in section 9. | Sending editable files as the final deliverable; assuming a recipient's machine will substitute gracefully (it will not, and DOCX carries no portable fallback rules). |
| D8 | **The web font subsets ship without hinting, and the mono subset ships without ligatures** | Measured on the pinned releases: the Inter variable Latin subset is 63.7KB and the JetBrains Mono variable Latin subset is 23.4KB inside the section 9 budgets. Keeping JetBrains Mono's roughly 140 coding ligatures in the web subset alone cost about 17KB to serve glyphs the brand turns off in product UI anyway. Editors keep the full variable TTF, ligatures included. | Static per-weight WOFF2 files: five Inter weights plus italics measured about 288KB of Latin subsets, four times the budget. |
| D9 | **Email is designed for its Arial fallback** | Only about a quarter of email clients fully support web fonts; Gmail ignores them entirely and Outlook on Windows falls back silently. In email, the fallback is not the exception, it is the design case (section 21). | Designing email in Inter and hoping. |
| D10 | **ASCII field alpha is the one open item** | The field's alpha range (0.05 to 0.22, section 11) is deliberately NOT frozen in v2.0. Working guidance: the bright end for heroes and marketing, the dim end for app chrome and the CRM. The owner eyeballs real surfaces and freezes it in a future amendment. Until then it stays a range, and nobody narrows it unilaterally. | Freezing it now on a guess. |
| D11 | **The domain is `dotbang.io`** (section 16) | Registered 2026-11-14, email routing live the same day, DNS delegated. Every machine-context example in the guideline now uses it. | `dotbang.dev`, which v2.0 named in its naming-law example and which is not owned. Also rejected: leaving the example generic, because a guideline that will not name its own domain teaches the next person to guess. |
| D12 | **Accent blue is Electric Blue `#0297DE`** (sections 4, 6, 26) | Brief of 2026-11-15. Computed contrast on the black field is 6.48:1: WCAG AA for normal text, below AAA, which is a further reason the blue is never body text. White on it is 3.24:1, so white type on a blue plate stays banned exactly as it was. Black on it is 6.48:1. The restrictions, share ceiling and hover-only rules are unchanged: this is one value changed, not a new licence for blue. | Keeping `#6CACE4`, the lighter v2.0 blue (8.66:1 on black): it is easier to place but reads as a tint rather than a signal next to the black field. A second blue for product UI: that is a second brand. |
| D13 | **The footer horizon is the only gradient involving blue** (section 6) | Tyler named it on 2026-11-15: black to white to Electric Blue at the foot of a marketing page. It closes the page, it carries no text, and it appears once per page. Recorded with its limits so it cannot be cited to justify a blue gradient anywhere else. | Banning it and losing the signature close. Also rejected: allowing it as a general gradient, which would put the blue into decoration and break the presence rule. |

---

# Part B. Core identity

## 4. Logo suite

The logo is the punctuation the name plays on, made literal: **a perfectly round dot, then a very square exclamation point.**

The suite, and the file to use for each job:

| Asset | Use | Format |
|---|---|---|
| Primary mark, white (final, one colour) | Everywhere on the black field by default: headers, covers, thumbnails, panel heads, sign-offs | `dotbang-mark-final-white.svg`; PNG at 4x for raster tools |
| Primary mark, black (the same geometry, one colour) | Light surfaces only: printed documents, white garments, any non-black ground the owner approves | `dotbang-mark-final-black.svg`; PNG at 4x |
| Tier files: favicon 16 / 32 / 48 / 180, app icon 512 / 1024, avatar 1024 | Favicons, app icons and avatars, and anywhere the full mark would fall below its minimum size. Separate redrawn files, never a scaled mark, never a blue dot | ICO and PNG |
| Primary lockup (mark + wordmark) | Headers, document covers, deck title slides, email signature image if used | SVG; PNG at 4x |
| Stacked lockup (mark above wordmark) | Square formats: social avatars, social post art, app icons | SVG; PNG |
| Wordmark alone | Footers, watermarks, places the mark already appears nearby | SVG |

Rules for the whole suite:

- The mark is prevalent by design: it appears in the header lockup, panel heads in product UI, social graphics, thumbnails, favicons, and sign-offs. If a surface has no mark, ask why.
- Never download or redraw a "similar" mark. The suite lives in the asset library (section 29). If you cannot find it, that is a section 29 problem, not a drawing invitation.
- **One colour only.** There is no two-colour mark, no blue dot, and no separate "mono variant": white on black is the primary form, and the identical geometry in black is the one-colour form for light surfaces (section 5, L6).

## 5. Logo rules

### Construction

- One frame, one baseline. The mark is drawn on the final **190 × 413** frame (`viewBox 0 0 190 413`), not the retired 96 × 74 frame. The exclamation point sits on the baseline at y 408; the dot overshoots that baseline by 5.
- The dot is a true circle, never an oval, never a rounded square: diameter 82, centre (41, 372), radius 41.
- The exclamation point is built from one tapered stem and a square point. Zero corner radius. The point of the exclamation is a square, not a second dot.
- Stem: full-length straight taper, width 72 at the top (y 0) to 62 at the bottom (y 300), centred on the square's centreline (x 154). This taper is the spec, not a liberty: never straighten it, never re-taper it to taste.
- Point: a 72 × 72 square at x 118, y 336 to 408.
- Gaps are 36 everywhere they appear: 36 horizontal between the dot edge and the square (measured at the square's mid-height, y 372), and 36 vertical between the stem bottom (y 300) and the square top (y 336).
- Overshoot 5: the dot runs 5 above the square's top edge and 5 below the baseline, so the circle reads equal to the square. Never remove the overshoot to "line them up".
- **One colour only.** White (#FFFFFF) on the black field is the primary form; the identical geometry in black (#000000) is the one-colour form for light surfaces. Never two colours in one mark; never a blue dot. No gradients, no alpha washes, no outlines, no shadows on the mark itself.
- Masters: `dotbang-mark-final-white.svg` and `dotbang-mark-final-black.svg`. Never redraw, re-space, or re-taper outside this spec; a variant goes through the owner's render-and-review loop.

### Use

- Primary lockup: mark left, wordmark right, gap equal to the stem width times 0.8 (12px at a 26px mark height).
- Clear space: one dot diameter (82 units) on every side. Nothing enters it, including page edges and other logos.
- Minimum size: 16px tall on screen, 6mm in print. Below that, use the approved tier files (section 4), never a scaled mark and never a blue dot.
- Favicon: the mark on pitch black, drawn as its own tier file at 16, 32, 48 and 180. The 16 and 32 pair is redrawn for those sizes, not scaled down from the master. Legibility at 16px is a requirement, tested, not assumed.
- Avatar and app-icon tiers: the same geometry in its own files, with the mark shrunk inside the safe area so it never touches the frame edge.
- Co-branding and partner lockups: the dotBANG lockup and a partner logo are separated by a hairline divider and one clear-space unit on each side; neither logo is resized to "match" the other by eye, they are matched by cap height. Client logos never appear in dotBANG brand surfaces without written agreement (section 28).
- On glass: the mark does not change. Glass is a background treatment, not a logo variant.
- Backgrounds: the mark sits on pitch black, on glass, or on a solid panel. Never on a busy photograph, never on the ASCII field at full strength.

### Never (misuse gallery, in words)

- Never split the mark into two colours, and never bring back the blue dot. It is retired: not a variant, not a fallback, not a small-size substitute (section 4, L6).
- Never redraw the exclamation with a round point, a stem that is not the spec taper, or rounded corners.
- Never rotate, outline, shadow, stretch, animate into a different shape, or place the mark inside a badge, circle, or app-icon squircle drawn by someone else.
- Never set the wordmark in a substitute font. The wordmark is artwork from the suite, and where it must be live text (web header), it is Inter 800 with tracking minus 0.03em, nothing else.

## 6. Colour

Three colors. Everything else is one of them at an alpha.

| Color | Hex | RGB | CMYK | Role | Target share of a surface |
|---|---|---|---|---|---|
| Pitch Black | #000000 | 0, 0, 0 | 60, 40, 40, 100 (rich black, large print areas) | The field: all backgrounds | about 70% |
| White | #FFFFFF | 255, 255, 255 | 0, 0, 0, 0 | The voice: text, marks, primary buttons | about 25% |
| Accent Blue | #0297DE | 2, 151, 222 | 99, 32, 0, 13 (naive conversion, not a press build: proof before any print run) | The signal: state, key rules (the mark no longer carries blue, §5) | at most 5% |

- No spot reference is established for this blue. The Pantone 278 C note in v2.0 belonged to the superseded
  lighter blue and does not carry over. Any spot-colour job proofs against this hex and records the result
  in the decision log.
- Small black text in print uses 0, 0, 0, 100. The rich black build is for fields and large areas only; four-color small text misregisters.

### Pitch Black, #000000

- Every page, card base, thumbnail, and graphic background.
- True black. Do not substitute a near-black tint for the field. Tinted blacks appear only as the glass fill and the solid card tone (#050505), which are materials, not the field.

### White, #FFFFFF

- All reading text. All headlines. The mark itself, in its one-colour white form (§5). Primary button fills.
- White on pitch black is a 21:1 contrast ratio, which passes WCAG AAA for text at any size.
- Derived whites, the only other tones allowed on screen:
  - Dim white (white at 58%): secondary text, captions, table body. The floor for reading text. Effective contrast on black about 7.0:1.
  - Faint white (white at 36%): large or decorative text only. Never paragraphs, never table data. Effective contrast about 3.1:1, which is why it is large-text only.
  - Hairline (white at 12%): borders and glass edges.
  - Hairline soft (white at 7%): row rules and quiet dividers.
  - Panel (white at 3%): card fill over black.
- Derived document colors (print and PDF documents, where alpha whites over black reproduce inconsistently): document body text **#E6E6EA**, document secondary text **#B4B4BC**. On screen, use the alpha whites. In documents, use these two hexes. Nothing else.

### Accent Blue, #0297DE

Contrast on pitch black is 6.5:1 (computed, not estimated): it passes WCAG AA for normal text and falls short of AAA, which is another reason the blue is never body text. The restriction is about meaning as much as legibility.

The blue is a signal, and it is spent only where it means one of three things: **brand, current place, or live state.**

Permitted at rest (no interaction needed):

- ~~The dot in the logo mark, everywhere the mark appears.~~ Retired: the mark is one colour and carries no blue (§5, L6).
- Key rules: the short 56 by 4px bar that underlines a hero headline, a thumbnail title, or a section opener.
- Section index numerals (the 01, 02, 03 markers in this system).
- Active states: the current nav item's marker, the selected tab's edge, the current row's indicator.
- Live indicators: status dots and recording markers, with a soft blue glow allowed.

Permitted on interaction:

- Hover states: link text, card borders with a soft edge glow, button borders and text.
- Focus states: the visible focus ring is accent blue, 2px, offset 2px.
- A table row hover wash (blue at 6% alpha) in product UI.

Never:

- Never body text or paragraph text in blue.
- Never a blue background fill for a section, card, or button at rest.
- Never a gradient involving the blue, with one recorded exception: the footer horizon (see below, and decision D13).
- Never a pale, desaturated, or alpha-washed version of the blue as an element fill. Alpha is allowed only in glows, shadows, and the row hover wash. A washed blue reads as a different, weaker brand.
- Never a second accent color. There is no pink, no green, no amber in this system. Status colors inside client product data (a client's own chart colors, for example) are data, not brand, and stay inside the data layer.

### The presence rule

Blue is never absent and never loud. At rest, every screen carries the one-colour white mark (§5) plus at least one more deliberate blue element from the permitted list. The mark no longer carries blue, so that second element is what satisfies the rule. If a screen has no blue at rest, it is off brand. If blue covers more than about 5% of a screen, it is also off brand.

### The footer horizon (the one gradient exception)

Every gradient involving the blue is banned except this one, and it is recorded rather than tolerated. It is
Tyler's call, made on 2026-11-15, and it goes in the decision log as D13.

`black #000000 → white #FFFFFF → Electric Blue (the accent)`, read top to bottom, at the foot of a marketing
page.

- **Where:** the closing element of a marketing page. Once per page. Only on the site.
- **Nowhere else:** not in the CRM, not in product UI, not in documents, not in a card, not behind text.
- **No text on it.** The wordmark, links and legal line sit above it on the black field. The gradient is the
  last thing on the page and carries no content.
- **Shaped, not a straight ramp.** A three-stop linear blend interpolates to grey fog. Place the stops so the
  light gathers in the final third and resolves to the blue at the edge; that is what makes it read as a
  horizon instead of a fade.
- **Chrome still wins.** Where a glass bar sits above the horizon, section 11 governs it: glass fill, white
  text at rest, blue on hover. The horizon never becomes a background for interactive chrome.

### Liquid glass chrome and the blue

Section 11 owns the glass spec. The one thing section 6 needs to say about it: inside glass chrome (headers
and footers), interactive text is white at rest and blue on hover. That is not a violation of "blue is never a
fill"; it is the permitted hover state, and it is the only blue in chrome at rest besides the logo dot.

### Dark mode

dotBANG has one mode. There is no light theme for brand surfaces; the system is dark native. Client product UI follows the client's product rules, with dotBANG branding applied inside them where the contract says so. Print documents are the one light-adjacent surface and they follow section 17 to 19: content set for a black field, printed as designed, never inverted by a printer driver or a PDF viewer's accessibility mode without a proof.

### A documented deviation

Most dark-mode guidance recommends against pure black backgrounds (Material Design suggests #121212) on eye-strain grounds. dotBANG uses pitch black deliberately: it is the brand, it is true black on OLED, and the mitigations are built into this system (dim white floors for body text, no thin weights, generous line height). This is a recorded brand decision (D4), not an oversight. Do not "fix" it in implementation.

## 7. Typography: core

Two families, both self-hosted, both pinned. Nothing about brand type is left to whatever a machine happens to have installed.

| Family | Face | Carries | Pinned version |
|---|---|---|---|
| Sans | **Inter** (variable, wght 100 to 900, opsz 14 to 32) | Headlines, body, buttons, product UI, documents | Inter 4.1 (font version 4.001), files from the rsms/inter GitHub release |
| Mono | **JetBrains Mono** (variable, wght 100 to 800) | Data, tables, labels, IDs, coordinates, technical annotation, the ASCII field | JetBrains Mono 2.304, files from the JetBrains/JetBrainsMono GitHub release |

Both are SIL Open Font License 1.1. What that permits, and the rules that follow from it, are in section 9.

### Weights map (the only weights that exist in this system)

| Role | Face and weight |
|---|---|
| Display (heroes, covers, wordmark moments) | Inter 800. Inter 900 is reserved for single-line thumbnail and cover statements only. |
| Headings H2 to H4 | Inter 700 |
| Lede and emphasis | Inter 400 to 600 |
| Body | Inter 400; emphasis 500; strong 600 |
| Buttons | Inter 700 |
| Small text and table body | Inter 400 to 600 |
| Labels, kickers, eyebrows | JetBrains Mono 500, uppercase, tracking plus 0.08em to 0.12em (the mono label system, section 8). Sans labels (Inter 600, 11px, tracking 0.18em) remain correct inside dense product UI where mono labels would shout. |
| Data, IDs, code, coordinates | JetBrains Mono 400 to 700 |
| Italics | Inter italic 400 and 600, for long-form prose only. Never at display sizes. |

- Thin weights vanish on black. Nothing below weight 400 at text sizes; display never below 700.
- Never use weights 100 to 300 anywhere in brand surfaces. They exist in the files; they do not exist in the brand.

### The scale (screen and product)

One modular scale, ratio 1.333, snapped to whole pixels, frozen as tokens. A size that is not on this scale does not ship.

| Token | Size | Weight | Tracking | Line height | Used for |
|---|---|---|---|---|---|
| Display Mega | clamp(56px, 13.5vw, 220px) | 800 | -0.045em | 0.94 | Wordmark heroes, covers, thumbnails |
| Display 1 | 59px | 800 | -0.04em | 1.0 | Page headlines |
| H2 | 44px | 700 | -0.03em | 1.08 | Marketing section titles |
| H3 | 33px | 700 | -0.025em | 1.15 | Product section titles, panel titles |
| H4 | 25px | 700 | -0.02em | 1.2 | Card titles |
| Lede | 19px | 400 to 600 | 0 | 1.55 | Intro paragraphs, hero sublines |
| Body | 16px | 400 to 600 | 0 | 1.65 | Body text everywhere |
| Small | 14px | 400 to 600 | 0 | 1.6 | Table cells, dense product UI |
| Caption | 12px | 400 to 600 | 0 | 1.5 | Footnotes, meta lines |
| Label | 11px, uppercase | 600 | 0.18em | 1.4 | Kickers, table headers, section labels |

- On the web, set `font-optical-sizing: auto` so the opsz axis does its work: text sizes get the Text drawing, display sizes get the Display drawing, from the same file.
- Tracking tightens as size grows: -0.045em at display, -0.02em at card titles, 0 at body. Mono labels are the exception and track out (plus 0.08em to 0.12em).

### The scale (documents, in points)

| Role | Size | Weight | Notes |
|---|---|---|---|
| Cover display | 28 to 40pt | 800 | One statement per cover |
| H1 | 20pt | 700 | Section openers |
| H2 | 16pt | 700 |  |
| H3 | 13pt | 700 |  |
| Body | 11pt standard, **10.5pt floor** | 400 | Line height 1.5. Below 10.5pt body text does not ship, ever (section 17). |
| Small and table body | 9.5 to 10.5pt | 400 to 600 | Tables follow section 15 |
| Captions and apparatus | 8.5pt, **8pt floor** | 400 to 500 | Footnotes, sources, legal. Below 8pt does not ship. |
| Document colors | body #E6E6EA, secondary #B4B4BC | n/a | Section 6 |

### Display rules (the Editorial layer)

- Display type is the artwork at hero moments: the wordmark at magazine scale, one-phrase headlines, oversized numerals.
- Oversized numerals are display type. A numeral stays white; a unit or suffix attached to it (K, +, x) may take the blue.
- Display type never changes color on hover. Interactive things change; artwork does not.
- Italic display type is banned. Emphasis at display size is weight or the faint-white second line, never italics.

### Casing rules

- The name is written dotBANG (section 16). In every context, including inside all-caps labels and headlines.
- Headlines: sentence case.
- Labels: uppercase. Labels and acronyms are the only all-caps text in the system.
- Buttons: sentence case, weight 700. Never uppercase buttons.

## 8. Typography: data and technical

Data is half the brand's output. These rules are what make a table from dotBANG recognisable without a logo on it.

- **Tabular figures, always, in columns.** Inter: `font-variant-numeric: tabular-nums slashed-zero` on the web; in Office and PDF tools, enable tabular figures (tnum) and slashed zero (zero) for every data range. JetBrains Mono figures are tabular by construction.
- **Slashed zero and disambiguation** in ID-heavy contexts: enable `zero` and the `ss02` disambiguation set so 0/O and 1/l/I can never be confused in an ID, a hash, a serial, or a benchmark label.
- **Number formats:** thousands separator is a comma (1,920,000). Decimals use a point. Never let a spreadsheet or a locale setting reformat a published number. Ranges use the word "to" or an en dash with spaces, never a bare hyphen in prose.
- **Currency:** dollar sign attached, cents only when they carry meaning ($17,495, not $17495 or $17,495.00 in display contexts; cents always in invoices and pricing tables where the total must reconcile).
- **Dates:** ISO in data (2026-11-06), long form in prose (November 6, 2026). Never ambiguous numeric dates (11/06/26) in anything a client reads.
- **Units:** attach with a thin space or none, consistently per document: 131K tokens, 2,200 MHz, 24GB, 63 tok/s. Units never take the blue except as a display suffix (section 7).
- **Decimal alignment:** columns of decimals align on the point. If the tool cannot align decimals, right-align and use tabular figures; never center a numeric column.
- **IDs and code:** JetBrains Mono, at 0.99em relative to surrounding Inter (their x-heights match within 1 percent, so this keeps inline code the same visual size as body text). Ligatures off in product UI and documents (`font-variant-ligatures: none`); ligatures are an editor preference and stay in editors.
- **The mono label system:** eyebrows, kickers, chart labels, diagram labels, and section markers are set in JetBrains Mono 500, uppercase, 11 to 12px (8.5 to 9.5pt in documents), tracking plus 0.08em to 0.12em. This is the cheapest recognisable dotBANG device across web, decks, thumbnails, and social: use it deliberately and consistently, and never set a mono label in the blue unless it is an index numeral or a live indicator (section 6).

## 9. Typography: fallbacks, licensing, hosting, and document rules

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

# Part C. Layout and visual language

## 10. Layout, grid, and spacing

### The 8pt system

Every margin, padding, gap, and component dimension comes from the 8pt scale, the convention Material Design, IBM Carbon, Atlassian, and Adobe Spectrum all run on. Values are used through token names, never raw pixels, so a spacing decision is made once and reused.

| Token | Value | Typical use |
|---|---|---|
| s1 | 8px | Tight gaps, cell padding steps |
| s2 | 16px | Inline gaps, chip groups |
| s3 | 24px | Card padding floor, grid gutters |
| s4 | 32px | Card padding, page margins on desktop |
| s5 | 48px | Between related groups |
| s6 | 64px | Phone section rhythm |
| s7 | 96px | Desktop section rhythm |
| s8 | 128px | Hero top padding |
| s9 | 160px | Editorial-scale air, covers only |

- Four-point steps (4, 12, 20) are allowed only inside small components: chips, badges, table cells, icon padding.
- A value that is not a token does not ship. 13px gaps and 22px paddings are defects, and they were the actual complaint about the CRM's spacing: it was built off-scale.

### Grid

- Web and product: 12 columns, 24px gutters, content max width 1280px. Page margins 32px desktop, 24px phone.
- Section rhythm: 96px desktop, 64px phone, with more space above a heading than below it. Air announces a section.
- Documents: A4 and US Letter are the two page sizes; a document is authored for one and never auto-scaled to the other. Margins 20mm on A4, 0.75in on Letter. Body measure 60 to 75 characters; in practice a single text column at 11pt inside those margins.
- Decks: 16:9 only (13.333 by 7.5in). Margins 0.6in. The folio system below applies.
- Header, footer, and folio system for documents: the mark at top left of the cover only; inside pages carry a quiet header (document title left, mono label right) and a footer with the page number in mono, the document date, and a confidentiality line where the contract requires one. No running logos on inside pages; repetition is not branding.

### Radius

- 14px: chips, inputs, small cards.
- 18px: cards.
- 24px: panels, glass, application frames.
- 999px: pills, buttons, the header bar.

## 11. Graphic elements

Three elements carry the visual language: liquid glass, the ASCII field, and the diagram style. Keylines are hairline white at 12 percent (7 percent for quiet dividers). There are no other textures, patterns, or decorations in the system.

### Liquid glass

Glass is the chrome material. It is used for headers, footers, and the single priority panel in a view. Everything else is solid. Glass is spent where it shows, because backdrop blur is the most expensive pixel on the page.

| Property | Value | Notes |
|---|---|---|
| Fill | rgba(10,10,10,.52) | Dark tinted glass over a black field |
| Backdrop filter | blur(20px) saturate(160%) | 20px for chrome, 16px for secondary panels |
| Border | 1px solid, white at 12% | The light edge sells the pane |
| Radius | 24px panels, 999px bars | Header floats as a pill, 16px off the viewport edges |
| Shadow | 0 12px 44px, black at 40% | Soft and wide, or none |
| Budget | Max 3 blurred surfaces per viewport | Solid cards carry everything else |
| Fallback | Solid #050505 at 92% opacity | When backdrop-filter is unsupported or high contrast is preferred, glass goes solid and the layout does not move |

Rules:

- Text on glass is white or dim white only. Blue text on glass is banned at rest, with one narrowed exception: interactive text inside glass chrome is blue on hover (section 6, locked fact L4). Nothing else on glass takes the blue.
- Inside glass chrome (headers and footers), interactive text is white at rest and blue on hover. That is the only blue in chrome at rest besides the logo dot.
- Saturation is not optional: blur alone drains color and reads as dirty plastic. The saturate(160%) term is what makes the pane read as glass.
- Glass over the ASCII field is the signature combination. Glass over photography is allowed for chrome only, never for reading panels.
- Respect prefers-reduced-motion and prefers-contrast: with high contrast requested, use the solid fallback.

### The ASCII field

The topographic character field is the signature texture. It is ambience: it carries no information, sells no claim, and never competes with content.

Spec:

- One canvas per page, fixed, behind everything, pointer-events: none.
- Glyph ramp, frozen: space, . · : ; + * x # % @ (ten glyphs, sparse to dense).
- Geometry: layered sine contours with banding, cell 15px, glyphs at 11px mono (JetBrains Mono).
- Color: white only. The field never takes the blue.
- Motion: slow drift, throttled to about 10 frames per second, paused when the tab is hidden or the canvas is off screen.
- Reduced motion: one static frame. No toggle buried in settings; the media query decides.

Rules:

- Non-interactive, always. The field does not respond to pointer, scroll, or touch.
- Never under body text at reading contrast. Where text meets the field, the text sits on glass or a solid panel.
- Never as a logo, a chart, a map, or data. The moment the field means something, it is wrong.
- **Alpha is the one open item in this guideline** (decision D10): the range is 0.05 to 0.22 and it is not frozen. Working guidance: bright end for heroes and marketing surfaces, dim end for app chrome and the CRM. Nobody freezes, narrows, or exceeds the range without an amendment.
- **Dithering is banned outright:** no dithered images, no dither textures, no Bayer patterns, in any asset, ever. Photographs and renders ship clean or not at all.

### Diagram style

Consulting work lives in diagrams: architectures, flows, timelines. One style, everywhere.

- Boxes: panel fill (white at 3 percent) or solid #050505, hairline border at 12 percent, radius 14px (8px in dense technical figures), label in Inter 600, annotation in mono.
- Connectors: 1.5px lines, white at 58 percent; arrows are small filled triangles on the line, never curly braces, never hand-drawn wobble. Elbows are square (90 degree), matching the mark's geometry.
- The live, current, or recommended element in a diagram may take the blue border or the blue label. Exactly one element per diagram gets it. Everything else stays white and grey.
- Labels: every box is labelled; every arrow that is not self-evident is labelled in mono 11px. A diagram that needs a paragraph beside it to be understood is redrawn, not explained.
- Export: diagrams ship as SVG for web and decks, embedded as vector in PDF, never as a screenshot of a diagramming tool's canvas (grid dots and selection handles are defects).

## 12. Iconography

- **Approved library: Lucide** (open source, ISC licensed), used as shipped. Do not redraw icons, do not mix in a second library, do not commission a bespoke set without an amendment. If Lucide lacks a needed icon, use the closest Lucide icon and a label; labels fix what icons cannot.
- Construction (Lucide's, which is also the usage rule): 24px grid, 2px stroke, no fill, round caps as designed. Never restroke, fill, or outline an icon.
- Sizes: 16px minimum in product UI (inline with small text), 20px standard, 24px in navigation and empty states. Below 16px, an icon is a smudge: use text.
- Color: white or dim white. Blue only when the icon carries an active or live state (section 6). Icons never carry brand meaning on their own; the mark is the brand.
- Pairing: at 16px, an icon that is not universally understood gets a text label next to it. Icon-only buttons carry an accessible name (section 26).
- Misuse: no filled icon sets, no emoji as icons, no platform logos redrawn by hand, no icon in the blue at rest as decoration.

## 13. Imagery: photography, screenshots, and AI images

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

## 14. Data visualisation: chart styling †

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

## 15. Data tables †

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

# Part D. Voice and content

## 16. Voice, tone, and naming

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

# Part E. Templates and applications †

Each template in this part is a locked file registered in section 29, not a picture of a file. Work in the template. If the template cannot express what you need, that is a guideline defect (section 1), not a licence to improvise.

## 17. Proposal template †

The proposal is the highest-stakes document the brand ships. It is also where v1.0 era drift did real damage: one past proposal set body text at 8.1 to 8.8pt with apparatus at 6.6pt, and nobody caught it because there was no floor. The floors below exist because of that autopsy and are mandatory.

- **Structure:** cover (mark, client-neutral title, date, one-line scope), one-page summary (the offer, the three cost lines, the ask), how it works (day to day, in the reader's terms), deployment (how it runs, what runs where, what happens when it breaks), scope and phases, pricing, terms, next steps. Contents page on anything over 8 pages.
- **Type:** document scale, section 7. **Body floor 10.5pt, standard 11pt. Apparatus, footnotes, and table notes floor 8pt, standard 8.5pt.** Screenshot text at least 7.5pt effective (section 13). Body color #E6E6EA, secondary #B4B4BC (section 6).
- **Pricing presentation:** every cost is its own line with its own plain label: the build (one time), hosting (monthly, what it keeps running, cancel terms), maintenance (monthly, what it covers, the person's time named as a person's time), and optional items labelled optional. Prices are never bundled into a single monthly figure, never hidden in footnotes, and totals reconcile to the cent.
- **AI presentation:** what is built in is described as built in, what is optional is described as optional, and the routing and privacy options are stated in plain terms the buyer can repeat to their own team. No model names are used as selling points to a buyer who did not ask for them.
- **Reassurance is content:** the document walks a non-technical buyer through daily use, deployment, and costs completely enough that they never need to ask how it was made or whether it will run. Gaps in reassurance are defects, same as typos.
- **Issue process:** final proposals are issued as embedded-font PDF only (section 9). The editable source stays internal unless the contract says otherwise.

## 18. Report, white paper, and stationery templates †

- **Reports and white papers:** same document scale and floors as section 17. Cover, summary, body with mono-labelled section markers, charts per section 14, tables per section 15, sources section with full citations and access dates. Benchmarks state hardware, method, and sample size in the document, not in a footnote on another page.
- **Letterhead:** the lockup top left, contact block in mono at the foot, body in Inter 11pt. Letters are issued as PDF.
- **Memo and internal notes:** title in mono label style, body Inter, no branding beyond the header line. Internal documents still follow naming law.
- **Invoices:** Inter throughout, tabular figures, line items that match the proposal's own labels word for word, totals reconciled to the cent, payment terms in plain language. An invoice that renames a line item from the proposal is a defect.

## 19. Presentation template †

- 16:9 only. Title layout (mark, display title, mono date label), section layout (index numeral in blue, mono label, H1), content layout (H2 plus body at 14pt minimum on slide, which is the deck equivalent of the document floors), data layout (chart or table built at slide size per sections 14 and 15), closing layout (mark, the ask, contact).
- Slide body text floor: 14pt. Chart label floor: 11pt on slide. If content does not fit at the floor, it gets a second slide, never a smaller size.
- Speaker notes carry the detail the slide cannot. A slide that needs its notes read aloud to make sense is fine; a slide that is a document page shrunk down is not.
- Decks are presented from PDF (embedded fonts) wherever the room's machine is not ours. The .pptx with theme fonts set and embedding on (section 9) is the handover format.

## 20. Spreadsheet template †

- Header row: Inter 600, uppercase labels, bottom border. Numbers: tabular figures where the tool supports them, currency and date formats set explicitly per section 8, never inherited from a locale default.
- One accent use only: the blue marks the total row's top border or the single key figure. No colored cell fills, no rainbow conditional formatting; conditional states use mono text labels (OVER, UNDER, DUE) in dim white, with the blue reserved for the one number that matters.
- Print setup is part of the template: fit to page width, header row repeats, footer carries title, date, and page number in mono.
- A spreadsheet that will be read by a client ships as a sheet plus a PDF of the same view. The PDF is the record.

## 21. Email: signature and templates †

Email is a fallback regime (decision D9): most clients ignore web fonts, Gmail entirely. Everything in this section is designed and approved in Arial first.

- **Signature (HTML + plain text version):** name in bold, role line, then the lockup rule: a 56 by 4px blue rule as a small hosted image or a table-cell border (never an attached logo image that Outlook blocks by default), contact lines in mono-styled text (email stacks cannot load the mono either; the signature uses the email stack and spacing to suggest it). Legal footer in 8pt grey where required. No banners, no promotional images, no social icon rows.
- The HTML signature is table based, inline styles only, maximum width 480px, and is tested in Gmail, Outlook on Windows, and Apple Mail before use. The plain text version carries the same facts with the sign-off name.
- **Campaign and newsletter templates:** pitch black background where the client supports it, white body text at 16px minimum, the email stack `"Inter", Arial, Helvetica, sans-serif`, single column, buttons as bordered table cells. Dark-mode aware clients may invert; the design must survive inversion, which is why fills are banned and hairlines do the structure.
- **Transactional and personal email from Tyler** follows the writing rules in section 16: short, concrete, signed Tyler.

## 22. Social templates †

- **Formats per platform:** avatar (the avatar tier file on pitch black, mark legible at 32px, never a scaled master), banner (mark left, one line, field at dim alpha), post art (1:1 and 4:5), carousel (cover slide is a thumbnail: three words maximum plus the mark), quote card, announcement card, case-study card (one screenshot per section 13 rules plus one measured number).
- Graphics are built from the system: pitch black field, the mark top left, display type for the one claim, one blue key rule, the field or a corner of it as texture.
- Thumbnails and post art: three content words maximum plus the mark. The title does the shouting at display weight; the blue appears once, as the rule under the title. It never appears in the mark, which is one colour (§5). Minimum type size in post art: nothing under 24px at final export, because feeds are read at half size on phones.
- Caption rules: voice per section 16, hashtags before the sign-off or not at all, and every bot-published post and comment ends with the sign-off (section 16). Human posts are Tyler's.
- Content palette note: graphics and thumbnails are black based like everything else. The white-background content treatment from earlier directions is retired; one system, every surface.

## 23. Video: thumbnails, titles, and overlays †

- **Thumbnail system:** pitch black field, display title (Inter 800, sentence or full caps only where the platform's norms demand it and the naming law still holds), three content words maximum, mark top left at minimum 64px tall in the 1280 by 720 master, one blue key rule. Readable at feed size on a phone is the acceptance test: export, shrink to 10 percent, read it in one second or rebuild it.
- Face and image rules: a face or a hardware shot may occupy one side; type never crosses a face; no red arrows, no shocked expressions, no elements the video does not deliver.
- **Series branding:** series name as a mono label in the same position on every thumbnail in the series; episode numbers as oversized numerals (section 7), numeral white, suffix may take the blue.
- **Title cards and lower thirds:** lower third is a glass or solid panel, name in Inter 600, role or topic in mono label, blue key rule at the panel's left edge. Title cards: mark, display line, field behind. End cards: mark, one call to action, nothing else.
- **Captions and subtitles:** Inter 600 (or the platform's closest match where the editor cannot load it, documented per tool), white with a black outline or a solid black band, never yellow, never auto-styled by the platform default. Captions are reviewed, not trusted to auto-generation.
- **Per-tool font setup:** the editing tool (Premiere, After Effects, Canva, Figma, or successor) must have the pinned TTF fonts installed or uploaded before any template is opened; a template opened on a machine without the fonts is already drifting. This is checked, not assumed (section 9, version pinning).

## 24. Web and product cross-reference †

- The website and the CRM are built from the tokens in Appendix B. This guideline is the source; the code tokens are the implementation. If they disagree, this document wins and the code is fixed.
- Marketing pages use the full system (glass chrome, ASCII field, display type). Product UI uses the same colors, type, spacing, and table rules at working density, with the field at the dim end of its alpha range and glass reserved for chrome.
- Favicon and app icons come from the logo suite (section 4): the one-colour mark on pitch black, delivered as its own tier files at 16, 32, 48, 180, 512 and 1024. Below the full mark's minimum size, the tier file is used; the blue dot no longer exists as a small-size form.
- Open Graph and social share images are social templates (section 22) at 1200 by 630: mark, display line, key rule. Every page ships one; a page without one renders a default that is off brand by definition.
- Performance rules live here and in section 9: WOFF2 budgets, blur budget of 3 surfaces, one canvas throttled to about 10fps and paused offscreen, motion on transform and opacity only. A page that blows the budget is off brand, because lean and fast is a principle (section 2), not an engineering preference.

## 25. Physical and print

- Business cards, if ever printed: pitch black rich black field (section 6), lockup in white (the mark is one colour, so no blue enters it, §5), details in mono, matte finish, no gloss spot tricks. Back of card: the mark alone, large.
- Signage and event material: the same lockups at print minimum sizes (mark 6mm minimum), spot color proofed against the section 6 reference before any run.
- Merch: garments are black or white; the mark prints white on black and black on white, one colour, never two (§5). No distressed treatments, no dithering (section 11), no alternate colorways without an amendment.
- Pre-press checklist: fonts embedded or outlined per the printer's spec, rich black where specified, images at 300dpi effective, one printed proof checked against section 6 before the run.

---

# Part F. Accessibility, legal, and assets

## 26. Accessibility

Accessibility is woven through sections 6 to 25; this section states the minimums in one place.

- **Contrast minimums:** reading text at least 4.5:1 against its background (white on black is 21:1; dim white is about 7.0:1 and is the floor for reading text). Large text at least 3:1 (faint white, about 3.1:1, is large and decorative only). Blue on black is 6.5:1, but blue text is banned for meaning reasons (section 6); its permitted uses are rules and states, which meet the 3:1 non-text bar with room (the mark is one colour, §5).
- **UI components and states:** focus ring is accent blue, 2px, offset 2px, always visible on keyboard focus. Active and live states are never carried by color alone: the current nav item also has position and weight, the live indicator also has its label.
- **Minimum type sizes:** web body 16px, smallest reading text 14px, labels 11px only for non-essential markers. Documents follow the section 7 floors (body 10.5pt, apparatus 8pt, screenshot text 7.5pt effective). Video and social floors are in sections 22 and 23.
- **Documents:** PDFs ship tagged, with real heading structure, reading order checked, and alt text on figures (section 13). A scanned image of text is never a deliverable.
- **Motion:** prefers-reduced-motion yields the static ASCII frame, no animated transitions, and no autoplay movement (section 27). Nothing flashes more than three times per second, anywhere.
- **Captions and transcripts:** all published video carries reviewed captions (section 23); audio content carries a transcript. Live content is captioned or summarised in text the same day.
- **Names for controls:** icon-only buttons and controls carry accessible names. A control a screen reader announces as "button" is a defect.

## 27. Motion

- Where motion is allowed: state changes in UI, the ASCII field's drift, video transitions, and deck builds that earn their keep. Motion explains a change or it is removed.
- Durations and easing: 0.18s ease for UI state changes; 0.24s for panels; nothing animates layout properties, only transform and opacity. Hover states are instant enough to feel attached to the pointer.
- Logo motion: the mark does not animate, morph, or redraw itself in brand surfaces. In video, the mark may fade or slide in as part of a title card, as a whole, once.
- Video transitions: hard cuts by default; a 6-frame crossfade where a cut would jar. No spins, zooms through walls, or template transition packs.
- Decks: builds reveal in reading order; nothing flies.
- Reduced motion equivalents: every animated treatment names its reduced-motion form, and the media query decides, never a settings toggle buried three levels deep. The ASCII field's form is one static frame (section 11).

## 28. Legal and IP

- **Trademark and name use:** the brand name is used as written in section 16. Do not register, file, or claim marks, domains, or handles in the brand's name without the owner's direction. Third parties naming the brand in coverage keep their own style; we do not police headlines, we do correct invoices, contracts, and partner pages.
- **Copyright and credit lines:** documents carry "© {year} dotBANG" in the footer apparatus. Client work is credited only as the contract permits; a client's name, logo, results, and screenshots are used publicly only with their written agreement.
- **Public content privacy standard (absolute):** public material never contains real personal information: no real IP addresses (LAN, fabric, or tailnet), no hostnames, no usernames, no names beyond those already public with agreement, no account IDs. Examples in public documents use IETF documentation ranges and placeholders: user gb10, hosts node1 and node2. This applies to screenshots (section 13), code samples, benchmarks, and this guideline's own examples.
- **Font licensing:** Inter and JetBrains Mono are SIL OFL 1.1; the summary and the pack rules are in section 9, the licence texts ship in `fonts/OFL-Inter.txt` and `fonts/OFL-JetBrainsMono.txt`. Icon library Lucide is ISC licensed; its licence ships with any vendored copy.
- **Third-party assets:** stock photography is banned (section 13). Any other third-party asset (a client's chart, a vendor diagram) is used under its own licence, credited in the apparatus, and never restyled into looking like ours.
- **AI content:** the AI image policy is in section 13. AI assisted writing follows the same voice law as any writing (section 16); the brand does not publish claims it has not verified, whoever drafted them.

## 29. Asset management

- **Single source of truth:** this folder, `dotbang-design-boards/`, holding this guideline, the board, the logo suite, and the font pack. The web repo and the template files carry copies; copies are downstream, always. If a copy and this folder disagree, this folder wins and the copy is refreshed.
- **Folder structure:** `fonts/` (WOFF2 subsets at the root of the folder, TTF builds in `fonts/ttf/`, licence texts beside them), `renders/` (board renders for review), templates registered below.
- **File naming:** lowercase, hyphenated, versioned: `brand-{asset}-{surface}-v{n}` for brand assets (for example the board file beside this guideline), `{client}-{document}-{yyyymmdd}` for issued client documents. No spaces, no "final", no "final2". A file named final is a file whose owner gave up.
- **Versioning:** the guideline version is the system version. Font versions are pinned in section 9 with checksums; a bump is a brand release with a changelog entry. Templates carry their guideline version in the file properties or a footer note.
- **The font pack (ships with this guideline):** `fonts/InterVariable.woff2` and `fonts/InterVariable-latin-ext.woff2` (web, upright), `fonts/Inter-400-italic.woff2` and `fonts/Inter-600-italic.woff2` plus their Latin Extended partners (web, italic), `fonts/JetBrainsMonoVariable.woff2` and `fonts/JetBrainsMonoVariable-latin-ext.woff2` (web, mono), `fonts/ttf/` (Inter statics 400, 500, 600, 700, 800 plus italics 400 and 600, Inter variable upright and italic, JetBrains Mono statics 400, 500, 700 and the variable build, for desktop install and Office embedding), `fonts/OFL-Inter.txt`, `fonts/OFL-JetBrainsMono.txt`, `fonts/AUTHORS-JetBrainsMono.txt`.
- **Template index † (locked templates specified in Part E):** proposal (section 17), report and stationery (18), presentation (19), spreadsheet (20), email signature and campaign (21), social set (22), video set (23), web and product tokens (24 and Appendix B). Each is built to its section spec, with theme fonts set and embedding on where the format supports it, and is stored beside this guideline. A template that has not been built yet is built to the spec on first need, then locked and registered here; until it exists, the section spec is the template.
- **When you cannot find something:** check this folder, then ask the owner. Never substitute a near-match asset, font, or template from the internet. The exception process is section 1.

---

## Appendix A: Do and don't

### Do

- Do put the one-colour mark on every surface: white on black, black on light surfaces, never two colours, never a blue dot.
- Do spend blue on meaning: brand, current place, live state, hover.
- Do set type in Inter and JetBrains Mono from the pinned files, and every size and space from the tokens.
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
- Don't add a second accent color.
- Don't split the mark into two colours, and don't bring back the blue dot. It is retired: no variant, no fallback, no small-size substitute (§5, L6).
- Don't dither anything. No dithered images, textures, or effects, anywhere, ever.
- Don't make the ASCII field interactive, loud, blue, or informational.
- Don't put reading text directly on the field or on photography. Panels exist for that.
- Don't blur more than 3 surfaces in a viewport, and don't reach for glass where a solid card works.
- Don't use thin type weights on black, or faint white for anything that must be read.
- Don't set spacing or type off the scales to "make it fit". Change the layout instead.
- Don't ship a surface with no blue at rest, and don't ship one where blue is decoration.
- Don't publish real IPs, hostnames, usernames, or client data in any surface (section 28).

## Appendix B: Token quick reference

```css
:root{
  /* color */
  --black:#000000;          /* the field */
  --white:#ffffff;          /* text, marks */
  --accent:#0297DE;         /* the signal, full saturation only */
  --dim:rgba(255,255,255,.58);
  --faint:rgba(255,255,255,.36);
  --hair:rgba(255,255,255,.12);
  --hair-soft:rgba(255,255,255,.07);
  --panel:rgba(255,255,255,.03);
  --card:#050505;
  /* document colors (print and PDF) */
  --doc-body:#E6E6EA;
  --doc-grey:#B4B4BC;
  /* glass */
  --glass:rgba(10,10,10,.52);
  /* backdrop-filter: blur(20px) saturate(160%) */
  /* type: Inter 4.1 + JetBrains Mono 2.304, self-hosted WOFF2, see guideline section 9 */
  --font-sans:"Inter","Inter Fallback",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --font-mono:"JetBrains Mono",ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
  /* spacing, 8pt */
  --s1:8px; --s2:16px; --s3:24px; --s4:32px; --s5:48px;
  --s6:64px; --s7:96px; --s8:128px; --s9:160px;
  /* radius */
  --r-sm:14px; --r:18px; --r-lg:24px; --r-pill:999px;
}
```

Web font loading (the whole spec, ready to paste; budgets and rules in section 9):

```css
@font-face{
  font-family:"Inter";
  src:url("fonts/InterVariable.woff2") format("woff2");
  font-weight:100 900; font-style:normal; font-display:swap;
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2199,U+2212,U+2215,U+2713,U+FEFF,U+FFFD;
}
@font-face{
  font-family:"JetBrains Mono";
  src:url("fonts/JetBrainsMonoVariable.woff2") format("woff2");
  font-weight:100 800; font-style:normal; font-display:swap;
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2199,U+2212,U+2215,U+2713,U+FEFF,U+FFFD;
}
/* Latin Extended partners and the Inter italic statics follow the same pattern;
   preload exactly one file: InterVariable.woff2, with crossorigin. */
```

## Appendix C: Research basis

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
