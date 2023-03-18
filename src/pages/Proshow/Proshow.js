import React, { useState } from 'react'
import './proshow.css'
import day1 from '../../assets/jpeg/proshows/day1.png'
import day2 from '../../assets/jpeg/proshows/day2.png'
import day3 from '../../assets/jpeg/proshows/day3.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProShowModal from '../../components/ProShowModal/ProShowModal'
import day1_pot from '../../assets/jpeg/proshows/day1_pot.jpg'
import day3_pot from '../../assets/jpeg/proshows/day3_pot.jpg'
import { AnimatePresence } from 'framer-motion'
import { useNavContext } from '../../context/NavContext'



const Proshow = () => {
    useNavContext().changeCurrentPage('proshows')
    const [modelOpen, setModalOpen] = useState(false)
    const [selected, setSelected] = useState({})
    function openModal() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        // document.getElementById('proshow-b').style.filter = 'blur(10px)'
        setModalOpen(true)

    }
    function closeModal() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        // document.getElementById('proshow-b').style.filter = 'blur(0px)'
        setModalOpen(false)
    }
    function openDay1() {
        setSelected({
            day: 1,
            artist: "KS Harishankar",
            register: "https://www.yepdesk.com/dyuksha-live-proshow-night-day-1",
            price: "₹399",
            venue: "TBA",
            time: "TBA",
            logo: day1_pot,
            button_bg: "#dadada",
            button_text: "black",
        })
        openModal()
    }
    function openDay2() {
        setSelected({
            day: 2,
            artist: "TBA",
            register: "",
            price: "TBA",
            venue: "TBA",
            time: "TBA",
            logo: day1_pot,
            button_bg: " #0055FC",
            button_text: "white",
        })
        openModal()
    }
    function openDay3() {
        setSelected({
            day: 3,
            artist: "Ankit Tiwari",
            register: "https://www.yepdesk.com/dyuksha-live-proshow-night-day-3",
            price: "₹699",
            venue: "TBA",
            time: "TBA",
            logo: day3_pot,
            button_bg: "#C09",
            button_text: "white",

        })
        openModal()
    }

    return (
        <div className='proshow_body about'>
            <AnimatePresence>
                {modelOpen && <ProShowModal handleClose={closeModal}>
                    <div className='md:translate-y-0 -translate-y-14 shad border border-heading w-[80vw] grid place-items-center md:w-[130vh] max-h-[100vh] bg-[#000a] backdrop-blur-xl'>
                        <div className='w-[96%] h-[100%] flex flex-col md:flex-row'>
                            <div className='w-full flex py-4 justify-center md:justify-start'>
                                <img src={selected.logo} alt="" className='w-[90%]' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='mt-4 flex flex-col space-y-3 mx-4 md:mx-0 md:-translate-x-10'>
                                    <h3 className='md:text-6xl text-4xl uppercase font-bold' >{`Day ${selected.day}`}</h3>
                                    <p className='text-2xl uppercase'>{selected.artist}</p>
                                    <p className="text-4xl text-heading" style={{ color: selected.button_bg }}>{selected.price}</p>
                                </div>
                                <div className='flex-1'></div>
                                <div className='flex justify-center space-x-4 px-4 pb-4 md:pt-0 pt-8'>
                                    <a className='text-center' onClick={closeModal}><button className='bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                        background
                                            : " linear-gradient(45deg, transparent 5%, var(--c_red) 5%)", color: "white", boxShadow: "6px 0 0 var(--heading)",

                                    }}>Back</button></a>
                                    <a href={selected.register} target="_blank" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                        background
                                            : `linear-gradient(45deg, transparent 5%, ${selected.button_bg} 5%)`, color: selected.button_text, boxShadow: `6px 0 0 ${selected.day == 3 ? 'white' : 'var(--c_red)'}`,

                                    }}>Register</button></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </ProShowModal>}
            </AnimatePresence>
            <div id="proshow-b">
                <Navbar />
                <div className='proshow_inner mt-8 pt-32'>
                    <div class="proshows md:space-y-0 space-y-8">
                        <div class="container-shows">
                            <div class="image-container">
                                <img src={day1} alt="" onClick={openDay1} />
                            </div>
                            <div class="content-container">
                                <div className="details">
                                    <p>DAY 1</p>
                                    <p>KS HARISHANKAR</p>
                                </div>
                                <a className='text-center' onClick={openDay1}><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : " linear-gradient(45deg, transparent 5%, #dadada 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)",

                                }}>Explore</button></a>

                            </div>
                        </div>
                        <div class="container-shows">
                            <div class="image-container">
                                <img src={day2} alt="" onClick={() => { }} />
                            </div>
                            <div class="content-container reverse">
                                <div className="details">
                                    <p>DAY 2</p>
                                    <p>TBA</p>
                                </div>
                                <a className='text-center' onClick={() => { }}><button className=' bg-[#36fdfd] proshow_button day2_button font-chakra' type="button" style={{
                                    background
                                        : " linear-gradient(45deg, transparent 5%, #0055FC 5%)", color: "white", boxShadow: "6px 0 0 var(--c_red)",

                                }}>Explore</button></a>
                            </div>
                        </div>
                        <div class="container-shows">
                            <div class="image-container">
                                <img src={day3} alt="" onClick={openDay3} />
                            </div>
                            <div class="content-container">
                                <div className="details">
                                    <p>DAY 3</p>
                                    <p>ANKIT TIWARI</p>
                                </div>
                                <a className='text-center' onClick={openDay3}><button className='bg-[#36fdfd] proshow_button day3_button font-chakra ' type="button" style={{
                                    background
                                        : " linear-gradient(45deg, transparent 5%, #C09 5%)", color: "white", boxShadow: "6px 0 0 var(--heading)"
                                }}>Explore</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Proshow