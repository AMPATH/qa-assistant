import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'https';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/openmrs': {
        target: 'https://dev3.openmrs.org',
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
