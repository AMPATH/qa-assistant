import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'https';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/openmrs': {
        target: 'https://dev3.openmrs.org',
        // target: 'http://localhost:8089',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  // server:{
  //   proxy:{
  //     '/openmrs': {
  //       target: 'http://localhost:8089/',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  test: {
    environment: 'jsdom',
  },
  setupFiles: './tests/setup.ts'
});
