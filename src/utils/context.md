# `src/utils/` - Pure Clinical & Utility Functions

## 1. Purpose & Boundary
Contains pure helper functions for domain classification (identifying antibiotics/anti-infectives and mapping NAG Section C pathways) and string normalization.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`antibioticClassifier.ts`](file:///Users/nina/development/projects/fupkdkl/src/utils/antibioticClassifier.ts) | Identifies whether a medication belongs to antibacterial system groups and matches relevant NAG primary care pathways. | `isAntibioticMedication`, `getRelatedNagPathways`, `FUKKM_ANTIBACTERIAL_SYSTEM_GROUP` |
| [`restrictionUtils.ts`](file:///Users/nina/development/projects/fupkdkl/src/utils/restrictionUtils.ts) | Evaluates prescribing restriction text to determine if it represents a non-empty, actionable clinical restriction. | `isNoneRestriction` |
| `*.test.ts` | Vitest unit tests verifying classification rules across various generic names and restriction strings. | Vitest test suites |

## 3. Invariants & Dependencies
- **Purity:** All functions must be deterministic and side-effect free.
- **Robust Matching:** Classification functions handle null/undefined inputs and case-insensitive strings gracefully.

## 4. Read Triggers
- *Read [`antibioticClassifier.ts`](file:///Users/nina/development/projects/fupkdkl/src/utils/antibioticClassifier.ts)* if expanding antibiotic keyword heuristics or modifying NAG Section C pathway mapping logic.
- *Read [`restrictionUtils.ts`](file:///Users/nina/development/projects/fupkdkl/src/utils/restrictionUtils.ts)* if updating strings recognized as "no restriction" (e.g., "None", "-", "TIADA").
