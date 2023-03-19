import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useNavContext } from '../../context/NavContext';
import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'



function Home() {
  useNavContext().changeCurrentPage('home')
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [confettiVisible, setConfettiVisible] = useState(false)
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

  }, [])
  useEffect(() => {
    confettiVisible && setTimeout(() => {
      setConfettiVisible(false)
    }, 10000)
  }, [confettiVisible])
  return (
    <>
      <div className="bg-background font-chakra">
        <Navbar />
        <Hero openEasterEgg={setConfettiVisible} />
        <About />
        <Footer />
      </div>
      {confettiVisible && <Confetti
        numberOfPieces={200}
        width={width}
        height={height}
      />}
    </>
  );
}

export default Home;
