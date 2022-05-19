import { CartMutationTypes } from "./mutation-types";

import type { Actions } from "./action-types";
import type { ActionTree } from "vuex";
import type { RootState } from "@/stores/types";

export const actions: ActionTree<RootState["cart"], RootState> & Actions = {
  addProductToCart({ commit, state }, id) {
    const productFound = state.cartList.find(
      (cartItem) => cartItem.id_product === id
    );

    if (!productFound) {
      commit(CartMutationTypes.ADD_TO_CART, { id_product: id, quantity: 1 });
    } else {
      commit(CartMutationTypes.INCREMENT_PRODUCT_QUANTITY, productFound);
    }
  },

  removeProductFromCart({ commit }, id) {
    commit(CartMutationTypes.REMOVE_PRODUCT_FROM_CART, id);
  },
};
