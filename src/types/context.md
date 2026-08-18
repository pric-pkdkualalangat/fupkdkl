# `src/types/` - TypeScript Domain Contracts & Interfaces

## 1. Purpose & Boundary
Defines all foundational TypeScript interfaces, domain types, and data contracts used across the entire client codebase. Must contain no executable runtime code.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`formulary.ts`](file:///Users/nina/development/projects/fupkdkl/src/types/formulary.ts) | Canonical data shape for `Medication`, `VersionInfo`, and `FilterCategory` union types. | `Medication`, `VersionInfo`, `FilterCategory` |
| [`tour.ts`](file:///Users/nina/development/projects/fupkdkl/src/types/tour.ts) | Types defining onboarding spotlight steps, tooltip placement options, and advance triggers. | `TourStep`, `TooltipPlacement`, `AdvanceTrigger` |

## 3. Invariants & Dependencies
- **Zero Runtime Overhead:** Contains strictly type declarations and interfaces.
- **Formulary Model Contract:** The `Medication` entity mirrors both the Google Sheets CSV schema and the IndexedDB `medications` object store.

## 4. Read Triggers
- *Read [`formulary.ts`](file:///Users/nina/development/projects/fupkdkl/src/types/formulary.ts)* if adding new medication fields (e.g., ATC codes, storage temperatures) or new filter categories.
- *Read [`tour.ts`](file:///Users/nina/development/projects/fupkdkl/src/types/tour.ts)* if adding new tour trigger behaviors or custom tooltip styling options.
