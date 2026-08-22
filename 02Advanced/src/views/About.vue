<template>
  <div class="page">
    <h2>About页面</h2>
    <div class="long">
      <p v-for="i in 100" :key="i">about内容 {{i}}</p>
    </div>
  </div>
</template>

<style scoped>
.page {padding:20px;}
.long {line-height:2.5;}
</style>
