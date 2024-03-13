import { useGetBankAccountsQuery } from '@/features/BankAccounts';
import bankIcon from '../assets/bank-icon.svg';
import Account from './Account';
import { Link } from 'react-router-dom';
const Balance = () => {
  const { data: bankAccounts } = useGetBankAccountsQuery('5');

  const renderBankAccounts = () => {
    return bankAccounts?.map((bankAccount) => {
      return (
        <Account
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
    <div className="pl-[280px]">
      <div className="flex items-center gap-3">
        <Link to={'/bankAccounts'} className="font-semibold text-3xl text-left hover:underline cursor-pointer">
          Balance
        </Link>
        <img src={bankIcon} alt="balance" className="w-5 mt-1" />
      </div>
      <div className="flex flex-col gap-4">{renderBankAccounts()}</div>
      <button className="opacity-75 underline text-sm hover:opacity-100 mt-4">Add bank account</button>
    </div>
  );
};

export default Balance;
