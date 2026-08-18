# Domain Glossary & Ubiquitous Language: FUPKDKL

Official domain concepts, clinical terminology, and administrative rules for **Formulari Ubat Pejabat Kesihatan Daerah Kuala Langat (FUPKDKL)**.

---

## 1. Core Organizational Concepts

- **PKDKL (Pejabat Kesihatan Daerah Kuala Langat):** District Health Office of Kuala Langat under the Ministry of Health Malaysia (MOH), governing primary care health clinics (Klinik Kesihatan) and community dispensaries in the district.
- **FUKKM (Formulari Ubat Kementerian Kesihatan Malaysia):** National MOH Drug Formulary establishing standard medication lists, anatomical/therapeutic system groupings, and baseline prescribing tiers.
- **FUPKDKL (District Drug Formulary):** Localized subset of FUKKM actively procured, stocked, and authorized for outpatient primary care facilities within PKD Kuala Langat.

---

## 2. Regulatory & Drug Identification Terms

- **MDC (Malaysian Drug Code):** Standardized MOH drug classification code assigned to specific chemical formulations and strengths.
- **MAL Number:** Official registration number issued by NPRA (e.g., `MAL19984123A`) signifying statutory pharmaceutical approval in Malaysia.
- **Quest3+ (BPFK / NPRA Online Portal):** Official regulatory portal maintained by the National Pharmaceutical Regulatory Agency (NPRA) for drug registration verification and package insert lookup.
- **NEML (National Essential Medicines List):** National list designating core medicines satisfying the priority healthcare needs of the population.
- **Method of Purchase (Cara Pembelian):** Procurement channel for drugs, typically APPL (Approved Product Purchase List / Central Contract) or LP (Local Purchase / Quotation).

---

## 3. Clinical & Prescribing Governance

- **Prescriber Category:** Authorization tier defining which clinician level can initiate or renew a medication:
  - **Category A / A\*:** Specialists / Consultants only.
  - **Category B:** Medical Officers and above.
  - **Category C / C+:** Paramedics / Medical Assistants under standard guidelines.
- **Quota Control (Kawalan Kuota PKD):** District-level administrative rationing restriction placed on specific high-cost, high-consumption, or closely monitored medications requiring quota clearance or specialist liaison.
- **NAG (National Antimicrobial Guideline):** Clinical guideline published by the MOH to promote antimicrobial stewardship.
  - **NAG Section C (Primary Care):** Clinical infection management pathways (Pathways C1 to C9: URTI, Otitis, Skin/Soft Tissue, UTI, Dental, etc.) governing outpatient antibacterial selection and dosages.

---

## 4. System & Operational Lifecycle

- **Version Sentinel:** Background synchronization check mechanism verifying if the published Google Sheets formulary CSV version exceeds the locally cached IndexedDB version.
- **Prompt-First Update:** Clinical UX pattern where data updates are fetched silently in the background and presented via an explicit action prompt to prevent disrupting active clinical consultations.
