import React, { useEffect, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const Verify = () => {
  const [searchParams] = useSearchParams();
  const { navigate, setCartItems } = useContext(ShopContext);
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    // Since this is a demo without authentication, just show a message
    if (success === 'true') {
      toast.success('Payment verification successful! (Demo mode)');
    } else {
      toast.error('Payment verification failed! (Demo mode)');
    }
    
    // Redirect to home after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, [success, orderId, navigate]);

  return (
    <div className='py-20 text-center'>
      <div className='max-w-md mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>
          {success === 'true' ? 'Payment Verified!' : 'Payment Failed!'}
        </h1>
        <p className='text-gray-600 mb-4'>
          {success === 'true' 
            ? 'Your payment has been verified successfully.' 
            : 'There was an issue with your payment verification.'
          }
        </p>
        <p className='text-sm text-gray-500'>
          Order ID: {orderId || 'N/A'}
        </p>
        <p className='text-sm text-gray-400 mt-4'>
          Redirecting to home page...
        </p>
      </div>
    </div>
  )
}

export default Verify