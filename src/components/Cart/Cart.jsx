import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { AiOutlineClear } from 'react-icons/ai'
import './cart.css'
import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  subTotal,
} from '../../services/cartSlice'
import { useEffect } from 'react'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(subTotal())
  }, [dispatch, cart])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCartQuantity(cartItem))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='cart-container'>
      <h2>
        Your <FaShoppingBag /> Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <>
          <div className='cart-empty'>
            <p>
              Your <FaShoppingBag /> is Empty
            </p>
            <Link to='/products' className='start-shopping'>
              <HiArrowNarrowLeft className='back-arrow' /> BackToShopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className='titles'>
              <h3 className='product-title'>Title</h3>
              <h3 className='product-price'>Price</h3>
              <h3 className='product-quantity ms-4'>Quantity</h3>
              <h3 className='total'>Total</h3>
            </div>
            <div className='cart-items'>
              {cart.cartItems?.map((cartItem) => (
                <div className='cart-item' key={cartItem.id}>
                  <div className='cart-product'>
                    <img src={cartItem.image} alt='' />
                    <div>
                      <h3>{cartItem.title.substring(0, 12)}</h3>
                      <p>{cartItem.description.substring(0, 64)}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        remove
                      </button>
                    </div>
                  </div>
                  <div className='cart-product-price'>${cartItem.price}</div>
                  <div className='cart-product-quantity'>
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className='count'>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className='cart-product-total-price'>
                    {cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-summary'>
              <button
                className='clear-cart'
                onClick={() => {
                  handleClearCart()
                }}
              >
                <AiOutlineClear />
                <span className='ms-2'>clear cart</span>
              </button>
              <div className='cart-checkout'>
                <div className='subtotal'>
                  <span>Subtotal</span>
                  <span className='amount'>${cart.cartTotalAmount} </span>
                </div>
                <p>Taxes and shipping calculatd at checkpoint</p>
                <button>Check out</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
