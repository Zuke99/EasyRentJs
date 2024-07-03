import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001/er' + '/user'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${backendURL}/register`,
        { username, password },
        config
      )
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)