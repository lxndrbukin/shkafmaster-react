import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/createUser';
import { loginUser } from '../thunks/loginUser';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
    user: {},
  },
  reducers: {
    changeAuth(state, action) {
      state.status = action.payload;
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

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
