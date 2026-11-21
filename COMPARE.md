# dotBANG direction boards: comparison

Three homepage compositions, identical content, three different design languages. All three were built to the Nov 6 law then in force: pitch black base, white text, one blue signal used only as hover and tiny accents, liquid glass chrome, ambient non-interactive ASCII, no dithering, no em dashes, generous 8pt spacing. Dating note: the accent in those boards is the superseded 2.0 blue. Under guideline v3.0 (2026-11-15, D12) the governing accent is Electric Blue `#0297DE`, and this document is a historical comparison record, not a current colour reference. Guideline v4.0 (2026-11-20) now governs; this record is unchanged as history.

Files: `board-a-terminal.html`, `board-b-editorial.html`, `board-c-glass.html`. Renders in `renders/` (desktop 1440 and phone 390 for each).

## The three bets

**A. Terminal.** The machine is the brand. Monospace everything, system grid, status lines and coordinates as ornament, and the strongest ASCII treatment of the three: a slow topographic character field drifting behind the hero. It sells the cluster before it sells the studio.

**B. Editorial.** Typography is the artwork. The wordmark at magazine scale is the hero; everything else is hierarchy, hairlines, and black space. ASCII survives as one thin breathing rule at the seams. It sells confidence and taste.

**C. Glass Depth.** The product is the brand. Liquid glass panels float over a very quiet two-layer ASCII depth field, cards light their edges blue on hover, and the featured work is shown as the actual product panel with a live territory table. It sells the thing clients buy.

## Trade-offs

| Axis | A. Terminal | B. Editorial | C. Glass Depth |
|---|---|---|---|
| Performance | One hero canvas at ~10fps, static elsewhere. Cheap. | Cheapest of the three. No canvas at all; one CSS transform loop. | One fixed full-screen canvas at ~9fps plus backdrop blur on three panels. The heaviest, still modest. |
| Brand guide extension | Strong for dev-facing surfaces: docs, dashboards, terminal UI, video overlays. Weaker for print and client-facing polish. | Strongest for print, decks, and the PDF proposal system. The type scale and numeral system carry everywhere. Weakest in product UI. | Strongest for anything with panels and data. Print translation is the weakest of the three. |
| CRM extension | Medium. Mono data tables fit, but the full-terminal skin would fight readability for sales users all day. | Low. Magazine hierarchy does not survive dense CRM screens. | Direct. The featured panel on this board already is the CRM pattern: glass chrome, solid cards, hover blue edge light. |
| Audience read | Builders and technical peers. Instant credibility with the AI crowd. | Design-literate clients and sponsors. Reads expensive. | Operators and buyers. Reads like a company that ships software. |
| Risk | Can tip into costume if the ASCII gets louder. Kept dim here on purpose. | Can read empty if future content is thin. Needs the proof numbers to stay real. | Can read generic SaaS if the ASCII depth and mono details get stripped later. |

## Recommendation

**Build the site on C, dress it with B's type discipline, keep A's ASCII field as the signature.**

Reasoning, in order:

1. The CRM is the near-term revenue surface, and the owner has already called its spacing out twice. C is the only direction whose website language converts into the CRM without a translation layer: same glass chrome, same card borders, same hover law. Picking A or B means designing the product UI twice.
2. C is the only board that shows the product instead of describing it. The territory table in the hero path does more selling than any headline on the other two boards.
3. B has the best typography instincts of the three (the oversized numerals and the index system). Those should be ported into C as its display moments: section indexes, proof numerals, footer wordmark.
4. A has the best ASCII. Its topographic field is more distinctive than C's depth drift. If C wins, A's field code replaces C's background canvas, dimmed to C's levels.
5. B is the right skin for the brand guide document itself and for future proposal PDFs, whatever wins the site. Editorial is how dotBANG should look on paper.

If the owner's gut says the site should feel like the cluster (A) or like a magazine (B), the honest cost is a second design pass for the CRM later. That is a legitimate choice; it should just be made with the cost visible.

## What inspection caught and fixed

Every render was eyeballed before this doc was written. Found and fixed:

1. **B, phone: the hero wordmark was clipped.** "dotBAN" fit, the G ran off the right edge. The 88px clamp floor plus nowrap was wider than a 390px screen. Fixed the clamp floor and let viewport units drive the size; the full wordmark now fits with margin.
2. **B, phone: section notes concatenated.** When the note moved to its own row, "MEASURED ON" and "OUR OWN HARDWARE" ran together with no space (a hidden line break was doing the spacing). Fixed in markup, verified in the new render.
3. **C, both sizes: a table column lied.** The product panel had a "YoY" column whose cells said "brief ready." Renamed the column to "Brief" with "Ready" values, and tightened the phone table (smaller cells, hidden right-hand header note) so nothing wraps mid-word.
4. **A and B, phone: section header notes were squeezed** into a narrow right column and wrapped awkwardly. They now drop to a full-width row under the title.
5. **All three files: em dashes in the page titles** and comment headers. Removed; titles now read "dotBANG | Board A: Terminal" and so on.

One rendering note, not a defect: in full-page screenshots, C's fixed background canvas only paints the first viewport height, so the lower page reads pure black in the PNG. On a real screen the field is fixed and present at every scroll position.
