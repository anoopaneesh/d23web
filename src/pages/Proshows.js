import React from 'react'
import { useNavContext } from '../context/NavContext'
import "../components/Proshow/proshow.css"
const Proshows = () => {
    useNavContext().changeCurrentPage('proshows')
  return (
    <div className='bg-black absolute top-0 w-full overflow-scroll proshow scroll-smooth'>

      <div className='relative top-48  '>

      <h1 className=' text-7xl font-chakra text-yellow-400 w-fit mx-8  md:mx-24 text-center ' >Proshows</h1>

      <img src="https://dyuksha.org/Events%20Page/pro1.jpg" alt="" className=' w-4/5 md:w-3/5 my-24 m-auto blur-sm hover:blur-0 transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-105' />
      <img src="https://dyuksha.org/Events%20Page/pro3.jpg" alt="" className=' w-4/5 md:w-3/5 m-auto blur-sm hover:blur-0 transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-105'  />
      </div>
    </div>
  )
}

export default Proshows