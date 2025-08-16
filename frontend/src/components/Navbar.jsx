import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  const {setShowSearch , getCartCount , navigate} = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    // No authentication needed - just clear local cart
    navigate('/')
  }

  return (
    <div className='flex items-center justify-between py-4 border-b'>
      {/* Logo */}
      <Link to='/' onClick={() => setVisible(false)}>
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex items-center gap-8'>
        <Link to='/' className='text-dark-blue hover:text-primary-blue transition-colors'>Home</Link>
        <Link to='/collection' className='text-dark-blue hover:text-primary-blue transition-colors'>Collection</Link>
        <Link to='/about' className='text-dark-blue hover:text-primary-blue transition-colors'>About</Link>
        <Link to='/contact' className='text-dark-blue hover:text-primary-blue transition-colors'>Contact</Link>
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4'>
        {/* Search Icon */}
        <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        
        {/* Profile Icon - Always accessible */}
        <img onClick={() => navigate('/orders') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
        
        {/* Cart Icon */}
        <Link to='/cart' onClick={() => setVisible(false)} className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <span className='absolute -top-2 -right-2 bg-primary-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{getCartCount()}</span>
        </Link>

        {/* Mobile Menu Icon */}
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className='absolute top-full left-0 w-full bg-white border-b z-50 sm:hidden'>
          <div className='flex flex-col gap-4 p-4'>
            <Link to='/' onClick={() => setVisible(false)} className='text-dark-blue hover:text-primary-blue transition-colors'>Home</Link>
            <Link to='/collection' onClick={() => setVisible(false)} className='text-dark-blue hover:text-primary-blue transition-colors'>Collection</Link>
            <Link to='/about' onClick={() => setVisible(false)} className='text-dark-blue hover:text-primary-blue transition-colors'>About</Link>
            <Link to='/contact' onClick={() => setVisible(false)} className='text-dark-blue hover:text-primary-blue transition-colors'>Contact</Link>
            <Link to='/orders' onClick={() => setVisible(false)} className='text-dark-blue hover:text-primary-blue transition-colors'>Orders</Link>
            <button onClick={handleLogout} className='text-dark-blue hover:text-primary-blue transition-colors text-left'>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
