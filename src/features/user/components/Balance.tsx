import bankIcon from '../assets/bank-icon.svg';
import Account from './Account';
import { Link } from 'react-router-dom';
const Balance = () => {
  return (
    <div className="pl-[280px]">
      <div className="flex items-center gap-3">
        <Link to={'/bankAccounts'} className="font-semibold text-3xl text-left hover:underline cursor-pointer">
          Balance
        </Link>
        <img src={bankIcon} alt="balance" className="w-5 mt-1" />
      </div>
      <div className="flex flex-col gap-4">
        <Account />
        <Account />
      </div>
      <button className="opacity-75 underline text-sm hover:opacity-100 mt-4">Add bank account</button>
    </div>
  );
};

export default Balance;
