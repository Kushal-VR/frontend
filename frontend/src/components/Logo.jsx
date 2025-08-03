import React from 'react'

const Logo = ({ className = 'w-36' }) => {
  return (
    <div className={`font-bold text-2xl text-primary-blue prata-regular ${className}`}>
      Flipzon
    </div>
  )
}

export default Logo 