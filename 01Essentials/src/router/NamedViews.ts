
import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Third from '../views/Third.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: First,
        a: Second,
        b: Third,
      },
    },
    {
      path: '/other',
      components: {
        default: Third,
        a: Second,
        b: First,
      },
    },
  ],
})

export default router
