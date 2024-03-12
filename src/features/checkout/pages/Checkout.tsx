import CheckoutForm from '../components/CheckoutForm';
import CheckoutSummary from '../components/CheckoutSummary';

const Checkout = () => {
  return (
    <section className="max-w-7xl mx-auto py-4 pb-16">
      <h1 className="font-semibold text-[40px]">Checkout</h1>
      <div className="flex gap-16 mt-6">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </section>
  );
};

export default Checkout;
