import useGetCart from '@/hooks/useGetCart';
import Item from './Item';
import { TCartItem } from '@/features/cart';
const CheckoutSummary = () => {
  const cartItems = useGetCart();
  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const renderItems = () => {
    return cartItems.map((item) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          categoryID={item.categoryID}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          image={item.image}
        />
      );
    });
  };

  return (
    <div className="basis-2/5 px-10">
      <div className="flex flex-col gap-4">{renderItems()}</div>
      <div className="flex flex-col gap-2 border-b border-gray-300 pb-4 pt-4">
        <div className="flex items-center justify-between">
          <span className="opacity-90 text-sm">Subtotal</span>
          <span className="text-sm font-semibold">{total.toFixed(2)} USD</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="opacity-90 text-sm">Shipping</span>
          <span className="text-xs">Calculated at next step</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <span>Total</span>
        <span className="font-semibold text-xl">{total.toFixed(2)} USD</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
