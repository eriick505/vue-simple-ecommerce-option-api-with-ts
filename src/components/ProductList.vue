<script lang="ts">
import { defineComponent } from "vue";

import ProductListItem from "@/components/ProductListItem.vue";

export default defineComponent({
  components: {
    ProductListItem,
  },

  computed: {
    haveProducts() {
      if (this.$store.state.product.productQuantity) return true;
      else return false;
    },
  },

  mounted() {
    this.$store.dispatch("getProductList", undefined);
  },
});
</script>

<template>
  <div>
    <h2
      v-if="$store.state.product.isLoading.getProductList"
      class="text-3xl text-white"
    >
      Loading...
    </h2>

    <span
      v-if="!haveProducts && !$store.state.product.isLoading.getProductList"
      class="text-2xl text-white"
    >
      No products registered
    </span>

    <TransitionGroup
      v-if="haveProducts && !$store.state.product.isLoading.getProductList"
      tag="ul"
      name="fade"
      class="relative p-0 grid md:grid-cols-3 gap-5"
    >
      <li
        v-for="product in $store.state.product.productList"
        :key="product.id_product"
      >
        <ProductListItem :product="product" />
      </li>
    </TransitionGroup>
  </div>
</template>
