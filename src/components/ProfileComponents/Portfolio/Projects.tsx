import Button from '@/components/ui/Button';
import { Html5Logo, ReactLogo } from '@/icons';

export function Projects() {
  return (
    <div>
      <div className='flex justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Projects</h3>
        <Button className='font-semibold text-primary hover:bg-border'>
          Create new project
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className='flex flex-col justify-center gap-2 rounded-lg border-2 border-border bg-border/50 p-3'>
      <img src='/screenshot.png' alt='' />
      <h3 className='mt-3 text-2xl font-bold'>Personal Portfolio Website</h3>
      <div className='flex items-center gap-2 text-secondary'>
        <Html5Logo />
        HTML/CSS •
        <ReactLogo />
        React
      </div>
    </div>
  );
}
