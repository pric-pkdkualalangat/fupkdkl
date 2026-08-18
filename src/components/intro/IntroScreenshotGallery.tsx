import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { INTRO_SCREENSHOTS, ScreenshotItem } from './introData';

export function IntroScreenshotGallery() {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Eagerly prefetch all showcase screenshots in background so tab switching is instantaneous
    INTRO_SCREENSHOTS.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      img.onload = () => {
        setLoadedImages((prev) => (prev[item.src] ? prev : { ...prev, [item.src]: true }));
      };
    });
  }, []);

  const activeScreenshot: ScreenshotItem = INTRO_SCREENSHOTS[activeScreenshotIndex];
  const isCurrentImgLoaded = !!loadedImages[activeScreenshot.src];

  return (
    <section id="screenshots" className="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-brand-600 dark:text-brand-400 font-bold text-xs sm:text-sm tracking-wider uppercase">Visual Walkthrough</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Application Feature Showcase</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Explore high-resolution previews of the PWA user interface across dark mode, search filters, and settings.
          </p>
        </div>

        {/* MOBILE HORIZONTAL PILL SELECTOR (Mobile Viewports < 1024px) */}
        <div className="flex lg:hidden overflow-x-auto pb-2 gap-2 scrollbar-none mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {INTRO_SCREENSHOTS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveScreenshotIndex(index)}
              onMouseEnter={() => {
                const img = new Image();
                img.src = item.src;
              }}
              onTouchStart={() => {
                const img = new Image();
                img.src = item.src;
              }}
              className={`shrink-0 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeScreenshotIndex === index
                  ? 'bg-brand-600 text-white shadow-sm border border-brand-500/40'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Screenshot Thumbnail List (Desktop Viewports >= 1024px) */}
          <div className="hidden lg:block lg:col-span-5 space-y-2.5">
            {INTRO_SCREENSHOTS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveScreenshotIndex(index)}
                onMouseEnter={() => {
                  const img = new Image();
                  img.src = item.src;
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeScreenshotIndex === index
                    ? 'bg-brand-500/10 border-brand-500 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{item.description}</p>
                </div>
                <ChevronRight className={`size-4 shrink-0 transition-transform ${activeScreenshotIndex === index ? 'text-brand-500 translate-x-1' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Active Screenshot Display Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-800 shadow-2xl w-full">
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
                {!isCurrentImgLoaded && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10">
                    <div className="size-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-slate-400 font-medium">Loading showcase preview...</span>
                  </div>
                )}
                <img
                  key={activeScreenshot.src}
                  src={activeScreenshot.src}
                  alt={activeScreenshot.title}
                  width={1170}
                  height={2532}
                  decoding="async"
                  loading="eager"
                  fetchPriority={activeScreenshotIndex === 0 ? 'high' : 'auto'}
                  onLoad={() => {
                    setLoadedImages((prev) => ({ ...prev, [activeScreenshot.src]: true }));
                  }}
                  className={`w-full h-auto max-h-[540px] object-contain rounded-xl transition-opacity duration-200 ${
                    isCurrentImgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <div className="mt-3 px-2 text-center">
                <h3 className="font-bold text-white text-base">{activeScreenshot.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeScreenshot.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
