import { useState, useEffect } from 'react';
import { Sun, Moon, Wifi, WifiOff, Download, Settings, ShieldCheck } from 'lucide-react';
import { Theme } from '../hooks/useTheme';
import { MOH_NAG_SECTION_C_URL } from '../data/nagSectionC';

export interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  isInstallable?: boolean;
  onInstallApp?: () => void;
  onOpenSettings?: () => void;
  onOpenNag?: () => void;
}

export function Header({
  theme,
  onToggleTheme,
  isInstallable,
  onInstallApp,
  onOpenSettings,
  onOpenNag,
}: HeaderProps) {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="pb-3.5 sm:pb-5 border-b border-slate-200 dark:border-slate-800/80 space-y-2.5 sm:space-y-3">
      {/* Tier 1: Brand Masthead & Quick Actions */}
      <div className="flex items-center justify-between gap-3">
        {/* Brand Left Lockup */}
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-2xl bg-teal-500/15 dark:bg-teal-500/20 blur-md pointer-events-none"
            />
            <div className="relative p-1 bg-white/95 dark:bg-slate-950/90 rounded-2xl border border-teal-500/25 dark:border-teal-500/30 shadow-md shadow-slate-200/50 dark:shadow-none flex items-center justify-center transition-colors">
              <img
                src={`${import.meta.env.BASE_URL}${theme === 'dark' ? 'icon-192.png' : 'icon-192-light.png'}`}
                alt="Palmedex Logo"
                className="size-11 sm:size-13 object-contain rounded-xl transition-opacity duration-200"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none">
              <span>Palme</span>
              <span className="text-teal-600 dark:text-teal-400">dex</span>
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-normal mt-1 truncate">
              Medication Reference Tool
            </p>
          </div>
        </div>

        {/* System Utilities (Right side of Tier 1) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Install App Button */}
          {isInstallable && (
            <button
              type="button"
              onClick={onInstallApp}
              aria-label="Install Palmedex App"
              title="Install Palmedex App"
              className="min-h-[40px] px-2.5 sm:px-3 py-1.5 bg-brand-500/10 dark:bg-brand-500/20 hover:bg-brand-500/20 dark:hover:bg-brand-500/30 border border-brand-500/30 text-brand-700 dark:text-brand-300 rounded-xl transition-all active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 cursor-pointer flex items-center gap-1.5"
            >
              <Download className="size-4 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              <span className="hidden md:inline text-xs font-bold">Install</span>
            </button>
          )}

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="min-h-[40px] min-w-[40px] p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 rounded-xl transition-all active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 cursor-pointer flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun className="size-4 sm:size-5 text-amber-500" aria-hidden="true" />
            ) : (
              <Moon className="size-4 sm:size-5 text-indigo-500" aria-hidden="true" />
            )}
          </button>

          {/* Settings Dialog Trigger Button */}
          {onOpenSettings && (
            <button
              type="button"
              onClick={onOpenSettings}
              aria-label="Open Settings and System Information"
              title="Settings & System Info"
              className="min-h-[40px] min-w-[40px] p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 rounded-xl transition-all active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 cursor-pointer flex items-center justify-center"
            >
              <Settings className="size-4 sm:size-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Tier 2: Telemetry & Clinical Governance Ribbon */}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        {/* Online/Offline Status Indicator */}
        <span
          aria-label={isOnline ? 'Online' : 'Offline'}
          className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold border shadow-xs transition-colors shrink-0 ${
            isOnline
              ? 'bg-brand-500/10 text-brand-700 dark:text-brand-300 border-brand-500/25'
              : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25'
          }`}
        >
          <span
            className={`size-2 rounded-full ${
              isOnline ? 'bg-brand-500 animate-pulse' : 'bg-amber-500'
            }`}
          />
          {isOnline ? (
            <>
              <Wifi className="size-3.5 text-brand-600 dark:text-brand-400" />
              <span>Online</span>
            </>
          ) : (
            <>
              <WifiOff className="size-3.5 text-amber-600 dark:text-amber-400" />
              <span>Offline</span>
            </>
          )}
        </span>

        {/* Clinical Guideline Link Button */}
        <a
          href={MOH_NAG_SECTION_C_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenNag}
          aria-label="Open MOH National Antibiotic Guideline Section C in Primary Care"
          title="MOH NAG Section C (Primary Care Clinical Pathways)"
          className="min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/15 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 rounded-lg transition-all active:scale-95 shadow-xs flex items-center gap-1.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          <ShieldCheck className="size-3.5 sm:size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-bold">MOH NAG</span>
        </a>
      </div>
    </header>
  );
}
