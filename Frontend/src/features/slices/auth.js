import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/authActions'
import { loginUser } from '../actions/authActions'
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.userInfo = payload
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true // login successful
      state.userInfo = payload
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    });
  }
})

export default authSlice.reducer