import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';
import { fetchCurrentUser } from '../thunks/fetchCurrentUser';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    language: localStorage.getItem('lang') || 'ro',
  },
  reducers: {
    changeLanguage(state, action) {
      localStorage.setItem('lang', action.payload);
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { changeAuth, changeLanguage } = authSlice.actions;
export default authSlice.reducer;
