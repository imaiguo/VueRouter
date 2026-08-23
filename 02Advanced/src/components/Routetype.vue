<template>
  <h1>类型化路由</h1>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

// TS自动校验name和params
router.push({ name: 'user', params: { userId: 1001 } })
</script>


<style scoped>
.nav {
  display: flex;
  gap: 20px;
  padding:16px;
  background:#eee;
}
a {
  text-decoration: none;
}
.router-link-active {
  color:#409eff;
  font-weight:bold;
}
</style>
