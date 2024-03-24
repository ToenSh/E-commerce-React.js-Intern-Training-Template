import euroSign from '../assets/euro-sign-solid(1).svg';
import poundSign from '../assets/sterling-sign-solid.svg';
import dollarSign from '../assets/dollar-sign-solid(1).svg';
import deleteIcon from '../assets/trash-can-regular.svg';
import { formatDate } from '@/utils/formatDate';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDeleteBankAccountMutation } from '../slice/bankAccountsApiSlice';
import { TBankAccount } from '..';

interface BankAccountProps extends TBankAccount {
  setBankAccActive: (bankAccId: number) => Promise<void>;
}

const BankAccount = ({
  id,
  balance,
  isActive,
  name,
  dateCreated,
  setBankAccActive,
}: BankAccountProps) => {
  const [deleteAccount, { isLoading: isDeleting }] =
    useDeleteBankAccountMutation();

  const deleteBankAcc = async (bankAccId: number) => {
    if (bankAccId) {
      try {
        await deleteAccount(bankAccId).unwrap();
      } catch (e) {
        console.log(e);
      }
    }
  };

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
            <div className="ml-6 bg-green-700 text-white rounded-full px-2 text-sm">
              Active
            </div>
          )}
          <div className="ml-auto font-semibold text-sm">
            {balance.toFixed(2)}{' '}
            {name.startsWith('Dollar')
              ? 'USD'
              : name.startsWith('Euro')
                ? 'EUR'
                : 'GBP'}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!isActive && (
            <button
              className="bg-dark-green font-bold text-white rounded capitalize px-4 py-1 text-xs"
              onClick={() => setBankAccActive(id)}
            >
              set active
            </button>
          )}
          {isDeleting ? (
            <ClipLoader size={20} color="#123026" />
          ) : (
            <button onClick={() => deleteBankAcc(id)}>
              <img src={deleteIcon} alt="delete account" className="w-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BankAccount;
