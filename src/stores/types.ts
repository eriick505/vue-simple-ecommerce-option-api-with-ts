import type { AuthStore } from "@/stores/auth";
import type { ProductStore } from "@/stores/product";
import type { UIStore } from "@/stores/ui";
import type { CartStore } from "@/stores/cart";
import type { AuthUser, ICategory, IProduct, ICartItem } from "@/types";

export interface RootState {
  auth: {
    user?: AuthUser;
    authenticated: boolean;
    loading: boolean;
    error: string;
  };

  product: {
    isLoading: {
      getProductList: boolean;
      getCategoryList: boolean;
      postProductCreate: boolean;
      deleteProduct: boolean;
    };
    error: string;
    productList: IProduct[];
    productQuantity?: number;
    categoryList?: ICategory[];
    categoryQuantity?: number;
    wishList: string[];
  };

  ui: {
    toast: {
      show: boolean;
      message: string;
    };
  };

  cart: {
    cartList: ICartItem[];
  };
}

export type Store = ProductStore<Pick<RootState, "product">> &
  AuthStore<Pick<RootState, "auth">> &
  UIStore<Pick<RootState, "ui">> &
  CartStore<Pick<RootState, "cart">>;
