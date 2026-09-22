# 2. Palmedex UI Redesign and Asset Strategy

Date: 2026-09-21

## Status

Accepted

## Context

Following the decision to establish **Palmedex, Medication Reference Tool** (ADR 0001), the application user interface and PWA installation identity must be upgraded from the legacy "Formulari Ubat PKD Kuala Langat" styling to the new Palmedex design system.

Four primary implementation frontiers were evaluated:
1. **PWA Identity Scope**: Full rebrand across application views, PWA manifest, and app store icons versus internal UI-only.
2. **Cold Boot & Loading Experience**: Visual splash representation during initial IndexedDB cold-boot hydration.
3. **Quota Alert Visual Treatment**: Visual intensity of Quota Control warnings on list items.
4. **Public Docs & Intro Route (`/intro`)**: Inclusion of documentation views in this release.

## Decisions

1. **Full Brand & PWA Rollout**: 
   - Update `vite.config.ts` PWA manifest `name` to `Palmedex — Medication Reference Tool`, `short_name` to `Palmedex`, and `description` to `Offline-first clinical medication reference tool for PKD Kuala Langat`.
   - Update `index.html` page title and meta tags.
   - Replace standard PWA icon assets (`icon-192.png`, `icon-512.png`, `maskable-icon.png`, `apple-touch-icon.png`, `favicon.ico`) with Palmedex geometric palm-cross-pill assets.

2. **Animated GIF Splash Graphic**:
   - Create and integrate an optimized animated GIF splash graphic (`splash-screen.gif`) displaying the Palmedex digital medical tablet, pulse wave, and data telemetry for cold-boot IndexedDB hydration.

3. **Restrained Clinical Quota Card Styling**:
   - Retain the proven structural pattern of the current UI: clean `border-l-4 border-l-amber-500`, subtle background tint, and high-contrast `Quota Control` badge.
   - Avoid excessive glow shadows or visual noise that could distract during emergency consultations.

4. **Synchronous Rebranding of Documentation (`/intro`)**:
   - Rebrand `/intro` guides, marketing hero, and interactive tour copy to reflect "Palmedex Medication Reference Tool".

## Consequences

- Complete brand coherence across mobile home screens, install sheets, browser tabs, and within the clinical application.
- Preservation of fast, accessible clinical card readability without overbearing glow effects.
- Alignment of public documentation with application realities.
