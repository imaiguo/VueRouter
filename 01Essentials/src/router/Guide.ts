
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeViewA.vue'
import AboutView from '../views/AboutViewA.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
