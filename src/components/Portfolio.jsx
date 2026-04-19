const projects = [
  {
    title: 'Digitalización Red de Agua',
    desc: 'Sistema para Cooperativa de Agua que permite gestionar digitalmente toda la red de agua potable.',
    category: 'Infraestructura'
  },
  {
    title: 'Hamburguesería',
    desc: 'Gestión de pedidos, productos, facturación, stock y materia prima con tickets.',
    category: 'Gastronomía'
  },
  {
    title: 'Empresa De Transporte',
    desc: 'Gestión de empleados, camiones, viajes, cheques y dashboard inteligente.',
    category: 'Logística'
  },
  {
    title: 'Gestor Cuentas Corrientes',
    desc: 'Plataforma online para gestionar cuentas corrientes, ventas y cobranzas.',
    category: 'Finanzas'
  },
  {
    title: 'Stock y Ventas Ferretería',
    desc: 'Control de stock en tiempo real, facturación y estadísticas claras.',
    category: 'Comercio'
  },
  {
    title: 'Concesionario',
    desc: 'Muestra vehículos disponibles, control de stock y agenda de visitas.',
    category: 'Automotriz'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            PORTFOLIO amandarina.cl
          </h2>
          <p className="text-gray-600 text-lg">
            Consultá por cualquiera de estos proyectos o tu solución a medida
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="h-52 bg-gradient-to-br from-primary/30 to-secondary/20 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
                <button className="mt-6 flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
                  Saber más <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;