/* ~~/vite.config.js */
import autoImport from 'unplugin-auto-import/vite'
import autoPrefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'

export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [tailwind(), autoPrefixer()],
    },
  },
  plugins: [
    autoImport({
      include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['pinia', 'vue'],
    }),
    svgLoader(),
    vue(),
  ],
  publicDir: path.resolve(__dirname, './static'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
