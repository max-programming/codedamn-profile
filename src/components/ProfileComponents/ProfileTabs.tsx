import Button from '../ui/Button';

export function ProfileTabs() {
  return (
    <div className='rounded-2xl border-2 px-5 py-3'>
      <div className='flex gap-5'>
        <Button className='bg-primary/10 font-medium text-primary hover:bg-primary/20'>
          Portfolio
        </Button>
        <Button className='hover:bg-border'>Resume</Button>
      </div>
    </div>
  );
}
