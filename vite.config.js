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
        instagram: resolve(__dirname, 'imgs/instagram.webp'),
        instLogo: resolve(__dirname, 'imgs/instLogo.png'),
        logo: resolve(__dirname, 'imgs/logo.png'),
        telegram: resolve(__dirname, 'imgs/telegram.webp'),
        tiktok: resolve(__dirname, 'imgs/tiktok.png'),
        whiteTg: resolve(__dirname, 'imgs/whiteTg.png'),
        whiteTiktok: resolve(__dirname, 'imgs/whiteTiktok.png'),

      },
    },
  },
})