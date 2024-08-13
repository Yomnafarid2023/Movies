import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addToFav: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
