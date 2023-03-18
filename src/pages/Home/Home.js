import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useNavContext } from '../../context/NavContext';
import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';

function Home() {
  useNavContext().changeCurrentPage('home')
  return (
    <div className="bg-background font-chakra">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
