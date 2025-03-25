import  { useState, useEffect } from 'react';
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { usePromosHook } from '../hooks/usePromosHook';

export const Hero = () => {
  const [activePromo, setActivePromo] = useState(0);
  const { promos } = usePromosHook();

  useEffect(() => {
    const timer = setInterval(() => { setActivePromo((prev) => (prev + 1) % promos.length)}, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextPromo = () => setActivePromo((prev) => (prev + 1) % promos.length);
  const prevPromo = () => setActivePromo((prev) => (prev - 1 + promos.length) % promos.length);
  
  return (
    <div className="relative bg-red-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto relative z-10 pt-24 pb-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Contenido Izquierdo */}
        <div className="text-center md:text-left px-4">
          <div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full mb-4 shadow-lg animate-pulse"
          >
            <Clock className="inline mr-2" size={16} />
            <span className="font-bold">Abierto ahora</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Las Mejores <br />
            <span className="text-yellow-300">Salchipapas</span>
          </h2>
          
          <p className="text-xl max-w-md mx-auto md:mx-0 mb-8 opacity-90">
            Sabor auténtico de Las Palmas. Cada bocado, una explosión de sabor local.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transform hover:scale-105 transition flex items-center justify-center">
              Hacer Pedido <ChevronRight className="ml-2" />
            </button>
            <a href='#Menu' className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transform hover:scale-105 transition flex items-center justify-center">
              Ver Menú <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* Contenido Derecho - Carrusel de Promos */}
        <div className="relative group">
          {/* Botones de navegación */}
          <div className="absolute inset-y-0 left-0 z-20 flex items-center">
            <button onClick={prevPromo} className="bg-white/20 hover:bg-white/40 p-2 rounded-full ml-2 opacity-0 group-hover:opacity-100 transition"
            >
              <ArrowLeft className="text-white" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-20 flex items-center">
            <button 
              onClick={nextPromo}
              className="bg-white/20 hover:bg-white/40 p-2 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>

          {/* Carrusel de Promos */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Imagen Principal con Animación */}
              <div className="relative">
                <img 
                  key={activePromo}
                  src={promos[activePromo].image} 
                  alt="Promoción" 
                  className="w-full h-80 object-cover animate-fadeIn"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {promos[activePromo].discount}
                </div>
              </div>
              
              {/* Detalles de Promoción */}
              <div className="p-6">
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
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 flex items-center transform hover:scale-105 transition">
                    Pedir Ahora <ChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navegación de Promociones */}
          <div className="flex justify-center mt-4 space-x-2">
            {promos.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActivePromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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