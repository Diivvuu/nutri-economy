'use client';
import Header from './_components/Header';
import Section1 from './_components/Section1';
import Section2 from './_components/Section2';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Section1 />
      <Section2 />
      {/* <Section1 /> */}
    </div>
  );
}
