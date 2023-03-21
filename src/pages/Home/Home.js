import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useNavContext } from '../../context/NavContext';
import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'
import Loading from '../Loading/Loading';
import { motion } from 'framer-motion'
import qr from '../../assets/qr/QR_Glitch.gif'
import CutButton from '../../components/CutButton/CutButton';



function Home() {
  useNavContext().changeCurrentPage('home')
  const [loading, setLoading] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [confettiVisible, setConfettiVisible] = useState(false)
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])
  useEffect(() => {
    confettiVisible && setTimeout(() => {
      setConfettiVisible(false)
    }, 10000)
  }, [confettiVisible])
  return (
    <>
      {loading ? <Loading /> : <motion.div
        initial={
          { opacity: 0 }
        }
        animate={
          { opacity: 1 }
        }
        className="font-chakra">
        <Navbar />
        <Hero openEasterEgg={setConfettiVisible} />
        <About />
        <div className='w-full md:w-2/3 m-auto'>
          <div className='flex justify-start space-x-5 mb-16 -translate-x-[6vh]'>
            <img className='h-[50vh] -translate-y-[6vh] no_drag pointer-events-none mix-blend-lighten bg-blend-lighten' src={qr} alt="" />
            <div>
              <h1 className='text-heading text-xl mb-8 uppercase text-start'>Download the app <br />from <span className='font-bold text-3xl'>playstore</span></h1>
              <div className=''>
                <a href="https://play.google.com/store/apps/details?id=com.dyuksha.d23" target="_blank" rel="noreferrer" className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra' type="button" style={{
                  background
                    : `linear-gradient(45deg, transparent 5%, var(--heading) 5%)`, color: 'black', boxShadow: `6px 0 0 'var(--c_red)`,

                }}>Download</button></a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>}
      {confettiVisible && <Confetti
        numberOfPieces={200}
        width={width}
        height={height}
      />}
    </>
  );
}

export default Home;
