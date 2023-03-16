import React from 'react'
import CurvedContainer from '../components/CurvedContainer/CurvedContainer'
import Navbar from '../components/Navbar/Navbar'
import { useNavContext } from '../context/NavContext'
import pelicula_logo from '../assets/jpeg/events/pelicula.jpg'
import informals_logo from '../assets/jpeg/events/informals.jpg'
import game_logo from '../assets/jpeg/events/game.jpg'

import cse_logo from '../assets/jpeg/branches/cse.jpg'
import civil_logo from '../assets/jpeg/branches/civil.jpg'
import ece_logo from '../assets/jpeg/branches/ece.jpg'
import eee_logo from '../assets/jpeg/branches/eee.jpg'
import ice_logo from '../assets/jpeg/branches/ice.jpg'
import mech_logo from '../assets/jpeg/branches/mech.jpg'



const Events = () => {
  useNavContext().changeCurrentPage('events')
  return (
    <div className='bg-black min-h-screen pb-52'>
      <Navbar />
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center mt-20'>
          <CurvedContainer logo={pelicula_logo} clip />
          <CurvedContainer logo={game_logo} clip />
          <CurvedContainer logo={informals_logo} clip />
        </div>
        <div className="h-40 w-full"></div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={cse_logo} />
          <CurvedContainer logo={civil_logo} />
          <CurvedContainer logo={ece_logo} />
        </div>
        <div className="h-20 w-full"></div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={eee_logo} />
          <CurvedContainer logo={ice_logo} />
          <CurvedContainer logo={mech_logo} />
        </div>
      


    </div>
  )
}

export default Events