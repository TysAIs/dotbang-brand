#!/usr/bin/env node
/**
 * dotBANG brand conformance check.
 *
 * Scans built or source artefacts for the things that are cheap to get wrong and expensive to ship:
 * a retired accent hex, the name written in a banned casing, a blue gradient that is not the footer
 * horizon, and token values that drifted from the guideline.
 *
 * Usage:
 *   node tools/brand-conformance.mjs <file-or-dir> [more...]
 *   node tools/brand-conformance.mjs ../site/dist
 *
 * Exit 1 if any hard check fails. Warnings do not fail the run.
 *
 * This is a lint, not a review. It cannot tell you whether the page is beautiful, whether the type
 * hierarchy lands, or whether the horizon reads as a horizon. Pair it with tools/dom-checks.js run
 * inside the rendered page, which catches what only exists after CSS applies (text-transform, real
 * computed backdrop-filter, gradients as resolved).
 */
import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const SCAN_EXT = new Set(['.css', '.js', '.mjs', '.html', '.ts', '.tsx', '.jsx', '.svg', '.json']);

const ACCENT = '#0297DE';
const BANNED_HEX = ['#6CACE4'];
const BANNED_NAMES = ['DOTBANG', 'DotBang', 'Dotbang', 'dot bang', 'dot Bang'];
const TOKEN_FILE_REQUIREMENTS = [
  ['--black', '#000000'],
  ['--white', '#FFFFFF'],
  ['--accent', '#0297DE'],
];

const stripComments = (text, ext) => {
  if (ext === '.css' || ext === '.js' || ext === '.mjs' || ext === '.ts' || ext === '.tsx' || ext === '.jsx') {
    return text.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/(^|[^:])\/\/[^\n]*/g, '$1 ');
  }
  if (ext === '.html' || ext === '.svg') return text.replace(/<!--[\s\S]*?-->/g, ' ');
  return text;
};

function walk(p, out = []) {
  const s = statSync(p);
  if (s.isDirectory()) {
    for (const entry of readdirSync(p)) {
      if (entry === 'node_modules' || entry === '.git') continue;
      walk(join(p, entry), out);
    }
  } else if (SCAN_EXT.has(extname(p))) {
    out.push(p);
  }
  return out;
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('usage: node tools/brand-conformance.mjs <file-or-dir> [...]');
  process.exit(2);
}

const files = targets
  .flatMap((t) => walk(t))
  .filter((f) => {
    const b = basename(f);
    // The token source carries the banned-hex list on purpose (machine-readable brand law).
    return b !== 'dotbang.tokens.json' && b !== 'dotbang.tokens.ts' && b !== 'brand-conformance.mjs';
  });

const failures = [];
const warnings = [];
let scanned = 0;

for (const file of files) {
  const ext = extname(file);
  const raw = readFileSync(file, 'utf8');
  const text = stripComments(raw, ext);
  scanned++;
  const Where = basename(file);

  for (const hex of BANNED_HEX) {
    if (new RegExp(hex, 'i').test(text)) {
      failures.push(`${Where}: retired accent hex ${hex} is present (superseded by ${ACCENT}, guideline D12)`);
    }
  }

  for (const name of BANNED_NAMES) {
    const re = new RegExp(`(?<![A-Za-z0-9_-])${name.replace(/ /g, '\\s')}(?![A-Za-z0-9_-])`, 'g');
    const hits = text.match(re);
    if (hits) failures.push(`${Where}: banned name form "${name}" appears ${hits.length} time(s) (guideline §16)`);
  }

  // Any gradient that involves the accent, other than the horizon token, is a brand violation (D13).
  const gradRe = /(?:linear|radial|conic)-gradient\([^;]{0,400}?\)/gi;
  let m;
  while ((m = gradRe.exec(text)) !== null) {
    const g = m[0];
    if (!new RegExp(ACCENT, 'i').test(g)) continue;
    const before = text.slice(Math.max(0, m.index - 48), m.index);
    if (/--gradient-horizon\s*:[\s\S]{0,16}$/.test(before)) continue;
    const inline = g.length > 160 ? `${g.slice(0, 160)}...` : g;
    warnings.push(`${Where}: a gradient uses the accent outside the horizon token: ${inline}`);
  }

  if (ext === '.css') {
    if (basename(file) === 'dotbang.tokens.css') {
      const missing = TOKEN_FILE_REQUIREMENTS.filter(([prop, value]) => !new RegExp(`${prop}\\s*:\\s*${value}`, 'i').test(text)).map(
        ([prop]) => prop,
      );
      if (missing.length) failures.push(`${Where}: missing or drifted token value(s): ${missing.join(', ')}`);
      if (!/--gradient-horizon\s*:/.test(text)) failures.push(`${Where}: no --gradient-horizon token`);
      if (!/--glass-blur\s*:\s*20px/.test(text)) failures.push(`${Where}: --glass-blur is not 20px`);
      if (!/--glass-saturate\s*:\s*160%/.test(text)) failures.push(`${Where}: --glass-saturate is not 160%`);
    } else {
      // Not the token file: judge the values, not the variable names. 1px and 2px are feature-test
      // values (`@supports (backdrop-filter: blur(1px))`), never design values.
      for (const b of new Set([...text.matchAll(/blur\((\d+)px\)/g)].map((x) => x[1]))) {
        if (Number(b) <= 2) continue;
        if (!['16', '20'].includes(b)) warnings.push(`${Where}: blur(${b}px) is outside the glass spec (16px panels, 20px chrome)`);
      }
      for (const s2 of new Set([...text.matchAll(/saturate\((\d+)%?\)/g)].map((x) => x[1]))) {
        if (s2 !== '160') warnings.push(`${Where}: saturate(${s2}%) is not the 160% glass term`);
      }
    }
  }
}

const line = (label, rows) => {
  console.log(`\n${label} (${rows.length})`);
  for (const r of rows) console.log(`  - ${r}`);
};

console.log(`dotBANG conformance: ${scanned} file(s) scanned`);
console.log(`  banned hexes: ${BANNED_HEX.join(', ')}   banned name forms: ${BANNED_NAMES.join(', ')}`);
if (failures.length) line('FAIL', failures);
if (warnings.length) line('WARN', warnings);
if (!failures.length && !warnings.length) console.log('  PASS: no banned values or banned name forms found');

process.exit(failures.length ? 1 : 0);
