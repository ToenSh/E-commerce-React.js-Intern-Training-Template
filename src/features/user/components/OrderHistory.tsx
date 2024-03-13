import { useGetTransactionsQuery } from '@/features/transactions/slice/transactionsApiSlice';
import transactionIcon from '../assets/transaction-icon.svg';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
const OrderHistory = () => {
  const { data: transactions } = useGetTransactionsQuery('3');

  // const renderTransactions = () => {
  //   return transactions?.map((transaction) => {
  //     return (
  //       <Transaction key={transaction.id} amount={transaction.amount} description={transaction.description} dateCreated={transaction.dateCreated} />
  //     );
  //   });
  // };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Link to={'/transactions'} className="font-semibold text-3xl hover:underline cursor-pointer">
          Order History
        </Link>
        <img src={transactionIcon} alt="transactions" className="w-6 mt-2" />
      </div>
      <div className="max-w-96 flex flex-col gap-4 justify-between mt-4">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
      {/* <p className="tracking-wider opacity-80">
        You haven't placed any orders yet.
      </p> */}
    </div>
  );
};

export default OrderHistory;
