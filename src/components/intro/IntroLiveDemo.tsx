import { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Search,
  XCircle,
  Pill,
  ShieldAlert,
  ChevronRight,
  X,
  Bookmark,
  FileText,
} from 'lucide-react';
import { Medication, FilterCategory } from '../../types/formulary';
import { Quest3Link } from '../Quest3Link';

export interface IntroLiveDemoProps {
  medications: Medication[];
  displayedMedications: Medication[];
  quotaCount: number;
  searchQuery: string;
  activeFilter: FilterCategory;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: FilterCategory) => void;
}

export function IntroLiveDemo({
  medications,
  displayedMedications,
  quotaCount,
  searchQuery,
  activeFilter,
  onSearchChange,
  onFilterChange,
}: IntroLiveDemoProps) {
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);

  return (
    <section id="interactive-demo" className="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-brand-600 dark:text-brand-400 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="size-4" />
            <span>Interactive Clinical Playground</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Try the Live Formulary Search
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">
            Test real-time searching across generic names, MAL registration numbers, MDC codes, and Quota badges connected directly to the live dataset.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-semibold border border-brand-500/20">
            <ShieldCheck className="size-3.5" />
            <span>Preview Mode — Full terms & disclaimer agreement required upon launching app</span>
          </div>
        </div>

        {/* Interactive Search Box Container */}
        <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl space-y-4">
          <div className="relative">
            <Search className="size-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              id="demoSearchInput"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Type drug name (e.g. Amlodipine, Insulin, Etonogestrel, MAL number)..."
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-11 pr-10 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <XCircle className="size-5" />
              </button>
            )}
          </div>

          {/* Filter Toggle Buttons */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              type="button"
              onClick={() => onFilterChange('ALL')}
              className={`py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeFilter === 'ALL'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Pill className="size-4" />
              <span>All Meds ({medications.length})</span>
            </button>
            <button
              type="button"
              onClick={() => onFilterChange('QUOTA_ONLY')}
              className={`py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeFilter === 'QUOTA_ONLY'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-amber-500'
              }`}
            >
              <ShieldAlert className="size-4 text-amber-500" />
              <span>Quota Control ({quotaCount})</span>
            </button>
          </div>

          {/* Live Demo Results List */}
          <div className="space-y-3 mt-4 max-h-[360px] overflow-y-auto pr-1">
            {displayedMedications.length === 0 ? (
              <div className="text-center py-8 text-slate-400 space-y-2">
                <Pill className="size-8 mx-auto opacity-50" />
                <p className="text-sm font-medium">No matching formulations found in formulary registry.</p>
              </div>
            ) : (
              displayedMedications.slice(0, 6).map((med) => (
                <button
                  key={med.id}
                  type="button"
                  onClick={() => setSelectedMedication(med)}
                  className={`w-full text-left p-4 rounded-xl transition-all shadow-xs cursor-pointer ${
                    med.isQuota
                      ? 'border-2 border-amber-500 bg-white dark:bg-slate-800 hover:border-amber-400'
                      : 'border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:border-brand-500'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`font-bold text-sm sm:text-base ${
                        med.isQuota ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      {med.name}
                    </h3>
                    <ChevronRight className="size-4 text-slate-400 shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                    {med.isQuota && (
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center gap-1">
                        <ShieldAlert className="size-3" /> Quota Control
                      </span>
                    )}
                    {med.prescriberCategory && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-semibold">
                        Category {med.prescriberCategory}
                      </span>
                    )}
                    {med.mdc && (
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        MDC: {med.mdc}
                      </span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Medication Detail Preview Modal */}
      {selectedMedication && (
        <div
          role="dialog"
          aria-labelledby="preview-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedMedication(null)}
              aria-label="Close preview modal"
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 pr-8">
                <h3
                  id="preview-modal-title"
                  className={`text-lg font-bold ${
                    selectedMedication.isQuota ? 'text-amber-600 dark:text-amber-400' : 'text-brand-600 dark:text-brand-400'
                  }`}
                >
                  {selectedMedication.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                  {selectedMedication.isQuota && (
                    <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center gap-1">
                      <ShieldAlert className="size-3" /> Quota Control
                    </span>
                  )}
                  {selectedMedication.prescriberCategory && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[10px]">
                      <Bookmark className="size-3 mr-1 text-brand-500 inline" />
                      Category {selectedMedication.prescriberCategory}
                    </span>
                  )}
                </div>
              </div>

              {selectedMedication.malBrands && (
                <div className="text-xs bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <FileText className="size-3.5 text-brand-500" /> MAL Brands:
                  </span>
                  <Quest3Link malString={selectedMedication.malBrands} />
                </div>
              )}

              {selectedMedication.indications && (
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Indications</h4>
                  <p className="text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-700/40">
                    {selectedMedication.indications}
                  </p>
                </div>
              )}

              {selectedMedication.dosage && (
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Dosage</h4>
                  <p className="text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-700/40">
                    {selectedMedication.dosage}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
