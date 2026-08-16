import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue'

const routes = [
  //当访问 /home，重定向到 /
  { path: '/home', redirect: '/RedirectAndAliasRoute' },
  { path: '/html/RedirectAndAlias.html', redirect: '/RedirectAndAliasRoute'},
  {
    path: '/RedirectAndAliasRoute',
    component: First
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


