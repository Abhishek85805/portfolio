import React from 'react'
import HomeComponent from '../components/HomeComponent'

function Home({homeRef}) {
  return (
    <div ref={homeRef} className='min-h-full w-full flex flex-col justify-center items-center'>
        <HomeComponent/>
    </div>
  )
}

export default Home