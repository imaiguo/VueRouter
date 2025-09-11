
// 路由的匹配语法
// 大多数应用都会使用 /about 这样的静态路由和 /users/:userId 这样的动态路由，就像我们刚才在动态路由匹配中看到的那样，但是 Vue Router 可以提供更多的方式！

// 1. 在参数中自定义正则

// 当定义像 :userId 这样的参数时，我们内部使用以下的正则 ([^/]+) (至少一个不是斜杠 / 的字符)来从 URL 中提取参数。
// 两个路由 /:orderId 和 /:productName，两者会匹配完全相同的 URL，所以我们需要一种方法来区分它们。

// a. 在路径中添加一个静态部分来区分它们, 这是最简单的方法

// b. 在括号中为参数指定一个自定义的正则
// 在某些情况下，我们并不想添加静态的 /o /p 部分。由于，orderId 总是一个数字，而 productName 可以是任何东西

// 现在，转到 /25 将匹配 /:orderId，其他情况将会匹配 /:productName。routes 数组的顺序并不重要!
// 确保转义反斜杠( \ )，就像我们对 \d (变成\\d)所做的那样，在 JavaScript 中实际传递字符串中的反斜杠字符。

// 2. 可重复的参数
// 如果你需要匹配具有多个部分的路由，如 /first/second/third，你应该用 *（0 个或多个）和 +（1 个或多个）将参数标记为可重复
// 将为你提供一个参数数组，而不是一个字符串，并且在使用命名路由时也需要你传递一个数组

// 可以通过在右括号后添加它们与自定义正则结合使用

// 3. Sensitive 与 strict 路由配置
// 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。
// 例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上

// 4. 可选参数
// 你也可以通过使用 ? 修饰符(0 个或 1 个)将一个参数标记为可选

import { createApp } from 'vue'
import RouteMatchingSyntax from './components/RouteMatchingSyntax.vue'
import router from './router/RouteMatchingSyntax'

createApp(RouteMatchingSyntax).use(router).mount('#RouteMatchingSyntax')
