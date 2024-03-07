import logo from '../assets/Thesus-white-logo.webp';
import instaLogo from '../assets/instagram.svg';
import twitterLogo from '../assets/twitter.svg';
import tiktokLogo from '../assets/tiktok.svg';
import facebookLogo from '../assets/facebook-f.svg';
const Footer = () => {
  return (
    <footer className="bg-dark-green">
      <div className="max-w-7xl mx-auto flex items-start gap-4 py-10">
        <div className="flex flex-col gap-6 basis-1/4">
          <img src={logo} alt="logo" className="w-20" />
          <h2 className="font-semibold text-lg text-white max-w-xs">Socially and environmentally progressive outdoor footwear</h2>
          <div className="flex items-center gap-6">
            <img src={instaLogo} alt="instagram" className="w-4 cursor-pointer hover:scale-105" />
            <img src={tiktokLogo} alt="tiktok" className="w-4 cursor-pointer hover:scale-105" />
            <img src={facebookLogo} alt="facebook" className="w-3 cursor-pointer hover:scale-105" />
            <img src={twitterLogo} alt="twitter" className="w-4 cursor-pointer hover:scale-105" />
          </div>
        </div>
        <div className="flex basis-3/4 gap-24">
          <nav className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-white">Our Shop</span>
            <ul className="flex flex-col gap-3">
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">All Products</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Weekend Boot</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Anyday Rain Boot</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Modern Winter Boot</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Winter Weekend Boot</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Winter Weekend Boot Z</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">The Terrus Clog</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Accessories</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Thesus Gift Card</li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-white">Help</span>
            <ul className="flex flex-col gap-3">
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Size guide</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Shipping Policy</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Refund Policy</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Wear and Care FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-white">About us</span>
            <ul className="flex flex-col gap-3">
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Values</li>
              <li className="text-white opacity-75 text-sm hover:underline hover:opacity-100 cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
