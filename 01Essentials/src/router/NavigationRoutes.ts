import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeViewA.vue'
import About from '../views/AboutView.vue'
import User from '../views/User.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/user/:id', name: 'User', component: User, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
