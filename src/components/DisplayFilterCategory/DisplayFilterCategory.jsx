import React from 'react'
import { Link } from 'react-router-dom';

function DisplayFilterCategory({products}) {
    const {id,image, price, title, category,description} = products;
    
  return (
     <Link to={`/details/${id}`}>
        <div className='shadow-lg px-10 pb-3'>
            <img src={image} alt={title} className='sm:w-[350px] sm:h-[270px]' />
            <div className='pt-3'>
              <p className='font-semibold text-s'>{title.slice(0,20)}...</p>
              <div className='flex justify-between items-center py-2'>
                <p>{category}</p>
                <p className='font-semibold text-lg'>${price}</p>
              </div>
              <div className='mt-2'>
                <span className='text-sm'>{description.slice(0,40)}</span>
                <span className='text-blue-800 font-semibold text-sm ml-1 tracking-widest '>Full Details</span>
              </div>
            </div>
        </div>
  </Link>
  )
}

export default DisplayFilterCategory