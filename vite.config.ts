import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/pdf.worker.min.js',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  test: {
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
});
