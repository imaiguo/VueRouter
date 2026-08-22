<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.later }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from '../utils/api.js'

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

// 侦听路由的参数，以便再次获取数据
watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  error.value = post.value = null
  loading.value = true

  try {
    // 用获取数据的工具函数 / API 包裹器替换 `getPost`
    post.value = await getPost(id)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>
