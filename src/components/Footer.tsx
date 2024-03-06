import logo from '../assets/Thesus-white-logo.webp';
import instaLogo from '../assets/instagram.svg';
import twitterLogo from '../assets/twitter.svg';
import tiktokLogo from '../assets/tiktok.svg';
import facebookLogo from '../assets/facebook.svg';
export const Footer = () => {
  return (
    <footer className="bg-dark-green h-[20rem] w-screen">
      <div>
        <img src={logo} alt="logo" className="w-20" />
        <p>Socially and environmentally progressive outdoor footwear</p>
        <div className="flex items-center">
          <img src={instaLogo} alt="instagram" className="w-4" />
          <img src={tiktokLogo} alt="tiktok" className="w-4" />
          <img src={facebookLogo} alt="facebook" className="w-4" />
          <img src={twitterLogo} alt="twitter" className="w-4" />
        </div>
      </div>
    </footer>
  );
};
