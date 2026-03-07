'use client';

import { Button } from '@heroui/react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '@/components/ui/logo';

interface ActivationProps {
  status: 'success' | 'failed';
}

const Activation = ({ status }: ActivationProps) => {
  const router = useRouter();

  return (
    <div className='w-full max-w-sm'>
      <div className='flex w-full flex-col items-center justify-center space-y-6'>
        <Logo size='lg' />
        <Image
          src={`/images/illustration/${status === 'success' ? 'success.svg' : 'fail.svg'}`}
          className='w-3/4 lg:w-full'
          width={700}
          height={700}
          alt='Auth Illustration'
        />
      </div>
      <div className='mt-8 flex w-full flex-col items-center justify-center'>
        <h1 className='text-primary text-3xl font-bold'>
          {status === 'success' ? 'Activation Success' : 'Activation Failed'}
        </h1>
        <p className='text-lg font-semibold text-gray-700'>
          {status === 'success'
            ? 'Thank you for register account in Acarain'
            : 'Confirmation code is invalid'}
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

export default Activation;
