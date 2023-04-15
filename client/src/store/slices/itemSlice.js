import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../thunks/fetchItems';
import { deleteItem } from '../thunks/deleteItem';
import { createCategory } from '../thunks/createCategory';
import { fetchCategories } from '../thunks/fetchCategories';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    categories: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default itemSlice.reducer;
