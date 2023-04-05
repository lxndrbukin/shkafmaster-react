import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import formReducer from './slices/formSlice';
import itemReducer from './slices/itemSlice';
import categoriesReducer from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    items: itemReducer,
    categories: categoriesReducer,
  },
});

export * from './slices/authSlice';
export * from './slices/formSlice';
export * from './thunks/createUser';
export * from './thunks/loginUser';
export * from './thunks/logoutUser';
export * from './thunks/createItem';
export * from './thunks/fetchItems';
export * from './thunks/fetchCurrentUser';
export * from './thunks/createCategory';
