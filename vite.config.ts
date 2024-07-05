import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["json-summary", "text", "json"],
      reportOnFailure: true,
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
