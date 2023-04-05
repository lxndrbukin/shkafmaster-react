import { createSlice } from '@reduxjs/toolkit';
import { createCategory } from '../thunks/createCategory';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default categorySlice.reducer;
