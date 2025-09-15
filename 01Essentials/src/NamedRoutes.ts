
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import NamedRoutes from './components/NamedRoutes.vue'
import Home from './views/HomeViewA.vue'
import About from './views/AboutViewA.vue'
import User from './views/User.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/user/:username', name: 'profile', component: User },
  ],
})

createApp(NamedRoutes).use(router).mount('#NamedRoutes')