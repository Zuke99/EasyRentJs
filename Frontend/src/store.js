import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/slices/auth'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})