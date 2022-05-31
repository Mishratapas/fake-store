import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('data/getData', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const getCatData = createAsyncThunk(
  'catData/getCatData',
  async (category) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      )
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
)

export const getIdData = createAsyncThunk('catData/getCatData', async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

const initialState = {
  items: {},
  loading: false,
  error: false,
  detail: {},
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true
      state.error = false
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = false
    },
    [getData.rejected]: (state, action) => {
      state.loading = false
      state.error = true
    },
    [getCatData.pending]: (state, action) => {
      state.loading = true
    },
    [getCatData.fulfilled]: (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = false
    },
    [getCatData.rejected]: (state, action) => {
      state.loading = false
      state.error = true
    },
    [getIdData.pending]: (state, action) => {
      state.loading = true
    },
    [getIdData.fulfilled]: (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = false
    },
    [getIdData.rejected]: (state, action) => {
      state.loading = false
      state.error = true
    },
  },
})

export default storeSlice.reducer
