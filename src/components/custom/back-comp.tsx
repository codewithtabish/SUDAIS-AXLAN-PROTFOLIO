'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BackButton({
  label = '',
  position = 'top-14 left-14',
}: {
  label?: string;
  position?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        'fixed z-50',
        position
      )}
    >
      <Button
        onClick={() => router.back()}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer',
          'bg-background/90 backdrop-blur-md border',
          'hover:bg-muted transition-colors',
          'text-foreground border-border'
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        {label && <span className="text-sm">{label}</span>}
      </Button>
    </div>
  );
}
