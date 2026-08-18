import { useState, useMemo, useEffect } from 'react';
import { Medication, FilterCategory } from '../types/formulary';
import { FormularyQueryEngine } from '../services/formularyQueryEngine';
import { Theme } from '../hooks/useTheme';
import { IntroHeader } from './intro/IntroHeader';
import { IntroHero } from './intro/IntroHero';
import { IntroLiveDemo } from './intro/IntroLiveDemo';
import { IntroQuotaSection } from './intro/IntroQuotaSection';
import { IntroNagSection } from './intro/IntroNagSection';
import { IntroScreenshotGallery } from './intro/IntroScreenshotGallery';
import { IntroInstallGuide } from './intro/IntroInstallGuide';
import { IntroCategoryGuide } from './intro/IntroCategoryGuide';
import { IntroFooter } from './intro/IntroFooter';

export interface IntroPageProps {
  theme: Theme;
  onToggleTheme: () => void;
  onLaunchApp: () => void;
  medications: Medication[];
}

export function IntroPage({
  theme,
  onToggleTheme,
  onLaunchApp,
  medications,
}: IntroPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
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

  const queryEngine = useMemo(
    () => new FormularyQueryEngine(medications),
    [medications]
  );

  const { displayed: displayedMedications, quotaCount } = useMemo(
    () => queryEngine.query(searchQuery, activeFilter),
    [queryEngine, searchQuery, activeFilter]
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-500 selection:text-white transition-colors duration-200">
      <IntroHeader
        theme={theme}
        isOnline={isOnline}
        onToggleTheme={onToggleTheme}
        onLaunchApp={onLaunchApp}
      />

      <main>
        <IntroHero
          medications={medications}
          quotaCount={quotaCount}
          onLaunchApp={onLaunchApp}
        />

        <IntroLiveDemo
          medications={medications}
          displayedMedications={displayedMedications}
          quotaCount={quotaCount}
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          onSearchChange={setSearchQuery}
          onFilterChange={setActiveFilter}
        />

        <IntroQuotaSection />

        <IntroNagSection />

        <IntroScreenshotGallery />

        <IntroInstallGuide />

        <IntroCategoryGuide />
      </main>

      <IntroFooter onLaunchApp={onLaunchApp} />
    </div>
  );
}
