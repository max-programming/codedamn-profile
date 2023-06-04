import { BellIcon, Hexagon, LightningIcon } from '@/icons';
import Image from 'next/image';
import SearchBox from './Navbar/SearchBox';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex flex-wrap items-center justify-between px-6 py-4'>
      <Link href='/' className='flex-1'>
        <h1 className='text-2xl font-bold'>codedamn</h1>
      </Link>
      <div className='flex items-center justify-between gap-5'>
        <SearchBox />
        <button className='flex items-center gap-1'>
          <LightningIcon />
          <h2 className='font-bold text-secondary'>2</h2>
        </button>
        <button className='relative'>
          <span className='absolute -top-1 right-0 h-4 w-4 rounded-full bg-[#EC4899] text-center text-xs text-white'>
            1
          </span>
          <BellIcon />
        </button>
        <button>
          <div className='relative'>
            <Hexagon className='absolute -right-7 -top-5 w-16 text-white' />
            <span className='absolute -top-1 right-0 text-sm font-bold text-white'>
              5
            </span>
          </div>
          <Image
            src='/profile-pic.png'
            width={42}
            height={42}
            alt='profile pic'
          />
        </button>
      </div>
    </nav>
  );
}
