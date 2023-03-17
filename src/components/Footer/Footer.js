import React from 'react'
import logo from '../../assets/svg/DYUKSHA23W.svg'
const Footer = () => {
    return (
        <div className='relative'>
            <div className="bg-black border-t border-heading h-16 grid place-items-center">
                <img src={logo} alt="" className='w-44 object-contain text-center' />
            </div>
            <div className='absolute top-[50%] right-10 md:right-96 -translate-y-1/2 flex space-x-4'>
                <a href='https://www.instagram.com/dyuksha.nssce/?igshid=YmMyMTA2M2Y%3D'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com/@dyuksha2093"> <i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}

export default Footer