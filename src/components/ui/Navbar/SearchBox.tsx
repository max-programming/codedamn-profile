import { HiSearch, HiChevronDown } from 'react-icons/hi';

export default function SearchBox() {
  return (
    <div className='relative'>
      <HiSearch className='absolute left-3 top-3 text-xl text-secondary' />
      <input
        type='text'
        placeholder='Search'
        className='rounded-lg border-2 border-border p-2 pl-10 placeholder:text-secondary focus:outline-secondary'
      />
      <button className='absolute right-2 top-1.5 flex items-center gap-2 rounded-lg bg-border p-1'>
        Courses
        <HiChevronDown />
      </button>
    </div>
  );
}
