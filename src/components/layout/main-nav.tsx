"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, PlusCircle, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function MainNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Feed', icon: Home },
    { href: '/cookbook', label: 'My Cookbook', icon: Book },
    { href: '/create', label: 'New Recipe', icon: PlusCircle },
  ];

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
            { 'bg-muted text-primary': pathname === item.href }
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
