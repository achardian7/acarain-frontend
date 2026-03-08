'use client';

import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Input } from '@heroui/input';
import { Spinner } from '@heroui/spinner';

import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FiAlertTriangle } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/components/ui/logo';

import { useLogin } from './use-login';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { control, handleSubmit, handleLogin, errors, isLoginPending } =
    useLogin();

  return (
    <div className='flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20'>
      <div className='flex w-full flex-col items-center justify-center gap-10 lg:w-1/3'>
        <Logo size='lg' />
        <Image
          src='/images/illustration/auth.svg'
          className='hidden w-full lg:block'
          width={1024}
          height={1024}
          alt='Auth Illustration'
        />
      </div>
      <Card className='w-full max-w-xl py-4'>
        <CardHeader className='flex flex-col justify-start gap-2'>
          <h1 className='text-primary text-2xl font-bold'>Login</h1>
          <p>
            Dont&apos;t Have an account?&nbsp;{' '}
            <Link
              href='/auth/register'
              className='text-primary font-semibold hover:underline'
            >
              Register here
            </Link>
          </p>
        </CardHeader>

        <CardBody className='px-8'>
          {errors.root && (
            <div className='mb-3 flex items-center justify-center gap-3 rounded-md bg-red-600/20 p-4 text-red-600'>
              <FiAlertTriangle />
              <span>{errors.root.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(handleLogin)} className='space-y-4'>
            <Controller
              name='identifier'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type='text'
                  label='Email or Username'
                  variant='bordered'
                  autoComplete='off'
                  isInvalid={errors.identifier !== undefined}
                  errorMessage={errors.identifier?.message}
                />
              )}
            />

            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isPasswordVisible ? 'text' : 'password'}
                  label='Password'
                  variant='bordered'
                  autoComplete='off'
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      aria-label='toggle password visibility'
                      className='outline-transparent focus:outline-solid'
                      type='button'
                      onClick={() => setIsPasswordVisible(prev => !prev)}
                    >
                      {isPasswordVisible ? (
                        <FaEye className='text-default-400 pointer-events-none text-2xl' />
                      ) : (
                        <FaEyeSlash className='text-default-400 pointer-events-none text-2xl' />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Button
              disabled={isLoginPending}
              color='primary'
              type='submit'
              size='lg'
              className='w-full'
            >
              {isLoginPending ? <Spinner color='white' size='sm' /> : 'Login'}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
