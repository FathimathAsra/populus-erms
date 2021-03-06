import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../middleware/AdminAuthSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
}) 