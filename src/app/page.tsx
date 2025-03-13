'use client';
import Footer from './_components/Footer';
import Header from './_components/Header';
import Section1 from './_components/Section1';
import Section2 from './_components/Section2';
import Section3 from './_components/Section3';
import Section4 from './_components/Section4';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Footer/> */}
    </div>
  );
}
