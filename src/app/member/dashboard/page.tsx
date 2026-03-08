import { Metadata } from 'next';

import NavbarDashboard from '@/components/layouts/navbar-dashboard';

export const metadata: Metadata = {
  title: 'Acarain | Member',
};

const MemberPage = () => {
  return (
    <div>
      <NavbarDashboard title='Dashboard' description='Member dashboard' />
    </div>
  );
};

export default MemberPage;
