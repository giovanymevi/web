import { ArrowRight, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-dark via-dark to-primary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6">
              The Software Factory
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              amandarina.cl
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Desarrollo de Software a Medida para tu Negocio
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                Comenzar proyecto <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-primary/50 text-white hover:bg-primary/10 px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                Ver portfolio
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {['Software a Medida', 'Automatización', 'Sistema de Gestión', 'Escalabilidad', 'Integraciones', 'Inteligencia Artificial'].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                  <Cpu className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium text-sm lg:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;