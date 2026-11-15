# dotBANG brand system

**Private repository.** This is the single source of truth for how dotBANG looks and sounds on every surface: website, product UI, content, video, social, decks, and documents.

## What is here

| File | What it is |
|---|---|
| `BRAND-GUIDELINE.md` | The brand law. On `main` this is v2.0 (November 2026): palette, typography, the mark, glass system, ASCII field, naming, voice, and locked templates for every surface. Branch `brand/v3-2026-11-15` carries the proposed v3.0 (domain `dotbang.io`, accent `#0297DE`, footer horizon exception) awaiting Tyler's merge. If anything anywhere disagrees with this file, this file wins. |
| `SITE-BLUEPRINT.md` | The site plan: audience, page map, homepage section spec, stack, what is built, what is deliberately not built, and the decisions that are Tyler's. Guideline first, blueprint second. |
| `brand-board-v2.html` | The same system rendered as a page, typeset in the actual brand fonts. Companion to the guideline, never a replacement for it. Still the v2.0 render: it carries `#6CACE4` and is regenerated only after the v3 merge. |
| `COMPARE.md` | The board comparison record behind the current design direction. |
| `fonts/` | The brand fonts, self-hosted: Inter and JetBrains Mono (SIL Open Font License 1.1), woff2 for web, ttf for documents. Use these exact files; do not substitute system fonts. |
| `AGENTS.md` | Instructions for AI agents working on dotBANG projects. Read it first. |

## Rules of the house

- This repo is **private**. Do not copy its contents into public repos, public posts, or public examples.
- Amendments happen in `BRAND-GUIDELINE.md` first, then propagate to the board, the templates, and the surfaces, in that order.
- Only the owner amends the guideline. Anyone who hits a surface the guideline does not cover stops and asks the owner; the answer gets written into the next version.
- A proposed amendment travels on its own branch with the status line at the top of the file saying so. Nothing is law until it is merged.
