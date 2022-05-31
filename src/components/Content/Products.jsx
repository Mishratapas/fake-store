import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getData } from '../../services/storeSlice'
import { ButtonsContent } from '../../components'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mb-3'>
          <h1 className='display-6 fw-bold text-center'>
            Latest Products
            <hr />
          </h1>
        </div>
        <ButtonsContent />
      </div>
    </div>
  )
}

export default Products
