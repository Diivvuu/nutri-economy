'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/nutriEconomy.png';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Activity,
  Apple,
  ShoppingBag,
  History,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const AppSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Navigation items with their paths and icons
  const mainNavItems = [
    { path: '/user/dashboard', label: 'Dashboard', icon: Home },
    { path: '/user/predict', label: 'Disease Prediction', icon: Activity },
    { path: '/user/history', label: 'Past Predictions', icon: History },
  ];

  const recommendationItems = [
    { path: '/user/diet', label: 'Diet Plans', icon: Apple },
    { path: '/user/supplements', label: 'Supplements', icon: ShoppingBag },
  ];

  const footerItems = [
    { path: '/user/settings', label: 'Settings', icon: Settings },
    { path: '/user/help', label: 'Help & Support', icon: HelpCircle },
  ];

  // Check if the current path matches the navigation item
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Handle navigation with router.push
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Add your logout logic here (clear token, etc.)
    // For example: localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <Sidebar className="border-r border-border h-screen font-mabry">
      <SidebarHeader className="p-4 border-b border-border">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => handleNavigation('/user/dashboard')}
        >
          <Image src={logo} alt="NutriEconomy" width={150} height={50} />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground px-2 py-1">
            MAIN NAVIGATION
          </p>

          {mainNavItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </SidebarGroup>

        <SidebarGroup className="mt-6 space-y-1">
          <p className="text-xs font-medium text-muted-foreground px-2 py-1">
            RECOMMENDATIONS
          </p>

          {recommendationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-3 mt-auto">
        <SidebarGroup className="space-y-1">
          {footerItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted text-foreground transition-colors"
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-destructive/10 text-destructive transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
