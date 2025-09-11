
// 带参数的动态路由匹配

// 1. 映射到同一个路由
// 很多时候，我们需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。
// 在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 路径参数

// 现在像 /users/johnny 和 /users/jolyne 这样的 URL 都会映射到同一个路由。
// 路径参数 用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 route.params 的形式暴露出来。

// 可以在同一个路由中设置有多个 路径参数，它们会映射到 $route.params 上的相应字段。

// 2. 响应路由参数的变化
// 使用带有参数的路由时需要注意的是，当用户从 /users/johnny 导航到 /users/jolyne 时，相同的组件实例将被重复使用。
// 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会被调用。
// 要对同一个组件中参数的变化做出响应的话，你可以简单地 watch $route 对象上的任意属性，在这个场景中，就是 $route.params

// 3. 捕获所有路由或404 Not found路由
// 常规参数只匹配 url 片段之间的字符，用 / 分隔。如果我们想匹配任意路径，我们可以使用自定义的 路径参数 正则表达式，在 路径参数 后面的括号中加入 正则表达式

import { createApp } from 'vue'
import DynamicMatching from './components/DynamicMatching.vue'
import router from './router/DynamicMatching'

createApp(DynamicMatching).use(router).mount('#DynamicMatching')
