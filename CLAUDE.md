# CLAUDE.md - AI Navigation & Development Instructions

## AI Agent Navigation (ICM)
This project uses **Interpretable Context Methodology (ICM)** for file navigation:
- **Consult `context.md` First:** Before inspecting individual source files in any directory, read the directory's `context.md` (or the root [`CONTEXT-MAP.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT-MAP.md)).
- **Targeted Reading:** Use the **Read Triggers** section in each `context.md` to identify and open only the necessary file.
- **Domain Vocabulary:** Refer to [`CONTEXT.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT.md) for clinical domain definitions (FUKKM, Quota Control, MDC, NEML, Quest3, NAG Section C).

## Development Commands
- Dev Server: `npm run dev`
- Run Tests: `npm test`
- Type Check: `npm run lint`
- Build: `npm run build`
- E2E Tests: `npm run test:e2e`

## Architecture & Code Standards
- Framework: React 19 + TypeScript + Vite 6 + Tailwind CSS v4.
- Clean Code: Keep business logic decoupled in pure services (`src/services/`, `src/utils/`).
- Design System: Follow tokens in [`DESIGN.md`](file:///Users/nina/development/projects/fupkdkl/DESIGN.md) (Healthcare Teal `--color-brand-*`, Amber Quota).
- WCAG 2.2: Ensure 44px minimum touch targets and high-contrast visible focus rings.
