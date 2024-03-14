import TransactionItem from './TransactionItem';

const Transaction = () => {
  return (
    <div className="flex flex-col gap-2 w-full border border-gray-300 px-3 py-4 rounded-lg hover:shadow">
      <TransactionItem />
      {/* <TransactionItem />
      <TransactionItem /> */}
    </div>
  );
};

export default Transaction;
