import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'src/pages/portfolio/index.html'),
        socialnetworks: resolve(__dirname, 'src/pages/socialnetworks/index.html'),
        uslugi: resolve(__dirname, 'src/pages/uslugi/index.html'),

      },
    },
  },
})