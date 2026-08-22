import { createRouter, createWebHistory } from 'vue-router'
import DataFetchingLater from '../views/DataFetchingLater.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/html/DataFetching.html',
      redirect: '/fetchlater'
    },
    {
      path: '/fetchlater',
      component: DataFetchingLater,
    },
    {
      path: '/fetchbefore',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DataFetchingBefore.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  console.log("Router beforeEach")
  console.log(from)
  console.log(to)

  return true
})

export default router
