import euroSign from '../../../assets/icons/profile/euro-sign-solid(1).svg';
import dollarSign from '../../../assets/icons/profile/dollar-sign-solid(1).svg';
const Account = () => {
  return (
    <div className="border border-gray-300 rounded-md px-3 py-2 first:mt-4 flex items-center">
      <img
        src={dollarSign}
        alt="currency"
        className="w-3 h-4 mr-3  rounded-full"
      />
      <div>
        <p className="font-semibold">Dollar Account</p>
        <div className="text-sm">&#x2022;&#x2022;&#x2022;&#x2022; 8719</div>
      </div>
      <div className="ml-auto font-semibold text-sm">500.00 USD</div>
    </div>
  );
};

export default Account;
