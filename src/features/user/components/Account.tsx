import euroSign from '../assets/euro-sign-solid(1).svg';
import dollarSign from '../assets/dollar-sign-solid(1).svg';
import { TBankAccount } from '@/features/BankAccounts';
import { formatDate } from '@/utils/formatDate';

const Account = ({ balance, isActive, name, dateCreated }: TBankAccount) => {
  return (
    <>
      <div className="border border-gray-300 rounded-md px-3 py-4 first:mt-4 flex items-center">
        <img src={dollarSign} alt="currency" className="w-3 h-4 mr-3  rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <div className="text-xs opacity-90">{formatDate(dateCreated)}</div>
        </div>
        {isActive && <div className="ml-4 bg-green-700 text-white rounded-full px-2 text-sm">Active</div>}
        <div className="ml-auto font-semibold text-sm">{balance.toFixed(2)} USD</div>
      </div>
    </>
  );
};

export default Account;
