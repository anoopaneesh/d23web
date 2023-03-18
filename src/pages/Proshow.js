import React, { useState } from 'react'
import '../proshow.css'
import day1 from '../assets/jpeg/proshows/day1.png'
import day2 from '../assets/jpeg/proshows/day2.png'
import day3 from '../assets/jpeg/proshows/day3.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProShowModal from '../components/ProShowModal/ProShowModal'
import day1_pot from '../assets/jpeg/proshows/day1_pot.jpg'
import day3_pot from '../assets/jpeg/proshows/day3_pot.jpg'
import { AnimatePresence } from 'framer-motion'
import { useNavContext } from '../context/NavContext'



const Proshow = () => {
 useNavContext().changeCurrentPage('proshows')
    const [modelOpen, setModalOpen] = useState(false)
    const [selected, setSelected] = useState({})
    function openModal() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        setModalOpen(true)

    }
    function closeModal() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setModalOpen(false)
    }
    function openDay1() {
        setSelected({
            day: 1,
            artist: "KS Harishankar",
            register: "",
            price: "TBA",
            venue: "TBA",
            time: "TBA",
            logo: day1_pot,
            button_bg:"#dadada",
            button_text:"black",
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
            button_bg:" #0055FC",
            button_text:"white",
        })
        openModal()
    }
    function openDay3() {
        setSelected({
            day: 3,
            artist: "Ankit Tiwari",
            register: "",
            price: "TBA",
            venue: "TBA",
            time: "TBA",
            logo: day3_pot,
            button_bg:"#C09",
            button_text:"white",
        })
        openModal()
    }

    return (
        <div className='proshow_body'>
            <AnimatePresence>
                {modelOpen && <ProShowModal handleClose={closeModal}>
                    <div className=' w-[80vw] grid place-items-center md:w-[50vh] max-h-[100vh] bg-[#000a] backdrop-blur-sm'>
                        <div className='border border-heading w-[95%] h-[100%] flex flex-col'>
                            <div className='w-full flex justify-center pt-4'>
                                <img src={selected.logo} alt="" className='w-[90%]'/>
                            </div>
                            <div className='px-4 mt-4 flex flex-col space-y-3'>
                                <h3 className='text-4xl uppercase ' >{`Day ${selected.day}`}</h3>
                                <p>{selected.artist}</p>
                                <p>{`Venue : ${selected.venue}`}</p>
                                <p>{`Time : ${selected.time}`}</p>
                                <p>{`Price : ${selected.price}`}</p>
                            </div>
                            <div className='flex justify-between px-4 pb-4'>
                                <a className='text-center' onClick={closeModal}><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : " linear-gradient(45deg, transparent 5%, #111 5%)", color: "white", boxShadow: "6px 0 0 var(--c_red)",

                                }}>Back</button></a>
                                <a href='#' className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                    background
                                        : `linear-gradient(45deg, transparent 5%, ${selected.button_bg} 5%)`, color: selected.button_text, boxShadow: "6px 0 0 var(--c_red)",

                                }}>Register</button></a>
                            </div>
                        </div>

                    </div>
                </ProShowModal>}
            </AnimatePresence>
            <Navbar />
            <div className='proshow_inner mt-8'>
                <div class="proshows md:space-y-0 space-y-8">
                    <div class="container-shows">
                        <div class="image-container">
                            <img src={day1} alt="" />
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
                            <img src={day2} alt="" />
                        </div>
                        <div class="content-container reverse">
                            <div className="details">
                                <p>DAY 2</p>
                                <p>TBA</p>
                            </div>
                            <a className='text-center' onClick={()=>{}}><button className=' bg-[#36fdfd] proshow_button day2_button font-chakra' type="button" style={{
                                background
                                    : " linear-gradient(45deg, transparent 5%, #0055FC 5%)", color: "white", boxShadow: "6px 0 0 var(--c_red)",

                            }}>Explore</button></a>
                        </div>
                    </div>
                    <div class="container-shows">
                        <div class="image-container">
                            <img src={day3} alt="" />
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
            <Footer />
        </div>
    )
}

export default Proshow