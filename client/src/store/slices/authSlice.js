import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/usersThunk';

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
    builder.addCase(createUser, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      console.log(state.user);
    });
  },
});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
