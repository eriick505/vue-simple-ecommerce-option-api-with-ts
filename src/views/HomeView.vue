<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import TheAside from "@/layouts/TheAside.vue";
import ProductList from "@/components/ProductList.vue";

export default defineComponent({
  components: {
    TheAside,
    ProductList,
    RouterView,
  },
});
</script>

<template>
  <section class="container mx-auto py-8 px-3 lg:px-0">
    <header>
      <h2 class="text-3xl text-white text-center font-bold mb-20">
        PRODUCT LIST
      </h2>
    </header>

    <div
      class="grid md:grid-cols-1 lg:grid-cols-[160px_1fr] xl:grid-cols-[280px_1fr] gap-20"
    >
      <TheAside class="order-2 md:order-1" />
      <ProductList class="order-1 md:order-2" />
    </div>
    <RouterView />
  </section>
</template>
