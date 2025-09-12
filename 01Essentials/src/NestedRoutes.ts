
// 嵌套路由
// 一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套组件结构
// 这里的 <router-view> 是一个顶层的 router-view。它渲染顶层路由匹配的组件。同样地，一个被渲染的组件也可以包含自己嵌套的 <router-view>

// children 配置只是另一个路由数组，就像 routes 本身一样。因此，你可以根据自己的需要，不断地嵌套视图。
// 此时，按照上面的配置，当你访问 /user/eduardo 时，在 User 的 router-view 里面什么都不会呈现，因为没有匹配到嵌套路由。
// 也许你确实想在那里渲染一些东西。在这种情况下，你可以提供一个空的嵌套路径

// 1. 嵌套的命名路由
// 在处理命名路由时，你通常会给子路由命名

// 2. 忽略父组件 4.1+
// 我们还可以仅利用路由的父子关系，但不嵌套路由组件。这对于将具有公共路径前缀的路由分组在一起或使用更高级的功能时很有用，例如：路由独享的守卫或路由元信息。
// 为了实现这一点, 我们在父路由中省略了 component 和 components 选项
// 由于父级没有指定路由组件，顶级 <router-view> 将跳过父级并仅使用子路由组件。

import { createApp } from 'vue'
import NestedRoutes from './components/NestedRoutes.vue'
import router from './router/NestedRoutes'

createApp(NestedRoutes).use(router).mount('#NestedRoutes')
