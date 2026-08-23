<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

// 继承 RouterLink 原有 props，扩展自定义属性 inactiveClass、activeClass
const props = defineProps({
  /** 继承 vue-router RouterLink 全部属性 */
  ...RouterLink.props,
  /** 路由激活时的 class，兼容原生 RouterLink 的 activeClass */
  activeClass: String,
  /** 路由未激活时自定义 class（扩展新增） */
  inactiveClass: String,
})

/** 判断是否为外部链接：to 为字符串且以 http 开头 */
const isExternalLink = computed(() => {
  return typeof props.to === 'string' && /^http(s)?:\/\//.test(props.to)
})
</script>

<template>
  <!-- 外部链接：直接渲染 a 标签，新开窗口 -->
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>

  <!-- 内部路由：使用 RouterLink custom 自定义插槽模式 -->
  <RouterLink
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click.prevent="navigate()"
      :class="[
        isActive ? activeClass : inactiveClass,
        $attrs.class
      ]"
    >
      <slot />
    </a>
  </RouterLink>
</template>
