import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { useNavContext } from './context/NavContext';
import About from './screens/About';
import Hero from './screens/Hero';

function App() {
  useNavContext().changeCurrentPage('home')
  return (
    <div className="bg-background font-chakra">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
