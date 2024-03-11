import transactionIcon from '../../../assets/icons/profile/transaction-icon.svg';
import Transaction from './Transaction';
const OrderHistory = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-3xl hover:underline cursor-pointer">
          Order History
        </h2>
        <img src={transactionIcon} alt="transactions" className="w-6 mt-2" />
      </div>
      <div className="max-w-96 flex flex-col gap-4 justify-between mt-4">
        <Transaction />
        {/* <Transaction />
        <Transaction /> */}
      </div>
      {/* <p className="tracking-wider opacity-80">
        You haven't placed any orders yet.
      </p> */}
    </div>
  );
};

export default OrderHistory;
