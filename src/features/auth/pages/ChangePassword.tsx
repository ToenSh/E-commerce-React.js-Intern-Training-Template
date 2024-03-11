import { useAppDispatch } from '@/app/hooks';
import useGetUser from '@/hooks/useGetUser';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { changePassword } from '../stores/userSlice';

const ChangePassword = () => {
  const navigate = useNavigate();
  const user = useGetUser();
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();
  const newPassword = watch('newPassword');
  const newPasswordConfirm = watch('newPasswordConfirm');

  const updatePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (newPassword === newPasswordConfirm && user?.id) {
      dispatch(
        changePassword({ userID: user.id, password: newPasswordConfirm })
      );
      navigate('/profile');
    } else {
      console.log('passwords do not match');
    }
  };

  return (
    <div className="text-dark-green max-w-7xl mx-auto flex flex-col items-center py-12">
      <h1 className="font-semibold text-[40px] mb-12">Update your password</h1>
      <form className="flex flex-col gap-6">
        <label>
          <input
            type="password"
            id="newPassword"
            {...register('newPassword')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="New Password"
          />
        </label>
        <label>
          <input
            type="password"
            id="newPasswordConfirm"
            {...register('newPasswordConfirm')}
            placeholder="Confirm new password"
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
          />
        </label>
        <button
          className="bg-dark-green text-white font-medium w-28 self-center py-2 rounded hover:opacity-75"
          onClick={(e) => updatePassword(e)}
        >
          Update
        </button>
        <Link
          className="self-center underline opacity-75 hover:opacity-100 hover:font-medium text-[15px] tracking-wide"
          to={'/profile'}
        >
          Go back
        </Link>
      </form>
    </div>
  );
};

export default ChangePassword;
