import { useGetBankAccountsQuery } from '@/features/BankAccounts';
import bankIcon from '../assets/bank-icon.svg';
import Account from './Account';
import { Link } from 'react-router-dom';
import useGetUser from '@/hooks/useGetUser';

const Balance = () => {
  const user = useGetUser();
  console.log(user);
  const { data: bankAccounts } = useGetBankAccountsQuery(user?.id?.toString());

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
    <div className="pl-[280px] flex flex-col">
      <div className="flex items-center gap-3">
        <Link
          to={'/bankAccounts'}
          className="font-semibold text-3xl text-left hover:underline cursor-pointer"
        >
          Balance
        </Link>
        <img src={bankIcon} alt="balance" className="w-5 mt-1" />
      </div>
      <div className="flex flex-col gap-4">
        {bankAccounts && bankAccounts?.length > 0 ? (
          renderBankAccounts()
        ) : (
          <Link
            className="mt-4 underline opacity-85 hover:opacity-100 text-sm"
            to={'/bankAccounts'}
          >
            Link bank account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Balance;
