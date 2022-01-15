import { configureStore } from '@reduxjs/toolkit'
import addresses from './reducer'

export const store = configureStore({
  reducer: {
    customerAddresses: addresses
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
