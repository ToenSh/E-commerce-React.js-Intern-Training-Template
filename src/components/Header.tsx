import logo from '../assets/THESUS-LOGO1.avif';
import userLogo from '../assets/user.png';
import cartLogo from '../assets/shopping-bag.png';
export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-6xl mx-auto py-8 text-dark-green text-sm">
      <div className="flex items-center gap-10">
        <img src={logo} alt="logo" className="hover:cursor-pointer" />
        <nav>
          <ul className="flex items-center gap-5">
            <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">
              Rain
            </li>
            <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">
              Snow
            </li>
            <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">
              Sun
            </li>
            <li className="opacity-75 hover:underline hover:cursor-pointer hover:opacity-100">
              All Weather
            </li>
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
    </header>
  );
};
