import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hapAlinka/', // для локальной разработки
  // Если будете деплоить на GitHub Pages, раскомментируйте:
  // base: '/hapAlinka/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    open: true // автоматически открывать браузер
  }
})