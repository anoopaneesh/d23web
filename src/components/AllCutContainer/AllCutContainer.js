import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const AllCutContainer = ({logo,clip,className,to}) => {
  return (
    
    <div className={`all_cut w-10/12 md:w-1/4 h-96 ${clip && 'clip_path'} ${className}`}>
       <div className={`inner ${clip && 'clip_path'}`}>
         <Link to={`/dept/${to}`}><img src={logo} alt="" /></Link>
       </div>
    </div>
   
  )
}

export default AllCutContainer