import React, { useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import bg_loop from '../../assets/gif/loop.gif'
import './style.css'

const Hero = ({ openEasterEgg }) => {







  const fonts = [
    {
      text: "DYUKSHA",
      font: "Chakra Petch"
    },
    {
      text: "ദ്യുക്ഷ",
      font: "Noto Sans Malayalam"
    },
    {
      text: "द्युक्षा",
      font: "Tiro Devanagari Hindi"
    },
    {
      text: "த்யுக்ஷா",
      font: "Noto Sans Tamil"
    }
  ]
  const [selectedFont, setSelectedFont] = useState(0)
  const [glitchEnabled, setGlitchEnabled] = useState(false)
  function getPreciseSeconds() {
    const m = new Date().getMilliseconds()
    const s = new Date().getSeconds()
    const p = s + (m / 1000)
    return p
  }
  useEffect(() => {
    const fontInterval = setInterval(() => {
      setSelectedFont((state) => (state + 1) % fonts.length)
    }, 3000)
    const glitchStart = setInterval(() => {
      setGlitchEnabled(true)
    }, 2870)

    const glitchEnd = setInterval(() => {
      setGlitchEnabled(false)
    }, 3100)


    return () => {
      clearInterval(fontInterval)
      clearInterval(glitchStart)
      clearInterval(glitchEnd)
    }
  }, [])
  return (
    <>
      {/* <video src={intro} muted autoPlay loop className='absolute top-0 -z-0 w-full h-full object-cover' /> */}

      <div className='relative top-0 overflow-hidden z-2 h-screen pt-8 md:pt-32'>
        {/* <video src={intro_vid} playsInline autoplay="autoplay" muted loop="loop" className="absolute top-0 w-full h-full object-cover object-left-top" alt="" /> */}
        <img src={bg_loop} className="absolute top-0 w-full h-full object-cover object-left-top" alt="" />
        <div className='bg-[rgba(0,0,0,.5)] w-full h-full absolute top-0'></div>


        <div className='flex flex-col items-center space-y-[3vh] justify-center mt-[8vh] md:mt-0 h-[70%] md:h-[100%]'>

          <div>
            <h1
              style={{ fontFamily: fonts[selectedFont].font }}
              className={`text-center glitch no_drag text-5xl md:text-8xl font-bold italic ${glitchEnabled && 'new_glitch'} text-white`} data-text={fonts[selectedFont].text}>{fonts[selectedFont].text}</h1>
            <h1
              style={{ fontFamily: fonts[0].font }}
              className={`text-center glitch no_drag text-5xl md:text-8xl font-bold italic ${glitchEnabled && 'new_glitch'} text-white`} data-text="2023">2023</h1>
          </div>
          {window.innerWidth < 700 ? <h3 className='text-center text-foreground text-sm md:text-xl relative'>THE TECHNO-CULTURAL PROTAGONIST<br /> SHALL RISE AGAIN</h3> : <h3 className='text-center text-foreground text-sm md:text-xl relative'>THE TECHNO-CULTURAL PROTAGONIST SHALL RISE AGAIN</h3>}
          <div className='flex justify-center'>
            <a href="https://www.yepdesk.com/profile/dyuksha" className='text-center mt-[8%]' rel="noreferrer"><button className='button bg-[#FD3649] font-chakra' type="button">GRAB YOUR TICKETS</button></a>
          </div>
          <div className='pt-2 translate-y-[3vh]'>
            <Timer openEasterEgg={openEasterEgg} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero