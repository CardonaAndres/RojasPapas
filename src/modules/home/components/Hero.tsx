import  { useState, useEffect } from 'react';
import { ChevronRight, Flame } from 'lucide-react';
import { usePromosHook } from '../hooks/usePromosHook';

export const Hero = () => {
  const [activePromo, setActivePromo] = useState(0);
  const { promos } = usePromosHook();

  useEffect(() => {
    const timer = setInterval(() => { setActivePromo((prev) => (prev + 1) % promos.length)}, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative bg-red-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto relative z-10 pt-24 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-20 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                <Flame className="inline mr-2" size={16} />
                <span className="font-bold">¡Sabor en Fuego!</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Las Mejores <br />
                <span className="text-yellow-300">Salchipapas</span>
              </h2>
              
              <p className="text-xl mb-10 opacity-90 max-w-md">
              Sabor auténtico de Las Palmas. Cada bocado es una explosión de tradición, calidad y pasión, llevándote a disfrutar el verdadero encanto de la comida local en cada mordisco. 🍟
              </p>
            </div>
        </div>
        
        {/* Contenido Derecho - Carrusel de Promos */}
        <div className="relative group">
          {/* Carrusel de Promos */}
          <div className="relative group">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-4xl transform group-hover:scale-[1.02]">
              {/* Imagen Principal con Animación Mejorada */}
              <div className="relative overflow-hidden">
                <div className="relative">
                  <img 
                    key={activePromo}
                    src={promos[activePromo].image} 
                    alt="Promoción IMG" 
                    loading='lazy'
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                      {promos[activePromo].discount}
                    </span>
                  </div>
                </div>
                
                {/* Overlay de Detalles */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white w-full">
                    <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      {promos[activePromo].title}
                    </h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {promos[activePromo].description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Detalles de Promoción */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-red-600 animate-slideInLeft">
                    {promos[activePromo].title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 animate-slideInRight">
                  {promos[activePromo].description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-red-600 animate-bounceIn">
                    {promos[activePromo].price}
                  </span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 flex items-center transform hover:scale-105 transition group">
                    Pedir Ahora 
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navegación de Promociones */}
          <div className="flex justify-center mt-4 space-x-2">
            {promos.map((_, index) => (
              <button key={index} aria-label='Promo Indicator' onClick={() => setActivePromo(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                  activePromo === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}