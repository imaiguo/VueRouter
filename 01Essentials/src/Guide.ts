
// 入门
// Vue Router 是 Vue 官方的客户端路由解决方案。
// 客户端路由的作用是在单页应用 (SPA) 中将浏览器的 URL 和用户看到的内容绑定起来。当用户在应用中浏览不同页面时，URL 会随之更新，但页面不需要从服务器重新加载。
// Vue Router 基于 Vue 的组件系统构建，你可以通过配置路由来告诉 Vue Router 为每个 URL 路径显示哪些组件。

// 1. 示例
// 引入一些核心概念
// 使用了两个由 Vue Router 提供的组件: RouterLink 和 RouterView

// a. RouterLink 组件来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。
// b. RouterView 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的路由组件。
// 它不一定要在 App.vue 中，你可以把它放在任何地方，但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。
// c. {{ $route.fullPath }} 。你可以在组件模板中使用 $route 来访问当前的路由对象。

// 2. 创建路由器实例
// 路由器实例是通过调用 createRouter() 函数创建的
// routes 选项定义了一组路由，把 URL 路径映射到组件。
// 由component 参数指定的组件就是先前在Main.vue 中被<RouterView>渲染的组件。这些路由组件通常被称为视图，但本质上它们只是普通的Vue组件

// 3. 这里的history选项控制了路由和URL路径是如何双向映射的。
// 在演练场的示例里，我们使用了 createMemoryHistory()，它会完全忽略浏览器的URL而使用其自己内部的URL。 

// 4. 注册路由器插件
// 一旦创建了我们的路由器实例，我们就需要将其注册为插件，这一步骤可以通过调用use()来完成。

// 和大多数的 Vue 插件一样，use()需要在mount()之前调用。
// 如果你好奇这个插件做了什么，它的职责包括：
// a. 全局注册 RouterView 和 RouterLink 组件。
// b. 添加全局 $router 和 $route 属性。
// c. 启用 useRouter() 和 useRoute() 组合式函数。
// d. 触发路由器解析初始路由。

// 5. 访问路由器和当前路由
// 你很可能想要在应用的其他地方访问路由器。
// 在组件模板中，路由器实例将被暴露为 $router。这与同样被暴露的 $route 一样，但注意前者最后有一个额外的 r。
// 使用选项式 API，我们可以在 JavaScript 中如下访问这两个属性：this.$router 和 this.$route

// 组合式API，我们不能通过this访问组件实例，所以Vue Router给我们提供了一些组合式函数。
// 过useRouter()和useRoute()来访问路由器实例和当前路由。

import './assets/stylesA.css'

import { createApp } from 'vue'
import MainComponentA from './components/MainComponentA.vue'
import router from './router/Guide'

createApp(MainComponentA).use(router).mount('#Guide')