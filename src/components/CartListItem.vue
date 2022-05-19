<script lang="ts">
import { defineComponent, type PropType } from "vue";

import IconClose from "@/components/icons/IconClose.vue";

import { formatterPrice } from "@/utils/formatterPriceBRL";
import { getServerImage } from "@/utils/getServerImage";

import type { IProductWithQuantity } from "@/types";

export default defineComponent({
  components: {
    IconClose,
  },

  props: {
    cartProduct: {
      type: Object as PropType<IProductWithQuantity>,
      required: true,
    },
  },

  methods: {
    getFormattedPrice(price: string) {
      return formatterPrice(Number(price));
    },

    getProductImage(image_product: string) {
      return getServerImage(image_product);
    },

    removeProductFromCart(id: string) {
      this.$store.dispatch("removeProductFromCart", id);
    },
  },
});
</script>

<template>
  <div
    class="grid grid-cols-[80px_1fr] bg-slate-700 px-2 py-4 relative rounded-md"
  >
    <button
      @click="removeProductFromCart(cartProduct.id_product)"
      class="absolute -top-2 -right-2 w-5 h-5 text-xs flex justify-center rounded-full items-center text-slate-200 bg-rose-500"
    >
      <IconClose />
    </button>

    <div
      class="product_image"
      :style="{
        backgroundImage: `url(${getProductImage(
          cartProduct.image_product.path
        )})`,
      }"
    ></div>

    <div class="relative mt-4 ml-4">
      <h5 class="text-base leading-[0.875rem]">
        {{ cartProduct.name }}
      </h5>

      <span class="text-sm leading-[0.625rem]">
        <strong>
          {{ getFormattedPrice(cartProduct.price) }}
        </strong>
      </span>

      <span class="absolute bottom-0 right-0 text-base self-end"
        >x{{ cartProduct.quantity }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="postcss">
.product_image {
  @apply min-w-[80px] min-h-[100px] rounded-sm bg-cover bg-center;
}
</style>
