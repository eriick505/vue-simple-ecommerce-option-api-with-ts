import type { RootState } from "@/stores/types";
import type { ICartItem } from "@/types";

export enum CartMutationTypes {
  ADD_TO_CART = "ADD_TO_CART",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
}

export type Mutations<S = RootState["cart"]> = {
  [CartMutationTypes.ADD_TO_CART](state: S, item: ICartItem): void;

  [CartMutationTypes.INCREMENT_PRODUCT_QUANTITY](
    state: S,
    item: ICartItem
  ): void;

  [CartMutationTypes.REMOVE_PRODUCT_FROM_CART](state: S, id: string): void;
};
