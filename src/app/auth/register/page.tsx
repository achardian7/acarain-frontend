import { Metadata } from 'next';

import AuthLayout from '@/components/layouts/auth-layout';
import Register from '@/components/pages/register/register';

export const metadata: Metadata = {
  title: 'Acarain | Register',
};

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
