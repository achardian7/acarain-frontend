import { Metadata } from 'next';

import AuthLayout from '@/components/layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Acarain | Register Success',
};

const RegisterSuccessPage = () => {
  return (
    <AuthLayout>
      <h1>Register Success</h1>
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
