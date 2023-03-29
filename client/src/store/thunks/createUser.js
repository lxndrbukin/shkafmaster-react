import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (formValues) => {
    console.log(formValues);
    const res = await axios.post('/api/signup', { ...formValues });
    return res.data;
  }
);
