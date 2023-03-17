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
import bgpattern from '../assets/svg/Dyuksha23_bg_outline.svg'



const Events = () => {
  useNavContext().changeCurrentPage('events')
  return (
    <div className='bg-bgpattern bg-repeat min-h-screen pb-52 font-chakra'>
      <Navbar />
      <div className='items-center md:items-start flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-3 justify-center mt-20'>
        <CurvedContainer logo={pelicula_logo} clip text="Pelicula" />
        <CurvedContainer logo={game_logo} clip text="Game Gala" />
        <CurvedContainer logo={informals_logo} clip text="Informals" />
      </div>
      <div className="h-40 w-full"></div>
      <div className='w-full flex justify-center mb-[50px]'>
        <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex justify-start items-center'>
          <h2 className='-translate-x-5'>Department</h2>
          <p className='text-transparent text_stroke'>Events</p>
        </div>
      </div>
      <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
        <CurvedContainer logo={cse_logo} to="cse" />
        <CurvedContainer logo={civil_logo} to="civil" />
        <CurvedContainer logo={ece_logo} to="ece" />
      </div>
      <div className='h-3'></div>
      <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
        <CurvedContainer logo={eee_logo} to="eee" />
        <CurvedContainer logo={ice_logo} to="ice" />
        <CurvedContainer logo={mech_logo} to="mech" />
      </div>



    </div>
  )
}

export default Events