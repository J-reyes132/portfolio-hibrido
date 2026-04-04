'use client';

import Link from 'next/link';
import { usePageData } from '@/hooks/usePageData';
import type { GlobalData } from '@/lib/types';

export const Footer = () => {
  const { data, loading } = usePageData<GlobalData>('/global');

  if (loading) {
    return <div className="w-full py-12 bg-stone-100"></div>;
  }

  const footer = data?.footer;
  const socialLinks = footer?.socialLinks || [];

  return (
    <footer className="bg-stone-100 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="text-center md:text-left">
          <span className="text-lg font-black text-stone-900">
            {footer?.brandName} <span className="text-orange-600">{footer?.brandHighlight}</span>
          </span>
        </div>
        
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <Link 
              key={link.id}
              href={link.url} 
              target="_blank"
              className="text-stone-500 hover:text-orange-600 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <p className="text-sm tracking-wide text-stone-400">
          {footer?.copyright || '© 2026 Juan Reyes.'}
        </p>
      </div>
    </footer>
  );
};