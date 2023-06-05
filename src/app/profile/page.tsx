import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';
import {
  Certificates,
  Playgrounds,
  Projects,
  Stats,
} from '@/components/ProfileComponents/Portfolio';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
      <Stats />
      <Projects />
      <Playgrounds />
      <Certificates />
    </div>
  );
}
