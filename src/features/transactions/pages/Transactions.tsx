import { useGetActiveAccountQuery } from '@/features/BankAccounts';
import { Transaction } from '@/features/user';
import useGetUser from '@/hooks/useGetUser';
import { useGetTransactionsQuery } from '../slice/transactionsApiSlice';

const Transactions = () => {
  const user = useGetUser();
  const { data: activeAccount } = useGetActiveAccountQuery(
    user?.id?.toString()
  );
  const { data: transactions } = useGetTransactionsQuery(
    activeAccount && activeAccount[0].id.toString()
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
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">Transactions</h1>
      <div className="flex flex-col gap-6 max-w-xl mt-4">
        {renderTransactions()}
      </div>
    </section>
  );
};
export default Transactions;
