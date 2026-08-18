import { Sun, Moon, ExternalLink, WifiOff } from 'lucide-react';
import { Theme } from '../../hooks/useTheme';

export interface IntroHeaderProps {
  theme: Theme;
  isOnline: boolean;
  onToggleTheme: () => void;
  onLaunchApp: () => void;
}

export function IntroHeader({
  theme,
  isOnline,
  onToggleTheme,
  onLaunchApp,
}: IntroHeaderProps) {
  return (
    <>
      {/* Offline Alert Banner */}
      {!isOnline && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 text-amber-700 dark:text-amber-300 px-4 py-2.5 text-center text-xs font-semibold flex items-center justify-center gap-2">
          <WifiOff className="size-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>
            Active Internet Connection Required — High-resolution showcase assets and live presentation updates on /intro require network connectivity.
          </span>
        </div>
      )}

      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 overflow-hidden">
          {/* Brand Logo & Title */}
          <button
            type="button"
            onClick={onLaunchApp}
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0 flex-1"
          >
            <div className="p-1 bg-brand-500/10 dark:bg-brand-500/15 rounded-xl sm:rounded-2xl border border-brand-500/25 shadow-sm shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={`${import.meta.env.BASE_URL}icon-192.png`}
                alt="PKDKL Formulary Logo"
                className="size-8 sm:size-10 object-contain rounded-lg sm:rounded-xl"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-extrabold text-xs sm:text-base leading-tight text-slate-900 dark:text-white tracking-tight truncate">
                District Drug Formulary <span className="text-brand-600 dark:text-brand-400">PKD Kuala Langat</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                Pejabat Kesihatan Daerah Kuala Langat
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 shrink-0">
            <a href="#overview" className="hover:text-brand-500 transition-colors">
              Overview
            </a>
            <a href="#interactive-demo" className="hover:text-brand-500 transition-colors">
              Live Search Demo
            </a>
            <a href="#quota-system" className="hover:text-brand-500 transition-colors">
              Quota Control
            </a>
            <a href="#nag-guidelines" className="hover:text-brand-500 transition-colors">
              NAG Guidelines
            </a>
            <a href="#screenshots" className="hover:text-brand-500 transition-colors">
              App Showcase
            </a>
            <a href="#install-guide" className="hover:text-brand-500 transition-colors">
              Install Guide
            </a>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-all cursor-pointer min-w-[40px] sm:min-w-[44px] min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="size-4 sm:size-5 text-amber-500" />
              ) : (
                <Moon className="size-4 sm:size-5 text-indigo-500" />
              )}
            </button>

            {/* Launch App Button */}
            <button
              type="button"
              onClick={onLaunchApp}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-600/30 transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <span>Launch App</span>
              <ExternalLink className="size-3.5 sm:size-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
