import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useParams } from "react-router-dom";
import ece_logo from '../assets/jpeg/branches/ece.jpg'
import AllCutContainer from '../components/AllCutContainer/AllCutContainer';
import { useFirebaseContext } from '../context/FirebaseContext';
const Dept = (props) => {
  const { id } = useParams()
  const {} = useFirebaseContext()
  return (
    <div className='min-h-screen bg-black font-chakra'>
      <Navbar />
      <div className='w-2/3 m-auto pt-10'>
        <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex justify-start items-baseline'>
          <div className='w-[1px] h-16 -translate-x-10 bg-heading'></div>
          <p className='-translate-x-5'>CSE</p>
          <h2 className='text-transparent text_stroke text-4xl'>Corner</h2>
        </div>
      </div>
    </div>
  )
}

export default Dept