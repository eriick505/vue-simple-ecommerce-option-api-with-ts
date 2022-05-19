import {
  CartMutationTypes as MutationTypes,
  type Mutations,
} from "./mutation-types";

import type { MutationTree } from "vuex";
import type { RootState } from "@/stores/types";

export const mutations: MutationTree<RootState["cart"]> & Mutations = {
  [MutationTypes.ADD_TO_CART]: (state, cartItem) => {
    state.cartList.unshift(cartItem);
  },

  [MutationTypes.INCREMENT_PRODUCT_QUANTITY]: (state, item) => {
    const cartItem = state.cartList.find(
      (cartItem) => cartItem.id_product === item.id_product
    );

    if (cartItem) cartItem.quantity++;
  },

  [MutationTypes.REMOVE_PRODUCT_FROM_CART]: (state, id) => {
    state.cartList = state.cartList.filter((item) => item.id_product !== id);
  },
};
