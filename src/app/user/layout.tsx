import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './_components/AppSidebar';
import AppHeader from './_components/AppHeader';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppHeader />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="flex-1 w-full">{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
}
