<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    window.setTimeout(() => {
      this.$store.dispatch("setToastDisplay", false);
    }, 4000);
  },
});
</script>

<template>
  <Teleport to="body">
    <div
      role="alert"
      :class="{ active: $store.getters.isShowToast }"
      class="toastWrapper active"
    >
      <p>{{ $store.getters.toastMessage ?? "No have Messages" }}</p>
    </div>
  </Teleport>
</template>

<style scoped lang="postcss">
.toastWrapper {
  @apply flex items-center fixed top-20 -right-full opacity-0 py-3 px-5 rounded-md shadow-lg shadow-rose-500/40 z-50 bg-rose-600 text-white;
}

.toastWrapper.active {
  animation: rightToLeft 0.5s linear forwards;
}

@keyframes rightToLeft {
  to {
    right: 15px;
    opacity: 1;
  }
}
</style>
