'use client';
import Image from 'next/image';
import logo from '@/app/assets/nutriEconomy.png';
import { useRouter } from 'next/navigation';
import { User, Bell } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AppHeader = ({ username = 'User' }) => {
  const router = useRouter();

  return (
    <div className="w-full bg-primary flex items-center justify-between p-4 2xl:p-6 font-exo">
      {/* Logo - only visible on mobile when sidebar might be collapsed */}
      <div className="md:hidden">
        <Link href="/dashboard">
          <Image src={logo} alt="logo" width={120} height={40} />
        </Link>
      </div>

      {/* Page title - can be made dynamic based on current route */}
      <div className="hidden md:block text-white text-xl font-semibold">
        Dashboard
      </div>

      {/* Right side elements */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10"
            >
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New diet plan available</DropdownMenuItem>
            <DropdownMenuItem>
              Your prediction results are ready
            </DropdownMenuItem>
            <DropdownMenuItem>New supplement recommendations</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white hover:bg-white/10"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt={username} />
                <AvatarFallback className="bg-white/20 text-white">
                  <User size={16} />
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{username}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/')}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppHeader;
