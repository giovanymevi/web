import { Menu, X, Code } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark/95 backdrop-blur-md text-white fixed w-full z-50 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#inicio" className="flex items-center space-x-2 group">
            <Code className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-xl">amandarina.cl</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Portfolio', 'Testimonios', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-primary font-medium transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 px-4 py-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {['Inicio', 'Servicios', 'Portfolio', 'Testimonios', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;