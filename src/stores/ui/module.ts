import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

import type { Module } from "vuex";
import type { RootState } from "@/stores/types";

export const uiModule: Module<RootState["ui"], RootState> = {
  state: () => ({
    toast: {
      message: "",
      show: false,
    },
  }),

  mutations,

  actions,

  getters,
};
