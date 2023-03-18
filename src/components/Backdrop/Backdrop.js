import React from 'react'
import { motion } from 'framer-motion'
import './style.css'

const Backdrop = ({ children, onClick, className }) => {
    return (
        <motion.div className={`backdrop z-20  ${className}`} onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}

export default Backdrop