import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, {payload}) => {
      state.value += payload;
    },
    substract: (state, {payload}) => {
      state.value -= payload;
    },
    multiply: (state, {payload}) => {
      state.value *= payload;
    },
    divide: (state, {payload}) => {
      state.value /= payload;
    }
  },
});

export const { add, substract, multiply, divide } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
