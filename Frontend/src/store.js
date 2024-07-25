import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/slices/auth'
import postReducer from './features/slices/post'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  },
})