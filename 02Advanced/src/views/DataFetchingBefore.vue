<template>
  <div>
    <div v-if="error">错误：{{ error }}</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.first }}</p>
    </div>
  </div>
</template>

<script>
// 你的api请求函数，需要自己实现
import { getPost } from '@/utils/api'

export default {
  data() {
    return {
      post: null,
      error: null,
    }
  },
  // beforeRouteEnter 不能直接用组件实例this，只能在next回调拿到vm
  beforeRouteEnter(to, from, next) {
    // ❗注意：beforeRouteEnter本身不能加async！不能直接 async beforeRouteEnter
    // 要在内部写异步函数
    const fetchData = async () => {
      try {
        const post = await getPost(to.params.id)
        next(vm => vm.setPost(post))
      } catch (err) {
        next(vm => vm.setError(err))
      }
    }
    fetchData()
  },

  // 路由复用组件，参数变化（比如 /post/1 → /post/2，组件不销毁重建）
  async beforeRouteUpdate(to, from) {
    this.post = null
    try {
      const post = await getPost(to.params.id)
      this.setPost(post)
    } catch (err) {
      this.setError(err)
    }
  },

  methods: {
    setPost(post) {
      this.post = post
    },
    setError(err) {
      this.error = err.toString()
    }
  }
}
</script>
