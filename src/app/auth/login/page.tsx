import { Metadata } from 'next';

import AuthLayout from '@/components/layouts/auth-layout';
import Login from '@/components/pages/login/login';

export const metadata: Metadata = {
  title: 'Acarain | Login',
};

const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
