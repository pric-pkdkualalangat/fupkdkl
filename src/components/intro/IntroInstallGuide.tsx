import { Apple, Smartphone, QrCode, MoreVertical } from 'lucide-react';

export function IntroInstallGuide() {
  const appBaseUrl =
    typeof window !== 'undefined'
      ? window.location.origin + import.meta.env.BASE_URL
      : '';

  return (
    <section id="install-guide" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Installation Tutorial
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            How to Install as a PWA App
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Add Palmedex directly to your smartphone home screen for offline access without app store downloads.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* iOS Safari Step */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 relative shadow-sm">
            <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold mb-4">
              <Apple className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">iPhone / iPad (Safari)</h3>
            <ol className="space-y-3 mt-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">1.</span>
                <span>
                  Open URL in <strong>Safari Browser</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">2.</span>
                <span>
                  Tap the <strong>Share Button</strong> bottom bar.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">3.</span>
                <span>
                  Scroll down and select <strong>"Add to Home Screen"</strong>.
                </span>
              </li>
            </ol>
          </div>

          {/* Android Chrome Step */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 relative shadow-sm">
            <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold mb-4">
              <Smartphone className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Android (Google Chrome)</h3>
            <ol className="space-y-3 mt-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">1.</span>
                <span>
                  Open URL in <strong>Chrome Browser</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">2.</span>
                <span>
                  Tap the <strong>Three Dots Menu</strong> (<MoreVertical className="size-3.5 inline" />) top right.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-500">3.</span>
                <span>
                  Tap <strong>"Install App"</strong> or <strong>"Add to Home screen"</strong>.
                </span>
              </li>
            </ol>
          </div>

          {/* Desktop & QR Transfer Step */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between shadow-sm">
            <div>
              <div className="size-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold mb-4">
                <QrCode className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Scan to Mobile Device</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Scan with your smartphone camera to immediately open the formulary app.
              </p>
            </div>
            <div className="flex justify-center my-4 bg-white p-3 rounded-xl w-fit mx-auto shadow-md border border-slate-200">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(appBaseUrl || 'https://pric-pkdkualalangat.github.io/fupkdkl/')}`}
                alt="PKD Kuala Langat Formulary PWA QR Code"
                className="size-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
