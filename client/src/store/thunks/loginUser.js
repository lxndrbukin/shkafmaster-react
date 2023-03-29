import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (formValues) => {
    const res = await axios.post('/api/signin', { ...formValues });
    return res.data;
  }
);
