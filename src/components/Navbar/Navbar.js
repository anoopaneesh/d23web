import React, { useState, useEffect } from 'react'
import './style.css'
import logo from '../../assets/svg/D_Logo_White.svg'
import { useNavContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
function Navbar() {
  const { currentPage } = useNavContext()
  const currentColor = (page) => {
    if (navOpen) {
      return currentPage == page ? `text-black font-bold` : `text-foreground`
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
    if (window.innerWidth < 500) {
      setNavOpen(true)
    }
  }
  function handleNavClose() {
    setNavOpen(false)
  }
  return (
    <>
      {/* <img src={logo} className="w-8 absolute left-[50%] -translate-x-1/2" /> */}
      <div className={`bg-heading absolute h-full top-0 left-0 w-1/2 z-30 transition-all -translate-x-[105%] ${navOpen && 'translate-x-0'}`}>
        <span onClick={handleNavClose} className='text-black font-bold text-3xl absolute top-0 right-5'>X</span>
        <div className='flex flex-col text-3xl justify-center h-full space-y-20'>
          <a href="/" className={`no_drag select-none ${currentColor('home')}`}>Home</a>
          <a href="/events" className={`no_drag select-none ${currentColor('events')}`}>Events</a>
          <a href="/workshops" className={`no_drag select-none ${currentColor('workshops')}`}>Workshops</a>
          <a href="/proshows" className={`no_drag select-none ${currentColor('proshows')}`}>Proshows</a>
        </div>
      </div>
      <nav className={`${currentScroll > 50 && 'bg-black'} z-10 bg-gradient-to-b from-transparent_black via-[#0005] to-transparent sticky top-0 navbar flex justify-center text-foreground text-lg uppercase space-x-20 items-center pt-10 pb-10`}>
        {window.innerWidth < 500 ?<img onClick={handleNavOpen} src={logo} className="no_drag select-none w-8 absolute top-10 left-10" /> : <a href="/"><img src={logo} className="no_drag select-none w-8 absolute top-10 left-10" /></a>}
        <div className='hidden justify-between w-2/5 font-chakra md:flex'>

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