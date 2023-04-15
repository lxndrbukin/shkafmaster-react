import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteItem = createAsyncThunk('items/deleteItem', async (id) => {
  const res = await axios.post(`/api/catalog/${id}`, { id });
  return res.data;
});
