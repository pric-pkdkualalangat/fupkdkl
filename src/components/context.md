# `src/components/` - Main UI Components & Modals

## 1. Purpose & Boundary
Houses all primary user interface elements for the formulary application, including search input, filter chips, virtualized medication list, detail modals, install banners, settings dialogs, and the interactive tour guide.

## 2. File Manifest
| File | Responsibility | Key Exports |
| :--- | :--- | :--- |
| [`Header.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/Header.tsx) | Top app bar displaying app branding, online/offline pill status, and navigation shortcuts. | `Header` |
| [`SearchBar.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/SearchBar.tsx) | Search input with keyboard shortcut listener (`⌘K` / `/`), clear trigger, and recent search dropdown. | `SearchBar` |
| [`QuickFilters.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/QuickFilters.tsx) | Category filter buttons toggling between All Medications and Quota Control Drugs with counts. | `QuickFilters` |
| [`VirtualMedList.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/VirtualMedList.tsx) | Dynamic windowed list utilizing `@tanstack/react-virtual` for 60fps scrolling over large datasets. | `VirtualMedList` |
| [`MedicationCard.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/MedicationCard.tsx) | Individual medication list item displaying generic name, MDC, Category, and Amber Quota badge. | `MedicationCard` |
| [`MedicationDetailDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/MedicationDetailDialog.tsx) | Full clinical modal with 7 detail sections, Quest3+ links, and NAG Section C recommendations. | `MedicationDetailDialog` |
| [`Quest3Link.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/Quest3Link.tsx) | Parses MAL registration numbers and renders direct outbound links to the NPRA Quest3+ portal. | `Quest3Link` |
| [`SettingsDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/SettingsDialog.tsx) | System configuration modal with manual data update checks, theme switch, and orientation toggle. | `SettingsDialog` |
| [`DisclaimerDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/DisclaimerDialog.tsx) | First-launch legal and clinical usage terms acceptance gate. | `DisclaimerDialog` |
| [`DataUpdatePrompt.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/DataUpdatePrompt.tsx) | Non-blocking banner alerting the user to newer Google Sheets dataset versions. | `DataUpdatePrompt` |
| [`PWAUpdatePrompt.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/PWAUpdatePrompt.tsx) | Banner alerting the user to new service worker application code builds. | `PWAUpdatePrompt` |
| [`InstallBanner.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/InstallBanner.tsx) | Android/Desktop Chromium PWA install banner triggering `beforeinstallprompt`. | `InstallBanner` |
| [`IOSInstallDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/IOSInstallDialog.tsx) | Step-by-step modal guide for adding the PWA to the iOS home screen via Safari Share sheet. | `IOSInstallDialog` |
| [`TourGuide.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/TourGuide.tsx) | Interactive spotlight tour overlay highlighting UI elements with positioning tooltips. | `TourGuide` |
| [`TourInviteBanner.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/TourInviteBanner.tsx) | Dismissible banner inviting first-time users to take the interactive spotlight walkthrough. | `TourInviteBanner` |
| [`TourOverlay.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/TourOverlay.tsx) | SVG clip-path spotlight mask highlighting target DOM elements during the tour. | `TourOverlay` |
| [`TourTooltip.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/TourTooltip.tsx) | Positioned floating card displaying tour step title, description, and navigation buttons. | `TourTooltip` |
| [`InitialLoadScreen.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/InitialLoadScreen.tsx) | Offline error screen displayed when the initial remote seed fails without cached data. | `InitialLoadScreen` |
| [`ColdBootSplash.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/ColdBootSplash.tsx) | Loading splash screen with animated Palmedex vector emblem, pulse halo, and ECG telemetry during IndexedDB hydration. | `ColdBootSplash` |
| [`RecentMedications.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/RecentMedications.tsx) | Dropdown menu rendering recently selected medications for instant lookup. | `RecentMedications` |
| [`UpdateToast.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/UpdateToast.tsx) | Success confirmation toast shown after Google Sheets data sync completes. | `UpdateToast` |
| [`Footer.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/Footer.tsx) | Bottom bar with copyright info and shortcut button to open the Settings modal. | `Footer` |
| [`IntroPage.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/IntroPage.tsx) | Wrapper page orchestrating the public documentation and marketing landing view. | `IntroPage` |

## 3. Invariants & Dependencies
- **Accessibility:** Interactive controls adhere to WCAG 2.2 AA (minimum 44px touch targets and visible focus rings).
- **Tour Hooks:** Critical elements define `data-tour="<step-id>"` attributes referenced by `src/config/tourSteps.ts`.

## 4. Read Triggers
- *Read [`MedicationDetailDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/MedicationDetailDialog.tsx)* if altering clinical detail layouts, NAG guideline badges, or Quest3 links.
- *Read [`VirtualMedList.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/VirtualMedList.tsx) or [`MedicationCard.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/MedicationCard.tsx)* if modifying list virtualization, row height estimation, or medication card badging.
- *Read [`SearchBar.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/SearchBar.tsx)* if adjusting search interactions, keyboard shortcuts, or recent search dropdown behavior.
- *Read [`SettingsDialog.tsx`](file:///Users/nina/development/projects/fupkdkl/src/components/SettingsDialog.tsx)* if adding new user preferences, manual sync buttons, or system diagnostics.
