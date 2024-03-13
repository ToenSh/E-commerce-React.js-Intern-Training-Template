import { Link } from 'react-router-dom';
import trashIcon from '../assets/trash-can-regular.svg';
import { TCartItem, decreaseQuantity, deleteProduct, increaseQuantity } from '../slice/cartSlice';
import { useAppDispatch } from '@/app/hooks';

const CartItem = ({ id, categoryID, name, price, quantity, image }: TCartItem) => {
  const dispatch = useAppDispatch();
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(name));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(name));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(name));
  };
  const totalPrice = price * quantity;

  return (
    <div className="grid grid-cols-[4fr_1fr_1fr] text-dark-green last:border-b last:border-gray-200 last:pb-10">
      <div className="flex gap-8">
        <img src={image} alt="item-img" className="max-w-[121px]" />
        <div>
          <Link to={`/${categoryID}/${id}`} className="text-[17px] font-bold cursor-pointer hover:underline">
            {name}
          </Link>
          <div className="text-[15px] opacity-80 mt-1">USD {price.toFixed(2)}</div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="border border-dark-green w-[140px] flex justify-between">
          <button className="basis-1/3 py-2" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="basis-1/3 text-center flex items-center justify-center">{quantity}</span>
          <button className="basis-1/3" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button onClick={handleDeleteProduct}>
          <img src={trashIcon} alt="delete" className="w-3" />
        </button>
      </div>
      <div className="justify-self-end self-center">{totalPrice.toFixed(2)} USD</div>
    </div>
  );
};

export default CartItem;
