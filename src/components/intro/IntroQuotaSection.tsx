import {
  ShieldAlert,
  AlertTriangle,
  Filter,
  Lock,
  ChevronRight,
} from 'lucide-react';

export function IntroQuotaSection() {
  return (
    <section id="quota-system" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-3">
              <ShieldAlert className="size-4" />
              <span>High-Risk & Allocation Management</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Neon-Yellow Quota Alert System
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              To prevent over-prescribing and ensure fair distribution across Kuala Langat health clinics, 16 critical formulations are tagged under strict <strong>Quota Control</strong>.
            </p>

            <ul className="space-y-3.5 mt-6 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <AlertTriangle className="size-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Visual Highlighting:</strong> Quota items are styled with neon-yellow glowing borders for instant clinical visual recognition.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Filter className="size-5 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  <strong>One-Tap Filter:</strong> Switch seamlessly between the complete medication registry and the 16 quota-controlled list.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="size-5 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Category Rules:</strong> Clear prescribing authority tags (e.g., Cat A*, Cat A/KK) directly displayed on the card header.
                </span>
              </li>
            </ul>
          </div>

          {/* Quota Visual Card Examples */}
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-500 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Etonogestrel 68mg Implant</h3>
                <ChevronRight className="size-5 text-slate-400" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1">
                  <ShieldAlert className="size-3.5" /> Quota Control
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-500/20 text-brand-600 dark:text-brand-300 font-semibold text-xs">
                  Cat A/KK
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">MDC: G03AC08-000-P10-01-XXX</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-500 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Insulin Aspart 100 IU/ml Injection</h3>
                <ChevronRight className="size-5 text-slate-400" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1">
                  <ShieldAlert className="size-3.5" /> Quota Control
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-500/20 text-brand-600 dark:text-brand-300 font-semibold text-xs">
                  Cat A/KK
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">MDC: A10AB05000P3001XX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
