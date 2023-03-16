import React from 'react'
import { useNavContext } from '../context/NavContext'
const Workshops = () => {
    useNavContext().changeCurrentPage('workshops')
  return (
    <div>Workshops</div>
  )
}

export default Workshops