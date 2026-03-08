import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'Username or email is required')
    .refine(
      value => {
        const isEmail = z.string().email().safeParse(value).success;
        const isUsername = value.length >= 3;
        return isEmail || isUsername;
      },
      {
        message:
          'Identifier must be a valid email or a username with at least 3 characters',
      }
    ),

  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  const loginService = async (payload: LoginInput) => {
    const result = await signIn('credentials', {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (result?.error && result.status === 401) {
      throw new Error('Invalid username, email or password');
    }
  };

  const { mutate: loginMutate, isPending: isLoginPending } = useMutation({
    mutationFn: loginService,
    onError: error => {
      setError('root', {
        message:
          error.message ?? 'Something went wrong, please try again later',
      });
    },
    onSuccess: () => {
      router.push(callbackUrl);
      reset();
    },
  });

  const handleLogin = (payload: LoginInput) => {
    loginMutate(payload);
  };

  return { control, handleSubmit, handleLogin, isLoginPending, errors };
};
