import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';
import {
  About,
  Education,
  Interests,
  Languages,
  Skills,
  Work,
} from '@/components/ProfileComponents/Resume';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
      <About />
      <Work />
      <Education />
      <Skills />
      <Interests />
      <Languages />
    </div>
  );
}
