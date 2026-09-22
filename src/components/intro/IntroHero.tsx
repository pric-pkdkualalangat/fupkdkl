import {
  ShieldCheck,
  Smartphone,
  Download,
  Wifi,
  Moon,
  Search,
  Pill,
  ShieldAlert,
} from 'lucide-react';
import { Medication } from '../../types/formulary';

export interface IntroHeroProps {
  medications: Medication[];
  quotaCount: number;
  onLaunchApp: () => void;
}

export function IntroHero({
  medications,
  quotaCount,
  onLaunchApp,
}: IntroHeroProps) {
  return (
    <section id="overview" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold">
              <ShieldCheck className="size-4" />
              <span>Official Point-of-Care Clinical Reference</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Palmedex <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-teal-400 to-cyan-400">
                Medication Reference Tool
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              An offline-first clinical decision-support and medication reference tool for healthcare professionals in PKD Kuala Langat, indexing district pharmaceuticals, prescribing tiers, and real-time quota controls.
            </p>

            {/* Feature Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm">
                <p className="text-2xl font-bold text-brand-500">{medications.length || 291}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Total Meds</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-500/40 text-center shadow-sm">
                <p className="text-2xl font-bold text-amber-500">{quotaCount || 16}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Quota Restricted</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm">
                <p className="text-2xl font-bold text-brand-500">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Offline Sync</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm">
                <p className="text-2xl font-bold text-cyan-400">&lt; 1s</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Fast Search</p>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onLaunchApp}
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-lg shadow-brand-600/30 flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Smartphone className="size-5" />
                <span>Open Web Application</span>
              </button>
              <a
                href="#install-guide"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all flex items-center gap-2"
              >
                <Download className="size-5 text-brand-500" />
                <span>Install on Phone</span>
              </a>
            </div>
          </div>

          {/* Right Simulated Mobile Phone Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[42px] p-3 bg-slate-950 border-4 border-slate-800 shadow-2xl shadow-brand-500/10">
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
              </div>

              {/* Simulated Screen Content */}
              <div className="relative bg-slate-900 rounded-[30px] overflow-hidden pt-8 pb-4 px-3 border border-slate-800 min-h-[580px] flex flex-col justify-between text-white text-xs">
                <div>
                  {/* Header in Phone */}
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-0.5 bg-brand-500/10 rounded-lg border border-brand-500/25 shrink-0 overflow-hidden flex items-center justify-center">
                        <img
                          src={`${import.meta.env.BASE_URL}icon-192.png`}
                          alt="Palmedex Logo"
                          className="size-7 object-contain rounded-md"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xs leading-none">Palmedex</p>
                        <p className="text-[10px] text-brand-400 font-semibold">Medication Reference Tool</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="p-1 rounded bg-slate-800 text-brand-400">
                        <Wifi className="size-3.5" />
                      </span>
                      <span className="p-1 rounded bg-slate-800 text-amber-400">
                        <Moon className="size-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Search Input Frame */}
                  <div className="relative my-2">
                    <Search className="size-3.5 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      value="Search medication name, MAL nu..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-8 pr-3 py-2 text-[11px] text-slate-400 pointer-events-none"
                    />
                  </div>

                  {/* Filter Buttons */}
                  <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="bg-brand-600 text-white rounded-lg p-1.5 flex items-center justify-between font-medium text-[11px]">
                      <span className="flex items-center gap-1">
                        <Pill className="size-3" /> All Meds
                      </span>
                      <span className="bg-brand-900/60 px-1.5 py-0.5 rounded text-[10px]">{medications.length || 291}</span>
                    </div>
                    <div className="bg-amber-600/20 border border-amber-500/40 text-amber-400 rounded-lg p-1.5 flex items-center justify-between font-medium text-[11px]">
                      <span className="flex items-center gap-1">
                        <ShieldAlert className="size-3" /> Quota
                      </span>
                      <span className="bg-amber-500/30 px-1.5 py-0.5 rounded text-[10px]">{quotaCount || 16}</span>
                    </div>
                  </div>

                  {/* Mini Drug Items Mockup */}
                  <div className="space-y-2 mt-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      <p className="font-semibold text-slate-100 text-[11px]">Acetylsalicylic Acid 100 mg & Glyc...</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[9px] font-semibold">Cat B</span>
                        <span className="text-[9px] text-slate-400 font-mono">MDC: B01AC06-259</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800 border-2 border-amber-500 shadow-md">
                      <p className="font-semibold text-slate-100 text-[11px]">Etonogestrel 68mg Implant</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[9px] flex items-center gap-1">
                          <ShieldAlert className="size-2.5" /> Quota Control
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[9px] font-semibold">Cat A/KK</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      <p className="font-semibold text-slate-100 text-[11px]">Allopurinol 100 mg Tablet</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[9px] font-semibold">Cat A/KK</span>
                        <span className="text-[9px] text-slate-400 font-mono">MDC: M04AA01-000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footnote in Phone */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3 text-brand-400" /> Official PKD
                  </span>
                  <span className="font-mono">v2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
