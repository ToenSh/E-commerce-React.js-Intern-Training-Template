import useGetUser from '@/hooks/useGetUser';
import AddBankAccount from '../components/AddBankAccount';
import BankAccount from '../components/BankAccount';
import {
  useAddBankAccountMutation,
  useDeleteBankAccountMutation,
  useGetBankAccountsQuery,
} from '../slice/bankAccountsApiSlice';

const BankAccounts = () => {
  const user = useGetUser();
  const [addNewBankAcc] = useAddBankAccountMutation();
  const [deleteAccount] = useDeleteBankAccountMutation();
  const { data: bankAccounts } = useGetBankAccountsQuery(user?.id?.toString());

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
          deleteBankAcc={deleteBankAcc}
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
    <section className="max-w-7xl mx-auto pt-4 pb-16 text-dark-green">
      <h1 className="font-semibold text-[40px]">Bank Accounts</h1>
      <div className="flex flex-col gap-6 my-6 max-w-lg">
        {renderBankAccounts()}
      </div>
      <AddBankAccount addBankAcc={addBankAcc} />
    </section>
  );
};

export default BankAccounts;
