import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherPage from '../views/OtherPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/html/DynamicRouting.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

router.beforeEach((to, from) => {
  // 避免重复无限跳转：from 和 to 相同直接放行
  if (to.fullPath === from.fullPath) return

  console.log("Router beforeEach")
  console.log(from)
  console.log(to)

  console.log("hasRoute->" + router.hasRoute(to.name))

  if(!router.hasRoute(to.name)){
    if(to.path == "/otherpage"){
      const result = router.addRoute({ path: '/otherpage', component: OtherPage })
      console.log("hasNecessaryRoute to.Path:" + to.fullPath)
      console.log(result)
      // 触发重定向 有问题
      // return to.fullPath
    }
  }

  return true
})

export default router
