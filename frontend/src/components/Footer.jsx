import React from 'react'
import { assets } from '../assets/assets'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

        <div>
            <Logo className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-light-blue'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-dark-blue'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-light-blue'>
                <li className='hover:text-primary-blue cursor-pointer transition-colors'>Home</li>
                <li className='hover:text-primary-blue cursor-pointer transition-colors'>About us</li>
                <li className='hover:text-primary-blue cursor-pointer transition-colors'>Delivery</li>
                <li className='hover:text-primary-blue cursor-pointer transition-colors'>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-dark-blue'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-light-blue'>
                <li>+1-212-456-7890</li>
                <li>contact@flipzonyou.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr className='border-light-blue' />
            <p className='py-5 text-sm text-center text-light-blue'>Copyright 2024@ flipzon.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
