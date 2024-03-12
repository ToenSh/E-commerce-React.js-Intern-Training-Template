import BankAccount from '../components/BankAccount';
const BankAccounts = () => {
  return (
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">Bank Accounts</h1>
      <div className="flex flex-col gap-8 mt-6 max-w-lg">
        <BankAccount />
        <BankAccount />
        <BankAccount />
      </div>
      <button className="underline mt-8 text-sm opacity-80 hover:opacity-100">Create New Account</button>
    </section>
  );
};

export default BankAccounts;
