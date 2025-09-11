
<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

console.log(route.params)

watch(()=> route.params, (newparams, oldparams) => {
    console.log('old ->' + oldparams)
    console.log('new ->' + newparams)
  })
</script>

<template>
  <h2>
    NotFound
  </h2>
  <div> {{ route.params }}</div>
</template>
