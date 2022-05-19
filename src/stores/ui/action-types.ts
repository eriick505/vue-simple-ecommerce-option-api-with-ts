import type { ActionContext } from "vuex";
import type { RootState } from "@/stores/types";
import type { Mutations } from "./mutation-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState["ui"], RootState>, "commit">;

export interface Actions {
  setToastDisplay(args: AugmentedActionContext, payload: boolean): void;
  setToastMessage(args: AugmentedActionContext, payload: string): void;
}
