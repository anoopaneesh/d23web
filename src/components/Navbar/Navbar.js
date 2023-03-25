import React, { useState, useEffect } from 'react'
import './style.css'
import logo from '../../assets/svg/D_Logo_White.svg'
import logo_text from '../../assets/svg/Dyuksha23.svg'
import { useNavContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
function Navbar() {
  const { currentPage } = useNavContext()
  const currentColor = (page) => {
    if (navOpen) {
      return currentPage == page ? `text-heading font-bold` : `text-foreground`
    } else {
      return currentPage == page ? `text-heading` : `text-foreground`
    }

  }
  const [currentScroll, setCurrentScroll] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    function handleScroll() {
      setCurrentScroll(window.scrollY)

    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  function handleNavOpen() {
    console.log('reached')
    setNavOpen(true)

  }
  function handleNavClose() {

    setNavOpen(false)
  }
  return (
    <>
      {/* <img src={logo} className="w-8 absolute left-[50%] -translate-x-1/2" /> */}
      {/* bg-[#020000bf] */}
      <AnimatePresence>{navOpen &&
        <motion.div
          key="navbar"
          initial={{ translateX: "100vw" }}
          animate={{
            translateX: "0vw", transition: {
              duration: 0.2,
              type: "tween",
            }
          }}
          exit={{ translateX: "100vw" }}

          className={`border-l border-[#8ff2] bg-[#0006] backdrop-blur-2xl pl-7 fixed h-full top-0 right-0 w-1/2 z-30 mobile_shad`}>
          <span onClick={handleNavClose} className='text-[#777] mt-4 text-3xl absolute top-0 right-5'><i className="fa-solid fa-xmark"></i></span>
          <div className='uppercase links-mobile links flex flex-col text-xl justify-center h-full space-y-20'>
            <a href="/" className={`no_drag select-none ${currentColor('home')}`}>Home</a>
            <a href="/events" className={`no_drag select-none ${currentColor('events')}`}>Events</a>
            <a href="/workshops" className={`no_drag select-none ${currentColor('workshops')}`}>Workshops</a>
            <a href="/proshows" className={`no_drag select-none ${currentColor('proshows')}`}>Proshows</a>
            <a href="/tickets" className={`no_drag select-none ${currentColor('tickets')}`}>Tickets</a>
            <a href="/accomodation" className={`no_drag select-none ${currentColor('accomodation')}`}>Accomodation</a>
          </div>
        </motion.div>}</AnimatePresence>
      <nav className={`${currentScroll > 50 && 'md:bg-[#000b] md:backdrop-blur-2xl backdrop-blur-xl bg-[#0007] border-b-[1px] border-[#0ff2] shad'} z-10 bg-gradient-to-b from-transparent_black via-[#0005] to-transparent top-0 navbar flex justify-center text-foreground text-lg uppercase space-x-20 items-center pt-10 pb-10 fixed w-full`}>
        {window.innerWidth < 600 ? <a href="/" className='w-1/3 absolute'><img src={logo_text} className="no_drag select-none" /></a> : <a href="/"><img src={logo} className="no_drag select-none w-8 absolute top-10 left-20" /></a>}
        {window.innerWidth < 600 && !navOpen && <p onClick={handleNavOpen} className='absolute top-7 right-10'><i className="fa-solid fa-bars"></i></p>}
        <div className='links hidden justify-between w-[50%] font-chakra md:flex'>

          <a href="/" className={`no_drag select-none ${currentColor('home')}`}>Home</a>
          <a href="/events" className={`no_drag select-none ${currentColor('events')}`}>Events</a>

          <a href="/workshops" className={`no_drag select-none ${currentColor('workshops')}`}>Workshops</a>
          <a href="/proshows" className={`no_drag select-none ${currentColor('proshows')}`}>Proshows</a>
          <a href="/tickets" className={`no_drag select-none ${currentColor('tickets')}`}>Tickets</a>
          <a href="/accomodation" className={`no_drag select-none ${currentColor('accomodation')}`}>Accomodation</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar