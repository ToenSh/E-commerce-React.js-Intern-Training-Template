import useGetUser from '@/hooks/useGetUser';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let user = useGetUser();
  return user ? <Outlet /> : <Navigate to={'/auth/login'} />;
};

export default PrivateRoutes;
