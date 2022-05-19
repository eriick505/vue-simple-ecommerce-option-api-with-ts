import {
  UiMutationTypes as MutationTypes,
  type Mutations,
} from "./mutation-types";

import type { MutationTree } from "vuex";
import type { RootState } from "@/stores/types";

export const mutations: MutationTree<RootState["ui"]> & Mutations = {
  [MutationTypes.TOAST_SHOW]: (state, show) => {
    state.toast.show = show;
  },

  [MutationTypes.TOAST_MESSAGE]: (state, message) => {
    state.toast.message = message;
  },
};
