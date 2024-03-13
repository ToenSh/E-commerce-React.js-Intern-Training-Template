import CheckoutForm from '../components/CheckoutForm';
import CheckoutSummary from '../components/CheckoutSummary';
import { Navigate } from 'react-router-dom';
import useGetCart from '@/hooks/useGetCart';

const Checkout = () => {
  const cartItems = useGetCart();
  return cartItems.length > 0 ? (
    <section className="max-w-7xl mx-auto py-4 pb-16">
      <h1 className="font-semibold text-[40px]">Checkout</h1>
      <div className="flex gap-16 mt-6">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </section>
  ) : (
    <Navigate to={'/allProducts'} />
  );
};

export default Checkout;
