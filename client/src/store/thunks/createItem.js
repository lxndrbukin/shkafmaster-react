import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createItem = createAsyncThunk(
  'items/createItem',
  async (formValues) => {
    const res = await axios.post(
      '/api/catalog',
      { ...formValues },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return res.data;
  }
);
