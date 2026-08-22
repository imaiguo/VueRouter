import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/html/NavigationGuards.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  console.log("Router beforeEach")
  console.log(from)
  console.log(to)

  return true

  // if(to.path == "/about")
  //   return true
  // 返回 false 以取消导航
  return false
})

export default router
