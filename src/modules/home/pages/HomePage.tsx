import { useState } from 'react';
import { Header } from '../components/Header.tsx';
import { Hero } from '../components/Hero.tsx';
import { CategorySelector } from '../components/CategorySelector.tsx';
import { MenuList } from '../components/MenuList.tsx';
import { Footer } from '../components/Footer.tsx';
import { useMenuHook } from '../hooks/useMenuHook.tsx';
import { menuCategory } from '../typescript/types.ts';
import { Locations } from '../components/Location.tsx';
import { AboutUs } from '../components/AboutUs.tsx';

export const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Especiales');
  const { menuCategories } = useMenuHook();
  const activeMenu: menuCategory = menuCategories.find(cat => cat.name === activeCategory) || { name: '', items: [] };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />

      <section id="menu" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-center text-red-600 mb-12">Nuestro Menú</h2>
        
          <CategorySelector 
            menuCategories={menuCategories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
           />
           
          <MenuList activeMenu={activeMenu} />
        </div>
      </section>
      <AboutUs />
      <Locations />
      <Footer />
    </div>
  );
};
