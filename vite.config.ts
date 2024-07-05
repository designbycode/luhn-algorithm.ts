import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
    test: {
    alias: {
      "@/": resolve(__dirname, "src"),
    },
    coverage: {
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
      provider: "istanbul",
      reporter: ["json-summary", "text", "json"],
      reportOnFailure: true
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@designbycode/luhn-algorithm",
      fileName: "index",
    },
    minify: "terser",
  },
  plugins: [dts()],
})
