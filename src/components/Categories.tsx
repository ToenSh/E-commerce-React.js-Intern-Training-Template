import { Card } from './Card';
import { v4 as uuidv4 } from 'uuid';
export const Categories = () => {
  const categories = {
    rain: 'src/assets/rainboot.png',
    snow: 'src/assets/snowboot.png',
    allWeather: 'src/assets/all-weather-boots.png',
    sun: 'src/assets/sun.png',
  };

  const renderCategoryCards = () => {
    return Object.entries(categories).map(([name, imgSrc]) => {
      return <Card key={uuidv4()} name={name} imgSrc={imgSrc} />;
    });
  };

  return (
    <div className="flex flex-col items-center gap-20 max-w-6xl mx-auto pt-16 mb-16">
      <h2 className="text-dark-green font-semibold text-[40px] text-center max-w-2xl tracking-wide">
        Socially and Environmentally Progressive Outdoor Footwear That Helps You
        #BeOutside
      </h2>
      <div className="flex items-center gap-3">{renderCategoryCards()}</div>
    </div>
  );
};
