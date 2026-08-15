import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:"127.0.0.1",
    port: 80
  },
  build: {
      outDir: 'dist', // 输出路径，默认为 dist
      assetsDir: 'assets', // 静态资源文件夹名
      assetsInlineLimit: 4096, // 小于此大小的导入或引用资源将内联为 base64 编码，以减少 HTTP 请求
      cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
      sourcemap: true, // 开发服务强制开启 调试的时候设置true
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
