import Link from 'next/link';
import { UtensilsCrossed, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainNav } from './main-nav';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function AppSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl text-primary">Culinary Canvas</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <MainNav />
        </div>
        <div className="mt-auto p-4">
            <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                     <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                          <AvatarImage src="https://picsum.photos/seed/currentuser/100/100" alt="Avatar" data-ai-hint="chef portrait"/>
                          <AvatarFallback>AT</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-lg font-medium leading-none font-headline">
                            Alex T.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            alex.t@example.com
                          </p>
                        </div>
                      </div>
                </CardHeader>
            </Card>
        </div>
      </div>
    </div>
  );
}
