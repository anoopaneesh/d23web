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
import tech_pack from '../../assets/svg/TECH_PACK.svg'
import tech_pack_m from '../../assets/svg/TECH_PACK_M.svg'



const Events = () => {
  const { changeCurrentPage } = useNavContext()
  const { getGeneralEvents } = useFirebaseContext()
  const [modelOpen, setModelOpen] = useState(false)
  const [selected, setSelected] = useState({})
  const [generalEvents, setGeneralEvents] = useState({ day1: [], day2: [], day3: [] })
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
    getGeneralEvents().then(data => setGeneralEvents(data))
  }, [])
  return (
    <>
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
                  {selected.ticket != '' && <a href={selected.ticket} className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                    background
                      : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: "black", boxShadow: "6px 0 0 var(--c_red)",

                  }}>Register</button></a>}
                </div>
              </div>
            </div>

          </div>
        </ProShowModal>}
      </AnimatePresence>
      {/* ----------------------------------------------------------------NAVBAR-------------------------------------------------------- */}
      <Navbar />

      <div className='grid place-items-center duration-150 font-chakra drawer uppercase text-white text-[10px] md:text-[13px] text-bold fixed w-[100vw] h-[38px] z-10 bg-[#012] border-b border-t border-heading backdrop-blur-xl md:mt-24 mt-[80px] shad overflow-hidden'>
        <div className='hidden h-[100%] md:flex justify-between items-center w-4/5 md:w-1/3'>
          <div className='w-[80%] translate-y-[2px] md:translate-y-0'>
            <p className=''>Enroll for one event per day for all three days for just &#8377;350!</p>
          </div>
          <div className='grid place-items-center h-[38px]'>
            <a href='https://www.yepdesk.com/tech-event-package' className='border-l border-r border-[#02d7f230] hover:border-heading hover:bg-[#02d7f230] hover:border-l hover:border-r text-sm hover:cursor-pointer w-[120px] h-[38px] grid place-items-center'>BUY&nbsp;TICKET</a>
          </div>
        </div>
        <div className='md:hidden flex items-center w-[100vw]'>
          <marquee scrollamount='6' scrollDelay='0' className='w-full'><p className='text-base'>Enroll for all of the 30+ technical events for just &#8377;350!</p></marquee>

        </div>
      </div>

      <div className='min-h-screen pb-4 font-chakra about pt-32 w-11/12 m-auto'>


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



        <div className='w-full flex justify-center mt-40 md:mt-52'>
          <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center'>
            <h2 className='md:-translate-x-5'>General</h2>
            <h3 className='text-transparent text_stroke'>Events</h3>
          </div>
        </div>
        <div className='h-3'></div>
        <div className='flex items-center justify-center md:mt-12 space-x-8 mb-8 text-white'><h2 className='text-2xl'>DAY 1</h2><span>31/03/2023</span></div>
        <div className='items-center justify-center flex flex-wrap flex-col md:flex-row gap-3 mb-32'>
          {generalEvents.day1.map(event => <CurvedContainer onClick={() => { event.day = 1; openModal(event) }} logo={event.url} clip />)}

        </div>
        <div className='flex items-center justify-center md:mt-8 space-x-8 mb-8 text-white'><h2 className='text-2xl'>DAY 2</h2><span>01/04/2023</span></div>
        <div className='items-center justify-center flex flex-wrap flex-col md:flex-row gap-3 mb-32'>

          {generalEvents.day2.map(event => <CurvedContainer onClick={() => { event.day = 2; openModal(event) }} logo={event.url} clip />)}

        </div>
        <div className='flex items-center justify-center md:mt-8 space-x-8 mb-8 text-white'><h2 className='text-2xl'>DAY 3</h2><span>02/04/2023</span></div>
        <div className='items-center justify-center flex flex-wrap flex-col md:flex-row gap-3 mb-32 '>
          {generalEvents.day3.map(event => <CurvedContainer onClick={() => { event.day = 3; openModal(event) }} logo={event.url} clip />)}
          {/* <CurvedContainer logo={informals_logo} clip text /> */}
        </div>
        {/* <h2 className='text-2xl mb-8'>DAY 1</h2><span>31/03/2023</span></div> */}
      </div>



      {/* ---------------TECH PACK-------------- */}

      <div className='flex justify-center pb-8'>
        <div className='flex flex-col h-auto w-4/5'>
          <div className='hidden md:block h-auto w-full'>
            <img src={tech_pack} className='no_drag'></img>
          </div>
          <div className='block md:hidden h-auto w-full'>
            <img src={tech_pack_m} className='no_drag'></img>
          </div>
          <div className='self-end -translate-y-[30%] -translate-x-[5%]'>
            <a href="https://www.yepdesk.com/tech-event-package" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
              background
                : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

            }}>Buy Now</button></a>
          </div>
          <div className='md:-translate-y-[130%] text-[#FFF] pb-4'>
            <p>Enroll for one event per day for all three days for just &#8377;350!
            </p>
          </div>
        </div>
      </div>

      {/* -------------TECH PACK ENDS------------ */}

      <Footer />
    </>
  )
}

export default Events