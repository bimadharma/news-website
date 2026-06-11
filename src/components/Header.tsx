'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Menu, X } from 'lucide-react'; 
import ThemeSwitcher from './ThemeSwitcher';
import { navbarMenu } from '@/data/navbarData'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-12">
          <Link href="/" className="relative w-32 h-8 md:w-40 md:h-10 block">
            <Image 
              src="/uploads/news/logo.png" 
              alt="Human Initiative Logo"
              fill
              sizes="(max-width: 768px) 120px, 160px"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-foreground/80">
            {navbarMenu.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="hover:text-primary font-medium transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sisi Kanan: Desktop CTA & Mobile Trigger */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>

          <Link href="/donate" className="hidden md:flex bg-[#FFBF37] hover:bg-[#FFBF37]/90 text-slate-900 font-semibold px-6 py-2.5 rounded-full items-center gap-2.5 shadow-lg transition-all hover:scale-105 active:scale-100">
            <Heart className="w-5 h-5 stroke-white fill-white"/>
            <span>Donate Now!</span>
          </Link>

          {/* Tombol Hamburger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Panel Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10 px-6 py-6 space-y-6">
          <ul className="space-y-4">
            {navbarMenu.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-lg text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <ThemeSwitcher />
     
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#FFBF37] text-slate-900 font-semibold px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg text-sm"
            >
              <Heart className="w-5 h-5 stroke-white fill-white"/>
              <span>Donate Now!</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}