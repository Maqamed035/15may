import { configureStore } from '@reduxjs/toolkit';
import timeReducer from './slices/timeSlice';
import resultsReducer from './slices/resultsSlice';

export const store = configureStore({
  reducer: {
    time: timeReducer,
    results: resultsReducer,
  },
});
