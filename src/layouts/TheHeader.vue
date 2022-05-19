<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

import IconUserCircle from "@/components/icons/IconUserCircle.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconCart from "@/components/icons/IconCart.vue";
import CartList from "@/components/CartList.vue";

export default defineComponent({
  components: {
    RouterLink,
    IconUserCircle,
    IconHeart,
    IconCart,
    CartList,
  },

  data() {
    return {
      showCartPopup: false,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout", undefined);
    },

    toCheckout() {
      this.$router.push("/checkout");
    },

    toHome() {
      this.$router.push("/");
    },

    toggleShowCartPopup() {
      this.showCartPopup = !this.showCartPopup;
    },
  },
});
</script>

<template>
  <header class="bg-slate-900">
    <div
      class="container mx-auto py-2 px-2 md:py-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div>
        <h1 @click="toHome" role="button" class="text-2xl font-bold text-white">
          LOGO
        </h1>
      </div>

      <nav class="my-4 md:my-0">
        <ul class="flex justify-center items-center">
          <li class="mr-8">
            <RouterLink
              to="/create-product"
              class="text-white text-base hover:text-blue-500"
            >
              CREATE PRODUCT
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/about"
              class="text-white text-base hover:text-blue-500"
            >
              ABOUT
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <ul class="flex justify-center items-center">
          <li
            class="mr-8 text-2xl text-white cursor-pointer transition-all duration-500 hover:text-blue-500"
          >
            <button class="group relative" @click="logout">
              <IconUserCircle />

              <span
                class="absolute -bottom-[115%] left-2/4 -translate-x-2/4 text-xs flex px-2 py-1 rounded-md text-center bg-blue-500 text-white transition-all duration-500 opacity-0 group-hover:opacity-100 z-50"
              >
                Logout?
              </span>
            </button>
          </li>

          <li class="mr-8 text-2xl relative text-white">
            <button>
              <IconHeart />

              <span
                class="absolute -top-1 -right-2 rounded-full w-4 h-4 text-center flex justify-center items-center bg-rose-500 text-[10px] text-white"
              >
                {{ $store.getters.getterWishListQuantity }}
              </span>
            </button>
          </li>

          <li class="text-2xl relative text-white">
            <button
              @click="toggleShowCartPopup"
              :class="{ 'text-green-500': showCartPopup }"
            >
              <IconCart />

              <span
                class="absolute -top-1 -right-2 rounded-full w-4 h-4 text-center flex justify-center items-center bg-green-500 text-[10px] text-white"
              >
                {{ $store.getters.getterCartQuantity }}
              </span>
            </button>

            <div :class="{ active: showCartPopup }" class="cartPopup">
              <div class="triangleIcon"></div>

              <h4 class="text-lg font-bold mb-4">Cart List</h4>

              <CartList />

              <button
                v-if="$store.getters.getterProductsInCart?.length > 0"
                @click="toCheckout"
                class="text-center rounded-md w-full mt-4 py-1 text-sm text-white bg-green-500"
              >
                Go To Checkout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.cartPopup {
  @apply opacity-0 rounded p-4 min-w-[360px] absolute right-0 top-[135%] transition-all z-50 pointer-events-none bg-slate-600;
}

.cartPopup.active {
  @apply opacity-100 pointer-events-auto;
}

.triangleIcon {
  @apply absolute bottom-full right-1 w-0 h-0 border-solid border-transparent border-l-8 border-r-8 border-r-transparent border-b-8 border-b-slate-600;
}
</style>
