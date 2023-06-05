import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';

export default function Home() {
  return (
    <main className='container mx-auto max-w-screen-lg'>
      <div className='flex flex-col gap-10'>
        <ProfileCard />
        <ProfileTabs />
      </div>
    </main>
  );
}
