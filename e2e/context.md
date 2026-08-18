# `e2e/` - Playwright End-to-End & Accessibility Test Suite

## 1. Purpose & Boundary
Contains automated end-to-end integration, browser regression, and automated accessibility (WCAG 2.2 via `@axe-core/playwright`) tests.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`app.spec.ts`](file:///Users/nina/development/projects/fupkdkl/e2e/app.spec.ts) | Core E2E test suite covering initial load, disclaimer acceptance, search execution, quota filters, detail dialogs, settings modal, and Axe accessibility audits. | Playwright test suites |
| [`capture_screenshot.spec.ts`](file:///Users/nina/development/projects/fupkdkl/e2e/capture_screenshot.spec.ts) | Automated screenshot capture generator for documentation and intro page assets across light/dark themes. | Screenshot automation script |

## 3. Invariants & Dependencies
- **Accessibility Gate:** `app.spec.ts` enforces zero critical WCAG accessibility violations via `new AxeBuilder({ page }).analyze()`.
- **Mock / Network Reliability:** Seed mock datasets or wait for IndexedDB initialization before triggering DOM assertions.

## 4. Read Triggers
- *Read [`app.spec.ts`](file:///Users/nina/development/projects/fupkdkl/e2e/app.spec.ts)* if updating E2E user interaction workflows or adding accessibility assertions for new modals.
- *Read [`capture_screenshot.spec.ts`](file:///Users/nina/development/projects/fupkdkl/e2e/capture_screenshot.spec.ts)* if regenerating promotional UI screenshot assets for the intro page gallery.
