
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/cart/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/cart/wishlistSlice.js";
import listViewReducer from "../features/cart/listViewSlice.js";
import productsReducer from "../features/products/productsSlice.js";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    listview: listViewReducer,
     products: productsReducer,

  },
});
