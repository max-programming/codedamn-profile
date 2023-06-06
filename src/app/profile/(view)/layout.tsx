import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';
import { PropsWithChildren } from 'react';

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
      {children}
    </div>
  );
}
