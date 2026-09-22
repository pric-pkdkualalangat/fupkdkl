import { Loader2 } from 'lucide-react';

export interface ColdBootSplashProps {
  message?: string;
}

export function ColdBootSplash({
  message = 'Initializing clinical medication database...',
}: ColdBootSplashProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Palmedex application"
      className="flex flex-col items-center justify-center py-12 px-4 space-y-6 text-center animate-in fade-in duration-300"
    >
      {/* Brand Emblem with Ambient Pulse Glow */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Halo Glow */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-teal-400/10 to-amber-400/10 blur-xl animate-pulse"
        />

        {/* Concentric Telemetry Ring */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-3xl border border-teal-500/30 dark:border-teal-400/25 animate-ping opacity-25"
          style={{ animationDuration: '3s' }}
        />

        {/* Emblem Frame */}
        <div className="relative p-2 bg-white/95 dark:bg-slate-950/90 rounded-3xl border border-teal-500/20 dark:border-teal-500/30 shadow-2xl shadow-teal-900/10 dark:shadow-teal-950/50 backdrop-blur-md">
          <img
            src={`${import.meta.env.BASE_URL}icon-192-light.png`}
            alt=""
            aria-hidden="true"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl dark:hidden"
          />
          <img
            src={`${import.meta.env.BASE_URL}icon-192.png`}
            alt="Palmedex Emblem"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl hidden dark:block"
          />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          <span>Palme</span>
          <span className="text-teal-600 dark:text-teal-400">dex</span>
        </h2>
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
          Medication Reference Tool • PKD Kuala Langat
        </p>
      </div>

      {/* Telemetry Status & Animated ECG Waveform */}
      <div className="flex flex-col items-center space-y-3 pt-1">
        {/* Mini ECG Pulse Waveform */}
        <div
          aria-hidden="true"
          className="w-36 h-6 flex items-center justify-center text-teal-500/80 dark:text-teal-400/80 overflow-hidden"
        >
          <svg
            viewBox="0 0 120 24"
            fill="none"
            className="w-full h-full stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M0 12h35l4-8 6 16 6-12 4 4h65"
              className="stroke-teal-500 dark:stroke-teal-400 animate-pulse"
            />
          </svg>
        </div>

        {/* Status Message */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/70 text-xs font-semibold text-teal-700 dark:text-teal-300 shadow-sm">
          <Loader2 className="size-3.5 animate-spin text-teal-600 dark:text-teal-400" />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
