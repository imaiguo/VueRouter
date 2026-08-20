<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="greetings">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <h3>
      You’ve successfully created a project with Vite Vue 3. What's next?
    </h3>
  </div>
  <RouterView></RouterView>
</template>