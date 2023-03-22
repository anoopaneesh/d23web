import React, { useEffect, useState } from 'react'
import './Tickets.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProShowModal from '../../components/ProShowModal/ProShowModal'
import { AnimatePresence } from 'framer-motion'
import { useNavContext } from '../../context/NavContext'
import { useFirebaseContext } from '../../context/FirebaseContext'
import Loading from '../Loading/Loading'

const Tickets = () => {
    const { changeCurrentPage } = useNavContext()
    const [loading, setLoading] = useState(true)
    const { tickets } = useFirebaseContext()

    return (
        <Navbar />
    )
}

export default Tickets