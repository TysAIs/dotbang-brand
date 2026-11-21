# dotBANG Web Build Standard

Standing standard for every website and web app we build. Set Nov 20, 2026 on the owner's direction.
Companion: brand guideline v4 draft (~/workspace/dotbang-brand-guideline-v4-draft-2026-11-20.md) — this document governs HOW we build; the guide governs how it looks.

---

## 1. Stack verdict

- **Framework: React 19+ — but only where interactivity earns it.** The marketing site is static-first (see §2); React components render to static HTML at build time. No page ships a framework runtime to display text.
- **Language: TypeScript, strict mode, everywhere.** Reasons: ASTRYX components are typed TS — JS would throw away the API contract; our agents write the code, and types are the cheapest verification an agent can run; TS compiles away at build, so it costs the user zero bytes. JavaScript is not used for new work.
- **Build tooling: Vite (current major, 8.x line) + Rolldown.** CRA is dead. Vite gives instant dev, tree-shaken output, and first-class code splitting. React Compiler is ON (auto-memoization; no hand-written useMemo/useCallback).
- **Styling: StyleX via ASTRYX (compile-time atomic CSS, zero runtime style engine).** No CSS-in-JS runtime, no utility-framework runtime. CSS ships only for components actually imported (build-from-source path, ~1/3 of the full stylesheet in Meta's reference app).
- **Design system: ASTRYX, adopted + re-tokened** (§5). Not used as-shipped visually; not principles-only either — we take the 150+ accessible components, the theming engine, and the CLI/MCP tooling, and replace the entire visual identity with dotBANG tokens.
- **RUNE (Anomaly): native experiments only, never the web stack** (§6).
- **Server components / SSR frameworks (Next.js etc.): not the default.** dotbang.io is a static site on Cloudflare. RSC/SSR is adopted only if a future app has real per-user server data, and that decision gets its own note.

## 2. Site architecture rules

- Static generation is the default for every page. A page is an SPA only if the product is genuinely an app (login, live data, continuous interaction).
- Hydration is island-only: static HTML hydrates nothing except named interactive islands. The WebGL2 hero is one island; a form is another. Everything else is inert HTML + CSS.
- The hero island loads lazily and never blocks first paint: static frame renders first (it IS the LCP candidate), the live field upgrades it when ready.
- Route-level code splitting is mandatory in any multi-page app build; no route pays for another route's code.
- No client-side router on the marketing site. Real pages, real URLs, real anchor navigation.

## 3. Performance constitution (binding numbers)

Budgets are per page, initial load, measured compressed (gzip/brotli) unless stated. A build that exceeds a budget FAILS — it does not ship with a note.

### 3.1 Payload budgets
- Total initial JS: **≤ 100 KB** on marketing pages (target ≤ 50 KB; the only JS on most pages is the hero island + analytics-free instrumentation of zero).
- Total initial JS: **≤ 170 KB** on app pages; any single route chunk ≤ 100 KB.
- CSS: **≤ 30 KB** per page (StyleX atomic output should land far under this).
- Total page weight, initial load: **≤ 600 KB** marketing, **≤ 1 MB** app.
- Third-party scripts: **zero by default.** Each exception needs a named reason in the repo README and counts double against the JS budget. No tag managers. No chat widgets.
- Fonts: **≤ 100 KB total** for both families (subsetted WOFF2, §3.3).

### 3.2 Core Web Vitals targets (75th percentile, mobile profile)
- LCP **≤ 1.8 s** (Google's "good" line is 2.5 s; ours is tighter).
- INP **≤ 200 ms** (target ≤ 100 ms on primary interactions).
- CLS **≤ 0.05** (Google's line is 0.1; ours is tighter).
- TTFB **≤ 200 ms** from Cloudflare edge cache; ≤ 800 ms worst-case origin.
- Total Blocking Time in lab runs: **≤ 50 ms** on the critical path.
- Long tasks (>50 ms) after load: zero on the main thread during interaction; field rendering runs on its own rAF budget (§3.4).

### 3.3 Fonts
- Self-hosted only. No Google Fonts requests, ever (privacy + a render-blocking third-party round trip).
- WOFF2, subsetted to the character sets actually used (Latin + brand glyphs), `font-display: swap` with a metric-matched fallback stack so swap causes zero layout shift.
- Preload the one display weight used above the fold; all other weights load async.
- Space Grotesk (display/wordmark) + Space Mono (data/labels) are the only families. Weights: Grotesk 500/700, Mono 400/700 — nothing else ships.

### 3.4 Animation and the field (from the brand guide)
- Every animated texture follows the fallback ladder, in order: **WebGL2 live field → designed static frame → black + text.** No rung may look broken.
- Background fields run at **24–30 fps cap**, pause when off-screen or tab hidden, and freeze under `prefers-reduced-motion` (the static frame serves instead).
- Field rendering never shares the main thread with interaction handlers; if the frame budget is missed twice, the field degrades itself to the static frame.
- No grey paint anywhere: tone comes from glyph/dot coverage only. Pure white is reserved for peaks.
- UI motion uses the ASTRYX motion tokens re-derived to brand (fast, functional, no bounce/spring theatrics).

### 3.5 Images and media
- AVIF first, WebP fallback, never an uncompressed original. Responsive `srcset` with honest sizes; hero media ≤ 150 KB at the largest breakpoint.
- Every image carries explicit width/height (CLS rule). Below-fold media is lazy; above-fold LCP media is preloaded and never lazy.
- Video is a last resort and never autoplays with sound; the field replaces decorative video.

### 3.6 Delivery
- Cloudflare CDN, immutable hashed assets cached 1 year, HTML cached at edge with short TTL.
- Brotli on everything text. HTTP/2 or better. `preconnect` only to origins actually used in the first load (normally: none).
- No redirects in the critical path. One canonical URL per page.

## 4. Quality bar (a build is not "done" until all are evidenced)

- **Accessibility:** WCAG 2.2 AA. Semantic landmarks, one h1 per page, visible focus states, full keyboard path, contrast ≥ 4.5:1 for text (white on #000 passes trivially; blue #0297DE is never body text on black without a size/weight check). ASTRYX components keep their built-in ARIA — do not strip it when re-skinning.
- **Responsive:** designed at 360 px first, then 768, then 1440. No horizontal scroll at 360. Touch targets ≥ 44×44 px. The field and hero lockups reflow per the guide's lockup-separation rule (mark and wordmark are independent elements, placed per layout, never a fused image).
- **Throttled evidence, required before "done":** Lighthouse mobile run on a Moto G-class profile (4–6× CPU throttle, throttled 4G) with all §3.2 numbers green, saved to the repo; plus a real low-end Android pass when hardware is available. Desktop-only scores prove nothing.
- **Budget enforcement:** bundle size checked in the build (size-limit or equivalent); a budget regression fails the build.
- **Browser floor:** last two versions of Chrome/Safari/Firefox + Samsung Internet. WebGL2 absence is handled by the fallback ladder, not by an error.
- **Review:** every build gets an independent verification pass (not by the agent that built it): budgets re-measured, fallback ladder walked rung by rung, keyboard-only walkthrough, 360 px walkthrough.

## 5. ASTRYX, codified to the dotBANG standard

ASTRYX facts (verified Nov 20, 2026): Meta's open-source design system, MIT license, public beta (v0.7.x; v0.7.16 published Nov 14, 2026; #1 GitHub trending week of Nov 16). React 19+ and StyleX only — it is NOT framework-agnostic. 150+ accessible typed components, 10 shipped themes, templates, a CLI, and an MCP server so our agents query component APIs instead of guessing. Eight years of internal Meta use (13,000+ products) under the beta API. Two consumption paths: pre-built CSS, or build-from-source so only imported components' styles ship — **we always take build-from-source.**

How it gets re-skinned — one `defineTheme` call is the whole brand surface:
- `color.accent`: **#0297DE** (seeded as the accent; the engine derives the palette from it). Accent stays UI-only per the guide: never in the logo, ≤ the guide's ceiling, never decoration.
- Background/surface tokens overridden to **pitch black #000000** ground with white as the working ink; neutralStyle set cold. dotBANG is a dark-only brand — we ship one mode and disable the light scheme rather than maintain a second identity.
- `typography`: heading/body family **Space Grotesk**, code family **Space Mono**, self-hosted via the theme's font `url` support + our own subsetting pipeline (§3.3). Type scale re-derived to the guide's frozen scale, not ASTRYX defaults.
- `radius`: base **0** (multiplier irrelevant at 0). The brand is square and pixelated; rounded corners are a conformance fail.
- `motion`: fast/short tokens only, matching §3.4.
- Component overrides (`components:` in defineTheme) are the second rung; `swizzle` (ejecting source) is the last resort and forks us off upstream fixes — swizzled components are listed in the repo README with the reason.
- **Pixelated/texture components are ours, built on top:** the character field, dot terrain, data cards, and spec-string blocks are dotBANG components written against ASTRYX layout primitives (Stack/Card) and tokens — they follow the brand guide §1 methods (measured ramp ending in a 100%-coverage glyph, glyph-class ladder, static frame per texture). ASTRYX ships nothing like them and isn't asked to.
- **Beta discipline:** pin ALL `@astryxdesign/*` packages to one exact version; upgrades are deliberate, one at a time, with the §4 verification pass re-run. The API will churn before 1.0 — budget for it.

## 6. RUNE verdict

RUNE is anomalyco/rune (verified Nov 20, 2026): a native GPU-rendered UI framework written in Rust by Anomaly (the OpenCode team) — its own renderer (wgpu), text, layout (Taffy), and springs; targets macOS/Windows/Linux desktop plus a web (WASM) host. MIT license. Its signature feature is headless mode: any app renders to PNG, dumps its element tree, and takes scripted input, so a coding agent verifies its own UI work.

Status: **pre-release, ~2 weeks old** ( surfaced early Nov 2026, ~3,000 stars in its first days, no crates.io release — git dependency pinned to a dev-branch revision, no PRs accepted, web host immature e.g. no cursor support).

Verdict:
- the owner's note ("RUNE for native only") is **directionally right**: Rune's home is native desktop apps, and its web host is a side-target, not a reason to adopt it.
- **Not adopted for anything production.** A two-week-old pre-release with no versioned release cannot carry the dotBANG site or a client deliverable.
- **Watchlist, with a real reason to watch:** the headless agent-verification model is exactly our render-and-review loop, and dotBANG's stack preference is Rust. If a future native tool (e.g. a cluster console) is wanted, Rune is the first candidate to trial — behind a spike, pinned to a revision, never blocking a ship date.
- Re-check at Rune's first versioned release or in ~3 months, whichever is sooner.

## 7. What actually decides performance on a cheap phone (the reasoning, kept short)

- The bottleneck is the CPU, not the network: every ~100 KB of raw JS costs tens of ms of parse/compile on a Cortex-A55-class core and degrades INP directly. Hence §3.1's budgets are the constitution's core.
- Hydration is the tax: server/static HTML is free to read; every hydrated component re-runs its render on the weakest CPU we support. Hence islands only.
- Fonts and the hero are the LCP risks: subset + preload + static-frame-first removes both.
- Framework choice matters less than discipline: React with static generation + islands + compiler meets every number above; React as a full SPA does not. The rules bind the architecture, not the logo on the framework.

---

## Research notes (Nov 20, 2026)

Fresh sources used: Meta's ASTRYX blog "How Astryx works" (astryx.atmeta.com), ASTRYX theme-system docs (defineTheme reference), Better Stack + OpenReplay ASTRYX analyses (Nov 2026), dev.to ASTRYX release notes (v0.7.16, Nov 14, 2026), VoidZero Aug 2026 recap (Vite 8 / React Compiler via Oxc), anomalyco/rune README coverage and independent write-ups (Nov 6–11, 2026), 2026 performance-budget literature (CWV thresholds: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 — Google's lines, unchanged; our §3.2 targets are deliberately tighter).

Flagged: some secondary ASTRYX coverage is 1–5 months old (the system launched June 18, 2026) — version and API facts above were taken from the newest sources (Nov 2026). One ASTRYX marketing claim ("AI-fluent / agent-ready") is positioning with no published evaluation results; the MCP server and CLI are real and verifiable, the productivity claim is not — we adopt for the components and theming, not the slogan.
