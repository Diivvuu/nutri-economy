'use client';
import Header from './_components/Header';
import Section1 from './_components/Section1';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <Section1 />
      <Section1 />
    </div>
  );
}
