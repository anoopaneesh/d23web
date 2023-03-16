import React from 'react'
import './style.css'

const CurvedContainer = ({logo,clip,className}) => {
  return (
    <div className={`curved_container w-10/12 md:w-1/4 h-96 ${clip && 'clip_path'} ${className}`}>
       <div className={`inner ${clip && 'clip_path'}`}>
         <img src={logo} alt="" />
       </div>
    </div>
  )
}

export default CurvedContainer