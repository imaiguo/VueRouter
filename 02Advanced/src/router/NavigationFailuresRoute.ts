
import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import EditArticle from '../views/EditArticle.vue'
import OtherPage from '../views/OtherPage.vue'

const routes = [
  {
    path: '/articles/2',
    component: EditArticle,
  },
  {
    path: '/html/NavigationFailures.html',
    redirect: '/articles/2'
  },
  { path: '/other-page', component: OtherPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router/index.js
router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('全局检测路由失败：', failure.type, failure)
  }
})



export default router

