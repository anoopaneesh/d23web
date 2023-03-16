import React from 'react'
import { useNavContext } from '../context/NavContext'
const Proshows = () => {
    useNavContext().changeCurrentPage('proshows')
  return (
    <div>Proshows</div>
  )
}

export default Proshows