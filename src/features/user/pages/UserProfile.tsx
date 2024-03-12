import useGetUser from '@/hooks/useGetUser';
import userIcon from '../../../assets/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/hooks';
import { logout } from '@/features/auth/stores/userSlice';
import { clearCart } from '@/features/cart/slice/cartSlice';
import Balance from '../components/Balance';
import OrderHistory from '../components/OrderHistory';
const UserProfile = () => {
  const navigate = useNavigate();
  const user = useGetUser();
  const dispatch = useAppDispatch();

  const signout = () => {
    dispatch(logout(null));
    dispatch(clearCart());
    navigate('/home');
  };

  return (
    <section className="mx-auto max-w-7xl text-dark-green pt-12 pb-10">
      <h1 className="font-semibold text-[40px] mb-4">Account</h1>
      <div className="grid grid-cols-2 gap-y-14">
        <button className="flex gap-2 underline font-medium tracking-wide w-fit h-fit opacity-80 hover:opacity-100" onClick={signout}>
          <img src={userIcon} alt="logout" className="w-3 h-3 mt-2" />
          Log out
        </button>
        <Balance />
        <OrderHistory />
        <div className="flex flex-col gap-2 pl-[280px]">
          <h2 className="font-semibold text-3xl">Account Details</h2>
          <span className="tracking-wider opacity-80">
            {user?.firstName} {user?.lastName}
          </span>
          <span className="tracking-wider opacity-80">{user?.email}</span>
          <Link to={'/auth/changePassword'} className="opacity-75 underline hover:opacity-100 self-start text-sm">
            Change password
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
