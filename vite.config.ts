import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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
