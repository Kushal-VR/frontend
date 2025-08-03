import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row card rounded-xl overflow-hidden shadow-lg hover-lift'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 gradient-bg'>
            <div className='text-dark-blue'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-primary-blue'></p>
                    <p className='font-medium text-sm md:text-base text-primary-blue'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-dark-blue'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base text-primary-blue'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-primary-blue'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
