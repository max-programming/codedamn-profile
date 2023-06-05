/* eslint-disable @next/next/no-img-element */
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Html5Logo, JSLogo } from '@/icons';
import { ReactNode } from 'react';

export function Playgrounds() {
  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Playgrounds</h3>
        <Button className='font-semibold text-primary hover:bg-border'>
          Create new playground
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        {plays.map((play, idx) => (
          <PlaygroundCard key={idx} playground={play} />
        ))}
      </div>
    </div>
  );
}

function PlaygroundCard(props: PlaygroundCardProps) {
  return (
    <Card>
      <div className='flex gap-4'>
        {props.playground.logo}
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-bold'>{props.playground.title}</h3>
          <p className='text-secondary'>
            {props.playground.tech} • {props.playground.timeago} ago
          </p>
          <div className='flex space-x-3'>
            <div className='flex -space-x-2'>
              <img
                src='/profile2.png'
                alt=''
                className='rounded-full'
                width={24}
                height={24}
              />
              <img
                src='/profile.jpeg'
                alt=''
                className='rounded-full'
                width={24}
                height={24}
              />
            </div>
            <p className='text-secondary'>
              Shared with <span className='font-bold'>Adam,</span>{' '}
              <span className='font-bold'>Anna..</span> +7 more
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface PlaygroundType {
  title: string;
  tech: string;
  timeago: string;
  logo: ReactNode;
}

type PlaygroundCardProps = {
  playground: PlaygroundType;
};

const plays: PlaygroundType[] = [
  {
    title: 'HTML Playground',
    tech: 'HTML/CSS',
    timeago: '1 day',
    logo: <Html5Logo width='40' height='40' />,
  },
  {
    title: 'JS Playground',
    tech: 'JavaScript',
    timeago: '1 min',
    logo: <JSLogo width='40' height='40' />,
  },
  {
    title: 'JS Playground',
    tech: 'JavaScript',
    timeago: '1 min',
    logo: <JSLogo width='40' height='40' />,
  },
  {
    title: 'HTML Playground',
    tech: 'HTML/CSS',
    timeago: '1 day',
    logo: <Html5Logo width='40' height='40' />,
  },
];
