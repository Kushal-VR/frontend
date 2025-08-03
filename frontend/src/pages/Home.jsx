import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <Hero />
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default Home
