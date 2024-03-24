import { useGetTransactionsQuery } from '@/features/transactions';
import transactionIcon from '../assets/transaction-icon.svg';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import { useGetActiveAccountQuery } from '@/features/BankAccounts';
import useGetUser from '@/hooks/useGetUser';

const OrderHistory = () => {
  const user = useGetUser();
  const { data: activeAccount } = useGetActiveAccountQuery(
    user?.id?.toString()
  );
  const { data: transactions } = useGetTransactionsQuery(
    activeAccount ? activeAccount[0]?.id.toString() : undefined
  );

  const renderTransactions = () => {
    return transactions?.map((transaction) => {
      return (
        <Transaction
          key={transaction.id}
          id={transaction.id}
          bankAccountId={transaction.bankAccountId}
          amount={transaction.amount}
          dateCreated={transaction.dateCreated}
          products={transaction.products}
        />
      );
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Link
          to={'/transactions'}
          className="font-semibold text-3xl hover:underline cursor-pointer"
        >
          Order History
        </Link>
        <img src={transactionIcon} alt="transactions" className="w-6 mt-2" />
      </div>
      <div className="max-w-[410px] flex flex-col gap-4 justify-between mt-4">
        {renderTransactions()}
      </div>
      {transactions?.length === 0 && (
        <p className="tracking-wider opacity-80">
          You haven't placed any orders yet.
        </p>
      )}
    </div>
  );
};

export default OrderHistory;
