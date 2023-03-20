import React from 'react'
import logo from '../../assets/gif/loading.gif'
const Loading = () => {
  return (
    <div className='bg-black h-screen grid place-items-center md:translate-y-0 -translate-y-16'>
        <img src={logo} alt="" className='w-[150px] md:w-[180px]'/>
    </div>
  )
}

export default Loading