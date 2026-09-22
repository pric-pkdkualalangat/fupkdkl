export interface IntroFooterProps {
  onLaunchApp: () => void;
}

export function IntroFooter({ onLaunchApp }: IntroFooterProps) {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-brand-500/10 dark:bg-brand-500/15 rounded-xl border border-brand-500/25 shadow-sm shrink-0 overflow-hidden flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}icon-192-light.png`}
              alt=""
              aria-hidden="true"
              className="size-8 object-contain rounded-lg dark:hidden"
            />
            <img
              src={`${import.meta.env.BASE_URL}icon-192.png`}
              alt="Palmedex Logo"
              className="size-8 object-contain rounded-lg hidden dark:block"
            />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-900 dark:text-white">
              Palmedex — Medication Reference Tool
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pejabat Kesihatan Daerah Kuala Langat
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <button
            type="button"
            onClick={onLaunchApp}
            className="text-brand-600 dark:text-brand-400 hover:underline font-bold cursor-pointer flex items-center gap-1"
          >
            <span>Launch Main App</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
