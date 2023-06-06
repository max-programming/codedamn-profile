import { Sidebar } from '@/components/ui/Sidebar';
import { PropsWithChildren } from 'react';

export default function EditLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex h-full gap-16'>
      <Sidebar />
      <main className='flex-1'>{children}</main>
    </div>
  );
}
