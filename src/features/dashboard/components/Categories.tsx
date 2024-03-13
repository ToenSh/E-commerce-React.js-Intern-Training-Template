import { v4 as uuidv4 } from 'uuid';
import { useGetCategoriesQuery } from '@/features/dashboard/slice/dashboardApiSlice';
import CategoryCard from './CategoryCard';
const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();

  const renderCategoryCards = () => {
    return categories?.map((category, index) => {
      return <CategoryCard key={uuidv4()} index={index + 1} name={category.name} imgSrc={category.products[0].images[0]} />;
    });
  };

  return (
    <div className="flex flex-col items-center gap-20 max-w-6xl mx-auto pt-16 mb-24">
      <h2 className="text-dark-green font-semibold text-[40px] text-center max-w-2xl tracking-wide">
        Socially and Environmentally Progressive Outdoor Footwear That Helps You #BeOutside
      </h2>
      <div className="flex items-center gap-3">
        {renderCategoryCards()}
        <CategoryCard name="allWeather" imgSrc="src/assets/all-weather-boots.png" index="allProducts" />
      </div>
    </div>
  );
};

export default Categories;
