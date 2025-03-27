import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Location } from "../typescript/types";

const locations: Location[] = [
  {
    name: "Sede Principal - Las Palmas",
    address: "Km 17 Vía Las Palmas, Mirador El Cielo, Antioquia, Colombia",
    hours: "Lunes a Domingo: 11:00 AM - 10:00 PM",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.925945296187!2d-75.56027976777169!3d6.166701134813237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682dfc274185b%3A0x2781371df06b89e!2sLas%20Palmas%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1743054467396!5m2!1ses!2sco",
    phone: "314 567 8901"
  },
  {
    name: "Sede El Retiro",
    address: "Calle 5 #10-20, El Retiro, Antioquia, Colombia",
    hours: "Lunes a Domingo: 12:00 PM - 9:00 PM",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.925945296187!2d-75.56027976777169!3d6.166701134813237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682dfc274185b%3A0x2781371df06b89e!2sLas%20Palmas%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1743054467396!5m2!1ses!2sco",
    phone: "320 987 6543"
  },
  {
    name: "Sede Envigado",
    address: "Carrera 43A #32B-12, Envigado, Antioquia, Colombia",
    hours: "Lunes a Domingo: 11:30 AM - 10:30 PM",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.925945296187!2d-75.56027976777169!3d6.166701134813237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682dfc274185b%3A0x2781371df06b89e!2sLas%20Palmas%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1743054467396!5m2!1ses!2sco",
    phone: "311 234 5678"
  }
];

export const Locations: React.FC = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const handleNext = () => {
    setCurrentLocationIndex((prev) => 
      prev === locations.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentLocationIndex((prev) => 
      prev === 0 ? locations.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-red-600 mb-16 tracking-wide uppercase">
          📍 Nuestras Sedes
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600/50 hover:bg-red-600/70 text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600/50 hover:bg-red-600/70 text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Location Card with Map */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Location Details */}
            <div className="relative bg-white/80 shadow-xl backdrop-blur-lg rounded-2xl p-24 w-full max-w-lg flex flex-col items-center text-center"
            >
              <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mt-6">
                {locations[currentLocationIndex].name}
              </h3>
              <p className="text-gray-700 mt-2 font-medium">
                {locations[currentLocationIndex].address}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {locations[currentLocationIndex].hours}
              </p>
              <p className="text-gray-700 mt-2">
                📞 {locations[currentLocationIndex].phone}
              </p>
            
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={locations[currentLocationIndex].googleMapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocationIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentLocationIndex === index 
                    ? 'bg-red-600' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};