<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const hasUnsaved = ref(true) // 是否存在未保存修改

// ✅组件内离开守卫，替代旧选项式 beforeLeave
onBeforeRouteLeave((to, from, next) => {
  if (hasUnsaved.value) {
    next(false) // 中止导航 → push 返回 aborted failure 对象
  } else {
    next()
  }
})

</script>

<template>
  <div class="about">
    <h1>This is an Edit page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

