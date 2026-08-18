# `src/hooks/` - Custom State & Lifecycle Hooks

## 1. Purpose & Boundary
Encapsulates React lifecycle, browser API wrappers (Screen Orientation API, matchMedia, Service Workers, DOM Rect observers), and domain state orchestration hooks.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`useFormularyData.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useFormularyData.ts) | Coordinates local IndexedDB loading, remote background version sentinel polling, and user data update triggers. | `useFormularyData`, `DEFAULT_VERSION_URL`, `DEFAULT_DATA_URL` |
| [`usePWAInstall.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/usePWAInstall.ts) | Detects PWA installation eligibility (`beforeinstallprompt`), iOS Safari browser environment, and standalone display mode. | `usePWAInstall` |
| [`useTour.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useTour.ts) | State machine for the onboarding tour (step navigation, auto-start logic, completion persistence via `localStorage`). | `useTour` |
| [`useTheme.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useTheme.ts) | Controls Light / Dark theme toggling, system preference listener, and `<meta name="theme-color">` updates. | `useTheme`, `Theme` |
| [`useRecentMeds.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useRecentMeds.ts) | Manages list of recently viewed medications persisted in `localStorage` (max 5 items). | `useRecentMeds` |
| [`useDisclaimer.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useDisclaimer.ts) | Tracks first-launch clinical disclaimer acceptance in `localStorage`. | `useDisclaimer` |
| [`useOrientationLock.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useOrientationLock.ts) | Wraps the Screen Orientation API to toggle portrait mode locking on supported mobile devices. | `useOrientationLock` |
| [`useTargetBoundingRect.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useTargetBoundingRect.ts) | Continuously observes and calculates DOM element bounding rectangles for spotlight tour positioning. | `useTargetBoundingRect` |
| `*.test.ts` | Vitest unit tests verifying state transitions, local storage mocks, and event listener cleanups. | Vitest test suites |

## 3. Invariants & Dependencies
- **SSR / Safe Window Access:** All hooks guard browser globals (`window`, `document`, `navigator`, `localStorage`) to prevent errors in non-browser execution.
- **Auto-Cleanup:** All event listeners (`resize`, `scroll`, `online`, `offline`, `beforeinstallprompt`) must clean up in `useEffect` returns.

## 4. Read Triggers
- *Read [`useFormularyData.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useFormularyData.ts)* if changing data loading lifecycles, sentinel polling intervals (15 min), or remote Google Sheets URLs.
- *Read [`useTour.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useTour.ts) or [`useTargetBoundingRect.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/useTargetBoundingRect.ts)* if adjusting spotlight tour state, step transitions, or tooltip viewport bounding logic.
- *Read [`usePWAInstall.ts`](file:///Users/nina/development/projects/fupkdkl/src/hooks/usePWAInstall.ts)* if modifying PWA install banner triggers or iOS Safari detection rules.
