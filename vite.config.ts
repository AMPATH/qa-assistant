import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Server } from "https";

export default defineConfig({
  server: {
    proxy: {
      "/openmrs": {
        target: "https://dev3.openmrs.org",
        //target: "http://localhost:8088",
        // target:"https://kibana.ampath.or.ke/",
        //target: "http://10.50.200.136:8089",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  setupFiles: "./tests/setup.ts",
});
