<template>
  <nav class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于页</router-link>
    <router-link to="/detail#section2">详情页锚点跳转到section2</router-link>
  </nav>
  <router-view />
</template>

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
