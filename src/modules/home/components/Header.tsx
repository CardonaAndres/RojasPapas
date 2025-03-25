import { ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 bg-red-600 text-white z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="flex items-center space-x-4">
                    <img src="https://i.pinimg.com/736x/5b/04/18/5b041861008b17cf3aec6ad11e4b6954.jpg" 
                    alt="Logo" className="rounded-full" loading='lazy' width="50"
                    height="50"
                    />
                    <h1 className="text-2xl font-bold">Rojas Papas</h1>
                </div>
                <div className="space-x-4 hidden md:block">
                    <a href="#menu" className="hover:text-red-200">Menú</a>
                    <a href="#ubicaciones" className="hover:text-red-200">Ubicaciones</a>
                    <a href="#contacto" className="hover:text-red-200">Contacto</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition flex items-center">
                    <ShoppingCart className="mr-2" />
                    Pedir
                    </button>
                </div>
            </div>
        </nav>
    
    </>
  )
}


