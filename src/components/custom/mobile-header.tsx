'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useRef, useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Separator } from '@/components/ui/separator';
// import { SheetClose } from '@radix-ui/react-dialog'; // ✅ Needed to close programmatically

export default function MobileHeader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const { email, tel, social } = DATA.contact;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm sm:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
          </Avatar>
          {/* <span className="font-semibold text-lg">{DATA.name}</span> */}
        </Link>

        {/* Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 sm:w-80 flex flex-col gap-6 py-10">
            {/* Nav links */}
            <div className="space-y-4">
              {DATA.navbar.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-sm font-medium hover:underline"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </div>

            <Separator />

            {/* Social Links */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                Socials
              </p>
              <div className="space-y-3">
                {Object.entries(social)
                  .filter(([_, s]) => s.navbar)
                  .map(([key, s]) => (
                    <SheetClose asChild key={key}>
                      <Link
                        href={s.url}
                        target="_blank"
                        className="flex items-center space-x-2 text-sm font-medium hover:underline"
                      >
                        <s.icon className="w-4 h-4" />
                        <span>{key}</span>
                      </Link>
                    </SheetClose>
                  ))}
              </div>
            </div>

            <Separator />

            {/* Contact */}
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                📧{' '}
                <Link href={`mailto:${email}`} className="hover:underline text-primary">
                  {email}
                </Link>
              </p>
              <p>
                📞{' '}
                <Link href={`tel:${tel}`} className="hover:underline text-primary">
                  {tel}
                </Link>
              </p>
            </div>

            <Separator />

            {/* Theme Toggle */}
            <div className="flex items-center space-x-3">
              <ModeToggle />
              <span className="text-sm text-muted-foreground">Toggle Theme</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
