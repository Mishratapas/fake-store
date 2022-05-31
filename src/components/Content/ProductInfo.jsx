import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getIdData } from '../../services/storeSlice'
import { Loading } from '../../components'
import { AiFillStar } from 'react-icons/ai'
import { addToCart } from '../../services/cartSlice'

const ProductInfo = () => {
  const { id } = useParams()
  const { loading, items } = useSelector((state) => state.store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIdData(id))
  }, [dispatch, id])

  return (
    <div className='container py-5'>
      <div className='row py-5'>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='col-md-6'>
              <img src={items.image} alt='' height='400px' width='400px' />
            </div>
            <div className='col-md-6'>
              <h4 className='text-uppercase text-black-40'>{items.category}</h4>
              <h1 className='display-5'>{items.title} </h1>
              <p className='lead fw-bold'>
                {items.rating && items.rating.rate}
                <AiFillStar style={{ color: 'yellow' }} />
              </p>
              <h3 className='display-6 fw-bold'>${items.price}</h3>
              <p className='lead'>{items.description} </p>
              <button
                className='btn btn-outline-dark'
                onClick={() => dispatch(addToCart(items))}
              >
                Add to Cart
              </button>
              <Link to='/cart' className='btn btn-dark ms-2'>
                Go to Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
