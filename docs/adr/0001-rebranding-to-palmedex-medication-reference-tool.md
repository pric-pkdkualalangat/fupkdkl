# 1. Rebranding to Palmedex Medication Reference Tool

Date: 2026-09-21

## Status

Accepted

## Context

The application was originally conceptualized under the working title **Formulari Ubat PKD Kuala Langat (FUPKDKL)** / "District Drug Formulary". 

In Malaysian clinical and public health governance, the term **"Formulari" (Drug Formulary)** carries specific statutory and regulatory meaning under the Ministry of Health Malaysia (MOH), strictly reserved for the official *Formulari Ubat Kementerian Kesihatan Malaysia (FUKKM)*. Stating that a local district application is a "formulary" introduces potential regulatory ambiguity and implies formal statutory policy declarations that a clinical support tool does not possess.

Additionally, the project requires a memorable, community-rooted identity that combines the local palm heritage of the Kuala Langat district with clinical excellence (*medex*).

## Decision

1. The application is officially named **Palmedex**, with the formal descriptor **Medication Reference Tool** (*Alat Rujukan Ubat-Ubatan*).
2. The term "Formulari" or "Formulary" will NOT be used as the app's title, subtitle, or descriptor across user-facing screens, headers, footers, install manifests, and marketing materials.
3. The repository acronym `fupkdkl` is retained strictly as the internal repository name and base deployment route (`/fupkdkl/`) to preserve deployment compatibility and Git history.
4. The visual identity standardizes on Deep Slate Navy (`#0f172a`, `#1e293b`), Clinical Vibrant Teal (`#14b8a6`, `#0d9488`), and Warning Amber (`#facc15`).

## Consequences

### Positive
- **Regulatory Precision**: Eliminates misrepresentation or confusion with statutory MOH formularies.
- **Unified Identity**: Establishes a distinct, professional healthtech brand tailored to district clinics and emergency dispensaries.
- **Clear User Intent**: Frames the tool accurately as an offline decision-support reference.

### Negative / Neutral
- PWA manifest, asset files, and user-facing copy require systematic updates.
- Historical references in technical documentation must clearly demarcate `FUPKDKL` as legacy repository terminology versus `Palmedex` as product identity.
