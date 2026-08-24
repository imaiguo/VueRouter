<template>
  <div>
    <h3>编辑文章页面</h3>
    <textarea v-model="articleContent" placeholder="编辑内容，不保存直接跳转就会触发路由失败"></textarea>
    <br />
    <button @click="goOtherPage">跳转到其他页面</button>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, NavigationFailureType, isNavigationFailure, onBeforeRouteLeave} from 'vue-router'

const router = useRouter()
const articleContent = ref('')

async function goOtherPage() {
  // push 返回 Promise，成功返回 undefined，失败返回 NavigationFailure 对象
  const failure = await router.push('/other-page')

  // 判断是否为 aborted 类型：导航被守卫中止（比如未保存阻止跳转）
  if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
    console.log('导航被中止，存在未保存数据')
    showToast('您有未保存的更改，确定要离开吗？')
  } else if (isNavigationFailure(failure, NavigationFailureType.cancelled)) {
    console.log('导航被取消：新导航发起，上一个跳转被覆盖')
    showToast('上一次页面跳转已取消')
  } else if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    console.log('重复导航：跳转到当前已在的路由')
    showToast('已经在该页面，无需重复跳转')
  }
}

function showToast(msg) {
  alert(msg)
}

</script>
