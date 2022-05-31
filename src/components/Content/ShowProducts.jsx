import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Loading } from '../../components'
import { addToCart } from '../../services/cartSlice.js'

const ShowProducts = (props) => {
  const { loading } = useSelector((state) => state.store)

  const dispatch = useDispatch()

  const { data } = props

  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='col-md-3 mb-4'>
          <div className='card h-100 text-center'>
            <img src={data.image} className='card-img-top mt-2' alt='' />
            <div className='card-body'>
              <h5 className='card-title  mb-0'>
                {data.title.substring(0, 12)}...
              </h5>
              <p className='card-text lead fw-bold'>${data.price}</p>
              <Link
                to={`/products/${data.id}`}
                className='btn btn-outline-dark'
              >
                More
              </Link>
              <button
                className='btn btn-outline-dark ms-2'
                onClick={() => handleAddToCart(data)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShowProducts
