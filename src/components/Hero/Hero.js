import React, { useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import bg_loop from '../../assets/gif/loop.gif'
import './style.css'

const Hero = ({ openEasterEgg }) => {







  const fonts = [
    {
      text: "DYUKSHA '23",
      font: "Chakra Petch"
    },
    {
      text: "ദ്യുക്ഷ '23",
      font: "Noto Sans Malayalam"
    },
    {
      text: "द्युक्षा '23",
      font: "Tiro Devanagari Hindi"
    },
    {
      text: "த்யுக்ஷா '23",
      font: "Noto Sans Tamil"
    }
  ]
  const [selectedFont, setSelectedFont] = useState(0)
  useEffect(() => {
    const fontInterval = setInterval(() => {
      setSelectedFont((state) => (state + 1) % fonts.length)
    }, 3000)


    


    return () => clearInterval(fontInterval)




  }, [])
  console.log(fonts[selectedFont])
  return (
    <>
      {/* <video src={intro} muted autoPlay loop className='absolute top-0 -z-0 w-full h-full object-cover' /> */}

      <div className='relative top-0 overflow-hidden z-2 h-screen pt-8 md:pt-32'>
        <img src={bg_loop} className="absolute top-0 w-full h-full object-cover object-left-top" alt="" />
        <div className='bg-[rgba(0,0,0,.5)] w-full h-full absolute top-0'></div>


        <div className='mt-[30%] md:mt-20'>
         
          <h1
            style={{ fontFamily: fonts[selectedFont].font }}
            className="text-center glitch no_drag text-5xl md:text-8xl font-bold italic  text-white" data-text={fonts[selectedFont].text}>{fonts[selectedFont].text}</h1>
          {window.innerWidth < 700 ? <h3 className='text-center text-foreground text-sm md:text-xl mt-4 md:mt-10 relative'>THE TECHNO-CULTURAL PROTAGONIST<br /> SHALL RISE AGAIN</h3> : <h3 className='text-center text-foreground text-sm md:text-xl mt-4 md:mt-10 relative'>THE TECHNO-CULTURAL PROTAGONIST SHALL RISE AGAIN</h3>}
          <div className='h-20'></div>
          <div className='flex justify-center mt-5 md:-mt-10'>
            <a href="https://www.yepdesk.com/profile/dyuksha" className='text-center ml-2' target="_blank" rel="noreferrer"><button className='button bg-[#FD3649] font-chakra' type="button">GRAB YOUR TICKETS</button></a>
          </div>
          <div className='mt-20 md:mt-10'>
            <Timer openEasterEgg={openEasterEgg} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero