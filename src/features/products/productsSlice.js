
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    search: "",
    category: "all",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((p) => {
        const matchesName = p.name.toLowerCase().includes(state.search);
        const matchesCategory =
          state.category === "all" || p.category.toLowerCase() === state.category;
        return matchesName && matchesCategory;
      });
    },
    setCategory: (state, action) => {
      state.category = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((p) => {
        const matchesCategory =
          state.category === "all" || p.category.toLowerCase() === state.category;
        const matchesName = p.name.toLowerCase().includes(state.search);
        return matchesName && matchesCategory;
      });
    },
  },
});

export const { setProducts, setSearch, setCategory } = productSlice.actions;
export default productSlice.reducer;
