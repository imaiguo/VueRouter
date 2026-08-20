<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="greetings">
  <p>
    <router-link to="/posts">/posts</router-link>
    <br />
    <router-link to="/user">/user</router-link>
    <br />
    <router-link to="/id">/id</router-link>
  </p>
    <h3>
      You’ve successfully created a project with Vite Vue 3. What's next?
    </h3>
  </div>
  <RouterView></RouterView>
</template>