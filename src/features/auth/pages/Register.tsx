import { useAppDispatch } from '@/app/hooks';
import { useForm } from 'react-hook-form';
import { signup } from '../stores/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAddBankAccountMutation } from '@/features/BankAccounts';
import useGetUser from '@/hooks/useGetUser';
import ClipLoader from 'react-spinners/ClipLoader';

const Register = () => {
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [addNewBankAcc, { isLoading }] = useAddBankAccountMutation();
  const user = useGetUser();
  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const email = watch('email');
  const password = watch('password');

  const createAccount = async () => {
    try {
      await dispatch(signup({ firstName, lastName, email, password }));
    } catch (e) {
      console.log(e);
    }
    if (user?.id) {
      try {
        const newBankAcc = {
          id: Math.floor(Math.random() * (1000 + 1)),
          name: 'Euro Account',
          balance: 500,
          userId: user.id,
          isActive: true,
          dateCreated: new Date().toISOString(),
        };
        await addNewBankAcc(newBankAcc).unwrap();
        navigate('/profile');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="text-dark-green max-w-7xl mx-auto flex flex-col items-center py-12">
      <h1 className="font-semibold text-[40px] mb-12">Create account</h1>
      <form
        className="flex flex-col gap-6 items-center"
        onSubmit={handleSubmit(createAccount)}
      >
        <label>
          <input
            type="text"
            id="first-name"
            {...register('firstName')}
            required
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="First Name"
          />
        </label>
        <label>
          <input
            type="text"
            id="last-name"
            required
            {...register('lastName')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Last Name"
          />
        </label>
        <label>
          <input
            type="email"
            id="email"
            required
            {...register('email')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            required
            {...register('password')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Password"
          />
        </label>
        {isLoading ? (
          <ClipLoader size={20} color="#123026" />
        ) : (
          <button className="bg-dark-green text-white font-medium w-28 py-2 mt-4 rounded hover:opacity-75">
            Create
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
