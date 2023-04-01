import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrentUser = createAsyncThunk(
  'users/fetchCurrentUser',
  async () => {
    const res = await axios.get('/api/current_user');
    return res.data;
  }
);
