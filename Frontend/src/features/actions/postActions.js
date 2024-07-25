import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001/er' + '/post'

export const createPost = createAsyncThunk(
    'form/submit',
    async (formData, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const result = await axios.post(`${backendURL}/new-post`, formData, config);
        // console.log('ActionResult',JSON.stringify(result, null, 2));
        return result.data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );