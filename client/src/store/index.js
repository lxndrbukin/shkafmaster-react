import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export * from './slices/authSlice';
export * from './thunks/createUser';
export * from './thunks/loginUser';
