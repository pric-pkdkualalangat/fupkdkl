export function IntroCategoryGuide() {
  return (
    <section id="categories" className="py-16 bg-white dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Clinical Standards
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Medication Categories Legend
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Understanding category badges and prescribing authorizations across Ministry of Health (MOH) facilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="px-2.5 py-1 rounded-md bg-brand-500/20 text-brand-600 dark:text-brand-300 font-bold text-xs inline-block mb-3">
              Cat A/KK
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Specialist / KK Medical Officer</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Restricted to Specialists or Medical Officers stationed at Health Clinics (Klinik Kesihatan).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold text-xs inline-block mb-3">
              Cat A*
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Specialist Consultant Only</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Strictly restricted to Consultant Specialists or registered clinical discipline heads.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-300 font-bold text-xs inline-block mb-3">
              Cat B
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Medical Officers & Dentists</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Prescribable by all registered Medical Officers and Dental Officers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold text-xs inline-block mb-3">
              Cat C
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Paramedical Staff (AMO/Nurse)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Authorized for Assistant Medical Officers and trained Staff Nurses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
