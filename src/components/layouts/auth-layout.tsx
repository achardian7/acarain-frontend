interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className='container mx-auto flex min-h-screen w-full items-center justify-center p-6'>
      {children}
    </section>
  );
};

export default AuthLayout;
