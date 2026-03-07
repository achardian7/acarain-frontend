import Image from 'next/image';

import { cn } from '@/utils/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'text-2xl ',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  const widths = {
    sm: 40,
    md: 60,
    lg: 80,
  };

  return (
    <div className='text-primary flex items-center gap-3'>
      <Image
        src='/images/general/logo.svg'
        alt='Logo'
        width={widths[size]}
        height={widths[size]}
      />
      <span className={cn(sizes[size], 'font-bold')}>Acarain.</span>
    </div>
  );
};

export default Logo;
