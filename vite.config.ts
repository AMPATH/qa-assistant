import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'https';

export default defineConfig({
  server:{
    proxy:{
      '/openmrs': "http://localhost:8089/"
    },
  },
  plugins: [react()],
  test: {
    globals:true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  // setupFiles: './tests/setup.ts'
});
