import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import moduleReducer from './moduleSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    modules: moduleReducer
  },
});

