import type { RootState } from "@/stores/types";

import type { Actions } from "./action-types";
import type { Getters } from "./getters";
import type { Mutations } from "./mutation-types";

import type { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type AuthStore<S = RootState["auth"]> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
