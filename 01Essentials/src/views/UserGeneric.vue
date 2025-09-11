
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
  <div>
    {{ route.params }}
  </div>
</template>
