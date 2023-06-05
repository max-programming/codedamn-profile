import { PropsWithChildren } from 'react';

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`flex flex-col justify-center gap-2 rounded-lg border-2 border-border bg-border/50 p-5 ${className}`}
    >
      {children}
    </div>
  );
}
