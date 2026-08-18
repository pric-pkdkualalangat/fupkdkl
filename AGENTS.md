# AI Agent Navigation Protocol & Repository Invariants

This repository implements the **Interpretable Context Methodology (ICM)** for AI navigation. To minimize token waste and maintain context discipline, all AI coding agents must follow the **ICM Walk Rule**.

---

## 1. The ICM Walk Rule

1. **Check Directory Context First:**
   - Before reading individual source code or test files inside any directory, **always read that directory's `context.md`** (or consult the root [`CONTEXT-MAP.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT-MAP.md)).
   - Do NOT blanket-read all files in a folder to understand what it does. The `context.md` catalog provides one-line responsibilities, exports, and routing triggers.

2. **Follow "Read Triggers":**
   - Each `context.md` specifies exact triggers (e.g., *"If modifying search ranking or prefix behavior, read `searchEngine.ts`"*). Open ONLY the specific source files relevant to your immediate task.

3. **Respect Domain Vocabulary:**
   - Review [`CONTEXT.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT.md) for official clinical and regulatory terminology (FUKKM, Quota Control, MDC, NEML, Quest3, NAG Section C). Do not introduce ad-hoc terminology or modify domain concepts without verification.

4. **Update Catalogs on Structural Changes:**
   - If you add, delete, or re-architect files in a directory, update the corresponding `context.md` File Manifest and Read Triggers.

---

## 2. Directory Navigation Map

| Directory | Scope | Catalog |
| :--- | :--- | :--- |
| System Map | Architecture Overview & Cross-Directory Boundaries | [`CONTEXT-MAP.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT-MAP.md) |
| Domain Glossary | Clinical Terms, FUKKM, Quota, NAG Section C | [`CONTEXT.md`](file:///Users/nina/development/projects/fupkdkl/CONTEXT.md) |
| `src/` | App Root, Styling, Global Providers | [`src/context.md`](file:///Users/nina/development/projects/fupkdkl/src/context.md) |
| `src/services/` | DB, Sync, MiniSearch, CSV Parser, Query Engine | [`src/services/context.md`](file:///Users/nina/development/projects/fupkdkl/src/services/context.md) |
| `src/components/` | Core UI Components & Modals | [`src/components/context.md`](file:///Users/nina/development/projects/fupkdkl/src/components/context.md) |
| `src/components/intro/` | Product Intro Page & Subsections | [`src/components/intro/context.md`](file:///Users/nina/development/projects/fupkdkl/src/components/intro/context.md) |
| `src/hooks/` | Custom State & Lifecycle Hooks | [`src/hooks/context.md`](file:///Users/nina/development/projects/fupkdkl/src/hooks/context.md) |
| `src/types/` | TypeScript Domain Models | [`src/types/context.md`](file:///Users/nina/development/projects/fupkdkl/src/types/context.md) |
| `src/utils/` | Clinical Classification & Text Helpers | [`src/utils/context.md`](file:///Users/nina/development/projects/fupkdkl/src/utils/context.md) |
| `src/data/` | Static Clinical Guideline Data | [`src/data/context.md`](file:///Users/nina/development/projects/fupkdkl/src/data/context.md) |
| `src/config/` | Onboarding Spotlight Tour Config | [`src/config/context.md`](file:///Users/nina/development/projects/fupkdkl/src/config/context.md) |
| `e2e/` | Playwright E2E & Accessibility Tests | [`e2e/context.md`](file:///Users/nina/development/projects/fupkdkl/e2e/context.md) |
