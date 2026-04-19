import { Settings, Zap, Eye, Code, Database, Shield } from 'lucide-react';

const services = [
  { icon: Settings, title: 'Sistemas a medida', desc: 'Adaptados a tu forma de trabajar' },
  { icon: Zap, title: 'Automatización', desc: 'Menos tareas manuales y repetitivas' },
  { icon: Eye, title: 'Control total', desc: 'Información clara en tiempo real' },
  { icon: Code, title: 'Escalabilidad', desc: 'Crece sin límites' },
  { icon: Database, title: 'Integraciones', desc: 'Conecta tus herramientas' },
  { icon: Shield, title: 'Seguridad', desc: 'Datos protegidos' }
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Software a medida para optimizar tu negocio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Desarrollamos sistemas que digitalizan procesos manuales y te permiten tener control total de tu empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          {[
            { number: '+100', label: 'Procesos digitalizados' },
            { number: '20+', label: 'Proyectos Exitosos' },
            { number: '15+', label: 'Clientes con Mantenimiento' },
            { number: '3+', label: 'Años de Experiencia' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-primary/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;