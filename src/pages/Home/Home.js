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
        {opacity:0}
      }
      animate = {
        {opacity:1}
      }
      className="bg-background font-chakra">
        <Navbar />
        <Hero openEasterEgg={setConfettiVisible} />
        <About />
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
