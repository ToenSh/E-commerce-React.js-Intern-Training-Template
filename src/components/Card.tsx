import arrowRight from '../assets/arrow-right-solid.svg';
interface CardProps {
  name: string;
  imgSrc: string;
}
export const Card = ({ name, imgSrc }: CardProps) => {
  const formatedName =
    name === 'allWeather' ? name.replace(/([A-Z])/g, ' $1') : name;
  return (
    <div className="max-w-[237px]">
      <img src={imgSrc} alt="boots" />
      <div className="capitalize text-dark-green font-bold text-lg flex gap-2">
        {formatedName}
        <img src={arrowRight} alt="arrow-right" className="w-4 mt-[3px]" />
      </div>
    </div>
  );
};
