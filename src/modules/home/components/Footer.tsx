import {Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
                <h4 className="text-2xl font-bold mb-4">Contacto</h4>
                <div className="space-y-2">
                <p>📍 Las Palmas, Antioquia</p>
                <p>📞 314 567 8901</p>
                </div>
            </div>
            <div>
                <h4 className="text-2xl font-bold mb-4">Horarios</h4>
                <p>Lunes a Domingo</p>
                <p>11:00 AM - 10:00 PM</p>
            </div>
            <div>
                <h4 className="text-2xl font-bold mb-4">Síguenos</h4>
                <div className="flex justify-center space-x-4">
                <a href="#" aria-label='Instagram Icon' className="hover:text-red-200"><Instagram size={30} /></a>
                </div>
            </div>
        </div>
        <div className="text-center mt-8 border-t border-white border-opacity-20 pt-4">
            <p>© {new Date().getFullYear()} Salchipapas Las Palmas</p>
        </div>
    </footer>
  )
}


