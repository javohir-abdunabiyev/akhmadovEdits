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
        imgs: resolve(__dirname, 'imgs/adaptedMenu.png'),
        imgs: resolve(__dirname, 'imgs/instagram.webp'),
        imgs: resolve(__dirname, 'imgs/instLogo.png'),
        imgs: resolve(__dirname, 'imgs/logo.png'),
        imgs: resolve(__dirname, 'imgs/telegram.webp'),
        imgs: resolve(__dirname, 'imgs/tiktok.png'),
        imgs: resolve(__dirname, 'imgs/whiteTg.png'),
        imgs: resolve(__dirname, 'imgs/whiteTiktok.png'),

      },
    },
  },
})