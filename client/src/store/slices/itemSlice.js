import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../thunks/fetchItems';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default itemSlice.reducer;
