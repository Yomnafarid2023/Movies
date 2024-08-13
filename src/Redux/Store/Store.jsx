import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/CounterSlice";
import moviesReducer from "../Slices/MoviesSlice";
import favoriteReducer from "../Slices/FavoriteSlice";

const store = configureStore({
  reducer:{
    counter : counterReducer,
    movies : moviesReducer,
    favorites : favoriteReducer
  }
})

export default store;