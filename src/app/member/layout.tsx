import MemberSidebar from '@/components/layouts/member-sidebar';

interface MemberLayoutProps {
  children: React.ReactNode;
}

const MemberLayout = ({ children }: MemberLayoutProps) => {
  return (
    <div>
      <MemberSidebar />
      <main className='h-screen w-full overflow-y-auto pl-0 lg:pl-80'>
        {children}
      </main>
    </div>
  );
};

export default MemberLayout;
