/// <reference types="vitest" />
import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.tsx'),
      name: 'a11y-components',
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  test: {
    globals: true,
    include: ["./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    environment: "jsdom",
    coverage: {
        provider: "v8",
        reporter: ["text", "html", "clover", "json"],
        reportsDirectory: "./test/reports/coverage",
    },
  }
})
