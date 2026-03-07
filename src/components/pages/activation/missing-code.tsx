'use client';

import { Button } from '@heroui/react';

import { useRouter } from 'next/navigation';

import AuthLayout from '@/components/layouts/auth-layout';

const MissingCode = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-primary text-xl font-bold'>
          Activation code is missing
        </h1>

        <Button
          variant='bordered'
          color='primary'
          className='mt-6'
          size='lg'
          onClick={() => router.push('/')}
        >
          Back to Home
        </Button>
      </div>
    </AuthLayout>
  );
};

export default MissingCode;
