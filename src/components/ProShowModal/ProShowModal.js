import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { motion } from 'framer-motion'
import './style.css'
const ProShowModal = ({ handleClose, text, className, children,backdropClass }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        damping: 100,
        stiffness: 200,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        damping: 100,
        stiffness: 200,
      }
    }
  }
  return (
    <Backdrop onClick={handleClose} className={backdropClass}>
      <motion.div onClick={e => e.stopPropagation()} className={className}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default ProShowModal