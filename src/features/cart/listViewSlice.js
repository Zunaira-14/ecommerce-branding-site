import { createSlice } from "@reduxjs/toolkit";

const listViewSlice = createSlice({
  name: "listview",
  initialState: {
    items: [],
  },
  reducers: {
    addToListView: (state, action) => {
      const item = action.payload;

      // Duplicate na aaye
      const exists = state.items.some((i) => i.title === item.title);
      if (!exists) {
        state.items.push(item);
      }
    },

    clearListView: (state) => {
      state.items = [];
    },
  },
});

export const { addToListView, clearListView } = listViewSlice.actions;
export default listViewSlice.reducer;
