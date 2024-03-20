import { TCartItem } from '@/features/cart';

const Item = ({ name, price, quantity, image }: TCartItem) => {
  return (
    <div className="flex items-center last:border-b border-gray-300 last:pb-4">
      <div className="relative">
        <img src={image} alt="product image" className="w-12" />
        <div className="absolute -top-2 -right-2 bg-dark-green text-white rounded-full text-xs font-semibold px-[7px] py-[1px]">
          {quantity}
        </div>
      </div>
      <p className="ml-3 font-semibold text-sm">{name}</p>
      <div className="ml-auto font-semibold">
        {(price * quantity).toFixed(2)} USD
      </div>
    </div>
  );
};
export default Item;
