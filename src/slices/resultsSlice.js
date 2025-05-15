import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: []
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.results.push(action.payload);
    },
    resetResults: (state) => {
      state.results = [];
    }
  }
});

export const { addResult, resetResults } = resultsSlice.actions;
export default resultsSlice.reducer;
