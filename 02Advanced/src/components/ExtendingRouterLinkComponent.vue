<script setup>
import MyRouterLink from './MyRouterLink.vue'
</script>

<template>
  <div>
    <!-- 内部路由跳转 -->
    <MyRouterLink to="/home" active-class="text-blue-500 font-bold" inactive-class="text-gray-600">
      首页
    </MyRouterLink><br/>

    <MyRouterLink to="/about" active-class="text-blue-500 font-bold" inactive-class="text-gray-600">
      关于我们
    </MyRouterLink><br/>

    <!-- 外部链接，自动新窗口打开 -->
    <MyRouterLink to="https://baidu.com">
      Baidu 外部链接
    </MyRouterLink>
    <RouterView></RouterView>
  </div>
</template>
