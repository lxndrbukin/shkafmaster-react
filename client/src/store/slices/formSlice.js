import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';
import { createItem } from '../thunks/createItem';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    errors: null,
    values: null,
  },
  reducers: {
    showError(state, action) {
      state.errors = { ...state.errors, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.errors = action.payload.errors;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.errors = action.payload.errors;
      }
    });
    builder.addCase(createItem.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.errors = action.payload.errors;
      } else {
        state.values = action.payload;
      }
    });
  },
});

export const { showError } = formSlice.actions;
export default formSlice.reducer;
