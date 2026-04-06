'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { globalData } from '@/lib/data';

export const TopNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { navigation } = globalData;
  const navItems = navigation.items;
  const siteName = navigation.siteName;
  const ctaText = navigation.ctaText;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-sm' 
        : 'bg-white/70 backdrop-blur-xl'
    }`}>
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-stone-900">
          {siteName}
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`transition-all duration-300 hover:opacity-80 ${
                pathname === item.href 
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600 pb-1' 
                  : 'text-stone-600 hover:text-orange-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={navigation.ctaRoute} className="bg-orange-600 text-white px-6 py-2 rounded-xl font-bold tracking-tight scale-95 active:scale-100 transition-transform hover:bg-orange-700">
          {ctaText} 
        </Link>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-stone-900"></span>
          <span className="w-6 h-0.5 bg-stone-900"></span>
          <span className="w-6 h-0.5 bg-stone-900"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="flex flex-col gap-4 px-8 py-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all duration-300 ${
                  pathname === item.href 
                    ? 'text-orange-600 font-bold' 
                    : 'text-stone-600 hover:text-orange-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};