import type { RootState } from "@/stores/types";

export enum UiMutationTypes {
  TOAST_SHOW = "TOAST_SHOW",
  TOAST_MESSAGE = "TOAST_MESSAGE",
}

export type Mutations<S = RootState["ui"]> = {
  [UiMutationTypes.TOAST_SHOW](state: S, payload: boolean): void;
  [UiMutationTypes.TOAST_MESSAGE](state: S, payload: string): void;
};
