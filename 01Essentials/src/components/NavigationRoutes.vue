<template>
  <div class="home">
    <h2>编程式导航示例</h2>

    <!-- 1. 字符串路径 -->
    <button @click="goAbout">跳转到 About（push）</button>

    <!-- 2. 对象形式（带 name + params） -->
    <button @click="goUser(101)">跳转到 User/101</button>

    <!-- 3. 带 query 参数 -->
    <button @click="goSearch">带 query 跳转</button>

    <!-- 4. replace：不留下历史记录 -->
    <button @click="replaceAbout">replace 到 About</button>

    <!-- 5. 前进 / 后退 -->
    <button @click="goBack">后退一步</button>
    <button @click="goForward">前进一步</button>
    <button @click="goSteps(-2)">后退两步</button>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 1. push —— 最常用，会向 history 栈添加一条记录
const goAbout = () => {
  router.push('/about')
}

// 2. 命名路由 + params
const goUser = (id) => {
  router.push({ name: 'User', params: { id } })
  // 等价于：router.push(`/user/${id}`)
}

// 3. 带 query 参数，结果：/about?keyword=vue&page=1
const goSearch = () => {
  router.push({ path: '/about', query: { keyword: 'vue', page: 1 } })
}

// 4. replace —— 替换当前记录，不能通过"后退"回到本页
const replaceAbout = () => {
  router.replace('/about')
}

// 5. 历史记录操作
const goBack = () => router.back()       // 等价于 router.go(-1)
const goForward = () => router.forward() // 等价于 router.go(1)
const goSteps = (n) => router.go(n)      // 任意步数
</script>
