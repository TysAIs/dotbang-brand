# dotBANG site blueprint v3

**Version:** 3.0, 2026-11-15 · **Owner:** Tyler · **Status:** draft for render review, nothing published
**Supersedes:** site blueprint v2 and the v2.0 guideline's site sections, where they disagree.
**Companion:** `BRAND-GUIDELINE.md` (brand law) and the local skeleton build described in section 9.

This document is the site *plan*: the audience, the pages, the palette, the stack, what is built, what is
deliberately not built, and every open decision that is Tyler's to make. Where it disagrees with the
guideline, the guideline wins until Tyler amends it (AGENTS.md, "Conflicts and gaps").

---

## 1. What changed from the old blueprint

| Item | Old blueprint | v3 | Why |
|---|---|---|---|
| Domain | `dotbang.dev` | `dotbang.io` | Registered 2026-11-14, email routing live. `.dev` is not owned and never was. |
| Accent | `#6CACE4` | **Electric Blue `#0297DE` (pending Tyler's signature)** | Brief 2026-11-15. The guideline still carries `#6CACE4` as law, so v3 ships both as one token and this document keeps the question open rather than deciding it silently. Section 4 has the numbers. |
| Footer | plain black field | **horizon**: black → white → Electric Blue | Tyler's named exception to "never a gradient involving the blue". Recorded in the guideline v3 decision log as D13 so it is not re-litigated. |
| Chrome | glass, unspecified | liquid glass header and footer bars, white text, blue on hover | This was already guideline law (§11); v3 stops treating it as optional. |
| Stack | plain static HTML, no build step | **React 19 + Astryx**, Vite build, brand tokens | Brief 2026-11-15. Section 9 has the cost, including the part that is not free. |
| Audience order | business consulting first | individual local-AI builders first, businesses second | Spec v2, unchanged by this draft. The $199 call is a separate door lower on the page and is never the hero. |

---

## 2. Domain and mail, as it actually stands

| Fact | State | Evidence date |
|---|---|---|
| `dotbang.io` registration | Owned by Tyler, Cloudflare Registrar, $32 year one, renews at $50, expires 2027-11-14, WHOIS privacy on | 2026-11-14 |
| Nameservers | Delegated to Cloudflare; DNS answers publicly | 2026-11-14 |
| `ty@dotbang.io` | Email Routing rule active, forwards to Tyler's Gmail; catch-all active | 2026-11-14 |
| Sending | **Receive-only.** No mailbox sends as `@dotbang.io` yet | 2026-11-14 |
| DMARC | `v=DMARC1; p=none; rua=mailto:ty@dotbang.io`, monitoring only | 2026-11-14 |
| DNSSEC | DS live and validating (`AD:true` from two public resolvers) | 2026-11-14 |

The site therefore has a real domain to point at. It still has **no website record** on it: nothing is
served at `dotbang.io` today, and this blueprint does not put anything there.

---

## 3. Audience and page order

The site is for **individual builders running local AI on hardware they own**: people who already have
a GPU or a mini-PC and want the recipes, the benchmarks, the deals, and the hardware. Businesses are the
second door. They are not the audience the homepage is written for.

What that decides:

- The hero talks about local models on your own metal, not about consulting engagements.
- The free library is above the business offer, always.
- The deals feed is the paid hook. Members get it live with alerts; the public feed runs 48 hours late and
  the top tier never appears publicly at all.
- The $199 business call is a single quiet row near the end of the page. It is a door, not the pitch.

---

## 4. Palette and the one open brand decision

The three-colour system stands: pitch black field, white voice, one blue signal at tiny share. What is
not settled is *which* blue.

| Candidate | Hex | On black | White on it | Black on it | Status |
|---|---|---|---|---|---|
| Accent Blue (guideline v2.0) | `#6CACE4` | 8.66:1 | 2.43:1 (banned for text) | 8.66:1 | Current law in the repo |
| Electric Blue (brief 2026-11-15) | `#0297DE` | 6.48:1 | 3.24:1 (large text only) | 6.48:1 | Carried by this blueprint, not yet in law |

Both numbers computed with the WCAG 2.x relative-luminance formula, not quoted from memory
(`tools/contrast.py` in the build workspace).

Both values clear WCAG AA for normal text on black, so neither is a legibility problem. The difference is
temperature and weight: `#6CACE4` is a softer, lighter blue; `#0297DE` is deeper and reads closer to a
signal than a tint. The skeleton carries both behind one token so the decision can be made by looking:

- default render: `#0297DE`
- comparison render: the same page with `?accent=6cace4`

Nothing else on the page changes between them. **Tyler's call, one line in the guideline, one token in code.**

### The horizon footer (named exception)

Brand law bans gradients involving the blue. The footer is the single recorded exception:

```
black #000000  →  white #FFFFFF  →  Electric Blue (accent)
```

Rules that keep it from spreading:

- It exists at the foot of a marketing page, once per page, and nowhere else in the system.
- No text sits on the gradient. Legal line and wordmark sit on black above it; the gradient is the
  closing note, not a surface for content.
- It never appears in the CRM, in product UI, in documents, or in a card. If someone wants it somewhere
  else, that is a new amendment.

---

## 5. Typography, spacing, and the parts that are already fixed

Unchanged from guideline v2.0 and not up for discussion in this draft: Inter and JetBrains Mono
self-hosted from the pinned files; the type scale (Display Mega through Label); the 8pt spacing scale;
radii 14/18/24/999; the mono label system; sentence-case body against display-scale wordmarks.

The homepage uses exactly three sizes above body: the wordmark hero (Display Mega), the section titles
(H2), and card titles (H4). A fourth display size would be decoration.

---

## 6. Chrome and the field

**Liquid glass chrome.** Header is a floating pill, 16px off the viewport edges, fill `rgba(10,10,10,.52)`,
`blur(20px) saturate(160%)`, hairline border at white 12%. Footer link bar is the same material. Text on
glass is white at rest and blue on hover, which is the only blue in chrome at rest besides the logo dot.
Solid fallback for no-backdrop-filter and high-contrast requests.

**The ASCII field.** One fixed canvas, behind everything, pointer-events none, white glyphs only, ten-glyph
ramp, 15px cell, 11px mono glyphs, ~10fps, paused when the tab is hidden, one static frame under
`prefers-reduced-motion`. In this build the field carries a horizontal alpha mask so it falls away under
the content column: brand law says reading text never sits directly on the field at reading contrast, and
the hero type sits on clean black rather than inside a panel. Peak alpha stays inside the 0.05 to 0.22
range; the exact value remains the open item it was in v2.0 (decision D10).

---

## 7. Page map

| Route | Purpose | State in this draft |
|---|---|---|
| `/` | Homepage: audience statement, deals feed, free library, hardware, business door | **Built as skeleton.** Section spec in 8. |
| `/library` | The free resources, indexed and filterable | Not built |
| `/deals` | Public feed, 48h delayed, membership signup | Not built. Homepage shows a static panel only. |
| `/deals/top` | Members-only top tier and alerts | Not built, gated by membership |
| `/sticks` | USB model builds, contents, compatibility | Not built. No price is set, so the page cannot exist honestly. |
| `/business` | The $199 call, scope, booking | Not built. Referenced from the homepage door. |
| `/about`, `/legal` | Who dotBANG is, terms, privacy | Not built |

Every unbuilt route is named here so nobody invents it in a branch and calls it the plan.

---

## 8. Homepage section spec

Sections in order, with the job each section does. Copy in the build is draft copy for Tyler's edit; the
structure and the constraints are the deliverable.

1. **Chrome.** Mark + `dotBANG`, nav (Library, Deals, Sticks, Affiliates), one white primary action.
2. **Hero.** Mono kicker, the wordmark at Display Mega, blue key rule, one H2 statement, one lede, two
   actions (primary: read the free library; secondary: get the deals feed), and a three-item meta row
   stating what the practice is, what it runs on, and what it proves. No claim in it that is not true today.
3. **Deals feed.** Section index `02`, H2, note "public feed, 48h delay". One glass panel: four rows showing
   the three states the feed has (live, 48h late, withheld), and a footer that says plainly that the rows are
   skeleton rows and no price in them is actionable. This is the commercial centre of the page and it is
   honest about being unbuilt.
4. **Free library.** Section index `03`. Three cards, each pointing at a real public repository
   (`qwen38-flash-next-2x-dgx-spark`, `slm-gauntlet`, `xPST`). No invented links, no gate, no account.
5. **Hardware side.** Section index `04`. Two cells: sticks and affiliates, each with a status chip, no
   price, no store, no fabricated affiliate URL.
6. **Business door.** One row: "For businesses", one sentence, `$199`, request-a-call. Visually a fraction
   of the weight of the hero. Never above the library.
7. **Footer.** Glass link bar, oversized wordmark, legal line on black, then the horizon gradient as the
   last element on the page.

Rules the composition obeys: blue never a background fill at rest, blue never body text, one priority glass
panel per view, no gradient except the footer horizon, no dithering, no em dashes, the name always `dotBANG`.

---

## 9. Stack and build (local only)

| Piece | Version | Note |
|---|---|---|
| React | 19.3.1 | Brief requires React 19 |
| Astryx | `@astryxdesign/core` 0.7.16 (beta) | Meta's open design system, React 19 + StyleX |
| Theme | `@astryxdesign/theme-neutral` 0.7.16 | Installed only as the token shell; every colour, radius and font is overridden by brand tokens |
| Build | Vite 7.3.8 + TypeScript 5.9 | Static output in `dist/` |
| Fonts | Inter 4.1, JetBrains Mono 2.304 | The brand repo's pinned WOFF2 subsets, self-hosted, licences included |

Astryx ships the components; brand law sets the skin. Its buttons arrived with an accent-coloured fill at
rest, which brand law bans, so the button surface is re-skinned in one class and the library's hover
pseudo-layers are switched off: one hover language on the page, border and type, never a blue fill.

**Measured build output:** CSS 322.7 KB (52.5 KB gzipped), JS 408.5 KB (131.7 KB gzipped), plus a 2.0 KB
chunk. That is heavy for a marketing page against guideline §24's lean-and-fast rule, and it is the honest
cost of importing the whole Astryx stylesheet and component index. Production needs per-component imports
(or a lighter shell around Astryx islands) before this is shipped. Flagged, not hidden.

**Nothing was published.** No push to the site repository, no DNS record, no deploy, no analytics.

---

## 10. Not wired, on purpose

- No deals feed, no feed source, no alerting.
- No membership, no account, no payment, no Stripe.
- No forms, no booking, no contact address on the page.
- No analytics, no canonical URL, no sitemap, no Open Graph image.
- No affiliate URLs. No stick price. No merchandise.

Anything in that list that appears on the page appears as a labelled placeholder.

---

## 11. Verification record, 2026-11-15

| Check | Result |
|---|---|
| Production build (`npm run build`) | PASS: built in 685 ms, output listed in section 9 |
| TypeScript (`tsc --noEmit`) | PASS: 0 errors |
| Horizontal overflow at 1440 / 1280 / 1024 / 820 / 390 | PASS: `scrollWidth == innerWidth` at all five widths |
| Brand casing rendered (`DOTBANG`, `DotBang`, `dotbang`, `dot bang`) | PASS: 0 hits in rendered `innerText`. A CSS `text-transform` had turned the legal line into `DOTBANG`; caught by this check and fixed |
| Runtime errors (window error + unhandledrejection traps) | PASS: 0 |
| Fonts | PASS: Inter and JetBrains Mono load from the local subsets; latin-ext not fetched |
| Assets | PASS after a fix: `/favicon.svg` was referenced by the document and missing from the build (404, caught in the server log). The mark was added as a real file; document, favicon and both font files now return 200 |
| Renders | 13 PNGs at 1440×900 and 390×844 covering hero, deals, library, hardware, business, footer, plus the `#6CACE4` comparison hero |
| Deployed anywhere | NO: nothing published, nothing pointed at `dotbang.io` |

---

## 12. Decisions this document puts to Tyler

1. **Accent hex:** `#0297DE` (Electric Blue, brief) or keep `#6CACE4` (current law). Two renders are attached.
2. **Horizon footer:** confirm the black → white → blue gradient as a standing brand exception (D13).
3. **Hero copy:** the wordmark-led hero is the recommendation; alternative is a statement headline with the
   wordmark smaller in the header.
4. **Deals feed:** which sources the feed actually watches, and whether the 48h public delay and withheld
   top tier are the final model.
5. **Membership price:** nothing is printed because no price is ruled. The page says "Join" and means it.
6. **Sticks:** contents, price, and whether they ship at all in 2026.
7. **Affiliate list:** the socials lane compiles it; the site will not invent links.
8. **Business door:** confirm `$199` and where the booking path goes (calendar, DM, or mailto).
9. **Perf:** approve the per-component-import pass before any public deploy.

---

## 13. Files

- This blueprint: `SITE-BLUEPRINT.md`, in the private brand repo.
- Guideline v3: `BRAND-GUIDELINE.md` on branch `brand/v3-2026-11-15`, unmerged until Tyler signs.
- Skeleton build: `site/` in the task workspace (`src/brand/tokens.css`, `src/brand/page.css`,
  `src/components/AsciiField.tsx`, `src/App.tsx`).
- Renders: `renders/*.png` in the same workspace.

End of blueprint. Amendments happen here first for the plan, and in the guideline first for the law.
