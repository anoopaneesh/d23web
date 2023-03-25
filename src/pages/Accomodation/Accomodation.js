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
            <div className='flex-1 flex flex-col justify-center items-center w-full px-4 md:px-0 md:w-2/3 m-auto space-y-10'>
                <h1 className='text-5xl md:text-6xl font-bold text-heading'>Accomodations</h1>
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
                    <p className='underline'>Contact</p>
                    <p>Arjun : 9400056465</p>
                    <p>Rasica : 9188074576</p>
                </div>
                <a href="https://www.yepdesk.com/accomodation" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                    background
                        : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 0 var(--c_red)`,

                }}>Book Now</button></a>
            </div>
            <Footer />
        </div>
    )
}

export default Accomodation