import logo from '../assets/THESUS-LOGO1.avif';
import userLogo from '../assets/user.png';
import cartLogo from '../assets/shopping-bag.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';
import { selectCartItems } from '@/features/cart/slice/cartSlice';
import useGetUser from '@/hooks/useGetUser';
const Header = () => {
  const user = useGetUser();
  const productsOnCart = useAppSelector(selectCartItems);
  const totalQuantity = productsOnCart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-8 text-dark-green text-sm">
        <div className="flex items-center gap-10">
          <Link to={'/home'}>
            <img src={logo} alt="logo" className="hover:cursor-pointer" />
          </Link>
          <nav>
            <ul className="flex items-center gap-5">
              <Link to={'/1'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Rain</li>
              </Link>
              <Link to={'/2'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Snow</li>
              </Link>
              <Link to={'/3'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Sun</li>
              </Link>
              <Link to={'/allProducts'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">All Weather</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to={user ? '/profile' : '/auth/login'} className="hover:scale-110">
            <img src={userLogo} alt="login" className="w-5" />
          </Link>
          <Link to={'/cart'} className={`hover:scale-110 relative `}>
            <img src={cartLogo} alt="cart" className="w-5" />
            {totalQuantity > 0 && (
              <div className={`absolute w-4 after:h-4 top-3 left-2 rounded-full bg-dark-green text-white flex justify-center font-bold text-xs`}>
                {totalQuantity}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
