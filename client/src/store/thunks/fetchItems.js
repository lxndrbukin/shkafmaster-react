import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const res = await axios.get('/api/catalog');
  return res.data;
});
