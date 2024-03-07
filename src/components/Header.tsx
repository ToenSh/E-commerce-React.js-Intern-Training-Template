import logo from '../assets/THESUS-LOGO1.avif';
import userLogo from '../assets/user.png';
import cartLogo from '../assets/shopping-bag.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-8 text-dark-green text-sm">
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" className="hover:cursor-pointer" />
          <nav>
            <ul className="flex items-center gap-5">
              <Link to={'/rain'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Rain</li>
              </Link>
              <Link to={'/snow'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Snow</li>
              </Link>
              <Link to={'/sun'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">Sun</li>
              </Link>
              <Link to={'/all-weather'}>
                <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">All Weather</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:scale-110">
            <img src={userLogo} alt="login" className="w-5" />
          </button>
          <button className="hover:scale-110">
            <img src={cartLogo} alt="cart" className="w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
