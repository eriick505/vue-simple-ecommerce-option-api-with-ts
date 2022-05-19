<script lang="ts">
import { defineComponent } from "vue";
import CheckoutList from "@/components/CheckoutList.vue";

export default defineComponent({
  components: {
    CheckoutList,
  },
});
</script>

<template>
  <main class="container mx-auto py-8 px-3 lg:px-0">
    <header>
      <h2 class="text-3xl text-white text-center font-bold mb-20">ORDER</h2>
    </header>

    <section class="grid grid-cols-[1fr_380px] gap-10">
      <div class="p-8 pr-20 bg-slate-700 rounded-md">
        <CheckoutList />
      </div>

      <div class="bg-slate-700 rounded-md p-8">
        <h3 class="text-white text-2xl font-bold">Total</h3>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
