import { Routes, Route, Navigate } from 'react-router-dom';
import { Cart } from '@/features/cart';
import { AuthRoutes } from '@/features/auth';
import { DashboardRoutes } from '@/features/dashboard';
import { UserProfile } from '@/features/user';
import { Transactions } from '@/features/transactions';
import { Checkout } from '@/features/checkout';
import { BankAccounts } from '@/features/BankAccounts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import PrivateRoutes from '@/utils/PrivateRoutes';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/utils/ScrollToTop';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<DashboardRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bankAccounts" element={<BankAccounts />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Routes>
        <Newsletter />
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
