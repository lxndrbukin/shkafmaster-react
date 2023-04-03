import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    errors: null,
  },
  reducers: {
    showError(state, action) {
      state.errors = { ...state.errors, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.rejected, (state, action) => {
      state.errors = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export const { showError } = formSlice.actions;
export default formSlice.reducer;
