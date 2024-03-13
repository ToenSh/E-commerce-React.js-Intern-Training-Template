import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import useGetCart from '@/hooks/useGetCart';

const Cart = () => {
  const cartItems = useGetCart();
  const subtotal = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const renderCartItems = () => {
    return cartItems.map((item) => {
      return (
        <CartItem
          key={item.id}
          categoryID={item.categoryID}
          id={item.id}
          price={item.price}
          name={item.name}
          quantity={item.quantity}
          image={item.image}
        />
      );
    });
  };

  return cartItems.length === 0 ? (
    <div className="flex max-w-7xl mx-auto flex-col items-center text-dark-green py-16 gap-6">
      <h1 className="font-semibold text-[40px]">Your cart is empty </h1>
      <Link to="/allProducts" className="bg-dark-green text-white rounded px-8 py-3 hover:opacity-75 text-[15px]">
        Continue shopping
      </Link>
      <div className="flex flex-col gap-2 mt-6">
        <h2 className="text-2xl font-semibold">Have an account?</h2>
        <div className="flex gap-1 opacity-80">
          <Link to="/auth/login" className="underline opacity-90 hover:opacity-100 cursor-pointer font-medium">
            Log in
          </Link>
          to check out faster.
        </div>
      </div>
    </div>
  ) : (
    <section className="max-w-7xl mx-auto text-dark-green py-16 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[40px]">Your cart</h1>
        <Link to={'/allProducts'} className="underline opacity-85 hover:opacity-100 font-medium">
          Continue Shopping
        </Link>
      </div>
      <div>
        <div className="uppercase tracking-widest text-[11px] grid grid-cols-[4fr_1fr_1fr] border-b border-gray-200 pb-3 mt-6">
          <span className="opacity-75">product</span>
          <span className="opacity-75">quantity</span>
          <span className="opacity-75 justify-self-end">total</span>
        </div>
        <div className="flex flex-col gap-12 pt-10">{renderCartItems()}</div>
      </div>
      <div className="self-end mt-10 flex flex-col gap-4">
        <div className="flex gap-8 self-end">
          <span className="font-bold text-lg">Subtotal</span>
          <span className="text-lg tracking-wider">{subtotal.toFixed(2)} USD</span>
        </div>
        <div className="text-sm opacity-80 self-end">Taxes and shipping calculated at checkout</div>
        <Link to={'/checkout'} className="bg-dark-green text-white rounded font-semibold py-3 w-80 hover:opacity-80 text-center">
          Check out
        </Link>
      </div>
    </section>
  );
};

export default Cart;
