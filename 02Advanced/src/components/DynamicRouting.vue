<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router';

import AboutView from '../views/AboutView.vue'

const router = useRouter()

async function onAbout(){
  console.log("About clicked.")
  router.addRoute({ path: '/about', component: AboutView })
  // 我们也可以使用 this.$route 或 useRoute()
  console.log(router.currentRoute.value.fullPath)
  await router.replace('/about')

}

function onOtherPage(){
  router.push('/otherpage')

  // 提取核心字段，方便看日志
  const formatRoutes = (list) => {
    return list.map(item => ({
      path: item.path,
      name: item.name,
      meta: item.meta,
      children: item.children?.length ? formatRoutes(item.children) : []
    }))
  }

  console.log('格式化后的全部路由：', formatRoutes(router.getRoutes()))

  const allRoutes = router.getRoutes()
  allRoutes.forEach(route => {
    console.log(route.path, route.meta)
  })


}

</script>

<template>
  <div class="greetings">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink> <br/>
      <button v-on:click="onAbout">About</button>
      <button v-on:click="onOtherPage">OtherPage</button>
    </nav>
    <h3>
      动态路由
    </h3>
  </div>
  <router-view v-slot="{ Component, route }">
      <!-- 重点：绑定 key="route.path"，路由变化key变化，才会触发transition -->
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>