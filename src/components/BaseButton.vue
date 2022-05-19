<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: { type: String, required: true },
  },
});
</script>

<template>
  <button
    class="bg-blue-500 text-white px-16 py-3 rounded-full hover:bg-blue-800 transition-all"
  >
    {{ text }}
  </button>
</template>
