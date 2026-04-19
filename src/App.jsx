import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Servicios />
      <Portfolio />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;