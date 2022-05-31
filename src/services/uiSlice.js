import { createSlice } from '@reduxjs/toolkit'

const initialState = { noQuantity: false }

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => {
      state.noQuantity = !state.noQuantity
    },
  },
})

export const { toggle } = uiSlice.actions
export default uiSlice.reducer
