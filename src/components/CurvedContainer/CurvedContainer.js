import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const CurvedContainer = ({ logo, clip, className, to, text, workshop, onClick }) => {
  function getRedirection(workshop, to) {
    if (workshop) {
      return `/dept-works/${to}`
    } else {
      return `/dept/${to}`
    }
  }
  return (
    <div className={`w-10/12 md:w-1/4 h-1/4 ${className}`}>
      <div className={`curved_container w-full h-full ${clip && 'clip_path'}`}>
        <div className={`inner ${clip && 'clip_path'}`}>
          {onClick ? <img src={logo} className="w-full h-full" alt="" onClick={onClick} /> : <Link to={text ? '/error' : getRedirection(workshop, to)}><img src={logo} className="w-full h-full" alt="" /></Link>}
        </div>
      </div>
      {text && <h3 className='text-white mt-4 md:mt-8 font-chakra font-bold text-center uppercase text-2xl'>{text}</h3>}
    </div>

  )
}

export default CurvedContainer