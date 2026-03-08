'use client';

import { IconType } from 'react-icons';
import {
  CiBookmark,
  CiGrid41,
  CiShoppingTag,
  CiViewList,
  CiWallet,
} from 'react-icons/ci';

export interface SidebarItems {
  key: string;
  label: string;
  href: string;
  icon: IconType;
}

export const SIDEBAR_MEMBER: SidebarItems[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    href: '/member/dashboard',
    icon: CiGrid41,
  },
  {
    key: 'tansactions',
    label: 'Transactions',
    href: '/member/transactions',
    icon: CiWallet,
  },
];

export const SIDEBAR_ADMIN = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: CiGrid41,
  },
  {
    key: 'event',
    label: 'Event',
    href: '/admin/event',
    icon: CiViewList,
  },
  {
    key: 'category',
    label: 'Category',
    href: '/admin/category',
    icon: CiShoppingTag,
  },
  {
    key: 'banner',
    label: 'Banner',
    href: '/admin/banner',
    icon: CiBookmark,
  },
  {
    key: 'tansactions',
    label: 'Transactions',
    href: '/member/transactions',
    icon: CiWallet,
  },
];
