import React, { useEffect, useState } from 'react'
import './proshow.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProShowModal from '../../components/ProShowModal/ProShowModal'
import { AnimatePresence } from 'framer-motion'
import { useNavContext } from '../../context/NavContext'
import { useFirebaseContext } from '../../context/FirebaseContext'
import Loading from '../Loading/Loading'



const Proshow = () => {
    const { changeCurrentPage } = useNavContext()
    const [loading, setLoading] = useState(true)
    const { proshows } = useFirebaseContext()
    useEffect(() => {
        changeCurrentPage('proshows')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        console.log('reached')
        proshows.map(el => {
            console.log(el)
        })
        // eslint-disable-next-line
    }, [changeCurrentPage])
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
    function openDay(day) {
        let pro = proshows.filter(item => item.day === day)[0]
        if (day === 1) {
            pro.button_bg = "#dadada"
            pro.button_text = "black"
        } else if (day === 2) {
            pro.button_bg = "#0055FC"
            pro.button_text = "white"
        } else {
            pro.button_bg = "#C09"
            pro.button_text = "white"
        }
        setSelected(pro)
        openModal()
    }

    return (
        loading ? <Loading /> :
            <div className='proshow_body about'>
                <AnimatePresence>
                    {modelOpen && <ProShowModal handleClose={closeModal}>
                        <div className='md:translate-y-0 -translate-y-14 shad border border-heading w-[80vw] grid place-items-center md:w-[130vh] max-h-[100vh] bg-[#000a] backdrop-blur-xl'>
                            <div className='w-[96%] h-[100%] flex flex-col md:flex-row'>
                                <div className='w-full flex py-4 justify-center md:justify-start'>
                                    <img src={selected.url} alt="" className='w-[90%]' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mt-4 flex flex-col space-y-3 mx-4 md:mx-0 md:-translate-x-10'>
                                        <h3 className='md:text-6xl text-4xl uppercase font-bold' >{`${selected.date}`}</h3>
                                        <p className='text-2xl uppercase'>{selected.artist}</p>
                                        {/* <p className="text-4xl text-heading" style={{ color: selected.button_bg }}>₹ {selected.price}</p> */}
                                    </div>
                                    <div className='flex-1'>
                                        <p className='md:-translate-x-10 mt-8 h-[75%] max-w-md'>{selected.about}
                                        </p>
                                    </div>
                                    <div className='flex justify-end space-x-4 px-4 pb-4 md:pt-0 pt-8'>
                                        <div className='text-center' onClick={closeModal}><button className='bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                            background
                                                : " linear-gradient(45deg, transparent 5%, var(--c_red) 5%)", color: "white", boxShadow: "6px 0 0 var(--heading)",

                                        }}>Back</button></div>
                                        {selected.ticket == "" && <a href={selected.ticket} target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                            background
                                                : `linear-gradient(45deg, transparent 5%, ${selected.button_bg} 5%)`, color: selected.button_text, boxShadow: `6px 0 0 ${selected.day === 3 ? 'white' : 'var(--c_red)'}`,

                                        }} disabled={selected.ticket === ""}>Register</button></a>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ProShowModal>}
                </AnimatePresence>
                <div id="proshow-b">
                    <Navbar />
                    <div className='proshow_inner mt-8 pt-5 md:pt-16'>
                        <div className="proshows md:space-y-0 space-y-8">
                            <div className="container-shows">
                                <div className="image-container">
                                    <img className='object-scale-down' src={proshows[0].banner_url} alt="" onClick={() => openDay(1)} />
                                </div>
                                <div className="content-container">
                                    <div className="details">
                                        <p>DAY 1</p>
                                        <p>{proshows[0].artist.toUpperCase()}</p>
                                    </div>
                                    <div className='text-center -translate-x-[19px]' onClick={() => openDay(1)}><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                                        background
                                            : " linear-gradient(45deg, transparent 5%, #dadada 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)",

                                    }}>Explore</button></div>

                                </div>
                            </div>
                            <div className="container-shows" style={{ marginTop: 0 }}>
                                <div className="image-container">
                                    <img className='object-scale-down' src={proshows[1].banner_url} alt="" onClick={() => {
                                        // openDay(2)
                                    }} />
                                </div>
                                <div className="content-container reverse">
                                    <div className="details">
                                        <p>DAY 2</p>
                                        <p>{proshows[1].artist.toUpperCase()}</p>
                                    </div>
                                    <div className='text-center' onClick={() => {
                                        // openDay(2)
                                    }}><button className='translate-x-6 bg-[#36fdfd] proshow_button day2_button font-chakra' type="button" style={{
                                        background
                                            : " linear-gradient(45deg, transparent 5%, #02d7f2 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)",

                                    }}>Explore</button></div>
                                </div>
                            </div>
                            <div className="container-shows" style={{ marginTop: 0 }}>
                                <div className="image-container">
                                    <img className='object-scale-down' src={proshows[2].banner_url} alt="" onClick={() => openDay(3)} />
                                </div>
                                <div className="content-container">
                                    <div className="details">
                                        <p>DAY 3</p>
                                        <p>{proshows[2].artist.toUpperCase()}</p>
                                    </div>
                                    <div className='text-center  -translate-x-[6px]' onClick={() => openDay(3)}><button className='bg-[#36fdfd] proshow_button day3_button font-chakra ' type="button" style={{
                                        background
                                            : " linear-gradient(45deg, transparent 5%, #C09 5%)", color: "white", boxShadow: "6px 0 0 var(--heading)"
                                    }}>Explore</button></div>
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