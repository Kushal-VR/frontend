import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center card p-8 rounded-xl'>
      <p className='text-2xl font-medium text-dark-blue'>Subscribe now & get 20% off</p>
      <p className='text-light-blue mt-3'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-light-blue rounded-lg pl-3 bg-white/50'>
        <input className='w-full sm:flex-1 outline-none bg-transparent text-dark-blue placeholder-light-blue' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='btn-primary text-xs px-10 py-4 rounded-r-lg'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
