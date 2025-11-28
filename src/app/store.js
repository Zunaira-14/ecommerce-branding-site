
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/cart/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/cart/WishListSlice";
import listViewReducer from "../features/cart/listViewSlice";
import productsReducer from "../features/products/productsSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    listview: listViewReducer,
     products: productsReducer,

  },
});
