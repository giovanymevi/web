import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Hablamos de tu próximo sistema?
          </h2>
          <p className="text-gray-300 text-lg">
            Te ayudamos a mejorar la forma en que tu empresa trabaja hoy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span>giovannymendoza@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>+57 3114454660</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>Colombia, Bucaramanga</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <h3 className="text-xl font-bold mb-2">👨‍💻 TE ESTAMOS BUSCANDO</h3>
              <p className="text-gray-300">
                Buscamos desarrolladores Frontend y Backend para construir soluciones reales y escalables.
              </p>
            </div>
          </div>
          
          <form className="space-y-5 bg-white/5 p-8 rounded-2xl border border-white/10">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
              <textarea rows="4" placeholder="¿Cómo podemos ayudarte?" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              Enviar mensaje <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;