import React, { useState, useEffect } from 'react'
import './style.css'
import logo from '../../assets/svg/D_Logo_White.svg'
import logo_text from '../../assets/svg/Dyuksha23.svg'
import { useNavContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <div className={`border-l border-[#fff3] bg-[#fFFFFF15] backdrop-blur-2xl pl-7 fixed h-full top-0 right-0 w-1/2 z-30 ${navOpen ? 'block' : 'hidden'} mobile_shad`}>
        <span onClick={handleNavClose} className='text-[#777] mt-4 text-3xl absolute top-0 right-5'><i class="fa-solid fa-xmark"></i></span>
        <div className='links-mobile links flex flex-col text-xl justify-center h-full space-y-20'>
          <a href="/" className={`no_drag select-none ${currentColor('home')}`}>Home</a>
          <a href="/events" className={`no_drag select-none ${currentColor('events')}`}>Events</a>
          <a href="/workshops" className={`no_drag select-none ${currentColor('workshops')}`}>Workshops</a>
          <a href="/proshows" className={`no_drag select-none ${currentColor('proshows')}`}>Proshows</a>
        </div>
      </div>
      <nav className={`${currentScroll > 50 && 'bg-black'} z-10 bg-gradient-to-b from-transparent_black via-[#0005] to-transparent sticky top-0 navbar flex justify-center text-foreground text-lg uppercase space-x-20 items-center pt-10 pb-10`}>
        {window.innerWidth < 600 ? <img src={logo_text} className="no_drag select-none w-1/3 absolute" /> : <a href="/"><img src={logo} className="no_drag select-none w-8 absolute top-10 left-20" /></a>}
        {window.innerWidth < 600 && <p onClick={handleNavOpen} className='absolute top-7 right-10'><i className="fa-solid fa-bars"></i></p>}
        <div className='links hidden justify-between w-2/5 font-chakra md:flex'>

          <a href="/" className={`no_drag select-none ${currentColor('home')}`}>Home</a>
          <a href="/events" className={`no_drag select-none ${currentColor('events')}`}>Events</a>

          <a href="/workshops" className={`no_drag select-none ${currentColor('workshops')}`}>Workshops</a>
          <a href="/proshows" className={`no_drag select-none ${currentColor('proshows')}`}>Proshows</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar