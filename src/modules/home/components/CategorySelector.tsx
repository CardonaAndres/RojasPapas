type Props = {
    menuCategories: { name: string }[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};
  
export const CategorySelector = ({ menuCategories, activeCategory, setActiveCategory }: Props) => {
    return (
      <div className="flex justify-center space-x-4 mb-8">
        {menuCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-6 py-2 rounded-full transition ${
              activeCategory === category.name
                ? 'bg-red-600 text-white'
                : 'bg-white text-red-600 border border-red-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
};
  