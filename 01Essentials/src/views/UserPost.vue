
<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

watch(()=> route.params.username, (newparams, oldparams) => {
    console.log('old ->' + oldparams)
    console.log('new ->' + newparams)
  })
</script>

<template>
  <div>
    User {{ $route.params.username }} with post {{ $route.params.postId }}
  </div>
</template>
