import React, { useEffect, useState } from 'react'
import CurvedContainer from '../../components/CurvedContainer/CurvedContainer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavContext } from '../../context/NavContext'
import pelicula_logo from '../../assets/jpeg/events/pelicula.jpg'
import informals_logo from '../../assets/jpeg/events/informals.jpg'
import game_logo from '../../assets/jpeg/events/game.jpg'

import no_image from '../../assets/jpeg/No_Image.png'
import cse_logo from '../../assets/jpeg/branches/cse.jpg'
import civil_logo from '../../assets/jpeg/branches/civil.jpg'
import ece_logo from '../../assets/jpeg/branches/ece.jpg'
import eee_logo from '../../assets/jpeg/branches/eee.png'
import ice_logo from '../../assets/jpeg/branches/ice.jpg'
import mech_logo from '../../assets/jpeg/branches/mech.jpg'
import Footer from '../../components/Footer/Footer'
import { useFirebaseContext } from '../../context/FirebaseContext'
import ProShowModal from '../../components/ProShowModal/ProShowModal'
import { AnimatePresence } from 'framer-motion'



const Events = () => {
  const { changeCurrentPage } = useNavContext()
  const { generalEvents } = useFirebaseContext()
  const [modelOpen, setModelOpen] = useState(false)
  const [selected, setSelected] = useState({})
  function openModal(event) {
    setSelected(event)
    setModelOpen(true)
  }
  function closeModal() {
    setSelected({})
    setModelOpen(false)
  }
  useEffect(() => {
    changeCurrentPage('events')

  }, [changeCurrentPage])
  return (
    <>
      <div className='min-h-screen pb-52 font-chakra about pt-32'>
        <Navbar />

        <div className="h-10 w-full"></div>
        <div className='w-full flex justify-center mb-[32px]'>
          <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center'>
            <h2 className='md:-translate-x-5'>Department</h2>
            <h3 className='text-transparent text_stroke'>Events</h3>
          </div>
        </div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={cse_logo} to="cse" clip />
          <CurvedContainer logo={civil_logo} to="civil" clip />
          <CurvedContainer logo={ece_logo} to="ece" clip />
        </div>
        <div className='h-3'></div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={eee_logo} to="eee" clip />
          <CurvedContainer logo={ice_logo} to="ice" clip />
          <CurvedContainer logo={mech_logo} to="mech" clip />
        </div>



        <div className='w-full flex justify-center mb-[15px] mt-40 md:mt-52'>
          <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center'>
            <h2 className='md:-translate-x-5'>General</h2>
            <h3 className='text-transparent text_stroke'>Events</h3>
          </div>
        </div>
        <div className='flex gap-4 mx-24 mt-[32px]'>
          <AnimatePresence>
            {modelOpen && <ProShowModal handleClose={closeModal}>
              <div className='shad grid place-items-center max-h-[100vh] bg-[#000a] backdrop-blur-xl overflow-scroll md:overflow-hidden'>
                <div className='md:border border-heading flex flex-col md:flex-row px-4 md:px-0'>
                  <div id="image_parent" className='flex justify-center pt-4 md:pb-4 md:pl-4  md:h-[500px]'>
                    <img src={selected.url || no_image} alt="" className='h-full w-auto aspect-square object-cover' />
                  </div>
                  <div className='md:flex md:flex-col md:justify-between max-w-lg'>
                    <div className='px-4 mt-4 flex flex-col space-y-3'>
                      <h3 className='text-3xl md:text-5xl uppercase font-bold text-heading' >{`${selected.eventname}`}</h3>
                      <div className='flex space-x-4 text-lg pb-5 text-[#bbb]'>
                        <p>Day {selected.day}</p>
                        <p>{selected.time}</p>
                      </div>
                      <p className='text-lg text-justify text-white'>{selected.description}</p>
                      <div className='h-5'></div>
                      <p className='text-lg text-white'>{`Contact : ${selected.contact}`}</p>
                    </div>
                    <div className='flex justify-center p-6 md:pb-6 pb-40 md:justify-end space-x-4'>
                      <div className='text-center' onClick={closeModal}><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                        background
                          : " linear-gradient(45deg, transparent 5%, #ddd 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)",

                      }}>Back</button></div>
                      <a href={selected.ticket} className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                        background
                          : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: "black", boxShadow: "6px 0 0 var(--c_red)",

                      }}>Register</button></a>
                    </div>
                  </div>
                </div>

              </div>
            </ProShowModal>}
          </AnimatePresence>
          {generalEvents.day1.map(event => <CurvedContainer onClick={() => openModal(event)} logo={event.url} clip />)}
          {generalEvents.day2.map(event => <CurvedContainer onClick={() => openModal(event)} logo={event.url} clip />)}
          {generalEvents.day3.map(event => <CurvedContainer onClick={() => openModal(event)} logo={event.url} clip />)}
          <CurvedContainer logo={informals_logo} clip text />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Events