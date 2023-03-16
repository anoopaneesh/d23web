import React from 'react'
import { useNavContext } from '../context/NavContext'

const Events = () => {
    useNavContext().changeCurrentPage('events')
  return (
    <div>Events</div>
  )
}

export default Events