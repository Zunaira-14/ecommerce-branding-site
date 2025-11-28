import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    mobileMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMenu: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = navbarSlice.actions;
export default navbarSlice.reducer;
