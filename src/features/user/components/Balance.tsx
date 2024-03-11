import bankIcon from '../../../assets/icons/profile/bank-icon.svg';
import Account from './Account';
const Balance = () => {
  return (
    <div className="pl-[350px]">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-3xl text-left hover:underline cursor-pointer">
          Balance
        </h2>
        <img src={bankIcon} alt="balance" className="w-5 mt-1" />
      </div>
      <div className="flex flex-col gap-4">
        <Account />
        <Account />
      </div>
      <button className="opacity-75 underline text-sm hover:opacity-100 mt-4">
        Add bank account
      </button>
    </div>
  );
};

export default Balance;
