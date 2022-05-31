import { useDispatch, useSelector } from 'react-redux'

import { Loading, ShowProducts } from '../components'
import { getData, getCatData } from '../services/storeSlice'

const ButtonsContent = () => {
  const { loading, items } = useSelector((state) => state.store)
  const dispatch = useDispatch()

  const RenderStore = () => {
    return Array.from(items).map((item) => (
      <ShowProducts key={item.id} data={item} />
    ))
  }

  return (
    <>
      <div className='buttons d-flex aligh-item-center justify-content-center mb-4'>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => dispatch(getData())}
        >
          All
        </button>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => dispatch(getCatData("men's clothing"))}
        >
          Mens's Clothing
        </button>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => dispatch(getCatData("women's clothing"))}
        >
          Womens's Clothing
        </button>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => dispatch(getCatData('jewelery'))}
        >
          Jewelery
        </button>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => dispatch(getCatData('electronics'))}
        >
          Electronics
        </button>
      </div>
      {loading ? <Loading /> : <RenderStore />}
    </>
  )
}

export default ButtonsContent
