import euroSign from '../assets/euro-sign-solid(1).svg';
import poundSign from '../assets/sterling-sign-solid.svg';
import dollarSign from '../assets/dollar-sign-solid(1).svg';
import deleteIcon from '../assets/trash-can-regular.svg';
import { formatDate } from '@/utils/formatDate';

interface BankAccountProps {
  id: number;
  userId: number;
  balance: number;
  isActive: boolean;
  name: string;
  dateCreated: string;
  deleteBankAcc: (bankAccId: number) => Promise<void>;
}

const BankAccount = ({
  id,
  balance,
  isActive,
  name,
  dateCreated,
  deleteBankAcc,
}: BankAccountProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="border border-gray-300 rounded-md px-3 py-4 basis-2/3 flex items-center">
          <img
            src={
              name.startsWith('Dollar')
                ? dollarSign
                : name.startsWith('Euro')
                  ? euroSign
                  : poundSign
            }
            alt="currency"
            className="w-3 h-4 mr-3  rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <div className="text-xs opacity-90">{formatDate(dateCreated)}</div>
          </div>
          {isActive && (
            <div className="ml-4 bg-green-700 text-white rounded-full px-2 text-sm">
              Active
            </div>
          )}
          <div className="ml-auto font-semibold text-sm">
            {balance.toFixed(2)} USD
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!isActive && (
            <button className="bg-dark-green font-bold text-white rounded capitalize px-4 py-1 text-xs">
              set active
            </button>
          )}
          <button onClick={() => deleteBankAcc(id)}>
            <img src={deleteIcon} alt="delete account" className="w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BankAccount;
