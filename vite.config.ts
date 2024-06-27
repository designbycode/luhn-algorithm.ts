import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
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
