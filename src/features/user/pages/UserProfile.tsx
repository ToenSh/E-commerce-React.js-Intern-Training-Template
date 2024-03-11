import useGetUser from '@/hooks/useGetUser';
import userIcon from '../../../assets/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/hooks';
import { logout } from '@/features/auth/stores/userSlice';
import { clearCart } from '@/features/cart/slice/cartSlice';
const UserProfile = () => {
  const navigate = useNavigate();
  const user = useGetUser();
  const dispatch = useAppDispatch();

  const signout = () => {
    dispatch(logout(null));
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <section className="mx-auto max-w-7xl flex flex-col gap-14 text-dark-green pt-12 pb-10">
      <div>
        <h1 className="font-semibold text-[40px]">Account</h1>
        <button
          className="flex items-center gap-2 underline font-medium tracking-wide  opacity-80 hover:opacity-100"
          onClick={signout}
        >
          <img src={userIcon} alt="logout" className="w-3 mt-1" />
          Log out
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-3xl">Order history</h2>
          <p className="tracking-wider opacity-80">
            You haven't placed any orders yet.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-3xl">Account details</h2>
          <span className="tracking-wider opacity-80">
            {user?.firstName} {user?.lastName}
          </span>
          <span className="tracking-wider opacity-80">{user?.email}</span>
          <Link
            to={'/changePassword'}
            className="opacity-75 underline hover:opacity-100 self-start text-sm"
          >
            Change password
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
