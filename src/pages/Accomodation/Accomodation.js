import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavContext } from '../../context/NavContext'

const Accomodation = () => {

    const { changeCurrentPage } = useNavContext()
    useEffect(() => {
        changeCurrentPage('accomodation')
    }, [])
    return (
        <div className='h-screen font-chakra text-white flex flex-col'>
            <Navbar />
            <div className='flex-1 flex flex-col justify-center items-start w-full px-8 md:px-0 md:w-2/3 m-auto space-y-4 md:space-y-[6vh]'>
                <h1 className=' uppercase text-4xl md:text-6xl font-bold text-heading mt-28 self-center md:self-start'>Accomodations</h1>
                <p className='text-justify'>During the event days, attendees have
                    the opportunity to stay in paid hostel
                    facilities which are available for both
                    boys and girls. These hostel facilities are
                    a great option for those who are
                    traveling from out of town and need a
                    convenient and affordable place to stay
                    during the event
                    To secure a spot in the hostel, attendees
                    can book ahead of time using the given
                    link. This allows them to reserve their spot
                    and ensure that they have a
                    comfortable and secure place to stay
                    throughout the duration of the event.</p>
                <div className='w-full'>
                    <p className='text-heading pb mt-4'>Contact</p>
                    <div className='mt-4 md:flex md:justify-between w-[30%]'>
                        <p>Arjun&nbsp;(Men) <br />+91&nbsp;|||| || |||||| || || |||||</p>
                        <p className=' mt-4 md:mt-0'>Rasica&nbsp;(Women) <br /> +91&nbsp;|||| ||||| ||| ||| || |||</p>
                    </div>
                </div>
                <div className='pb-12 md:pt-0 pt-8'>
                    <p className='text-4xl text-heading'>&#8377;150 <span className='text-sm'>/ day</span></p>
                    <a href="https://www.yepdesk.com/accomodation" target="_blank" rel="noreferrer" className='text-center pointer-events-none brightness-50'><button className='bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                        background
                            : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 0 var(--c_red)`,

                    }}>Book Now</button></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Accomodation