'use client';

import { Button } from '@heroui/button';

import { CiLogout } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useSidebarStore from '@/store/use-sidebar-store';
import { cn } from '@/utils/cn';
import { SIDEBAR_ADMIN } from '@/utils/constant';

import Logo from '../ui/logo';

const AdminSidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore();
  return (
    <aside
      className={cn(
        'border-default-200 fixed top-0 z-50 flex h-screen w-full -translate-x-full flex-col border-r-1 bg-white duration-250 ease-linear lg:max-w-xs lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className='flex w-full items-center justify-between px-6 py-3 lg:justify-center'>
        <Link href='/'>
          <Logo size='md' />
        </Link>

        <button
          onClick={() => setIsSidebarOpen(false)}
          className='bg-primary/10 text-primary hover:bg-primary/30 block rounded-full p-3 lg:hidden'
        >
          <IoMdClose size={30} />
        </button>
      </div>
      <div className='mt-10 flex-1 space-y-4 px-4'>
        {SIDEBAR_ADMIN.map(item => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-5 py-3 text-base hover:bg-gray-100',
              pathname === item.href && 'bg-primary/10 text-primary'
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className='mt-auto mb-10 px-4'>
        <Button
          onClick={() => signOut({ callbackUrl: '/' })}
          color='primary'
          variant='ghost'
          fullWidth
        >
          <CiLogout />
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
