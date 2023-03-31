import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
    user: {},
    language: localStorage.getItem('lang') || 'ro',
  },
  reducers: {
    changeAuth(state, action) {
      state.status = action.payload;
    },
    changeLanguage(state, action) {
      localStorage.setItem('lang', action.payload);
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { changeAuth, changeLanguage } = authSlice.actions;
export default authSlice.reducer;
