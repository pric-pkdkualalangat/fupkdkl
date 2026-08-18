# `src/data/` - Static Clinical Reference Data

## 1. Purpose & Boundary
Stores immutable medical knowledge structures, national clinical guideline reference constants, and external portal URLs.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`nagSectionC.ts`](file:///Users/nina/development/projects/fupkdkl/src/data/nagSectionC.ts) | Complete data matrix of National Antimicrobial Guideline (NAG) Section C pathways (C1 to C9) with codes, titles, descriptions, and related drug names. | `NAG_SECTION_C_PATHWAYS`, `MOH_NAG_SECTION_C_URL`, `NagPathway` |

## 3. Invariants & Dependencies
- **Clinical Authenticity:** Directly mirrors published Ministry of Health Malaysia (MOH) National Antimicrobial Guideline Section C (Primary Care).

## 4. Read Triggers
- *Read [`nagSectionC.ts`](file:///Users/nina/development/projects/fupkdkl/src/data/nagSectionC.ts)* if updating primary care infection pathways (URTI, pharyngitis, sinusitis, otitis media, UTI, cellulitis, dental) or the official MOH guideline URL.
