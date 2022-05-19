import { WISHLIST_KEY } from "@/utils/localStorage";

import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

import type { Module } from "vuex";
import type { RootState } from "@/stores/types";

const wishListInitialState: string[] = JSON.parse(
  window.localStorage.getItem(WISHLIST_KEY) || "[]"
);

export const productModule: Module<RootState["product"], RootState> = {
  state: () => ({
    isLoading: {
      getProductList: false,
      getCategoryList: false,
      postProductCreate: false,
      deleteProduct: false,
    },
    error: "",
    productList: [],
    productQuantity: undefined,
    categoryList: undefined,
    categoryQuantity: undefined,
    wishList: wishListInitialState,
  }),

  mutations,

  actions,

  getters,
};
