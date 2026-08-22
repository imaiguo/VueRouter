<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { fetchUser } from '@/utils/api'

const route = useRoute()
const userData = ref()

// 当参数更改时获取用户信息
watch(
  () => route.params.id,
  async newId => {
    console.log("start to fetch newid.")
    console.log(newId)
    userData.value = await fetchUser(newId)
  }
)
</script>

<template>
  <input v-model="userData" readonly />
</template>
