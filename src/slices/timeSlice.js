import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    incrementSecond: (state) => {
      state.seconds++;
      if (state.seconds === 60) {
        state.seconds = 0;
        state.minutes++;
        if (state.minutes === 60) {
          state.minutes = 0;
          state.hours++;
        }
      }
    },
    resetTime: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
    },
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    }
  }
});

export const { incrementSecond, resetTime, toggleRunning } = timeSlice.actions;
export default timeSlice.reducer;
