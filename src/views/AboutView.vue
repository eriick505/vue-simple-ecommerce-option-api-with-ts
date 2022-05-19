<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: {
    RouterLink,
  },
});
</script>

<template>
  <div class="container mx-auto py-5 text-white">
    <nav>
      <RouterLink to="/" class="hover:text-blue-500 text-rose-500">
        Go To Home
      </RouterLink>
    </nav>
    <h2 class="mt-5 text-2xl mb-3">This is an about page...</h2>
    <p>Project created for study purposes</p>
  </div>
</template>
