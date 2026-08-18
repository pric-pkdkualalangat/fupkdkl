import { ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';
import { MOH_NAG_SECTION_C_URL, NAG_SECTION_C_PATHWAYS } from '../../data/nagSectionC';

export function IntroNagSection() {
  return (
    <section id="nag-guidelines" className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="size-4" />
            <span>Section C: Primary Care Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            National Antibiotic Guideline Integration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Medications under the FUKKM category <span className="font-semibold text-slate-800 dark:text-slate-200">Antiinfectives for Systemic Use &gt; Antibacterials for Systemic Use</span> are connected to Ministry of Health (MOH) Malaysia outpatient clinical pathways.
          </p>
        </div>

        {/* 3 Key Integration Aspects */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="size-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Automatic Detection</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The formulary automatically identifies antibacterial agents and displays relevant Section C recommendations in medication details.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="size-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">9 Primary Care Pathways</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Standardized empirical regimens covering common respiratory, soft tissue, gastroenteritis, and urinary tract infections.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="size-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Direct MOH Access</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              External deep links open the official Ministry of Health Google Sites portal directly for full clinical flowcharts and dosing tables.
            </p>
          </div>
        </div>

        {/* 9 Clinical Pathways Grid */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
              <BookOpen className="size-5 text-emerald-600 dark:text-emerald-400" />
              <span>Primary Care Clinical Pathways (C1–C9)</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Official MOH Malaysia Standards
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NAG_SECTION_C_PATHWAYS.map((pathway) => (
              <div
                key={pathway.code}
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-xl p-4 space-y-2 flex flex-col justify-between shadow-xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      {pathway.code}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {pathway.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                {pathway.commonPathogens && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700/50 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Key Pathogens: </span>
                    <span className="italic">{pathway.commonPathogens}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* External Action Button */}
        <div className="text-center pt-2">
          <a
            href={MOH_NAG_SECTION_C_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
          >
            <BookOpen className="size-4" />
            <span>Open MOH Section C Clinical Pathways Portal</span>
            <ExternalLink className="size-3.5 ml-0.5 opacity-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
