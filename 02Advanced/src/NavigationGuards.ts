
// 导航守卫
// 正如其名，vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。

// 1. 全局前置守卫
// 你可以使用 router.beforeEach 注册一个全局前置守卫

// 当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。
// 每个守卫方法接收两个参数：
// to: 即将要进入的目标 用一种标准化的方式
// from: 当前导航正要离开的路由 用一种标准化的方式

// 可以返回的值如下:
// false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
// 一个路由地址: 通过一个路由地址重定向到一个不同的地址，如同调用 router.push()，且可以传入诸如 replace: true 或 name: 'home' 之类的选项。它会中断当前的导航，同时用相同的 from 创建一个新导航。
//  router.beforeEach(async (to, from) => {
//    if (
//      // 检查用户是否已登录
//      !isAuthenticated &&
//      // ❗️ 避免无限重定向
//      to.name !== 'Login'
//    ) {
//      // 将用户重定向到登录页面
//      return { name: 'Login' }
//    }
//  })


// 2. 可选的第三个参数 next
// 在之前的 Vue Router 版本中，还可以使用 第三个参数 next 。这是一个常见的错误来源，我们经过 RFC 讨论将其移除。
// 然而，它仍然是被支持的，这意味着你可以向任何导航守卫传递第三个参数。在这种情况下，确保 next 在任何给定的导航守卫中都被严格调用一次。
// 它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。这里有一个在用户未能验证身份时重定向到/login的错误用例：

// // BAD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   // 如果用户未能验证身份，则 `next` 会被调用两次
//   next()
// })

// 下面是正确的版本:
// // GOOD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

// 3. 全局解析守卫
// 你可以用 router.beforeResolve 注册一个全局守卫。
// 这和 router.beforeEach 类似，因为它在每次导航时都会触发，不同的是，解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用。
// 这里有一个例子，根据路由在元信息中的 requiresCamera 属性确保用户访问摄像头的权限：

// router.beforeResolve(async to => {
//   if (to.meta.requiresCamera) {
//     try {
//       await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         // ... 处理错误，然后取消导航
//         return false
//       } else {
//         // 意料之外的错误，取消导航并把错误传给全局处理器
//         throw error
//       }
//     }
//   }
// })

// router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。

// 4. 全局后置钩子
// 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：

// router.afterEach((to, from) => {
//   sendToAnalytics(to.fullPath)
// })
// 它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。

// 它们也反映了 navigation failures 作为第三个参数：

// router.afterEach((to, from, failure) => {
//   if (!failure) sendToAnalytics(to.fullPath)
// })

// 5. 在守卫内的全局注入
// 从 Vue 3.3 开始，你可以在导航守卫内使用 inject() 方法。这在注入像 pinia stores 这样的全局属性时很有用。
// 在 app.provide() 中提供的所有内容都可以在 router.beforeEach()、router.beforeResolve()、router.afterEach() 内获取到：

// // main.ts
// const app = createApp(App)
// app.provide('global', 'hello injections')

// // router.ts or main.ts
// router.beforeEach((to, from) => {
//   const global = inject('global') // 'hello injections'
//   // a pinia store
//   const userStore = useAuthStore()
//   // ...
// })

// 6. 路由独享的守卫
// 你可以直接在路由配置上定义 beforeEnter 守卫：

// const routes = [
//   {
//     path: '/users/:id',
//     component: UserDetails,
//     beforeEnter: (to, from) => {
//       // reject the navigation
//       return false
//     },
//   },
// ]
// beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。
// 例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。它们只有在 从一个不同的 路由导航时，才会被触发。
// 你也可以将一个函数数组传递给 beforeEnter，这在为不同的路由重用守卫时很有用。
// function removeQueryParams(to) {
//   if (Object.keys(to.query).length)
//     return { path: to.path, query: {}, hash: to.hash }
// }

// function removeHash(to) {
//   if (to.hash) return { path: to.path, query: to.query, hash: '' }
// }

// const routes = [
//   {
//     path: '/users/:id',
//     component: UserDetails,
//     beforeEnter: [removeQueryParams, removeHash],
//   },
//   {
//     path: '/about',
//     component: UserDetails,
//     beforeEnter: [removeQueryParams],
//   },
// ]

// 当配合嵌套路由使用时，父路由和子路由都可以使用 beforeEnter。如果放在父级路由上，路由在具有相同父级的子路由之间移动时，它不会被触发。
// const routes = [
//   {
//     path: '/user',
//     beforeEnter() {
//       // ...
//     },
//     children: [
//       { path: 'list', component: UserList },
//       { path: 'details', component: UserDetails },
//     ],
//   },
// ]

// 7. 组件内的守卫
// 最后，你可以在路由组件内直接定义路由导航守卫(传递给路由配置的)

// 可用的配置 API，可以为路由组件添加以下配置：
// beforeRouteEnter
// beforeRouteUpdate
// beforeRouteLeave

// <script>
// export default {
//   beforeRouteEnter(to, from) {
//     // 在渲染该组件的对应路由被验证前调用
//     // 不能获取组件实例 `this` ！
//     // 因为当守卫执行时，组件实例还没被创建！
//   },
//   beforeRouteUpdate(to, from) {
//     // 在当前路由改变，但是该组件被复用时调用
//     // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
//     // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//     // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
//   },
//   beforeRouteLeave(to, from) {
//     // 在导航离开渲染该组件的对应路由时调用
//     // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
//   },
// }
// </script>
// beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

// 不过，你可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数：


// beforeRouteEnter (to, from, next) {
//   next(vm => {
//     // 通过 `vm` 访问组件实例
//   })
// }
// 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持 传递回调，因为没有必要了：

// beforeRouteUpdate (to, from) {
//   // just use `this`
//   this.name = to.params.name
// }
// 这个 离开守卫 通常用来预防用户在还未保存修改前突然离开。该导航可以通过返回 false 来取消。

// beforeRouteLeave (to, from) {
//   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
//   if (!answer) return false
// }

// 完整的导航解析流程
// a. 导航被触发。
// b. 在失活的组件里调用 beforeRouteLeave 守卫。
// c. 调用全局的 beforeEach 守卫。
// d. 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
// e. 在路由配置里调用 beforeEnter。
// f. 解析异步路由组件。
// g. 在被激活的组件里调用 beforeRouteEnter。
// h. 调用全局的 beforeResolve 守卫(2.5+)。
// i. 导航被确认。
// j. 调用全局的 afterEach 钩子。
// k. 触发 DOM 更新。
// l. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

import { createApp } from 'vue'
import NavigationGuards from './components/NavigationGuards.vue'
import router from './router/NavigationGuards'

const app = createApp(NavigationGuards)

app.use(router)

app.mount('#NavigationGuards')
