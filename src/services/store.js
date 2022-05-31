import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './cartSlice'
import storeSlice from './storeSlice'

export const store = configureStore({
  reducer: { store: storeSlice, cart: cartSlice },
})

export default store
