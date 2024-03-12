import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Product from '../pages/Product';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/home" index element={<Home />} />
      <Route path="/:categoryID" element={<Category />} />
      <Route path="/:categoryID/:product" element={<Product />} />
    </Routes>
  );
};
