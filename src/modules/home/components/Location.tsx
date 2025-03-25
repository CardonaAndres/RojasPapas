import { MapPin, ArrowUpRight } from "lucide-react";
import { Location } from "../typescript/types";

const locations: Location[] = [
  {
    name: "Sede Principal - Las Palmas",
    address: "Km 17 Vía Las Palmas, Mirador El Cielo, Antioquia, Colombia",
    hours: "Lunes a Domingo: 11:00 AM - 10:00 PM",
    googleMapsUrl: "https://goo.gl/maps/xxxxx",
  },
  {
    name: "Sede El Retiro",
    address: "Calle 5 #10-20, El Retiro, Antioquia, Colombia",
    hours: "Lunes a Domingo: 12:00 PM - 9:00 PM",
    googleMapsUrl: "https://goo.gl/maps/yyyyy",
  },
  {
    name: "Sede Envigado",
    address: "Carrera 43A #32B-12, Envigado, Antioquia, Colombia",
    hours: "Lunes a Domingo: 11:30 AM - 10:30 PM",
    googleMapsUrl: "https://goo.gl/maps/zzzzz",
  }
];

export const Locations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-red-600 mb-16 tracking-wide uppercase">
          📍 Nuestras Sedes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative bg-white/80 shadow-xl backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 border border-gray-200"
            >
              <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mt-6">{location.name}</h3>
              <p className="text-gray-700 mt-2 font-medium">{location.address}</p>
              <p className="text-gray-500 text-sm mt-1">{location.hours}</p>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-semibold"
              >
                Ver en Google Maps <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
