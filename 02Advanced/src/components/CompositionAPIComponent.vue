<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="greetings">
    <h3>
      组合式API
    </h3>
    <nav>
      <RouterLink to="/123">Go to 123</RouterLink> <br/>
      <RouterLink to="/456">Go to 456</RouterLink>
    </nav>
  </div>
  <RouterView></RouterView>
</template>