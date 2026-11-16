/**
 * dotBANG design tokens — GENERATED FILE, do not edit.
 * Source: design/dotbang.tokens.json. Brand law: BRAND-GUIDELINE.md v3.0.
 * Regenerate: node design/build-tokens.mjs
 *
 * Import the values the build needs:
 *   import { tokens, cssVars, conformance } from '@brand/dotbang.tokens';
 *   tokens.color.accent        // "#0297DE"
 *   cssVars['--accent']        // "var(--accent)" mirror of the CSS custom properties
 */
export const tokens = {
  "$meta": {
    "name": "dotBANG design tokens",
    "guidelineVersion": "3.0",
    "guidelineDate": "2026-11-15",
    "status": "official",
    "source": "BRAND-GUIDELINE.md (github.com/TysAIs/dotbang-brand)",
    "notice": "This file implements Appendix B of the brand guideline. If the two ever disagree, the guideline wins and this file is corrected the same day. Generated artefacts (dotbang.tokens.css, dotbang.tokens.ts) are never edited by hand: edit this file and run build-tokens.mjs.",
    "consumers": [
      "dotbang.io site (React 19 + Astryx)",
      "dotBANG CRM and product UI",
      "documents and decks via the same values"
    ]
  },
  "color": {
    "black": "#000000",
    "white": "#FFFFFF",
    "accent": "#0297DE",
    "dim": "rgba(255,255,255,0.58)",
    "faint": "rgba(255,255,255,0.36)",
    "hair": "rgba(255,255,255,0.12)",
    "hairSoft": "rgba(255,255,255,0.07)",
    "panel": "rgba(255,255,255,0.03)",
    "card": "#050505",
    "glass": "rgba(10,10,10,0.52)",
    "glassFallback": "rgba(5,5,5,0.92)",
    "accentRowWash": "rgba(2,151,222,0.06)",
    "accentGlow": "rgba(2,151,222,0.28)",
    "shadow": "rgba(0,0,0,0.40)",
    "docBody": "#E6E6EA",
    "docGrey": "#B4B4BC"
  },
  "font": {
    "sans": "\"Inter\", \"Inter Fallback\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
    "mono": "\"JetBrains Mono\", ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, \"Liberation Mono\", monospace",
    "interVersion": "4.1 (font version 4.001)",
    "monoVersion": "2.304"
  },
  "weight": {
    "thin": 300,
    "body": 400,
    "emphasis": 500,
    "strong": 600,
    "heading": 700,
    "button": 700,
    "display": 800,
    "cover": 900
  },
  "type": {
    "displayMega": {
      "size": "clamp(56px, 13.5vw, 220px)",
      "weight": 800,
      "tracking": "-0.045em",
      "lineHeight": 0.94,
      "casing": "sentence",
      "use": "wordmark heroes, covers, thumbnails"
    },
    "display1": {
      "size": "59px",
      "weight": 800,
      "tracking": "-0.04em",
      "lineHeight": 1,
      "casing": "sentence",
      "use": "page headlines"
    },
    "h2": {
      "size": "44px",
      "weight": 700,
      "tracking": "-0.03em",
      "lineHeight": 1.08,
      "casing": "sentence",
      "use": "marketing section titles"
    },
    "h3": {
      "size": "33px",
      "weight": 700,
      "tracking": "-0.025em",
      "lineHeight": 1.15,
      "casing": "sentence",
      "use": "product section and panel titles"
    },
    "h4": {
      "size": "25px",
      "weight": 700,
      "tracking": "-0.02em",
      "lineHeight": 1.2,
      "casing": "sentence",
      "use": "card titles"
    },
    "lede": {
      "size": "19px",
      "weight": 400,
      "tracking": "0",
      "lineHeight": 1.55,
      "casing": "sentence",
      "use": "intro paragraphs, hero sublines"
    },
    "body": {
      "size": "16px",
      "weight": 400,
      "tracking": "0",
      "lineHeight": 1.65,
      "casing": "sentence",
      "use": "body text everywhere"
    },
    "small": {
      "size": "14px",
      "weight": 400,
      "tracking": "0",
      "lineHeight": 1.6,
      "casing": "sentence",
      "use": "table cells, dense product UI"
    },
    "caption": {
      "size": "12px",
      "weight": 400,
      "tracking": "0",
      "lineHeight": 1.5,
      "casing": "sentence",
      "use": "footnotes, meta lines"
    },
    "label": {
      "size": "11px",
      "weight": 600,
      "tracking": "0.18em",
      "lineHeight": 1.4,
      "casing": "uppercase",
      "use": "kickers, table headers, section labels (sans label, dense product UI)"
    },
    "monoLabel": {
      "size": "12px",
      "weight": 500,
      "tracking": "0.10em",
      "lineHeight": 1.4,
      "casing": "uppercase",
      "use": "eyebrows, kickers, section markers, chart and diagram labels (mono label system, section 8)"
    },
    "monoLabelSmall": {
      "size": "11px",
      "weight": 500,
      "tracking": "0.08em",
      "lineHeight": 1.4,
      "casing": "uppercase",
      "use": "the floor of the mono label system"
    }
  },
  "space": {
    "s1": "8px",
    "s2": "16px",
    "s3": "24px",
    "s4": "32px",
    "s5": "48px",
    "s6": "64px",
    "s7": "96px",
    "s8": "128px",
    "s9": "160px",
    "s-quarter": "4px",
    "s-1-5": "12px",
    "s-2-5": "20px"
  },
  "spaceNote": "s1 to s9 are the 8pt scale and the only values that ship in layout. s-quarter, s-1-5 and s-2-5 (4, 12 and 20px) exist only inside small components per guideline section 10.",
  "layout": {
    "contentMaxWidth": "1280px",
    "gridColumns": 12,
    "gutter": "24px",
    "pageMarginDesktop": "32px",
    "pageMarginPhone": "24px",
    "sectionDesktop": "96px",
    "sectionPhone": "64px",
    "headerInset": "16px",
    "headerBarHeight": "56px",
    "measureCharacters": [
      60,
      75
    ],
    "breakpointsNote": "Breakpoints are implementation, not brand law: the guideline fixes content max width and page margins only.",
    "breakpoints": {
      "phone": "640px",
      "tablet": "1024px",
      "wide": "1280px"
    }
  },
  "radius": {
    "sm": "14px",
    "base": "18px",
    "lg": "24px",
    "pill": "999px"
  },
  "glass": {
    "chrome": {
      "fill": "rgba(10,10,10,0.52)",
      "blur": "20px",
      "saturate": "160%",
      "border": "1px solid {color.hair}",
      "radius": "999px",
      "shadow": "0 12px 44px {color.shadow}",
      "textRest": "#FFFFFF",
      "textSecondaryRest": "rgba(255,255,255,0.58)",
      "textHover": "#0297DE"
    },
    "panel": {
      "fill": "rgba(10,10,10,0.52)",
      "blur": "16px",
      "saturate": "160%",
      "border": "1px solid {color.hair}",
      "radius": "24px",
      "shadow": "0 12px 44px {color.shadow}"
    },
    "budgetPerViewport": 3,
    "fallback": {
      "fill": "rgba(5,5,5,0.92)",
      "border": "1px solid {color.hair}"
    },
    "rules": [
      "Glass is chrome, plus the single priority panel in a view. Everything else is solid.",
      "Text on glass is white or dim white at rest. Blue on glass exists only as the chrome hover state.",
      "High contrast or no backdrop-filter support: solid fallback, layout does not move."
    ]
  },
  "gradient": {
    "horizon": {
      "name": "footer horizon",
      "decision": "D13",
      "direction": "to bottom",
      "stops": [
        {
          "color": "#000000",
          "position": "0%"
        },
        {
          "color": "#000000",
          "position": "66%"
        },
        {
          "color": "#FFFFFF",
          "position": "90%"
        },
        {
          "color": "#0297DE",
          "position": "94%"
        },
        {
          "color": "#0297DE",
          "position": "100%"
        }
      ],
      "height": "240px",
      "placement": "the closing element of a marketing page, once per page, last element in the document",
      "rules": [
        "No text, links, wordmark or legal line sits on the gradient.",
        "Not in the CRM, not in product UI, not in documents, not inside a card.",
        "The light gathers in the final third and resolves to the blue at the edge: a straight black-to-white-to-blue ramp reads as grey fog and is wrong."
      ]
    }
  },
  "motion": {
    "ui": "0.18s ease",
    "panel": "0.24s ease",
    "animateOnly": [
      "transform",
      "opacity"
    ],
    "reducedMotion": "media query decides, never a toggle; the ASCII field holds one static frame"
  },
  "field": {
    "ramp": [
      " ",
      ".",
      "·",
      ":",
      ";",
      "+",
      "*",
      "x",
      "#",
      "%",
      "@"
    ],
    "rampNote": "Guideline section 11 lists ten visible glyphs sparse to dense behind a leading space. Order is frozen.",
    "cell": "15px",
    "glyphSize": "11px",
    "font": "\"JetBrains Mono\", ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, \"Liberation Mono\", monospace",
    "color": "#FFFFFF",
    "alphaMin": 0.05,
    "alphaMax": 0.22,
    "fps": 10,
    "interactive": false,
    "rules": [
      "One canvas per page, fixed, behind everything, pointer-events none.",
      "Never under body text at reading contrast.",
      "Never blue, never informational, never a logo, chart or map.",
      "Paused when the tab is hidden or the canvas is off screen.",
      "Alpha stays inside 0.05 to 0.22 (open item D10, not frozen inside that range)."
    ]
  },
  "focus": {
    "width": "2px",
    "offset": "2px",
    "style": "solid",
    "color": "#0297DE"
  },
  "conformance": {
    "bannedHexes": [
      "#6CACE4",
      "#6cace4"
    ],
    "bannedNameForms": [
      "DOTBANG",
      "DotBang",
      "Dotbang",
      "dotbang",
      "dot bang",
      "dot Bang"
    ],
    "bannedGeneric": [
      "gradient involving the accent other than the footer horizon",
      "accent as a background fill at rest",
      "accent as body text",
      "second accent colour",
      "dithering",
      "stock photography",
      "blue text on glass at rest"
    ],
    "requiredNameForm": "dotBANG"
  }
} as const;

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
    ["displayMega","display1","h2","h3","h4","lede","body","small","caption","label","monoLabel","monoLabelSmall"].map((k) => [
      k,
      '--type-' + k.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    ]),
  ),
  space: ["s1","s2","s3","s4","s5","s6","s7","s8","s9","s-quarter","s-1-5","s-2-5"].map((k) => '--' + k),
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
export const conformance = {
  "bannedHexes": [
    "#6CACE4",
    "#6cace4"
  ],
  "bannedNameForms": [
    "DOTBANG",
    "DotBang",
    "Dotbang",
    "dotbang",
    "dot bang",
    "dot Bang"
  ],
  "bannedGeneric": [
    "gradient involving the accent other than the footer horizon",
    "accent as a background fill at rest",
    "accent as body text",
    "second accent colour",
    "dithering",
    "stock photography",
    "blue text on glass at rest"
  ],
  "requiredNameForm": "dotBANG"
} as const;

export const guidelineVersion = "3.0" as const;
export const tokensVersion = "3.0" as const;
