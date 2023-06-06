import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';
import { About, Education, Work } from '@/components/ProfileComponents/Resume';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
      <About />
      <Work />
      <Education />
    </div>
  );
}
