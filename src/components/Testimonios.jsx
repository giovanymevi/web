const testimonials = [
  {
    name: 'Gaby Mendoza',
    company: 'Umo Hamburguesería',
    text: 'Antes realizábamos muchas tareas manuales. Con el sistema pudimos automatizar la gestión de pedidos, productos y facturación. Hoy trabajamos más rápido, con menos esfuerzo y mayor control.'
  },
  {
    name: 'Rossy Alejandra',
    company: 'Transporte OSSER',
    text: 'Buasys Solutions nos desarrolló un sistema a medida que nos permitió ordenar viajes, clientes, proveedores y cuentas corrientes. Hoy tenemos control de la rentabilidad y tomamos decisiones con datos reales.'
  },
  {
    name: 'Teresa Diaz',
    company: 'Carnes Villa Angela',
    text: 'Con el sistema pudimos desglosar automáticamente cada res indicando peso y tipo de animal. Hoy tenemos trazabilidad completa y una gestión mucho más ordenada.'
  }
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            RESULTADOS COMPROBADOS
          </h2>
          <p className="text-gray-600 text-lg">
            Estos son algunos de los negocios que ya transformaron su gestión con nosotros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-primary text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;