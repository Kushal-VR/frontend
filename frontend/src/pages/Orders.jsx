import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Orders = () => {
  const { currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Since we're not using authentication, show a message about local storage
    setOrders([]);
  }, [])

  return (
    <div className='py-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <div className='text-center py-10'>
          <img className='w-12 mx-auto mb-4' src={assets.support_img} alt="" />
          <h3 className='text-xl font-medium text-gray-600 mb-2'>No Orders Yet</h3>
          <p className='text-gray-500 mb-4'>
            Since this is a demo version without authentication, orders are not persisted.
          </p>
          <p className='text-sm text-gray-400'>
            In a real application, orders would be stored in a database and linked to user accounts.
          </p>
        </div>
      ) : (
        <div className='grid gap-4'>
          {orders.map((order, index) => (
            <div key={index} className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-2'>
                <h3 className='font-medium'>Order #{order._id}</h3>
                <span className='text-sm text-gray-500'>{new Date(order.date).toLocaleDateString()}</span>
              </div>
              <div className='text-sm text-gray-600'>
                <p>Total: {currency}{order.totalAmount}</p>
                <p>Status: {order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
