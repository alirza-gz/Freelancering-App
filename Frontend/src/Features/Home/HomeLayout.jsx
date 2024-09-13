import React from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'

const HomeLayout = () => {
  return (
    <section className='container mx-auto xl:max-w-screen-xl'>
      <HomeHeader />
      <HomeContent />
    </section>
  )
}

export default HomeLayout
