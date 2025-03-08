'use client';
import Image from 'next/image';
import logo from '@/app/assets/nutriEconomy.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`relative w-full bg-primary flex items-center p-4 2xl:p-8 ${
        isMenuOpen ? '' : 'rounded-b-4xl'
      } font-exo`}
    >
      <div
        className="flex justify-start cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      >
        <Image src={logo} alt="logo" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center text-white text-2xl gap-x-12 font-normal">
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
          className="bg-transparent text-white text-2xl border-2 border-white rounded-full px-6 py-5 hidden lg:flex"
          variant={'outline'}
        >
          Login
        </Button>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-primary text-white flex flex-col items-center gap-y-2 py-4 lg:hidden text-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
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
        <Button
          className="bg-transparent text-white text-lg border-2 border-white rounded-full px-4 py-3 mt-4"
          variant={'outline'}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
