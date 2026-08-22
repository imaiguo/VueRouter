import { createRouter, createWebHistory } from 'vue-router'
import CompositionAPI from '../views/CompositionAPI.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/html/CompositionAPI.html',
      redirect: '/:id'
    },
    {
      path: '/:id',
      component: CompositionAPI,
    }
  ],
})

router.beforeEach((to, from) => {
  console.log("Router beforeEach")
  console.log(from)
  console.log(to)

  return true
})

export default router
