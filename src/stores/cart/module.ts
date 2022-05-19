import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

import type { Module } from "vuex";
import type { RootState } from "@/stores/types";

export const cartModule: Module<RootState["cart"], RootState> = {
  state: () => ({
    cartList: [],
  }),

  mutations,

  actions,

  getters,
};
