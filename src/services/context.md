# `src/services/` - Pure Domain & Data Services

## 1. Purpose & Boundary
Contains pure domain computation, local IndexedDB persistence, CSV parsing, MiniSearch indexing, and remote dataset synchronization. Completely decoupled from React and DOM rendering.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`db.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/db.ts) | IndexedDB storage layer using `idb` for caching medication records and schema metadata. | `getDB`, `getAllMedications`, `saveMedications`, `getStoredVersion`, `saveStoredVersion`, `clearDB` |
| [`csvParser.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/csvParser.ts) | Parses raw CSV text into validated `Medication` domain entities with field sanitization and quota detection. | `parseFormularyCSV` |
| [`searchEngine.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/searchEngine.ts) | Configures MiniSearch fuzzy & prefix indexing with weighted scoring across name, brand, MDC, and indications. | `createSearchIndex`, `searchMedications` |
| [`formularyQueryEngine.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/formularyQueryEngine.ts) | Combines MiniSearch text queries and Category filtering (`ALL` vs `QUOTA_ONLY`) with memoized counts. | `FormularyQueryEngine`, `QueryResult` |
| [`formularySync.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/formularySync.ts) | Object-oriented remote Google Sheets synchronization and version checking service with FNV hashing. | `FormularySync`, `computeMedicationsHash`, `isRemoteVersionNewer`, `extractVersionFromCSV` |
| [`versionSentinel.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/versionSentinel.ts) | Functional utilities for polling remote CSV versions and atomic IndexedDB updates. | `checkVersionSentinel`, `fetchAndPersistRemoteData` |
| `*.test.ts` | Comprehensive unit tests for database, parser, search, query engine, and sync logic. | Vitest test suites |

## 3. Invariants & Dependencies
- **No UI Coupling:** Never import React hooks, JSX, or browser UI components here.
- **Atomic Persistence:** Remote data sync only replaces IndexedDB records if valid rows (>0) are parsed without errors.
- **Cache-Busting:** Remote fetch calls always append timestamp queries (`_t=Date.now()`) and `no-cache` headers.

## 4. Read Triggers
- *Read [`db.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/db.ts)* if modifying IndexedDB stores, keys, or schema migrations.
- *Read [`csvParser.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/csvParser.ts)* if modifying CSV column mappings or Quota Control detection heuristics.
- *Read [`searchEngine.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/searchEngine.ts)* if tuning MiniSearch field boosts (name, MAL, MDC, indications) or fuzzy matching tolerance.
- *Read [`formularyQueryEngine.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/formularyQueryEngine.ts)* if adding new filter categories or altering query result structures.
- *Read [`formularySync.ts`](file:///Users/nina/development/projects/fupkdkl/src/services/formularySync.ts)* if altering remote CSV endpoints, version comparison logic, or checksum calculation.
