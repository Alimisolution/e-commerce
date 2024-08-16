import React from 'react'
import { Link } from 'react-router-dom'








function ProductsList({product}) {
    const {id,image, price, title, description} = product
  return (
    <Link to={`/details/${id}`}>
        <div className=''>
            <img src={image} alt={title} className='sm:w-[2050px]' />
        </div>
    </Link>
  )
}

export default ProductsList