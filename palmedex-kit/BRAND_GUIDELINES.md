# Palmedex Brand Identity & Design System Manual

> **Palmedex**: The Offline-First Clinical Medication Reference Tool for Kuala Langat District Healthcare Professionals.

---

## 1. Brand Concept & Story

### 1.1 Name Origin
**Palmedex** seamlessly fuses two foundational identities:
1. **Palm**: Inspired by the iconic coastal palm fronds (*Elaeis guineensis* / *Arecaceae*) emblematic of the Kuala Langat district in Selangor, symbolizing local community heritage and public health dedication.
2. **Medex**: An abbreviation of **Medical Index** and **Clinical Excellence**, representing precision therapeutics, rigorous pharmacology, and rapid clinical decision support.

### 1.2 Core Mission & Positioning
In clinical environments—ranging from urban health centers (*Klinik Kesihatan*) to rural community clinics (*Klinik Desa*) across Kuala Langat—reliable connectivity cannot be taken for granted. **Palmedex** delivers an authoritative, instant, offline-first medication reference:
- **Zero Latency**: Instantaneous local query execution powered by client-side IndexedDB caching.
- **High Visual Contrast**: Purpose-engineered nocturnal dark mode ensuring legibility under emergency department and clinical lighting.
- **Safety First**: Unmissable visual safeguards for **Quota Control**, MOH Category restrictions, dosage formulas, and adverse interaction alerts.

---

## 2. Color System & Design Tokens

The Palmedex color system is crafted around deep, clinical focus, combining dark slate tones with vibrant bio-clinical teal and alert amber.

### 2.1 Color Tokens Palette

| Role | Token Name | Hex Code | RGB | Purpose & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | `slate-950` | `#0f172a` | `15, 23, 42` | Primary viewport background, PWA status bar |
| **Surface Card** | `slate-800` | `#1e293b` | `30, 41, 59` | Modal sheets, clinical card surfaces, search panels |
| **Surface Raised** | `slate-700` | `#334155` | `51, 65, 85` | Card borders, dividers, chip backgrounds |
| **Brand Primary** | `teal-500` | `#14b8a6` | `20, 184, 166` | Primary action buttons, active search tabs, icon accents |
| **Brand Accent** | `teal-600` | `#0d9488` | `13, 148, 136` | Secondary gradients, active pressed states |
| **Brand Bright** | `teal-400` | `#2dd4bf` | `45, 212, 191` | Highlights, glowing borders, active tab text |
| **Quota Warning** | `amber-400` | `#facc15` | `250, 204, 21` | Quota Control alert borders, pulse badges, warnings |
| **Quota Deep** | `amber-500` | `#eab308` | `234, 179, 8` | Secondary quota text, high-risk flags |
| **Clinical Danger** | `red-500` | `#ef4444` | `239, 68, 68` | Contraindications, allergy warnings, restricted prescribers |
| **Clinical Safe** | `emerald-400`| `#34d399` | `52, 211, 153` | 100% Offline Ready badge, successful sync status |
| **Text Primary** | `slate-50` | `#f8fafc` | `248, 250, 252` | Drug generic names, critical dosage values |
| **Text Muted** | `slate-400` | `#94a3b8` | `148, 163, 184`| ATC codes, category subtitles, timestamps |

### 2.2 Accessibility & WCAG Standards
- **Teal on Slate (`#14b8a6` on `#0f172a`)**: Contrast Ratio **6.8:1** (Passes WCAG AA for normal text, AAA for large text).
- **Amber Alert on Slate (`#facc15` on `#0f172a`)**: Contrast Ratio **12.4:1** (Passes WCAG AAA for all text sizes).
- **Primary Text on Slate (`#f8fafc` on `#0f172a`)**: Contrast Ratio **15.8:1** (Exceeds WCAG AAA requirements).

---

## 3. Logo Architecture & Iconography

### 3.1 Emblem Anatomy
The Palmedex emblem combines three medical and regional motifs:
1. **Geometric Palm Fronds**: Four pairs of symmetrical teal leaves flanking the center, fanning outwards like protective wings, representing public health stewardship in Kuala Langat.
2. **Clinical Medical Cross**: Positioned at the exact geometric center, rendered in Warning Amber (`#facc15`) with a high-contrast dark border, denoting clinical precision and urgent triage.
3. **Pill Capsule Silhouette**: The medical cross is embedded directly into a modern dual-tone pharmaceutical capsule, grounding the emblem in pharmacology and clinical medication reference science.

### 3.2 Logo Lockups
- **Primary Horizontal Lockup**: Icon mark on the left + "Palmedex" typography with high-contrast dual-tone emphasis + Tagline `CLINICAL MEDICATION REFERENCE TOOL` + live `OFFLINE` status pill.
- **Standalone App Icon**: Symmetrical 1:1 square badge with 22% corner radius for mobile app switchers, launcher shortcuts, and PWA installs.
- **Maskable Icon (PWA 512×512)**: Designed with an edge-to-edge `#0f172a` bleed and a **410px central safe-zone circle**, preventing any icon clipping across Samsung OneUI squircle, Google Pixel circle, and iOS rounded square display modes.

---

## 4. Mobile UI Component Specifications

### 4.1 Instant Medication Search
- **Container**: Glassmorphic search input with `#1e293b` surface, `#334155` subtle 1px border, and active focus ring `#14b8a6`.
- **Search Capabilities**: Instant multi-index matching on Generic Name, Brand Name, Indication, ATC Code, and MDC Category.
- **Recent Searches Ribbon**: Horizontal scrollable chips in `#334155` with quick-dismiss buttons.

### 4.2 Drug Quota Control Alert Card
- **Visual Distinction**: Unmissable amber glow border:
  ```css
  border: 1.5px solid #facc15;
  box-shadow: 0 0 16px rgba(250, 204, 21, 0.22);
  background: rgba(250, 204, 21, 0.06);
  ```
- **Content Fields**:
  - `Alert Icon`: Pulsing `AlertTriangle` in `#facc15`.
  - `Header`: **QUOTA CONTROL: Specialist Authorization Required**.
  - `Prescriber Badges`: Colored pills specifying authorized categories (e.g., `Category A: FMS / Specialist Only`, `Category B: Medical Officer`).

### 4.3 Clinical Drug Monograph View
- **Header**: Generic name (`#f8fafc`, 20px, font-weight 700), Brand names (`#94a3b8`, 14px), and Pregnancy Category Badge.
- **Dosage Section**: Structured formula tables with distinct rows for Adult, Paediatric, Renal Impairment, and Hepatic Adjustments.
- **Adverse Reactions & Contraindications**: Elevated alert panel with red border accent (`#ef4444`) for high-risk flags.
- **Regulatory Outlink**: Direct verified link to National Pharmaceutical Regulatory Agency (NPRA Quest3+) database.

### 4.4 Offline Database Sync & Cache Telemetry
- **Offline Indicator**: Permanent header status badge displaying `Offline Synced` with glowing emerald dot.
- **Hydration Panel**: Telemetry metrics showing:
  - Medication records cached in local IndexedDB.
  - Clinical guidelines stored in CacheStorage.
  - Timestamp of last background synchronisation.
  - "Force Sync" interactive action when network connectivity is re-established.

---

## 5. File & Asset Inventory

All brand and presentation assets reside in:
`palmedex-kit/`

```
palmedex-kit/
├── assets/
│   ├── images/
│   │   ├── palmedex_app_icon.jpg          # Generated 1:1 App icon emblem
│   │   ├── palmedex_splash_graphic.jpg    # Generated 3:4 Splash screen loading graphic
│   │   ├── palmedex_ui_showcase.jpg       # Generated 16:9 Multi-screen UI showcase
│   │   └── palmedex_hero_screen.jpg       # Generated 3:4 Close-up UI hero card
│   └── vectors/
│       ├── palmedex-icon-mark.svg         # Scalable vector emblem mark
│       ├── palmedex-logo-horizontal.svg   # Scalable horizontal logo lockup
│       └── palmedex-maskable-icon.svg     # Scalable 512x512 PWA maskable icon
├── BRAND_GUIDELINES.md                    # This document
├── index.html                             # Interactive Web Presentation Kit
├── styles.css                             # Presentation styles & simulator CSS
└── app.js                                 # Live mockup switcher & search demo logic
```
