'use client';

import { Button } from '@heroui/button';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '@/components/ui/logo';

const RegisterSuccess = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-sm'>
      <div className='flex w-full flex-col items-center justify-center space-y-6'>
        <Logo size='lg' />
        <Image
          src='/images/illustration/reg-success.svg'
          className='w-3/4 lg:w-full'
          width={700}
          height={700}
          alt='Auth Illustration'
        />
      </div>
      <div className='mt-8 flex w-full flex-col items-center justify-center'>
        <h1 className='text-primary text-3xl font-bold'>
          Create Account Success
        </h1>
        <p className='text-lg font-semibold text-gray-700'>
          Check your email for account activation
        </p>

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
    </div>
  );
};

export default RegisterSuccess;
