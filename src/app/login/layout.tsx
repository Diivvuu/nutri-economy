import Header from '../_components/Header';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-full">{children}</div>
    </main>
  );
}
