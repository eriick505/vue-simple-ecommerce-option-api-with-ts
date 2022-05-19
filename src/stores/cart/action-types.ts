import type { ActionContext } from "vuex";
import type { RootState } from "@/stores/types";
import type { Mutations } from "./mutation-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState["cart"], RootState>, "commit">;

export interface Actions {
  addProductToCart(args: AugmentedActionContext, payload: string): void;
  removeProductFromCart(args: AugmentedActionContext, id: string): void;
}
