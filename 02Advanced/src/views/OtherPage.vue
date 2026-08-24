<template>
  <div class="page">
    <h2>Other 页面</h2>
    <div class="long">
      <p v-for="i in 10" :key="i">about内容 {{i}}</p>
    </div>
  </div>
</template>

<style scoped>
.page {padding:20px;}
.long {line-height:2.5;}
</style>
