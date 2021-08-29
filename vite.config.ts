import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 在生产中的基本公共路径
   * @default '/'
   */
  base: './',
  plugins: [vue()]
})
