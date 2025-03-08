'use client';
import Image from 'next/image';
import logo from '@/app/assets/nutriEconomy.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <div className="relative w-full bg-primary flex items-center p-8 py-12 rounded-b-4xl font-exo">
      <div
        className="flex justify-start cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      >
        <Image src={logo} alt="logo" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-white text-2xl gap-x-12 font-normal">
        <div className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 font-normal">
          Home
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Diet
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Product
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Health
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Sales
        </div>
      </div>
      <div className="flex justify-end ml-auto">
        <Button
          className="bg-transparent text-white text-2xl border-2 border-white rounded-full px-6 py-5"
          variant={'outline'}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
