import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../pages/Category/Category';
import Newsletter from '../components/Newsletter';
import Product from '../pages/Product/Product';
const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<Product />} />
        </Routes>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
