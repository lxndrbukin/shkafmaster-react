import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';
import { logoutUser } from '../thunks/logoutUser';
import { fetchCurrentUser } from '../thunks/fetchCurrentUser';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
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
      if (action.payload.userId) {
        state.user = action.payload;
        state.status = true;
      }
    });
    builder.addCase(createUser.rejected, (state, action) => {
      if (action.payload.userId) {
        state.user = action.payload;
        state.status = true;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.userId) {
        state.user = action.payload;
        state.status = true;
      }
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = false;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      if (state.user.userId) {
        state.status = true;
      }
    });
  },
});

export const { changeLanguage } = authSlice.actions;
export default authSlice.reducer;
