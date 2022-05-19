import { createStore } from "vuex";

import { authModule } from "@/stores/auth";
import { productModule } from "@/stores/product";
import { uiModule } from "@/stores/ui";
import { cartModule } from "@/stores/cart";

import type { Store } from "@/stores/types";

export const store = createStore({
  modules: {
    auth: authModule,
    product: productModule,
    ui: uiModule,
    cart: cartModule,
  },
});

export const useStore = () => store as Store;
