import {  Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { socialLink, contactInfoItem } from '../typescript/types';

export const Footer = () => {
  const socialLinks : socialLink[] = [
    { 
      Icon: Instagram, 
      href: "https://instagram.com/salchipapaspalmas",
      color: "text-white hover:text-pink-800",
    },
  ];

  const contactInfo : contactInfoItem[]= [
    { 
      Icon: MapPin, 
      text: "Las Palmas, Antioquia",
      href: "https://maps.google.com/?q=Las+Palmas,+Antioquia"
    },
    { 
      Icon: Phone, 
      text: "314 567 8901",
      href: "tel:+573145678901"
    },
    { 
      Icon: Clock, 
      text: "Lunes a Domingo, 11:00 AM - 10:00 PM"
    }
  ];

  return (
    <footer className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contacto */}
          <div>
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Contacto</h4>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <a 
                  key={index} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-red-100 transition-colors group"
                >
                  <Icon 
                    className="text-white group-hover:scale-110 transition-transform" 
                    size={24} 
                  />
                  <span className="text-lg">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Horarios</h4>
            <div className="space-y-2 text-lg">
              <p>Servicio Continuo</p>
              <p>Lunes a Domingo</p>
              <p>11:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Síguenos</h4>
            <div className="">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${Icon.name}`}
                  className={`${color} hover:scale-125 transition-transform`}
                >
                  <Icon size={36} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-8 mt-8">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Salchipapas Las Palmas. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};