'use client';
import Image from 'next/image';
import logo from '@/app/assets/nutriEconomy.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
      <Link href="/" className="flex justify-start">
        <Image src={logo} alt="logo" />
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center text-white text-2xl gap-x-12 font-normal">
        <Link href="/home" className="hover:scale-105 transition-all ease-in-out duration-300 font-normal">
          Home
        </Link>
        <Link href="/diet" className="hover:scale-105 transition-all ease-in-out duration-300">
          Diet
        </Link>
        <Link href="/product" className="hover:scale-105 transition-all ease-in-out duration-300">
          Product
        </Link>
        <Link href="/health" className="hover:scale-105 transition-all ease-in-out duration-300">
          Health
        </Link>
        <Link href="/sales" className="hover:scale-105 transition-all ease-in-out duration-300">
          Sales
        </Link>
      </div>

      <div className="flex justify-end ml-auto">
        <Link href="/login" className="bg-transparent text-white text-2xl border-2 border-white rounded-4xl px-6 py-3 hidden lg:flex">
          Login
        </Link>
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
        <Link href="/home" className="hover:scale-105 transition-all ease-in-out duration-300 font-normal">
          Home
        </Link>
        <Link href="/diet" className="hover:scale-105 transition-all ease-in-out duration-300">
          Diet
        </Link>
        <Link href="/product" className="hover:scale-105 transition-all ease-in-out duration-300">
          Product
        </Link>
        <Link href="/health" className="hover:scale-105 transition-all ease-in-out duration-300">
          Health
        </Link>
        <Link href="/sales" className="hover:scale-105 transition-all ease-in-out duration-300">
          Sales
        </Link>
        <Link href="/login" className="bg-transparent text-white text-lg border-2 border-white rounded-full px-4 py-1 mt-4">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;