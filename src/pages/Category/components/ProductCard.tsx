import { Link, useParams } from 'react-router-dom';
interface ProductCardProps {
  name: string;
  categoryID: number;
  price: number;
  image: string;
  productID: number;
}
const ProductCard = ({ name, price, image, productID, categoryID }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Link to={`/${categoryID}/${productID}`}>
        <img src={image} alt="snowboot" className="max-w-[305px]" />
      </Link>
      <div className="flex flex-col items-start gap-2">
        <Link to={`/${categoryID}/${productID}`} className="text-sm font-semibold hover:underline">
          {name}{' '}
        </Link>
        <div>{price.toFixed(2)} USD</div>
        <button className="bg-dark-green text-white rounded-[20px] w-[97.5%] self-center py-2 mt-2 hover:opacity-70">Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
