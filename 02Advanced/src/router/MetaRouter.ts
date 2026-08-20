import { createRouter, createWebHistory } from 'vue-router'
import PostsLayout from '../views/PostsLayout.vue'
import PostsNew from '../views/PostsNew.vue'
import PostsID from '../views/PostsDetail.vue'
import LogIn from '../views/LogIn.vue'

import { auth } from '../utils/Auth.ts'

const routes = [
  {
    path: '/html/Meta.html',
    redirect: '/posts'
  },
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/login',
    component: LogIn,
  },
  {
    path: '/posts',
    component: PostsLayout,
  },
  {
    path: '/user',
    component: PostsNew,
    // 只有经过身份验证的用户才能创建帖子
    meta: { requiresAuth: false },
  },
  {
    path: '/id',
    component: PostsID,
    // 任何人都可以阅读文章
    meta: { requiresAuth: false },
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  console.log(from)
  console.log(to)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})

export default router
