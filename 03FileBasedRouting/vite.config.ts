import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // 全局设置扩展名
      extensions: ['.vue', '.md'],
      // routesFolder: 'src/pages', // 文件路由目录
      routesFolder: [
        'src/pages',
        'src/admin',
        {
          src: 'src/test/routes',
          // 注意总是有尾部斜杠，并且前面头部斜杠
          path: 'test/',
          // src/test/routes/dashboard.vue -> /test/dashboard
        },
        {
          src: 'src/docs',
          // 你可以添加参数
          path: 'docs/:lang/',
          // src/docs/introduction.vue -> /docs/:lang/introduction
        },
        {
          src: 'src/promos',
          // 你可以省略尾部斜杠
          path: 'promos-',
          // src/promos/black-friday.vue -> /promos-black-friday
        },
        {
          src: 'src/markdown',
          path: 'markdown/',
          // 覆盖全局扩展名以 **仅** 接受 markdown 文件
          extensions: ['.md'],
        },
      ],

    }),
    // ⚠️ Vue 必须放在 VueRouter() 之后
    vue({
        include: [/\.vue$/, /\.md$/]
      }),
    // markdown转vue组件
    Markdown({
      // headEnabled: true, // 开启 frontmatter 解析
      // headEnabled: true,
      frontmatter: true,
    }),
    vueDevTools()
  ],
  server: {
      host: "0.0.0.0",
      port: 80,
  },
  build: {
      outDir: 'dist', // 输出路径，默认为 dist
      assetsDir: 'assets', // 静态资源文件夹名
      assetsInlineLimit: 4096, // 小于此大小的导入或引用资源将内联为 base64 编码，以减少 HTTP 请求
      cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
      sourcemap: true, // 开发服务强制开启 调试的时候设置true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
