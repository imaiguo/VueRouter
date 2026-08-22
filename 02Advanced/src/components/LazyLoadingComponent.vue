<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="greetings">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink> <br/>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <h3>
      路由懒加载
    </h3>
  </div>
  <!-- <RouterView></RouterView> -->
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