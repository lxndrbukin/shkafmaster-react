import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk('users/logoutUser', async () => {
  const res = await axios.get('/api/signout');
  return res.data;
});
