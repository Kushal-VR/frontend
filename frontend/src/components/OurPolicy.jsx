import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base'>
      
      <div className='card p-6 rounded-xl hover-lift'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold text-dark-blue'>Easy Exchange Policy</p>
        <p className='text-light-blue'>We offer hassle free exchange policy</p>
      </div>
      <div className='card p-6 rounded-xl hover-lift'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold text-dark-blue'>7 Days Return Policy</p>
        <p className='text-light-blue'>We provide 7 days free return policy</p>
      </div>
      <div className='card p-6 rounded-xl hover-lift'>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold text-dark-blue'>Best customer support</p>
        <p className='text-light-blue'>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
