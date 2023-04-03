import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});

export * from './slices/authSlice';
export * from './slices/formSlice';
export * from './thunks/createUser';
export * from './thunks/loginUser';
export * from './thunks/logoutUser';
export * from './thunks/fetchCurrentUser';
