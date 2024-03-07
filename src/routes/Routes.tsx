import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../pages/Category/Category';
import Newsletter from '../components/Newsletter';
import Product from '../pages/Product/Product';
import Login from '@/features/auth/pages/Login';
import Register from '@/features/auth/pages/Register';
const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
