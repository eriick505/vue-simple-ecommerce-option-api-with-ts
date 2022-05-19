import type { GetterTree } from "vuex";

import type { RootState } from "@/stores/types";

export type Getters = {
  isShowToast: (state: RootState["ui"]) => boolean;
  toastMessage: (state: RootState["ui"]) => string;
};

export const getters: GetterTree<RootState["ui"], RootState> & Getters = {
  isShowToast: (state) => state.toast.show,
  toastMessage: (state) => state.toast.message,
};
