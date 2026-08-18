# `src/` - Application Core & Root Shell

## 1. Purpose & Boundary
The root source directory orchestrates the top-level application lifecycle, route state transitions (main formulary vs `/intro` documentation), global Tailwind CSS v4 styling, and entry point DOM mounting.

## 2. File Manifest
| File | Responsibility | Key Exports / Elements |
| :--- | :--- | :--- |
| [`App.tsx`](file:///Users/nina/development/projects/fupkdkl/src/App.tsx) | Root application component orchestrating search state, filters, modals, tour triggers, and route switching. | `export default function App()` |
| [`App.test.tsx`](file:///Users/nina/development/projects/fupkdkl/src/App.test.tsx) | Vitest integration tests verifying data rendering, filter selection, and modal interactions. | Integration test suites |
| [`main.tsx`](file:///Users/nina/development/projects/fupkdkl/src/main.tsx) | React 19 application mount point rendering `<App />` into `#root`. | Entry point bootstrap |
| [`index.css`](file:///Users/nina/development/projects/fupkdkl/src/index.css) | Global Tailwind CSS v4 import, font rules, and theme utility classes. | Global stylesheets |
| [`vite-env.d.ts`](file:///Users/nina/development/projects/fupkdkl/src/vite-env.d.ts) | Ambient type declarations for Vite environment variables and build stamps. | `__APP_BUILD_ID__`, `__APP_BUILD_TIME__` |

## 3. Invariants & Dependencies
- **Route Switch:** Handles both `/` (main app) and `/intro` (documentation landing page) via `window.location.pathname` and `popstate`.
- **Global Theme Support:** Syncs the `.dark` HTML class and meta `theme-color` with the selected theme.

## 4. Read Triggers
- *Read [`App.tsx`](file:///Users/nina/development/projects/fupkdkl/src/App.tsx)* if altering top-level modal orchestration, search state wiring, route handling, or the virtual list container.
- *Read [`index.css`](file:///Users/nina/development/projects/fupkdkl/src/index.css)* if updating global CSS reset rules or Tailwind custom utility layers.
- *Read [`App.test.tsx`](file:///Users/nina/development/projects/fupkdkl/src/App.test.tsx)* if adding full app integration tests or mocking service hooks.
