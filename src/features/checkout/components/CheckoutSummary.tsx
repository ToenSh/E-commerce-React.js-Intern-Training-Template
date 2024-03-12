import Item from './Item';
const CheckoutSummary = () => {
  return (
    <div className="basis-2/5 px-10">
      <div className="flex flex-col gap-4">
        <Item />
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-300 pb-4 pt-4">
        <div className="flex items-center justify-between">
          <span className="opacity-90 text-sm">Subtotal</span>
          <span className="text-sm font-semibold">253.00 USD</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="opacity-90 text-sm">Shipping</span>
          <span className="text-xs">Calculated at next step</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <span>Total</span>
        <span className="font-semibold text-xl">253.00 USD</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
