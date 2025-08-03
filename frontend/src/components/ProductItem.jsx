import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-dark-blue cursor-pointer card p-4 rounded-xl hover-lift' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-lg'>
        <img className='hover:scale-110 transition ease-in-out duration-300' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm text-dark-blue'>{name}</p>
      <p className='text-sm font-medium text-primary-blue'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
