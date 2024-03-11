import { Route, Routes } from 'react-router-dom';
import Home from '../features/dashboard/Home/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../features/dashboard/Category/Category';
import Newsletter from '../components/Newsletter';
import Product from '../features/dashboard/Product/Product';
import Login from '@/features/auth/pages/Login';
import Register from '@/features/auth/pages/Register';
import Cart from '@/features/cart/pages/Cart';
import UserProfile from '@/features/user/pages/UserProfile';
import ChangePassword from '@/features/auth/pages/ChangePassword';
import Checkout from '@/features/checkout/pages/Checkout';
const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryID" element={<Category />} />
          <Route path="/:categoryID/:product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
