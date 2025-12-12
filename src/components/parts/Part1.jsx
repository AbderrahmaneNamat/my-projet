import React from 'react'
import Nav from '../nav/Nav'
import Hero from './Hero'

const Part1 = () => {
  return (
    <div className="bg-black h-screen overflow-hidden  text-white bg-gradient-to-b from-sky-400 to-sky-200">
        <Nav/>
        <div className="p-5  ">
        <h1 className="text-7xl text-center flex justify-center py-4"><div className='md:w-[700px]'>What will you design today?</div> </h1>
        <h1 className="text-4xl text-center flex justify-center pt-4"><div className='md:w-[700px]'>Make socials, videos, slides, and more with Canva.</div> </h1>
        <h1 className="text-center flex justify-center pt-4"><div className='bg-white w-fit px-4 py-2 rounded text-black'>Start designing for free</div> </h1>
        <div className=" "> <Hero/></div>

      </div>
    </div>
  )
}

export default Part1