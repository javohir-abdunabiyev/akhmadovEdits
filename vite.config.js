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
        adaptedMenu: resolve(__dirname, 'imgs/adaptedMenu.png'),
        imgs: 'imgs/instagram.webp',
        instLogo: resolve('imgs/instLogo.png'),
        imgs: resolve('imgs/logo.png'),
        telegram: resolve('imgs/telegram.webp'),
        tiktok: resolve('imgs/tiktok.png'),
        whiteTg: resolve('imgs/whiteTg.png'),
        whiteTiktok: resolve('imgs/whiteTiktok.png'),

      },
    },
  },
})