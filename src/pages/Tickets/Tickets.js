import React, { useEffect, useState } from 'react'
import './style.css'
import pattern2 from '../../assets/svg/Pattern2.svg'
import golden_pass from '../../assets/svg/Golden_Pass.svg'
import Navbar from '../../components/Navbar/Navbar'
import { useNavContext } from '../../context/NavContext'
import { useFirebaseContext } from '../../context/FirebaseContext'
import Footer from '../../components/Footer/Footer'

const Tickets = () => {
    const { changeCurrentPage } = useNavContext()
    const [loading, setLoading] = useState(true)
    const { tickets } = useFirebaseContext()
    useEffect(() => {
        // document.documentElement.style.setProperty('--heading', '#FFEE08')
        changeCurrentPage('tickets')

        // return () => { document.documentElement.style.setProperty('--heading', '#02d7f2') }
    }, [])
    return (
        <div>
            <Navbar />
            <div className='pt-28 md:pt-32 pb-32 text-white font-chakra min-h-screen grid place-items-center'>
                <div className='w-10/12 md:w-2/3 m-auto'>
                    <div className='flex flex-col md:flex-row gap-5 h-[50vh] md:h-auto'>
                        <img src={golden_pass} alt="" className='md:w-[70%] ' />
                        <div className='flex-1 flex flex-col justify-end'>
                            {/* <p className='uppercase font-bold text-3xl'>golden pass</p> */}
                            <p>Includes</p>
                            <div className='text-xl'>
                                {/* <div>
                                    &#x2023;
                                    &#x2023;
                                    &#x2023;
                                </div> */}
                                <p> Day 1 Pass</p>
                                <p> Day 2 Pass</p>
                                <p> Day 3 Pass</p>
                            </div>
                            <div className='mt-8 md:mt-[30%]'>
                                <p><s className='text-xl font-bold italic text-[#9c8a26]'>&#8377;1499</s>&nbsp;&nbsp;<span className='text-4xl font-bold italic text-[#FFD700]'>&#8377;1399</span></p>
                                <p className='text-[#FFD700] text-lg'>For workshop attendees</p>
                            </div>
                            <div>
                                <a href="https://www.yepdesk.com/dyuksha-festival-ticket-3-days" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, #FFD700 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:h-64 flex flex-col md:flex-row gap-5 mt-40 md:mt-5'>
                        <div className='w-full md:w-1/3 p-8 flex flex-col justify-between h-[50vh] md:h-full border border-heading day_pass relative backdrop-blur-md'>
                            <div className='w-full h-full absolute top-0 left-0'>
                                <img src={pattern2} alt="" className='w-full h-full object-cover opacity-[15%]' />
                            </div>
                            <div className='text-heading'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 1</p>
                                <p className='font-bold  text-6xl uppercase no_drag'>pass</p>
                            </div>
                            <div className='self-end translate-y-4'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-1" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 p-8 flex flex-col justify-between h-[50vh] md:h-full border border-heading day_pass relative backdrop-blur-md'>
                            <div className='w-full h-full absolute top-0 left-0'>
                                <img src={pattern2} alt="" className='w-full h-full object-cover opacity-[15%]' />
                            </div>
                            <div className='text-heading'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 2</p>
                                <p className='font-bold  text-6xl uppercase no_drag'>pass</p>
                            </div>
                            <div className='self-end translate-y-4'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-2" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 p-8 flex flex-col justify-between h-[50vh] md:h-full border border-heading day_pass relative backdrop-blur-md'>
                            <div className='w-full h-full absolute top-0 left-0'>
                                <img src={pattern2} alt="" className='w-full h-full object-cover opacity-[15%]' />
                            </div>
                            <div className='text-heading'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 3</p>
                                <p className='font-bold  text-6xl uppercase no_drag'>pass</p>
                            </div>
                            <div className='self-end translate-y-4'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-3" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Tickets





{/* <div className='bg-heading w-[600px] h-64 p-1 flex flex-col relative'>
<div className='uppercase text-black relative'>
    <p className='font-bold origin-right rotate-90'>day 1</p>
</div>
<div className='w-full h-full bg-black'>
    <div className='pattern w-full h-full p-3 text-heading flex items-start justify-between relative'>
        <div>
            <p className='font-bold italic text-3xl uppercase no_drag'>Combo</p>
            <p className='font-bold italic text-3xl uppercase no_drag'>pass</p>
        </div>
        <img src={logo} alt="" className='w-6 object-contain no_drag' />
        <div className='bg-black absolute w-full h-10 left-0 bottom-0 flex items-center justify-between px-3'>
            <img src={logo_text} alt="" className='h-[50%] object-contain no_drag' />
            <p className='text-3xl font-bold no_drag'>$1499</p>
        </div>
    </div>
</div>
</div> */}