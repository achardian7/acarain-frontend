'use client';

import { Button } from '@heroui/button';

import { useRouter } from 'next/navigation';

import AuthLayout from '@/components/layouts/auth-layout';

const Error = ({ error }: { error: Error }) => {
  const router = useRouter();

  return (
    <AuthLayout>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-primary text-xl font-bold'>Something went wrong</h1>
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

export default Error;
