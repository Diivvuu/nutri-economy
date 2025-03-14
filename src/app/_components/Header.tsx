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
      className={`relative w-full bg-primary flex items-center p-4 2xl:p-8 rounded-b-4xl'
      } font-exo`}
    >
      <Link href="/" className="flex justify-start">
        <Image src={logo} alt="logo" />
      </Link>

      <div className="flex justify-end ml-auto">
        <Link
          href="/login"
          className="bg-transparent text-white text-2xl border-2 border-white rounded-4xl px-6 py-3 lg:flex"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
