import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (formValues) => {
    try {
      const res = await axios.post('/api/signup', { ...formValues });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
