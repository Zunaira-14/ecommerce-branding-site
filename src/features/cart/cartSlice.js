
 import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const exists = state.items.find(
        (i) => i._id === item._id || i.id === item.id
      );

      if (exists) {
        exists.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter(
        (i) => i._id !== id && i.id !== id
      );
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;

      const item = state.items.find(
        (i) => i._id === id || i.id === id
      );

      if (item) item.qty = qty;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
