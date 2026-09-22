# 3. Header, Splash GIF, and Component UI Specifications

Date: 2026-09-21

## Status

Accepted

## Context

Following ADR 0001 (Rebranding to Palmedex) and ADR 0002 (UI Redesign and Asset Strategy), Round 2 of the design interview resolved specific component layout, visual intensity, and splash screen technical requirements.

## Decisions

1. **Header Layout & Typography**:
   - **Primary Title**: Scaled up to bold masthead typography `text-2xl sm:text-3xl` with dual-tone emphasis (`Palme` in text primary, `dex` in vibrant teal).
   - **Subtitle**: `Medication Reference Tool` in muted slate, bullet separator `•`, and `PKD Kuala Langat` in vibrant teal (`text-xs sm:text-sm`).
   - **Logo Emblem**: Palmedex palm-cross-pill emblem scaled up to `size-12 sm:size-14` (48px/56px) in a rounded frame with subtle ambient radial teal glow.
   - **Responsive Hierarchy**: Two-tier layout on mobile (<640px) with brand and status pill on the top row, and action toolbar (`NAG`, `Install`, `Theme`, `Settings`) on the bottom row; unified single-row layout on desktop (>=640px).
   - **Control Simplification**: Removed the duplicate Guide button from the top header (centralized within Settings).

2. **Quick Filter Labels**:
   - Retain proven clinical nomenclature: **"All Medications"** and **"Quota Control"** with live item count badges.
   - Avoid generic or colloquial abbreviations ("All Drugs" or "Quota Restricted").

3. **Quota Control Visual Intensity on Cards**:
   - Use a variant of the current UI: solid amber left accent border (`border-l-4 border-l-amber-500`), subtle dark slate background, and high-contrast `Quota Control` badge with `ShieldAlert` icon.
   - Strictly avoid overpowering glowing drop-shadows or high-frequency animations on the list cards.

4. **Splash Loading Experience**:
   - Transition from raster GIF to a dedicated vector component (`ColdBootSplash.tsx`) featuring the Palmedex emblem with GPU-composited CSS ambient glow and telemetry pulse animation.
   - Eliminates 256-color dithering/banding on OLED/Retina screens, achieves 0ms decode time, and prevents main-thread frame drops during IndexedDB cold-boot hydration.
   - Embed this component during cold-boot IndexedDB hydration in `src/App.tsx`.

## Consequences

- Direct clinical continuity for existing users while delivering a refreshed, premium healthtech aesthetic.
- Controlled visual hierarchy where critical safety warnings remain prominent without cognitive overload.
