import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    decCounter: (state) => {
      state.counter -= 1;
    },
    incCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { decCounter, incCounter } = counterSlice.actions;
export default counterSlice.reducer;
