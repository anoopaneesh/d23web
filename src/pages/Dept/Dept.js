import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from "react-router-dom";
import { useFirebaseContext } from '../../context/FirebaseContext';
import EventContainer from '../../components/EventContainer/EventContainer';
import { useNavContext } from '../../context/NavContext';
import { AnimatePresence, motion } from 'framer-motion'
import ProShowModal from '../../components/ProShowModal/ProShowModal';
import Footer from '../../components/Footer/Footer';

import no_image from '../../assets/jpeg/No_Image.png'
const Dept = ({ workshop }) => {
  const { changeCurrentPage } = useNavContext()
  const { id } = useParams()
  const { day1, day2, day3, getDaysData, getAllWorkshops } = useFirebaseContext()
  const [listday1, setListday1] = useState([])
  const [listday2, setListday2] = useState([])
  const [listday3, setListday3] = useState([])

  const [modelOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState({})
  function openModal() {
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${window.scrollY}px`;
    if (window.innerWidth < 700) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }

    // document.getElementById('dept-b').style.filter = 'blur(10px)'
    setModalOpen(true)
  }
  function closeModal() {
    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    if (window.innerWidth < 700) {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    // document.getElementById('dept-b').style.filter = 'blur(0)'

    setSelected({})
    setModalOpen(false)
    // window.location.reload()
  }
  useEffect(() => {
    changeCurrentPage(workshop ? 'workshops' : 'events')

    if (workshop) {
      getAllWorkshops()
      document.documentElement.style.setProperty('--heading', '#FD0130')
    } else {
      getDaysData(id)
      document.documentElement.style.setProperty('--heading', '#FFEE08')
    }

    return () => { document.documentElement.style.setProperty('--heading', '#02d7f2') }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (!day1 || day1.length === 0) return
    setListday1(workshop ? day1 : day1.filter(el => el.dept === id))
    // eslint-disable-next-line
  }, [day1])
  useEffect(() => {
    if (!day2 || day2.length === 0) return
    setListday2(workshop ? day2 : day2.filter(el => el.dept === id))
    // eslint-disable-next-line
  }, [day2])
  useEffect(() => {
    if (!day2 || day2.length === 0) return
    setListday3(workshop ? day3 : day3.filter(el => el.dept === id))
    // eslint-disable-next-line
  }, [day3])


  function handleSelect(item) {
    setSelected(item)
    openModal()
  }
  return (
    <div className='about min-h-screen font-chakra text-white'>
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
                  <p className='text-lg text-justify'>{selected.description}</p>
                  <div className='h-5'></div>
                  <p className='text-lg'>{`Contact : ${selected.contact}`}</p>
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
      <div id="dept-b">
        <Navbar />
        <div className='w-2/3 m-auto pb-10 pt-44'>
          {!workshop && <div className='text-6xl md:text-7xl text-heading mb-8 font-bold flex justify-start items-baseline'>
            {/* <div className='w-[1px] h-16 -translate-x-10 bg-heading'></div> */}
            <p>{id.toUpperCase()}</p>
            <h2 className='text-transparent text_stroke text-4xl'>Corner</h2>
          </div>}
          <AnimatePresence>{listday1.length !== 0 && <motion.div
            key={day1}
          >
            <div className='flex  items-baseline space-x-8'>
              <h2 className='text-2xl mb-8'>DAY 1</h2><span>31/03/2023</span></div>
            <div className='md:space-y-0 space-y-8 flex gap-y-4 md:flex-row flex-col md:grid' style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {listday1.map(item => {
                item.day = 1
                return <EventContainer key={item.ticket} item={item} onClick={handleSelect} />
              })}
            </div>
          </motion.div>}</AnimatePresence>
          <AnimatePresence>{listday2.length !== 0 && <motion.div className='mt-20'
            key={day1}
          >
            <div className='flex items-baseline space-x-8'>
              <h2 className='text-2xl mb-8'>DAY 2</h2><span>01/04/2023</span></div>
            <div className='md:space-y-0 space-y-8 flex gap-y-4 md:flex-row flex-col md:grid' style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {listday2.map(item => {
                item.day = 2
                return <EventContainer key={item.ticket} item={item} onClick={handleSelect} />
              })}
            </div>
          </motion.div>}</AnimatePresence>
          <AnimatePresence> {listday3.length !== 0 && <motion.div className='mt-20'>
            <div className='flex items-baseline space-x-8'>
              <h2 className='text-2xl mb-8'>DAY 3</h2><span>02/03/2023</span></div>
            <div className='md:space-y-0 space-y-8 flex gap-y-4 md:flex-row flex-col md:grid' style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {listday3.map(item => {
                item.day = 3
                return <EventContainer key={item.ticket} item={item} onClick={handleSelect} />
              })}
            </div>
          </motion.div>}</AnimatePresence>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default Dept