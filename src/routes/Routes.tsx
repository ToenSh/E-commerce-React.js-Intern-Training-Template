import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../pages/Category/Category';
import Newsletter from '../components/Newsletter';
import Product from '../pages/Product/Product';
import Login from '@/features/auth/pages/Login';
import Register from '@/features/auth/pages/Register';
import Cart from '@/features/cart/pages/Cart';
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
        </Routes>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
