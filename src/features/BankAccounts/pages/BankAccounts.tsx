import BankAccount from '../components/BankAccount';
import { useGetBankAccountsQuery } from '../slice/bankAccountsApiSlice';
const BankAccounts = () => {
  const { data: bankAccounts } = useGetBankAccountsQuery('5');

  const renderBankAccounts = () => {
    return bankAccounts?.map((bankAccount) => {
      return (
        <BankAccount
          key={bankAccount.id}
          id={bankAccount.id}
          userId={bankAccount.userId}
          name={bankAccount.name}
          balance={bankAccount.balance}
          isActive={bankAccount.isActive}
          dateCreated={bankAccount.dateCreated}
        />
      );
    });
  };

  return (
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">Bank Accounts</h1>
      <div className="flex flex-col gap-8 mt-6 max-w-lg">{renderBankAccounts()}</div>
      <button className="underline mt-8 text-sm opacity-80 hover:opacity-100">Create New Account</button>
    </section>
  );
};

export default BankAccounts;
