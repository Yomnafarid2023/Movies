import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieAction = createAsyncThunk("allMovies", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], error: false, isloading: false },
  extraReducers: (builder) => {
    builder.addCase(movieAction.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isloading = false;
    }),
      builder.addCase(movieAction.rejected, (state) => {
        state.error = true;
        state.isloading = false;
      });
    builder.addCase(movieAction.pending, (state) => {
      state.isloading = true;
    });
  },
});

export default movieSlice.reducer;
