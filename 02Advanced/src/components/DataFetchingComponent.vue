<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="greetings">
    <nav>
      <RouterLink to="/fetchlater">Go to FetchLater</RouterLink> <br/>
      <RouterLink to="/fetchbefore">Go to FetchBefore</RouterLink>
    </nav>
    <h3>
      Vite Vue 3!
    </h3>
  </div>
  <RouterView></RouterView>
</template>