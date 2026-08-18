# `src/components/intro/` - Product Documentation & Landing Page Sub-Components

## 1. Purpose & Boundary
Contains all modular presentation sections for the `/intro` landing page, providing user onboarding, screenshot showcases, live interactive mini-formulary demo, Quota Control explanations, NAG Section C guidance, and PWA installation instructions.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`IntroHeader.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroHeader.tsx) | Sticky top navigation bar for the intro page with theme toggle and "Launch App" button. | `IntroHeader` |
| [`IntroHero.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroHero.tsx) | Hero section with value proposition, dataset stats counters, and primary call-to-action. | `IntroHero` |
| [`IntroLiveDemo.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroLiveDemo.tsx) | Interactive embedded search and card preview allowing users to try the formulary instantly. | `IntroLiveDemo` |
| [`IntroQuotaSection.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroQuotaSection.tsx) | Visual explanation of PKD Quota Control rules, amber warning styling, and governance criteria. | `IntroQuotaSection` |
| [`IntroNagSection.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroNagSection.tsx) | Explanatory guide detailing the National Antimicrobial Guideline (NAG) Section C pathways. | `IntroNagSection` |
| [`IntroScreenshotGallery.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroScreenshotGallery.tsx) | Carousel/grid exhibiting app screenshots across mobile, tablet, and desktop viewports. | `IntroScreenshotGallery` |
| [`IntroInstallGuide.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroInstallGuide.tsx) | Step-by-step PWA installation guides for iOS Safari, Android Chrome, and Desktop browsers. | `IntroInstallGuide` |
| [`IntroCategoryGuide.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroCategoryGuide.tsx) | Reference table for MOH Prescriber Categories (A, A*, B, C, C+). | `IntroCategoryGuide` |
| [`IntroFooter.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroFooter.tsx) | Footer section with institutional credits and launch action link. | `IntroFooter` |
| [`introData.ts`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/introData.ts) | Static copy, feature lists, installation steps, and category definitions for the intro page. | Static content objects |

## 3. Invariants & Dependencies
- **Standalone Navigation:** Clicking "Launch App" navigates back to base URL (`/` or `/fupkdkl/`) via `onLaunchApp`.
- **Live Demo Isolation:** Uses the parent's `FormularyQueryEngine` without mutating the main application search state.

## 4. Read Triggers
- *Read [`introData.ts`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/introData.ts)* if updating copy, feature descriptions, or category reference tables.
- *Read [`IntroLiveDemo.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroLiveDemo.tsx)* if altering the interactive preview component behavior.
- *Read [`IntroInstallGuide.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/IntroInstallGuide.tsx)* if modifying PWA setup instructions for iOS or Android.
