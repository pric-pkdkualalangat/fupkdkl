# `src/config/` - Application Configuration & Tour Steps

## 1. Purpose & Boundary
Stores static client configuration definitions, including onboarding spotlight walkthrough steps, DOM selector bindings, and placement rules.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`tourSteps.ts`](file:///Users/nina/development/projects/fupkdkl/src/config/tourSteps.ts) | Sequence of 7 spotlight onboarding tour steps linking DOM target selectors (`[data-tour="..."]`) to titles, descriptions, and advance actions. | `TOUR_STEPS` |

## 3. Invariants & Dependencies
- **Selector Integrity:** Every `targetSelector` string must correspond to a valid `data-tour` attribute in UI components or provide an `isVisible` guard.

## 4. Read Triggers
- *Read [`tourSteps.ts`](file:///Users/nina/development/projects/fupkdkl/src/config/tourSteps.ts)* if adding new feature spotlight steps, adjusting tour descriptions, or reordering onboarding walkthroughs.
