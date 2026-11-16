#!/usr/bin/env node
/**
 * dotBANG design token build.
 *
 * Reads dotbang.tokens.json (the only hand-edited file in this folder) and emits:
 *   - dotbang.tokens.css  : CSS custom properties, Appendix B names plus the extensions the build needs
 *   - dotbang.tokens.ts   : typed ES module for the React 19 + Astryx build to import
 *
 * Brand law: BRAND-GUIDELINE.md (version 3.0). If the guideline and the JSON disagree, the guideline wins
 * and the JSON is corrected. If the JSON and a generated file disagree, the generated file is stale: rerun.
 *
 * Usage: node build-tokens.mjs [--check]
 *   --check  exit 1 if the generated files on disk do not match what this script would write.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, 'dotbang.tokens.json');
const OUT_CSS = join(HERE, 'dotbang.tokens.css');
const OUT_TS = join(HERE, 'dotbang.tokens.ts');
const CHECK = process.argv.includes('--check');

const raw = JSON.parse(readFileSync(SRC, 'utf8'));

/** Resolve "{color.accent}" style references against the token tree. */
function resolve(value, root, seen = new Set()) {
  if (typeof value === 'string') {
    const m = value.match(/^\{([a-zA-Z0-9_.]+)\}$/);
    if (!m) return value;
    const path = m[1];
    if (seen.has(path)) throw new Error(`Circular token reference: ${[...seen, path].join(' -> ')}`);
    let node = root;
    for (const key of path.split('.')) {
      node = node?.[key];
      if (node === undefined) throw new Error(`Unresolved token reference: {${path}}`);
    }
    return resolve(node, root, new Set([...seen, path]));
  }
  if (Array.isArray(value)) return value.map((v) => resolve(v, root, new Set(seen)));
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = resolve(v, root, new Set(seen));
    return out;
  }
  return value;
}

const t = resolve(raw, raw);

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const lines = [];
const push = (s = '') => lines.push(s);

push('/* dotBANG design tokens — GENERATED FILE, do not edit.');
push(' * Source: design/dotbang.tokens.json. Brand law: BRAND-GUIDELINE.md v3.0.');
push(` * Regenerate: node design/build-tokens.mjs`);
push(' * Appendix B custom property names are preserved exactly (--black, --accent, --s1 ... --r-pill).');
push(' */');
push();
push('/* Fonts: guideline section 9. The host must serve the pinned brand font files at these paths.');
push(' * Inter 4.1 and JetBrains Mono 2.304, SIL OFL 1.1. Preload InterVariable.woff2 only, with crossorigin. */');
const sansFace = (family, file, weight, urange, style = 'normal') =>
  [
    '@font-face {',
    `  font-family: "${family}";`,
    `  src: url("/fonts/${file}") format("woff2");`,
    `  font-weight: ${weight};`,
    `  font-style: ${style};`,
    '  font-display: swap;',
    `  unicode-range: ${urange};`,
    '}',
  ].join('\n');
const LATIN =
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2190-2199, U+2212, U+2215, U+2713, U+FEFF, U+FFFD';
const LATIN_EXT =
  'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
push(sansFace('Inter', 'InterVariable.woff2', '100 900', LATIN));
push(sansFace('Inter', 'InterVariable-latin-ext.woff2', '100 900', LATIN_EXT));
push(sansFace('JetBrains Mono', 'JetBrainsMonoVariable.woff2', '100 800', LATIN));
push(sansFace('JetBrains Mono', 'JetBrainsMonoVariable-latin-ext.woff2', '100 800', LATIN_EXT));
push();

const decl = (name, value, comment) =>
  push(`  ${name}: ${value};${comment ? ` /* ${comment} */` : ''}`);

push(':root {');

push('  /* colour, guideline section 6 */');
decl('--black', t.color.black, 'the field');
decl('--white', t.color.white, 'the voice');
decl('--accent', t.color.accent, 'Electric Blue, the signal (D12)');
decl('--dim', t.color.dim);
decl('--faint', t.color.faint);
decl('--hair', t.color.hair);
decl('--hair-soft', t.color.hairSoft);
decl('--panel', t.color.panel);
decl('--card', t.color.card);
decl('--glass', t.color.glass);
decl('--glass-fallback', t.color.glassFallback);
decl('--accent-row-wash', t.color.accentRowWash, 'product UI table row hover only');
decl('--accent-glow', t.color.accentGlow, 'live indicator glow only');
decl('--shadow', t.color.shadow);
decl('--doc-body', t.color.docBody, 'documents only');
decl('--doc-grey', t.color.docGrey, 'documents only');

push();
push('  /* type families, guideline section 9 */');
decl('--font-sans', t.font.sans);
decl('--font-mono', t.font.mono);
push();
push('  /* weights, guideline section 7 */');
for (const [k, v] of Object.entries(t.weight)) decl(`--weight-${kebab(k)}`, v);

push();
push('  /* type scale, guideline section 7. A size that is not on this scale does not ship. */');
for (const [name, v] of Object.entries(t.type)) {
  const n = kebab(name);
  decl(`--type-${n}`, v.size);
  decl(`--type-${n}-weight`, v.weight);
  decl(`--type-${n}-tracking`, v.tracking);
  decl(`--type-${n}-line-height`, v.lineHeight);
}

push();
push('  /* spacing, guideline section 10. 8pt scale; the three small-component steps are the only exceptions. */');
for (const [k, v] of Object.entries(t.space)) decl(`--${k}`, v);

push();
push('  /* layout, guideline section 10 */');
decl('--layout-max-width', t.layout.contentMaxWidth);
decl('--layout-gutter', t.layout.gutter);
decl('--layout-page-margin-desktop', t.layout.pageMarginDesktop);
decl('--layout-page-margin-phone', t.layout.pageMarginPhone);
decl('--layout-section-desktop', t.layout.sectionDesktop);
decl('--layout-section-phone', t.layout.sectionPhone);
decl('--header-inset', t.layout.headerInset);
decl('--header-height', t.layout.headerBarHeight);

push();
push('  /* radius, guideline section 10 */');
decl('--r-sm', t.radius.sm);
decl('--r', t.radius.base);
decl('--r-lg', t.radius.lg);
decl('--r-pill', t.radius.pill);

push();
push('  /* liquid glass, guideline section 11 */');
decl('--glass-blur', t.glass.chrome.blur);
decl('--glass-saturate', t.glass.chrome.saturate);
decl('--glass-border', t.glass.chrome.border);
decl('--glass-shadow', t.glass.chrome.shadow);
decl('--glass-panel-blur', t.glass.panel.blur);
decl('--glass-panel-radius', t.glass.panel.radius);

push();
push('  /* the footer horizon, guideline section 6, decision D13. Shaped, not a straight ramp. */');
decl('--horizon-height', t.gradient.horizon.height);
decl(
  '--gradient-horizon',
  `linear-gradient(${t.gradient.horizon.direction}, ${t.gradient.horizon.stops
    .map((s) => `${s.color} ${s.position}`)
    .join(', ')})`,
);

push();
push('  /* motion, guideline section 27 */');
decl('--motion-ui', t.motion.ui);
decl('--motion-panel', t.motion.panel);

push();
push('  /* ASCII field, guideline section 11 */');
decl('--field-cell', t.field.cell);
decl('--field-glyph-size', t.field.glyphSize);
decl('--field-alpha-min', t.field.alphaMin);
decl('--field-alpha-max', t.field.alphaMax);
decl('--field-fps', t.field.fps);

push();
push('  /* focus, guideline sections 6 and 26 */');
decl('--focus-ring-width', t.focus.width);
decl('--focus-ring-offset', t.focus.offset);
decl('--focus-ring-color', t.focus.color);

push('}');
push();
push('/* Astryx theme surface. Brand law outranks a component library defaults, so these are mapped');
push(' * onto the brand tokens rather than the other way round. Neutral theme shell only. */');
push('[data-astryx-theme="neutral"] {');
const astryx = {
  '--color-background-body': 'var(--black)',
  '--color-background-surface': 'var(--card)',
  '--color-background-card': 'var(--card)',
  '--color-background-popover': '#0b0b0b',
  '--color-background-muted': 'rgba(255,255,255,0.06)',
  '--color-text-primary': 'var(--white)',
  '--color-text-secondary': 'var(--dim)',
  '--color-text-tertiary': 'var(--faint)',
  '--color-text-on-accent': 'var(--black)',
  '--color-accent': 'var(--accent)',
  '--color-accent-muted': 'rgba(255,255,255,0.06)',
  '--color-on-accent': 'var(--black)',
  '--color-border': 'var(--hair)',
  '--color-border-emphasized': 'rgba(255,255,255,0.24)',
  '--color-icon-primary': 'var(--white)',
  '--color-icon-secondary': 'var(--dim)',
  '--color-icon-accent': 'var(--accent)',
  '--font-family-body': 'var(--font-sans)',
  '--font-family-heading': 'var(--font-sans)',
  '--font-family-code': 'var(--font-mono)',
  '--radius-inner': 'var(--r-sm)',
  '--radius-element': 'var(--r)',
  '--radius-container': 'var(--r-lg)',
  '--radius-page': 'var(--r-lg)',
};
for (const [k, v] of Object.entries(astryx)) decl(k, v);
push('}');
push();

const css = lines.join('\n');

const ts = `/**
 * dotBANG design tokens — GENERATED FILE, do not edit.
 * Source: design/dotbang.tokens.json. Brand law: BRAND-GUIDELINE.md v3.0.
 * Regenerate: node design/build-tokens.mjs
 *
 * Import the values the build needs:
 *   import { tokens, cssVars, conformance } from '@brand/dotbang.tokens';
 *   tokens.color.accent        // "#0297DE"
 *   cssVars['--accent']        // "var(--accent)" mirror of the CSS custom properties
 */
export const tokens = ${JSON.stringify(t, null, 2)} as const;

export type Tokens = typeof tokens;

/** Flat CSS custom property names, for code that has to set or assert a property by name. */
export const cssVars = {
  color: {
    black: '--black',
    white: '--white',
    accent: '--accent',
    dim: '--dim',
    faint: '--faint',
    hair: '--hair',
    hairSoft: '--hair-soft',
    panel: '--panel',
    card: '--card',
    glass: '--glass',
    glassFallback: '--glass-fallback',
    accentRowWash: '--accent-row-wash',
    accentGlow: '--accent-glow',
    shadow: '--shadow',
  },
  type: Object.fromEntries(
    ${JSON.stringify(Object.keys(t.type))}.map((k) => [
      k,
      '--type-' + k.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    ]),
  ),
  space: ${JSON.stringify(Object.keys(t.space))}.map((k) => '--' + k),
  radius: { sm: '--r-sm', base: '--r', lg: '--r-lg', pill: '--r-pill' },
  glass: {
    fill: '--glass',
    blur: '--glass-blur',
    saturate: '--glass-saturate',
    border: '--glass-border',
    shadow: '--glass-shadow',
  },
  gradient: { horizon: '--gradient-horizon', horizonHeight: '--horizon-height' },
  motion: { ui: '--motion-ui', panel: '--motion-panel' },
  focus: { width: '--focus-ring-width', offset: '--focus-ring-offset', color: '--focus-ring-color' },
} as const;

/** Machine-readable brand law, for the conformance check. */
export const conformance = ${JSON.stringify(t.conformance, null, 2)} as const;

export const guidelineVersion = ${JSON.stringify(t.$meta.guidelineVersion)} as const;
export const tokensVersion = ${JSON.stringify(t.$meta.guidelineVersion)} as const;
`;

let failed = false;
function write(path, content, label) {
  const existing = existsSync(path) ? readFileSync(path, 'utf8') : null;
  if (CHECK) {
    if (existing !== content) {
      console.error(`STALE: ${label} does not match dotbang.tokens.json`);
      failed = true;
    } else {
      console.log(`ok: ${label} is current`);
    }
    return;
  }
  writeFileSync(path, content);
  console.log(`wrote ${label} (${content.length} bytes)`);
}

write(OUT_CSS, css, 'dotbang.tokens.css');
write(OUT_TS, ts, 'dotbang.tokens.ts');

if (CHECK && failed) process.exit(1);
