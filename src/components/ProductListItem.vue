<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { getServerImage } from "@/utils/getServerImage";
import { formatterPrice } from "@/utils/formatterPriceBRL";

import IconHeart from "@/components/icons/IconHeart.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconDelete from "@/components/icons/IconDelete.vue";

import type { IProduct } from "@/types";

export default defineComponent({
  components: {
    IconHeart,
    IconChevron,
    IconEdit,
    IconDelete,
  },

  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },

  data() {
    return {
      isProductActionActive: false,
    };
  },

  computed: {
    isProductIsOnTheWishList() {
      return this.$store.getters.isProductIsOnTheWishList(
        this.product.id_product
      );
    },

    productImage() {
      return getServerImage(this.product.image_product.path);
    },

    productPrice() {
      return formatterPrice(Number(this.product.price));
    },
  },

  methods: {
    async deleteProduct(product_id: string) {
      const data = await this.$store.dispatch("deleteProduct", product_id);

      if (data) {
        const isConfirm = window.confirm(
          "Do you really want to delete this product?"
        );

        if (isConfirm) {
          this.$store.dispatch("setToastDisplay", true);
          this.$store.dispatch("setToastMessage", data.message);
          this.$store.dispatch("removeProductFromList", product_id);
        }
      }
    },

    toggleProductActionActive() {
      this.isProductActionActive = !this.isProductActionActive;
    },

    toggleProductToWishList() {
      this.$store.dispatch("toggleProductToWishList", this.product.id_product);
    },

    addToCart(id: string) {
      this.$store.dispatch("addProductToCart", id);
    },
  },
});
</script>

<template>
  <article
    class="bg-gray-900 shadow-lg shadow-indigo-500/10 rounded-md overflow-hidden relative"
  >
    <header class="flex justify-center items-center relative z-40">
      <img :src="productImage" :alt="product.name" />
      <button
        @click="toggleProductActionActive"
        :class="{ active: isProductActionActive }"
        class="productActionDisplayToggleButton"
      >
        <IconChevron />
      </button>
      <div
        :class="{ active: isProductActionActive }"
        class="productActionWrapper"
      >
        <div>
          <button
            class="actionButton mr-3 bg-amber-500 shadow-lg shadow-amber-500/50 active:bg-amber-600"
          >
            <IconEdit />
          </button>
        </div>
        <div>
          <button
            @click="deleteProduct(product.id_product)"
            class="actionButton bg-rose-500 shadow-lg shadow-rose-500/50 active:bg-rose-600"
          >
            <IconDelete />
          </button>
        </div>
      </div>
    </header>
    <section class="p-5">
      <header class="pb-2">
        <h2 class="text-white">{{ product.name }}</h2>
      </header>
      <footer
        class="grid grid-cols-[44px_1fr] items-center pt-3 border-t-[1px] border-slate-800"
      >
        <div class="h-full">
          <button
            @click="toggleProductToWishList"
            :class="{ active: isProductIsOnTheWishList }"
            class="toggleToWishlistButton"
          >
            <IconHeart class="text-lg text-slate-200" />
          </button>
        </div>

        <div class="ml-auto">
          <button
            @click="addToCart(product.id_product)"
            class="font-semibold bg-blue-500 text-white text-sm py-3 px-6 rounded-lg active:bg-blue-900"
          >
            Buy {{ productPrice }}
          </button>
        </div>
      </footer>
    </section>
  </article>
</template>

<style scoped lang="postcss">
.productActionDisplayToggleButton {
  @apply flex justify-center items-center absolute top-2 right-2 w-6 h-6 rounded-full text-white bg-slate-700 z-50 transition-all rotate-180;
}
.productActionDisplayToggleButton.active {
  @apply rotate-0 bg-slate-500;
}

.productActionWrapper {
  @apply absolute w-full h-full top-0 left-0 flex justify-center items-center bg-gray-700/80 transition-all duration-300 -translate-y-full;
}

.productActionWrapper.active {
  @apply translate-y-0;
}

.actionButton {
  @apply flex justify-center items-center w-9 h-9 rounded-full text-white transition-all duration-300 active:shadow-none;
}

.toggleToWishlistButton {
  @apply flex items-center justify-center border-[1px] h-full w-full rounded-lg border-slate-600 active:bg-rose-500 active:border-rose-500;
}

.toggleToWishlistButton.active {
  @apply bg-rose-500 border-rose-500;
}
</style>
