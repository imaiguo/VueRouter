
import { createRouter, createWebHistory } from 'vue-router'
import UserGeneric from '../views/UserGeneric.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 匹配 /o/3549
    { path: '/o/:orderId', component: UserGeneric},
    // 匹配 /p/books
    { path: '/p/:productName', component: UserGeneric},

    // /:orderId -> 仅匹配数字
    { path: '/:orderId(\\d+)', component: UserGeneric},
    // /:productName -> 匹配其他任何内容
    { path: '/:productName', component: UserGeneric},
  
    // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
    { path: '/:chapters+', component: UserGeneric},
    // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
    { path: '/:chapters*', component: UserGeneric},

    // 仅匹配数字
    // 匹配 /1, /1/2, 等
    { path: '/:number(\\d+)+', component: UserGeneric },
    // 匹配 /, /1, /1/2, 等
    { path: '/:number(\\d+)*', component: UserGeneric },

    // 将匹配 /users/posva 而非：
    // - /usersa/posva/ 当 strict: true
    // - /Usersa/posva 当 sensitive: true
    { path: '/usersa/:id', sensitive: true, component: UserGeneric},
    // 将匹配 /usersa, /Usersa, 以及 /usersa/42 而非 /usersa/ 或 /usersa/42/
    { path: '/usersa/:id?', component: UserGeneric},

    // 匹配 /usersb 和 /usersb/posva
    { path: '/usersb/:userId?', component: UserGeneric},
    // 匹配 /usersc 和 /usersc/42
    { path: '/usersc/:usersc(\\d+)?', component: UserGeneric},
  ],
  strict: true, // applies to all routes
})

export default router
