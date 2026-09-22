/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

const now = new Date();
const buildStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}.${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
const buildId = `v2.0.#${buildStamp}`;
const buildTime = now.toLocaleString('en-GB', {
  dateStyle: 'medium',
  timeStyle: 'medium',
});

function rootPwaAssetsFallback(): import('vite').Plugin {
  return {
    name: 'root-pwa-assets-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const rootAssets = [
          '/apple-touch-icon.png',
          '/apple-touch-icon-light.png',
          '/apple-touch-icon-precomposed.png',
          '/favicon.ico',
          '/favicon-32x32.png',
          '/favicon-32x32-light.png',
          '/favicon-16x16.png',
          '/favicon-16x16-light.png',
          '/icon-192.png',
          '/icon-192-light.png',
          '/icon-512.png',
          '/icon-512-light.png',
          '/maskable-icon.png',
          '/manifest.webmanifest',
        ];
        if (req.url && rootAssets.includes(req.url)) {
          req.url = `/fupkdkl${req.url}`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: '/fupkdkl/',
  define: {
    __APP_BUILD_ID__: JSON.stringify(buildId),
    __APP_BUILD_TIME__: JSON.stringify(buildTime),
  },
  plugins: [
    react(),
    tailwindcss(),
    rootPwaAssetsFallback(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        'favicon.ico',
        'favicon-32x32.png',
        'favicon-32x32-light.png',
        'favicon-16x16.png',
        'favicon-16x16-light.png',
        'apple-touch-icon.png',
        'apple-touch-icon-light.png',
        'icon-192.png',
        'icon-192-light.png',
        'icon-512.png',
        'icon-512-light.png',
        'maskable-icon.png',
        'fonts/*.woff2',
      ],
      manifest: {
        name: 'Palmedex',
        short_name: 'Palmedex',
        description: 'Offline-first clinical medication reference tool for PKD Kuala Langat',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/fupkdkl/',
        start_url: '/fupkdkl/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        globIgnores: ['**/intro-assets/**'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /\/intro-assets\/.*\.(?:png|jpg|jpeg|svg|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'intro-assets-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['node_modules', 'e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'e2e/**',
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/types/**',
        '*.config.ts',
        'src/test/**',
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
