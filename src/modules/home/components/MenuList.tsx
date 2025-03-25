import { ChevronRight } from 'lucide-react';
import { menuCategory } from '../typescript/types.ts';

type Props = {
  activeMenu: menuCategory;
};

export const MenuList = ({ activeMenu }: Props) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {activeMenu.items.map((item) => (
        <div key={item.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
          <img src={item.image} alt={item.name} loading='lazy' className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-red-600">{item.name}</h3>
              <span className="text-xl font-bold text-red-600">{item.price}</span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition flex items-center justify-center">
              Añadir al Carrito <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
