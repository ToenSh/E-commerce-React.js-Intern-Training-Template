import { Link } from 'react-router-dom';
import snowbootThumbnail from '../../../assets/winterboots/WinterBlack.webp';
const ProductCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link to={'/rain/winterboot'}>
        <img src={snowbootThumbnail} alt="snowboot" className="max-w-[305px]" />
      </Link>
      <div className="flex flex-col items-start gap-2">
        <Link to={'/rain/winterboot'} className="text-sm font-semibold hover:underline">
          The Modern Winter Boot in Black
        </Link>
        <div>294.00 USD</div>
        <button className="bg-dark-green text-white rounded-[20px] w-[97.5%] self-center py-2 mt-2 hover:opacity-70">Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
