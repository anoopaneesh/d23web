import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const CurvedContainer = ({ logo, clip, className, to, text }) => {
  return (
    <div className='w-10/12 md:w-1/4 h-1/4'>
      <div className={`curved_container w-full h-full ${clip && 'clip_path'} ${className}`}>
        <div className={`inner ${clip && 'clip_path'}`}>
          <Link to={text ? '/error': `/dept/${to}` }><img src={logo} className="w-full h-full" alt="" /></Link>
        </div>
      </div>
      {text && <h3 className='text-white mt-4 md:mt-8 font-chakra font-bold text-center uppercase text-2xl'>{text}</h3>}
    </div>

  )
}

export default CurvedContainer