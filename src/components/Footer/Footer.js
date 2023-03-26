import React, { useState } from 'react'
import logo from '../../assets/svg/DYUKSHA23W.svg'
import logo_mobile from '../../assets/svg/D_Logo_White.svg'
import { AnimatePresence, motion } from 'framer-motion'
const Footer = () => {
    const [modelOpen, setModelOpen] = useState(false)
    function handleModal() {
        setModelOpen((state) => !state)
    }
    function handleRedirect() {
        window.open('https://until-next-time.netlify.app/', '_blank');
    }
    return (
        <div className='relative text-white'>
            {/* <div onClick={handleRedirect} className='w-10 h-10 absolute translate-x-1/2 translate-y-1/2'></div> */}
            <AnimatePresence>
                {modelOpen && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`transition-all duration-700 ease-in-out  border  border-heading backdrop-blur-sm bg-[#0001] absolute bottom-[66px] w-56 overflow-hidden md:left-96 py-8 px-4`}>
                    <p>CONTACT</p>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between'>
                            <p>Aswin</p>
                            <p>7356508546</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Jagan</p>
                            <p>9539467296</p>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
            <p className='absolute top-[50%] left-10 md:left-96 -translate-y-1/2 hover:text-heading duration-300' onClick={handleModal}><i className="fa-solid fa-phone"></i></p>
            <div className="bg-black border-t border-heading h-24 grid place-items-center">
                {window.innerWidth < 700 ? <img src={logo_mobile} alt="" className='w-8 object-contain text-center' /> : <img src={logo} alt="" className='w-44 object-contain text-center' />}
            </div>
            <div className='absolute top-[50%] right-10 md:right-96 -translate-y-1/2 flex space-x-4 text-xl'>
                <a href='https://www.instagram.com/dyuksha.nssce/?igshid=YmMyMTA2M2Y%3D'><i className="fa-brands fa-instagram hover:text-heading duration-300"></i></a>
                <a href="https://www.youtube.com/@dyuksha2093"> <i className="fa-brands fa-youtube hover:text-heading duration-300"></i></a>
            </div>
        </div>
    )
}

export default Footer