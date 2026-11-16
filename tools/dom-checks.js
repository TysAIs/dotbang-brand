/**
 * dotBANG DOM conformance checks — run this inside a page, not in node.
 *
 *   browser_exec: js(open('/home/ty/dotbang-brand/tools/dom-checks.js').read())
 *
 * Read-only. What it can see that a text scan cannot:
 *   - the name as RENDERED, after text-transform (the banned DOTBANG form usually arrives that way)
 *   - whether glass chrome actually has a backdrop-filter
 *   - whether the accent appears in any gradient other than the footer horizon
 *   - whether the accent is being used as a solid background fill at rest
 *   - whether the accent token and the focus ring are wired
 */
(() => {
  const ACCENT_HEX = '#0297DE';
  const ACCENT_RGB = 'rgb(2, 151, 222)';
  const report = { url: location.href, pass: [], fail: [], warn: [], accentGradientElements: 0 };

  const text = document.body.innerText || '';
  const banned = ['DOTBANG', 'DotBang', 'Dotbang', 'dot bang', 'dot Bang'];
  const hits = banned.filter((b) => text.includes(b));
  if (hits.length) report.fail.push(`banned name casing rendered: ${hits.join(', ')}`);
  else report.pass.push('name casing: no banned form in rendered text');
  if (text.includes('dotBANG')) report.pass.push('name present as dotBANG in rendered text');
  else report.warn.push('dotBANG does not appear in rendered text');

  const root = getComputedStyle(document.documentElement);
  const accentVar = root.getPropertyValue('--accent').trim();
  if (accentVar.toUpperCase() === ACCENT_HEX) report.pass.push(`accent token is ${ACCENT_HEX}`);
  else report.fail.push(`accent token is "${accentVar}", expected ${ACCENT_HEX}`);

  const blackVar = root.getPropertyValue('--black').trim();
  if (blackVar.toLowerCase() === '#000000') report.pass.push('field token is #000000');
  else report.warn.push(`field token is "${blackVar}", expected #000000`);

  const headers = [...document.querySelectorAll('header, [role="banner"]')];
  const hasGlass = (el) => {
    const s = getComputedStyle(el);
    if (/blur\(/.test(s.backdropFilter || '') || /blur\(/.test(s.webkitBackdropFilter || '')) return true;
    return [...el.querySelectorAll('*')].some((child) => {
      const cs = getComputedStyle(child);
      return /blur\(/.test(cs.backdropFilter || '') || /blur\(/.test(cs.webkitBackdropFilter || '');
    });
  };
  if (!headers.length) report.warn.push('no header element found');
  else if (headers.some(hasGlass)) report.pass.push('header has a backdrop-filter (glass chrome, on the header or inside it)');
  else report.fail.push('header has no backdrop-filter: not glass chrome');

  const isAccentGradient = (bg) => /gradient/i.test(bg) && (bg.includes('151, 222') || bg.toLowerCase().includes('0297de'));
  const accentGradientEls = [...document.querySelectorAll('*')].filter((el) => isAccentGradient(getComputedStyle(el).backgroundImage));
  report.accentGradientElements = accentGradientEls.length;
  const inFooter = accentGradientEls.filter((el) => el.closest('footer, [role="contentinfo"]'));
  if (!accentGradientEls.length) report.fail.push('no accent gradient anywhere: the footer horizon is missing');
  else if (inFooter.length) report.pass.push(`footer horizon present (${inFooter.length} element(s) inside the footer)`);
  else report.warn.push(`accent gradient exists but is not inside a footer (${accentGradientEls.length} element(s))`);

  const bigFills = [];
  for (const el of document.querySelectorAll('*')) {
    const s = getComputedStyle(el);
    if (s.backgroundColor === ACCENT_RGB) {
      const r = el.getBoundingClientRect();
      if (r.width * r.height > 4000) bigFills.push(`${el.tagName.toLowerCase()} ${Math.round(r.width)}x${Math.round(r.height)}`);
    }
  }
  if (bigFills.length) report.warn.push(`accent used as a solid fill on ${bigFills.length} element(s): ${bigFills.slice(0, 4).join('; ')}`);
  else report.pass.push('accent is not used as a solid background fill');

  const focusable = document.querySelector('a[href], button');
  if (focusable) {
    focusable.focus();
    const s = getComputedStyle(focusable);
    if (s.outlineColor === ACCENT_RGB) report.pass.push('focus ring uses the accent');
    else report.warn.push(`focus ring colour is "${s.outlineColor}" (expected ${ACCENT_RGB})`);
    focusable.blur();
  }

  return report;
})();
