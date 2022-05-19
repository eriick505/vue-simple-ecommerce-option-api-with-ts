<script lang="ts">
import { defineComponent } from "vue";

import CartListItem from "@/components/CartListItem.vue";

export default defineComponent({
  name: "CartList",
  components: { CartListItem },
});
</script>

<template>
  <TransitionGroup
    v-if="$store.getters.getterProductsInCart?.length > 0"
    tag="ul"
    name="fade"
    class="max-h-[35rem] py-2 px-5 overflow-y-auto"
  >
    <li
      v-for="cartProduct in $store.getters.getterProductsInCart"
      :key="cartProduct.id_product"
      class="mb-4"
    >
      <CartListItem :cart-product="cartProduct" />
    </li>
  </TransitionGroup>

  <p v-else class="text-base">No products in cart 😔</p>
</template>
