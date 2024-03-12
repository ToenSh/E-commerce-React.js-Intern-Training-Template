import euroSign from '../assets/euro-sign-solid(1).svg';
import dollarSign from '../assets/dollar-sign-solid(1).svg';
import deleteIcon from '../assets/trash-can-regular.svg';
const BankAccount = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="border border-gray-300 rounded-md px-3 py-3 basis-2/3 flex items-center">
          <img src={dollarSign} alt="currency" className="w-3 h-4 mr-3  rounded-full" />
          <div>
            <p className="font-semibold">Dollar Account</p>
            <div className="text-sm">&#x2022;&#x2022;&#x2022;&#x2022; 8719</div>
          </div>
          <div className="ml-4 bg-green-700 text-white rounded-full px-2 text-sm">Active</div>
          <div className="ml-auto font-semibold text-sm">500.00 USD</div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-dark-green text-white rounded capitalize px-6 py-2 text-xs">set active</button>
          <button>
            <img src={deleteIcon} alt="delete account" className="w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BankAccount;
