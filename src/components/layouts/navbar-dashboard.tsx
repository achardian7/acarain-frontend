'use client';

import { RiMenu3Line } from 'react-icons/ri';

import useSidebarStore from '@/store/use-sidebar-store';

interface NavbarDashboardProps {
  title: string;
  description?: string;
}

const NavbarDashboard = ({ title, description }: NavbarDashboardProps) => {
  const { setIsSidebarOpen } = useSidebarStore();

  return (
    <header className='border-default-200 border-b'>
      <nav className='flex h-20 items-center justify-between px-10'>
        <div>
          <h1 className='text-xl font-bold lg:text-2xl'>{title}</h1>
          <p className='text-default-400 hidden text-sm lg:block'>
            {description}
          </p>
        </div>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className='block cursor-pointer lg:hidden'
        >
          <RiMenu3Line size={30} />
        </button>
      </nav>
    </header>
  );
};

export default NavbarDashboard;
