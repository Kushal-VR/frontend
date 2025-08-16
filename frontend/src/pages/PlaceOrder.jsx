import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const { navigate, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePlaceOrder = () => {
    // Since this is a demo without authentication, just show success message
    toast.success('Order placed successfully! (Demo mode)');
    setCartItems({}); // Clear cart
    navigate('/');
  };

  const getCartItemsList = () => {
    let items = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId);
          if (product) {
            items.push({
              ...product,
              size,
              quantity: cartItems[itemId][size]
            });
          }
        }
      }
    }
    return items;
  };

  const cartItemsList = getCartItemsList();
  const subtotal = getCartAmount();
  const total = subtotal + delivery_fee;

  if (cartItemsList.length === 0) {
    return (
      <div className='py-10'>
        <div className='text-center'>
          <Title text1={'PLACE'} text2={'ORDER'} />
          <p className='text-gray-600 mt-4'>Your cart is empty. Add some products first!</p>
          <button onClick={() => navigate('/collection')} className='mt-4 bg-primary-blue text-white px-6 py-2 rounded'>
            Go to Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='py-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'PLACE'} text2={'ORDER'} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Order Summary */}
        <div>
          <h3 className='text-xl font-medium mb-4'>Order Summary</h3>
          <div className='space-y-4'>
            {cartItemsList.map((item, index) => (
              <div key={index} className='flex items-center gap-4 p-3 border rounded'>
                <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover rounded' />
                <div className='flex-1'>
                  <h4 className='font-medium'>{item.name}</h4>
                  <p className='text-sm text-gray-600'>Size: {item.size} | Qty: {item.quantity}</p>
                  <p className='text-primary-blue font-medium'>${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Checkout */}
        <div>
          <h3 className='text-xl font-medium mb-4'>Payment & Checkout</h3>
          
          {/* Payment Method Selection */}
          <div className='mb-6'>
            <h4 className='font-medium mb-3'>Select Payment Method</h4>
            <div className='space-y-2'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Cash on Delivery</span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Credit/Debit Card</span>
              </label>
            </div>
          </div>

          {/* Order Total */}
          <div className='border-t pt-4 mb-6'>
            <div className='flex justify-between mb-2'>
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Delivery Fee:</span>
              <span>${delivery_fee}</span>
            </div>
            <div className='flex justify-between font-medium text-lg border-t pt-2'>
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className='w-full bg-primary-blue text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
            Place Order (Demo Mode)
          </button>

          <p className='text-xs text-gray-500 mt-2 text-center'>
            This is a demo application. No real payment will be processed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
