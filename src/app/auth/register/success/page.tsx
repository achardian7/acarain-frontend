import { Metadata } from 'next';

import AuthLayout from '@/components/layouts/auth-layout';
import RegisterSuccess from '@/components/pages/register-success/register-success';

export const metadata: Metadata = {
  title: 'Acarain | Register Success',
};

const RegisterSuccessPage = () => {
  return (
    <AuthLayout>
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
