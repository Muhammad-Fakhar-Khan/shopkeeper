import React from 'react'
import HeroSection from './components/Home/HeroSection'
import RecentlyAdd from './components/Home/RecentlyAdd'
import FeaturedProducts from './components/Home/FeaturedProducts'

export default function Home() {
  return (
    <div>
   <HeroSection />
   <RecentlyAdd />
   <FeaturedProducts />
    </div>
  )
}
