import { configureStore } from '@reduxjs/toolkit'
import nameReducer from './slice'
export const store = configureStore({
  reducer: {
    name:nameReducer,
  },
})