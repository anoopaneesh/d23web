import React, { useState } from 'react'
import logo from '../../assets/svg/DYUKSHA23W.svg'
import logo_mobile from '../../assets/svg/D_Logo_White.svg'
const Footer = () => {
    const [modelOpen,setModelOpen] = useState(false)
    function handleModalOpen(){
        setModelOpen(true)
    }
    function handleModalClose(){
        setModelOpen(false)
    }
    return (
        <div className='relative'>
            {/* <div className='bg-red-700 w-80 h-40 absolute -top-40 left-96'>
                <p>CONTACT</p>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <p>Aswin</p>
                        <p>9074416082</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Jagan</p>
                        <p>9074416082</p>
                    </div>
                </div>
            </div> */}
            <p className='absolute top-[50%] left-96 -translate-y-1/2' onClick={handleModalClose}><i class="fa-solid fa-phone"></i></p>
            <div className="bg-black border-t border-heading h-16 grid place-items-center">
                {window.innerWidth < 700 ? <img src={logo_mobile} alt="" className='w-8 object-contain text-center' />: <img src={logo} alt="" className='w-44 object-contain text-center' />}
            </div>
            <div className='absolute top-[50%] right-10 md:right-96 -translate-y-1/2 flex space-x-4 text-xl'>
                <a href='https://www.instagram.com/dyuksha.nssce/?igshid=YmMyMTA2M2Y%3D'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com/@dyuksha2093"> <i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}

export default Footer