import { Award, Flame, Users, MapPin } from 'lucide-react';
import { Feature } from '../typescript/types';

export const AboutUs: React.FC = () => {
  const features : Feature[] = [
    {
      icon: <Flame className="w-12 h-12 text-red-600" />,
      title: 'Sabor Auténtico',
      description: 'Receta tradicional de Las Palmas, transmitida por generaciones.'
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: 'Calidad Premium',
      description: 'Ingredientes seleccionados y preparación artesanal.'
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: 'Pasión Familiar',
      description: 'Un negocio familiar con más de 15 años de tradición.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-2xl opacity-20 transform -rotate-6"></div>
            <img 
              src="https://i.pinimg.com/736x/5b/04/18/5b041861008b17cf3aec6ad11e4b6954.jpg" 
              alt="Salchipapas Las Palmas" 
              className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform" loading='lazy'
            />
          </div>

          {/* Contenido */}
          <div>
            <h2 className="text-5xl font-black text-red-600 mb-8 tracking-wide uppercase">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Desde 2024, Rojas Papas ha sido más que un negocio: es una familia dedicada a crear las mejores salchipapas de Antioquia. 
              Comenzamos como un pequeño puesto en Las Palmas, con una receta familiar que ha conquistado el paladar de miles de comensales.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <MapPin className="w-12 h-12 text-red-600" />
              <div>
                <h4 className="text-xl font-bold text-red-600">Origen</h4>
                <p className="text-gray-700">Las Palmas, Antioquia - Desde 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};