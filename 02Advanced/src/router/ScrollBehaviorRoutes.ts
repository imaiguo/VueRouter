import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

const routes = [
  { path: '/html/ScrollBehavior.html', redirect: '/'},
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/detail', name: 'Detail', component: Detail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // ✨路由滚动行为，每次切换路由触发
  scrollBehavior(to, from, savedPosition) {
    // savedPosition：浏览器前进/后退时保存的滚动位置
    if (savedPosition) {
      // 浏览器回退前进，恢复上次滚动位置
      return savedPosition
    } else if (to.hash) {
      // 有锚点 #xxx，滚动到对应元素
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      // 默认：切换新路由回到页面顶部
      return { top: 0, left: 0 }
    }
  }
})

export default router
