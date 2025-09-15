
<!-- 命名路由 -->
<!-- 当创建一个路由时，我们可以选择给路由一个 name -->

<!-- 可以使用 name 而不是 path 来传递 to 属性给 <router-link>-->
<!-- <router-link :to="{ name: 'profile', params: { username: 'erina' } }">User profile</router-link> -->

<!-- 使用 name 有很多优点：
a. 没有硬编码的 URL。
b. params 的自动编码/解码。
c. 防止你在 URL 中出现打字错误。
d. 绕过路径排序，例如展示一个匹配相同路径但排序较低的路由。 -->

<!-- 所有路由的命名都必须是唯一的。如果为多条路由添加相同的命名，路由器只会保留最后那一条。 -->

<template>
  <h1>Named Routes</h1>
  <p>Current route name: {{ $route.name }}</p>
  <p>Current route path: {{ $route.path }}</p>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }">
        About
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'profile', params: { username: 'erina' } }">
        User profile
      </router-link>
    </li>
  </ul>
  <router-view />
</template>
