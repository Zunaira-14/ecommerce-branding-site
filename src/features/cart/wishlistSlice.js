
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: JSON.parse(localStorage.getItem("wishlist") || "[]"),
  },

  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;

      const exists =
        state.items.find((i) => i._id === item._id) ||
        state.items.find((i) => i.id === item.id);

      if (!exists) {
        state.items.push(item);
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },

    removeFromWishlist: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter(
        (i) => i._id !== id && i.id !== id
      );

      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
