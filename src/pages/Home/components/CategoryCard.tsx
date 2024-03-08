import { Link } from 'react-router-dom';
import arrowRight from '../../../assets/arrow-right-solid.svg';
interface CategoryCardProps {
  name: string;
  imgSrc: string;
  index: number | string;
}
const CategoryCard = ({ name, imgSrc, index }: CategoryCardProps) => {
  const formatedName = name === 'allWeather' ? name.replace(/([A-Z])/g, ' $1') : name;
  return (
    <div className="max-w-[237px]">
      <Link to={`/${index}`} className="cursor-pointer">
        <img src={imgSrc} alt="boots" />
        <div className="capitalize text-dark-green font-bold text-lg flex gap-2">
          {formatedName}
          <img src={arrowRight} alt="arrow-right" className="w-4 mt-[3px]" />
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;
