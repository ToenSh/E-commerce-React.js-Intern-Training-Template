import useGetUser from '@/hooks/useGetUser';
import AddBankAccount from '../components/AddBankAccount';
import BankAccount from '../components/BankAccount';
import {
  useAddBankAccountMutation,
  useDeactivateCurrentActiveMutation,
  useGetBankAccountsQuery,
  useSetActiveAccountMutation,
} from '../slice/bankAccountsApiSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const BankAccounts = () => {
  const user = useGetUser();
  const [addNewBankAcc, { isLoading: isAdding }] = useAddBankAccountMutation();
  const [activateAccount] = useSetActiveAccountMutation();
  const [deactivateCurrentActive] = useDeactivateCurrentActiveMutation();
  const { data: bankAccounts } = useGetBankAccountsQuery(user?.id?.toString());
  const currActiveAcc = bankAccounts?.filter((account) => account.isActive);

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
          setBankAccActive={setBankAccActive}
        />
      );
    });
  };

  const addBankAcc = async (name: string) => {
    if (user?.id && name) {
      const newBankAcc = {
        id: Math.floor(Math.random() * (1000 + 1)),
        name: name + ' Account',
        balance: 500,
        userId: user.id,
        isActive: false,
        dateCreated: new Date().toISOString(),
      };
      try {
        await addNewBankAcc(newBankAcc).unwrap();
      } catch (err) {
        console.log('Failed to add bank account', err);
      }
    }
  };

  const setBankAccActive = async (bankAccId: number) => {
    if (bankAccId && currActiveAcc?.length) {
      try {
        await deactivateCurrentActive(currActiveAcc[0].id).unwrap();
        await activateAccount(bankAccId).unwrap();
      } catch (e) {
        console.log(e);
      }
    } else if (bankAccId && currActiveAcc?.length === 0) {
      try {
        await activateAccount(bankAccId).unwrap();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">Bank Accounts</h1>
      <div className="flex flex-col gap-6 my-6 max-w-lg">
        {renderBankAccounts()}
        {isAdding && (
          <ClipLoader size={30} color="#123026" className="mx-auto" />
        )}
      </div>
      <AddBankAccount addBankAcc={addBankAcc} />
    </section>
  );
};

export default BankAccounts;
