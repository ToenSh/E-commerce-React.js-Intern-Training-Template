import { Transaction } from '@/features/user';

const Transactions = () => {
  return (
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">All Transactions</h1>
      <div className="flex flex-col gap-6 max-w-xl mt-4">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </section>
  );
};
export default Transactions;
