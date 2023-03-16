import React from 'react'
import './style.css'
import logo from '../../assets/svg/D_Logo_White.svg'
import { useNavContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
function Navbar() {
  const { currentPage } = useNavContext()
  const currentColor = (page) => {
    return currentPage == page ? `text-heading` : `text-foreground`
  }
  return (
    <>
      {/* <img src={logo} className="w-8 absolute left-[50%] -translate-x-1/2" /> */}
      <nav className='z-10 bg-gradient-to-b from-transparent_black via-[#0005] to-transparent sticky top-0 navbar flex justify-center text-foreground text-lg uppercase space-x-20 items-center pt-10 pb-20'>
        <div className='flex justify-between w-2/5 font-chakra'>

          <a href="/" className={`no_drag select-none w-10 ${currentColor('home')}`}>Home</a>
          <a href="/events" className={`no_drag select-none w-10 ${currentColor('events')}`}>Events</a>
          <img src={logo} className="no_drag select-none w-8" />
          <a href="/workshops" className={`no_drag select-none w-10 ${currentColor('workshops')} -translate-x-8`}>Workshops</a>
          <a href="/proshows" className={`no_drag select-none w-10 ${currentColor('proshows')}`}>Proshows</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar