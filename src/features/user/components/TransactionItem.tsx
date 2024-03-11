import boots from '../../../assets/all-weather-boots.png';

const TransactionItem = () => {
  return (
    <div className="flex justify-between border-b border-gray-300 last:border-none pb-2 last:pb-0">
      <div className="flex items-center gap-3">
        <img src={boots} alt="boots" className="w-10" />
        <div className="flex flex-col">
          <p className="font-semibold">All Weather Boots</p>
          <span className="text-sm opacity-80">30 Dec.</span>
        </div>
      </div>
      <div className="font-semibold self-center">-100.00 USD</div>
    </div>
  );
};

export default TransactionItem;
