import React from 'react'
import Timer from '../components/Timer/Timer'
// import intro from '../assets/videos/Intro2.mp4'
import bg_img from '../assets/jpeg/cp2077_3.jpg'
import Navbar from '../components/Navbar/Navbar'

const Hero = () => {
  return (
    <>
      {/* <video src={intro} muted autoPlay loop className='absolute top-0 -z-0 w-full h-full object-cover' /> */}

      <div className='relative top-0 overflow-hidden z-2 h-screen'>
        <img src={bg_img} className="absolute top-0 w-full h-full object-cover" />
        <div className='bg-[rgba(0,0,0,.5)] w-full h-full absolute top-0'></div>
        
        <Navbar />
        <div className='mt-[50%] md:mt-20'>
          <h1 className="text-center glitch no_drag text-5xl md:text-8xl font-bold italic text-white" data-text="DYUKSHA '23">DYUKSHA&nbsp;'23</h1>
          <h3 className='text-center text-foreground text-xl mt-10 relative'>THE TECHNO-CULTURAL PROTAGONIST SHALL RISE AGAIN</h3>
          <div className='h-20'></div>
          <div className='flex justify-center -mt-10'>
            <a href="https://www.yepdesk.com/profile/dyuksha" className='text-center ml-2' target="_blank"><button className='button bg-[#FD3649] font-chakra' type="button">GRAB YOUR TICKETS</button></a>
          </div>
          <Timer />
        </div>
      </div>

    </>
  )
}

export default Hero