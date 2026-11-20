# dotBANG brand system

**Public repository** (Tyler's order, 2026-11-20). This is the single source of truth for how dotBANG looks and sounds on every surface: website, product UI, content, video, social, decks, and documents.

## What is here

| File | What it is |
|---|---|
| `BRAND-GUIDELINE.md` | The brand law. **Version 4.0, 2026-11-20, official**, superseding 3.1 in full: pitch black field, Electric Blue `#0297DE` accent, hot as the action colour, the footer horizon as the one gradient exception, liquid glass chrome, the final one-colour mark, the two field systems (dot render, character field), Space Grotesk + Space Mono, naming, voice, and locked templates for every surface. The decisions box (S1–S10 settled, O1–O4 open) is at the head of the file. If anything anywhere disagrees with this file, this file wins. |
| `SITE-BLUEPRINT.md` | The site plan: audience, page map, homepage section spec, stack, what is built, what is deliberately not built, and the decisions that are Tyler's. Guideline first, blueprint second. |
| `design/` | The machine-readable tokens that implement Appendix B: `dotbang.tokens.json` (the only hand-edited file), generated `dotbang.tokens.css` and `dotbang.tokens.ts` for the React 19 + Astryx build, and the generator. Read `design/README.md` before touching it. |
| `tools/` | `brand-conformance.mjs` (text lint over built artefacts) and `dom-checks.js` (checks that need the rendered page). |
| `BRAND-CONFORMANCE.md` | The checkpoint list for every surface, and the dated sweep record for the artefacts that exist. A page can pass the lints and still be off brand; the file says so explicitly. |
| `brand-board.html` | The same system rendered as a page, typeset in the actual brand fonts. Companion to the guideline, never a replacement. **v4.0 render**: the final one-colour mark, Space Grotesk + Space Mono, the two field systems, Electric Blue `#0297DE`, and no retired values. Earlier renders stay in git history. |
| `COMPARE.md` | The board comparison record behind the current design direction. |
| `fonts/` | The brand fonts, self-hosted: Space Grotesk and Space Mono (SIL Open Font License 1.1), woff2 for web, ttf for documents. Use these exact files; do not substitute system fonts. |
| `logo/` | The final mark: one-colour SVG masters, the six tier files, the placement sheet, and `MARK-SPEC.md`, the geometry spec. |
| `docs/` | The web build standard (`dotbang-web-build-standard.md`): React 19 + Astryx re-tokened, the performance constitution, the brand fallback ladder. |
| `AGENTS.md` | Instructions for AI agents working on dotBANG projects. Read it first. |

## Rules of the house

- This repo is **public** (Tyler's order, 2026-11-20). Do not copy pre-launch material into other public repos, public posts, or public examples, and never commit personal information: the privacy standard in `AGENTS.md` binds every commit.
- Amendments happen in `BRAND-GUIDELINE.md` first, then propagate to the tokens, the board, the templates, and the surfaces, in that order.
- Only the owner amends the guideline. Anyone who hits a surface the guideline does not cover stops and asks the owner; the answer gets written into the next version.
- A token value changes in `design/dotbang.tokens.json` only after the guideline carries it; the generated files are never edited by hand.
- Nothing is law until it is merged to `main`. Branches carry proposals, never competing versions.
