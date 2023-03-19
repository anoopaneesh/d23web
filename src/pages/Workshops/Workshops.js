import React, { useEffect } from 'react'
import CurvedContainer from '../../components/CurvedContainer/CurvedContainer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavContext } from '../../context/NavContext'

import cse_logo from '../../assets/jpeg/branches/cse.jpg'
import civil_logo from '../../assets/jpeg/branches/civil.jpg'
import ece_logo from '../../assets/jpeg/branches/ece.jpg'
import eee_logo from '../../assets/jpeg/branches/eee.png'
import ice_logo from '../../assets/jpeg/branches/ice.jpg'
import mech_logo from '../../assets/jpeg/branches/mech.jpg'
import Footer from '../../components/Footer/Footer'



const Workshops = () => {
  const {changeCurrentPage} = useNavContext()
  useEffect(() => {
    changeCurrentPage(('workshops'))
    document.documentElement.style.setProperty('--heading', '#FD0130')
   
    return () => { document.documentElement.style.setProperty('--heading', '#02d7f2') }
  }, [changeCurrentPage])
  return (
    <>
      <div className='min-h-screen pb-52 font-chakra about pt-32'>
        <Navbar />

        <div className="h-10 w-full"></div>
        <div className='w-full flex justify-center mb-[15px]'>
          <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center'>
            <h2 className='md:-translate-x-5'>Department</h2>
            <h3 className='text-transparent text_stroke'>Workshops</h3>
          </div>
        </div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={cse_logo} to="cse" clip workshop />
          <CurvedContainer logo={civil_logo} to="civil" clip workshop />
          <CurvedContainer logo={ece_logo} to="ece" clip workshop />
        </div>
        <div className='h-3'></div>
        <div className='items-center md:items-start flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center'>
          <CurvedContainer logo={eee_logo} to="eee" clip workshop />
          <CurvedContainer logo={ice_logo} to="ice" clip workshop />
          <CurvedContainer logo={mech_logo} to="mech" clip workshop />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Workshops