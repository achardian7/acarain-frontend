import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import z from 'zod';

import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { ApiError } from '@/libs/axios/instance';
import authService from '@/services/auth';
import { IRegister } from '@/types/auth';

export const registerSchema = z
  .object({
    fullName: z.string().min(3, 'Full Name must be at least 3 characters long'),
    username: z
      .string()
      .trim()
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be less than 30 characters')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores'
      ),
    email: z.email(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100)
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    error: "Password doesn't match",
    path: ['confirmPassword'],
  });

const useRegister = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const router = useRouter();

  const registerService = async (payload: IRegister) => {
    const result = await authService.register(payload);
    return result;
  };

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationFn: registerService,
    onError: (error: AxiosError<ApiError>) => {
      setError('root', {
        message:
          error.response?.data.message ??
          'Something went wrong, please try again later',
      });
    },
    onSuccess: () => {
      reset();
      router.push('/auth/register/success');
    },
  });

  const handleRegister = async (data: z.infer<typeof registerSchema>) => {
    mutateRegister(data);
  };

  return { control, handleSubmit, handleRegister, isRegisterPending, errors };
};

export default useRegister;
