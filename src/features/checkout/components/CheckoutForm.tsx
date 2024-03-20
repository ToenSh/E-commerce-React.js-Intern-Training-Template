import { useForm } from 'react-hook-form';
import backIcon from '../assets/angle-left-solid.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateTransactionMutation } from '@/features/transactions';
import useGetUser from '@/hooks/useGetUser';
import { useGetActiveAccountQuery } from '@/features/BankAccounts';
import { clearCart } from '@/features/cart';
import { useAppDispatch } from '@/app/hooks';
import useGetCart from '@/hooks/useGetCart';
import { TransactionProduct } from '@/features/transactions/types';

const CheckoutForm = () => {
  const { register } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useGetCart();
  const user = useGetUser();
  const { data: activeAccount } = useGetActiveAccountQuery(
    user?.id?.toString()
  );
  const [createTransactionMutation] = useCreateTransactionMutation();

  const transactionProducts: TransactionProduct[] = cartItems.map((item) => {
    return {
      productId: item.id,
      categoryId: item.categoryID,
      quantity: item.quantity,
    };
  });

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const createTransaction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user && activeAccount) {
      try {
        const newTransaction = {
          id: Math.floor(Math.random() * (10000 + 1)),
          bankAccountId: activeAccount[0].id,
          amount: total,
          products: transactionProducts,
          dateCreated: new Date().toISOString(),
        };
        await createTransactionMutation(newTransaction).unwrap();
        dispatch(clearCart());
        navigate('/profile');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form
      className="basis-3/5 text-dark-green"
      onSubmit={(e) => createTransaction(e)}
    >
      <div className="grid grid-cols-2 gap-4">
        <label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            placeholder="First Name"
            required
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input
            type="text"
            id="lastName"
            required
            {...register('lastName')}
            placeholder="Last Name"
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label className="col-start-1 col-span-2">
          <input
            type="text"
            id="address"
            {...register('address')}
            placeholder="Address"
            required
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input
            type="text"
            id="city"
            {...register('city')}
            placeholder="City"
            required
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input
            type="number"
            id="postalCode"
            {...register('postalCode')}
            placeholder="Postal Code"
            required
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            placeholder="Phone"
            required
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
      </div>
      <div className="mt-8 flex justify-between">
        <Link
          to={'/cart'}
          className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:underline"
        >
          <img src={backIcon} alt="go back" className="w-2" />
          Return to cart
        </Link>
        <button className="bg-dark-green text-white rounded-md px-5 py-3 font-semibold hover:opacity-85">
          Confirm Order
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
