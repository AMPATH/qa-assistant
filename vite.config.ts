import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'https';

export default defineConfig({
  server:{
    proxy:{
      '/openmrs': {
        // target: 'https://dev3.openmrs.org',
        target:'http://10.50.200.136:8089',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  setupFiles: './tests/setup.ts'
});
