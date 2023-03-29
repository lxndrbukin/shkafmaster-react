import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {
    changeAuth(state) {
      state.auth = !state.auth;
    },
  },
});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
