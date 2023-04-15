import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../thunks/fetchItems';
import { deleteItem } from '../thunks/deleteItem';
import { createCategory } from '../thunks/createCategory';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    categories: {
      data: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.data.push(action.payload);
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default itemSlice.reducer;
