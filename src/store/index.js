import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter++;
    },
    decrement(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter--;
    },
    addBy(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter +=action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
