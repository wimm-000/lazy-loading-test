import { createSlice } from "@reduxjs/toolkit";

// Single file Ducks methodology for redux
// ()

const moduleSlice = createSlice({
  name: "module",
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      const validatedModules = payload.map((item) => {
        return {
          isActive: false,
          name: item,
        };
      });
      return [...validatedModules];
    },
    toggle: (state, { payload }) =>{
      state.map((module) => {
        if (module.name === payload) {
          module.isActive = !module.isActive;
        }
        return module;
      })},
  },
});

export const { add, toggle } = moduleSlice.actions;

export const selectModules = (state) => state.modules;

export default moduleSlice.reducer;
