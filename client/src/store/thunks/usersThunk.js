import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (formValues) => {
    // const res = await axios.post('/signup', { formValues });
    return formValues;
  }
);
