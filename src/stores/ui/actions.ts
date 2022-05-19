import { UiMutationTypes } from "./mutation-types";

import type { Actions } from "./action-types";
import type { ActionTree } from "vuex";
import type { RootState } from "@/stores/types";

export const actions: ActionTree<RootState["ui"], RootState> & Actions = {
  setToastDisplay({ commit }, show) {
    commit(UiMutationTypes.TOAST_SHOW, show);
  },

  setToastMessage({ commit }, message) {
    commit(UiMutationTypes.TOAST_MESSAGE, message);
  },
};
