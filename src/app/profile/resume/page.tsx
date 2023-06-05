import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
    </div>
  );
}
