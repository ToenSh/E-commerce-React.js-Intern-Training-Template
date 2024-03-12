import { Route, Routes } from 'react-router-dom';
import { Cart } from '@/features/cart';
import { AuthRoutes } from '@/features/auth';
import { DashboardRoutes } from '@/features/dashboard';
import { UserProfile } from '@/features/user';
import { Transactions } from '@/features/transactions';
import { Checkout } from '@/features/checkout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import BankAccounts from '@/features/BankAccounts/pages/BankAccounts';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<DashboardRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bankAccounts" element={<BankAccounts />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
