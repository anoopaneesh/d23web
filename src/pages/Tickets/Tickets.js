import React, { useEffect, useState } from 'react'
import './style.css'
import pattern2 from '../../assets/svg/Pattern2.svg'
import golden_pass from '../../assets/svg/GOLDEN_PASS_2.svg'
import Navbar from '../../components/Navbar/Navbar'
import { useNavContext } from '../../context/NavContext'
import { useFirebaseContext } from '../../context/FirebaseContext'
import Footer from '../../components/Footer/Footer'
import day1_bg from '../../assets/svg/DAY_PASS_BG_1.svg'
import day2_bg from '../../assets/svg/DAY_PASS_BG_2.svg'
import day3_bg from '../../assets/svg/DAY_PASS_BG_3.svg'
import tech_pack from '../../assets/svg/TECH_PACK.svg'
import tech_pack_m from '../../assets/svg/TECH_PACK_M.svg'

const Tickets = () => {
    const { changeCurrentPage } = useNavContext()
    const [loading, setLoading] = useState(true)
    const { tickets } = useFirebaseContext()
    useEffect(() => {
        // document.documentElement.style.setProperty('--heading', '#FFEE08')
        changeCurrentPage('tickets')

        // return () => { document.documentElement.style.setProperty('--heading', '#02d7f2') }
    }, [])

    const changeHeight = () => {
        let El = document.querySelector('.drawer');
        if (El.style.height == '220px') {
            El.style.height = '38px';
        }
        else El.style.height = '220px';
    }

    return (
        <div>
            <Navbar />
            <div className='duration-150 font-chakra drawer uppercase text-white text-[10px] md:text-[13px] text-bold fixed w-[100vw] h-[38px] grid place-items-center z-10 bg-[#200C] border-b border-t border-[#F00] backdrop-blur-xl md:mt-24 mt-[80px] shad overflow-hidden'>
                <div className='flex row gap-8 place-items-center h-[38px]'>
                    <p><span className='font-bold'>25% OFF</span> on all passes for workshop attendees</p>
                    <div onClick={changeHeight} className='hover:bg-[#400a] grid place-items-center h-[38px] w-[38px] hover:scale-[1.2] text-[#F00] duration-200 hover:cursor-pointer'>
                        <div className=' border-[1px] border-red rounded-full lowercase w-[16px] h-[16px] grid place-items-center border-[#F00]'>
                            <p className='md:-translate-y-[3px] -translate-y-[3px] text-sm'>i</p>
                        </div>
                    </div>
                </div>
                <div className='text-[12px] md:text-[15px] w-4/5 normal-case mb-4'>
                    <p className='font-bold uppercase'>Book workshop ticket and claim 25% off on offline booking of all passes</p>
                    <p className='mt-4'>Steps to redeem offer</p>
                    <p><a href='/workshops' className='text-[#F00] underline font-bold'>1. Grab your workshop ticket</a></p>
                    <p>2. Submit your workshop ticket during the event</p>
                    <p>3. Claim 25% OFF on any pass (on offline purchase)</p>
                </div>
            </div>
            <div className='pt-40 md:pt-52 pb-32 text-white font-chakra min-h-screen grid place-items-center'>
                <div className='w-10/12 md:w-2/3 m-auto'>
                    <div className='flex flex-col md:flex-row gap-5 h-[50vh] md:h-auto'>
                        <img src={golden_pass} alt="" className='self-end justify-self-end md:w-[70%] no_drag hover:scale-[1.005] hover:brightness-[105%] hover:contrast-125 duration-200' />
                        <div className='flex-1 flex justify-between flex-row md:flex-col md:justify-end'>
                            {/* <p className='uppercase font-bold text-3xl'>golden pass</p> */}
                            <div className='text-[16px] md:text-xl'>
                                <p className='opacity-50 text-sm'>Includes</p>
                                {/* <div>
                                    &#x2023;
                                    &#x2023;
                                    &#x2023;
                                </div> */}
                                <p> Day 1 Pass</p>
                                <p> Day 2 Pass</p>
                                <p> Day 3 Pass</p>
                            </div>
                            <div className='flex flex-col md:text-start text-end'>
                                <div className='md:mt-8 md:mt-[30%]'>
                                    {/* <s className='text-xl font-bold italic text-[#9c8a26]'>&#8377;1499</s>&nbsp;&nbsp; */}
                                    <p><span className='text-3xl md:text-4xl text-[#FFD700]'>&#8377;1499</span></p>
                                    {/* <p className='text-[#FFD700] text-lg'>For workshop attendees</p> */}
                                </div>
                                <div className='brightness-[40%] pointer-events-none'>
                                    <a href="https://www.yepdesk.com/dyuksha-festival-ticket-3-days" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                        background
                                            : `linear-gradient(45deg, transparent 5%, #FFD700 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                    }}>Buy Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* ---------------------------------------------------------SECTION PREV-------------------------------------- */}
                    {/* <div className='w-full md:h-64 flex flex-col md:flex-row gap-5 md:mt-5'>
                        <div className='w-full md:w-1/3 p-4 flex flex-col justify-between md:h-[50%] pb-2 pr-4  border border-heading day_pass relative'>
                            <div className='w-full h-full absolute top-0 left-0 z-0'>
                                <img src={day1_bg} alt="" className='w-full h-full object-cover brightness-[20%] contrast-[103%] z-0' />
                            </div>
                            <div className='text-heading z-[1]'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 1 pass</p>
                                <p className='text-3xl uppercase no_drag'>&#8377;399</p>
                            </div>
                            <div className='self-end'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-1" target="_blank" rel="noreferrer" className='text-center m-0'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 p-4 flex flex-col justify-between md:h-[50%] pb-2 mt-4 md:mt-0 border border-heading day_pass relative bg-[#111]'>
                            <div className='w-full h-full absolute top-0 left-0'>
                                <img src={day1_bg} alt="" className='w-full h-full object-cover brightness-[20%] contrast-[103%] z-0' />
                            </div>
                            <div className='text-heading z-[1]'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 2 pass</p>
                                <p className='text-3xl uppercase no_drag'>&#8377;599</p>
                            </div>
                            <div className='self-end'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-2" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 p-4 flex flex-col justify-between md:h-[50%] pb-2 pr-4 mt-4 md:mt-0 border border-heading day_pass relative bg-[#111]'>
                            <div className='w-full h-full absolute top-0 left-0'>
                                <img src={day1_bg} alt="" className='w-full h-full object-cover brightness-[20%] contrast-[103%] z-0' />
                            </div>
                            <div className='text-heading z-[1]'>
                                <p className='font-bold  text-3xl uppercase no_drag'>day 3 pass</p>
                                <p className='text-3xl uppercase no_drag'>&#8377;699</p>
                            </div>
                            <div className='self-end'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-3" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                    </div> */}

                    {/* --------------------------------------------------SECTION 2------------------------------------------------------------- */}




                    <div className='w-full md:auto flex flex-col md:flex-row gap-5 md:gap-8 md:mt-8'>
                        <div className='flex flex-col h-auto w-full'>
                            <div className='h-auto w-full'>
                                <img src={day1_bg} className='no_drag hover:scale-[1.005] hover:brightness-125 duration-200'></img>
                            </div>
                            <div className='self-end -translate-y-[65%] -translate-x-[15%] brightness-[40%] pointer-events-none'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-1" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='flex flex-col h-auto w-full'>
                            <div className='h-auto w-full'>
                                <img src={day2_bg} className='no_drag hover:scale-[1.005] hover:brightness-125 duration-200'></img>
                            </div>
                            <div className='self-end -translate-y-[60%] -translate-x-[15%] brightness-[40%] pointer-events-none'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-2" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                        <div className='flex flex-col h-auto w-full'>
                            <div className='h-auto w-full'>
                                <img src={day3_bg} className='no_drag hover:scale-[1.005] hover:brightness-125 duration-200'></img>
                            </div>
                            <div className='self-end -translate-y-[60%] -translate-x-[15%] brightness-[40%] pointer-events-none'>
                                <a href="https://www.yepdesk.com/dyuksha-live-proshow-night-day-3" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                        </div>
                    </div>


                    {/* ---------------TECH PACK-------------- */}

                    <div>
                        <div className='mt-14 md:mt-0 flex flex-col h-auto w-full'>
                            <div className='hidden md:block h-auto w-full'>
                                <img src={tech_pack} className='no_drag hover:scale-[1.005] hover:brightness-125 duration-200'></img>
                            </div>
                            <div className='block md:hidden h-auto w-full'>
                                <img src={tech_pack_m} className='no_drag hover:scale-[1.005] hover:brightness-125 duration-200'></img>
                            </div>
                            <div className='self-end -translate-y-[30%] -translate-x-[5%] brightness-[40%] pointer-events-none'>
                                <a href="https://www.yepdesk.com/tech-event-package" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 var(--c_red)`,

                                }}>Buy Now</button></a>
                            </div>
                            <div className='md:-translate-y-[200%]'>
                                <p>Enroll for one event per day for all three days for just &#8377;350!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* -------------TECH PACK ENDS------------ */}

                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Tickets




// check
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