import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import formReducer from './slices/formSlice';
import itemReducer from './slices/itemSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
    form: formReducer,
  },
});

export * from './slices/authSlice';
export * from './slices/formSlice';
export * from './thunks/createUser';
export * from './thunks/loginUser';
export * from './thunks/logoutUser';
export * from './thunks/createItem';
export * from './thunks/deleteItem';
export * from './thunks/fetchItems';
export * from './thunks/fetchCurrentUser';
export * from './thunks/createCategory';
