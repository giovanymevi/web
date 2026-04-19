import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <p>&copy; 2024 amandarina.cl. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Desarrollo de Software a Medida</p>
      </div>
    </footer>
  );
};

export default Footer;