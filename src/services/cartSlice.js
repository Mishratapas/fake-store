import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.info(
          `increased ${action.payload.title.substring(0, 12)} quantity to ${
            state.cartItems[itemIndex].cartQuantity
          }`,
          { position: 'bottom-left' }
        )
      } else {
        const tempProducts = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProducts)
        toast.success(
          `${action.payload.title.substring(0, 12)} added to cart`,
          {
            position: 'bottom-left',
          }
        )
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      const newCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
      state.cartItems = newCartItem
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.error(`${action.payload.title.substring(0.12)} removed from cart`, {
        position: 'bottom-left',
      })
    },
    decreaseCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info(
          `${action.payload.title.substring(0.12)} decreased from cart to ${
            state.cartItems[itemIndex].cartQuantity
          }`,
          {
            position: 'bottom-left',
          }
        )
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newCartItem = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
        state.cartItems = newCartItem
        toast.error(
          `${action.payload.title.substring(0, 12)} removed from cart`,
          { position: 'bottom-left' }
        )
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    increaseCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      state.cartItems[itemIndex].cartQuantity += 1
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.info(
        `${action.payload.title} quantity increased to ${state.cartItems[itemIndex].cartQuntity}`
      )
    },
    clearCart: (state, action) => {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.error(`you removed everything from cart`, {
        position: 'bottom-left',
      })
    },
    subTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity
          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  clearCart,
  subTotal,
} = cartSlice.actions
export default cartSlice.reducer
