import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (formValues) => {
    const res = await axios.post('/api/catalog/categories', { ...formValues });
    return res.data;
  }
);
