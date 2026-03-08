import AdminSidebar from '@/components/layouts/admin-sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className='flex'>
      <AdminSidebar />
      <main className='h-screen w-full overflow-y-auto pl-0 lg:pl-80'>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
