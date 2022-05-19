import type { GetterTree } from "vuex";
import type { RootState, Store } from "@/stores/types";
import type { IProductWithQuantity, ICartItem } from "@/types";

export type Getters = {
  getterCartList: (state: RootState["cart"]) => ICartItem[];
  getterCartQuantity: (state: RootState["cart"]) => number;

  getterProductsInCart: (
    state: RootState["cart"],
    getter: Store["getters"]
  ) => IProductWithQuantity[];
};

export const getters: GetterTree<RootState["cart"], RootState> & Getters = {
  getterCartList: (state) => {
    return state.cartList;
  },

  getterCartQuantity: (state) => {
    return state.cartList.length;
  },

  getterProductsInCart: (state, getter) => {
    return state.cartList.map((item: ICartItem): IProductWithQuantity => {
      const productIds = getter.getterProductList.map(
        ({ id_product }) => id_product
      );

      const productIndex = productIds.indexOf(item.id_product);

      const cartProduct = state.cartList.filter(
        (cartItem) =>
          cartItem.id_product ===
          getter.getterProductList[productIndex].id_product
      );

      return {
        ...getter.getterProductList[productIndex],
        quantity: cartProduct[0].quantity,
      };
    });
  },
};
