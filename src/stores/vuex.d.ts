import type { RootState, Store } from "@/stores/types";

declare module "@vue/runtime-core" {
  type State = RootState;

  interface ComponentCustomProperties {
    $store: Store;
  }
}
