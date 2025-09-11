
import { createRouter, createWebHistory } from 'vue-router'
import UserPost from '../views/UserPost.vue'
import NotFound from '../views/NotFound.vue'
import UserGeneric from '../views/UserGeneric.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/users/:username/posts/:postId', component: UserPost },
    
    // 捕获所有路由或 404 Not found 路由
    // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `route.params.afterUser` 下
    { path: '/user-:afterUser(.*)', component: UserGeneric }
  ],
})

export default router
