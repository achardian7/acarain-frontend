import AuthLayout from '@/components/layouts/auth-layout';
import Activation from '@/components/pages/activation/activation';
import MissingCode from '@/components/pages/activation/missing-code';
import authService from '@/services/auth.service';

interface PageProps {
  searchParams: Promise<{
    code: string;
  }>;
}

const ActivationPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;

  if (!params.code) {
    return <MissingCode />;
  }

  const { data } = await authService.activation({ code: params.code });

  return (
    <AuthLayout>
      <Activation status={data?.data ? 'success' : 'failed'} />
    </AuthLayout>
  );
};

export default ActivationPage;
